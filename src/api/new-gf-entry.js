const axios = require('axios')
const { nanoid } = require('nanoid')
const oauthSignature = require('oauth-signature')

// Set up essential values
const secretData = {
  gfKey: process.env.GATSBY_CONSUMER_KEY,
  gfSecret: process.env.GATSBY_CONSUMER_SECRET,
}

export default async function handler(req, res) {
  console.log('we have something')
  // Make sure we are dealing with a POST request
  if (req.method !== 'POST') {
    return res.status(400).send(`This was not a POST request!`)
  }

  // Parse that post data body
  const data = req.body

  const apiUrl = data.baseUrl + '/submissions'

  // Check we have the required data
  if (!apiUrl) {
    res.status(424).send(`Required API data is missing.`)
  }

  // Now we can do the real work - Gravity Forms API stuff
  const authParams = new0AuthParameters(secretData.gfKey)
  const signature = oauthSignature.generate(
    'POST',
    apiUrl,
    authParams,
    secretData.gfSecret
  )

  let result

  try {
    result = await axios({
      method: 'post',
      url: apiUrl,
      responseType: 'json',
      params: {
        ...authParams,
        oauth_signature: signature,
      },
      data: data.payload,
    })
  } catch (error) {
    // Check the function log for this!
    console.log('new-gf-entry.js Error Data')
    console.log(error)

    const errorResponse = error.response?.data

    // Here we know this is a Gravity Form Error
    if (errorResponse && errorResponse?.is_valid === false) {
      const errorResponseJSON = JSON.stringify({
        status: 'gravityFormErrors',
        message: 'Gravity Forms has flagged issues',
        validation_messages: errorResponse.validation_messages,
      })
      return res.status(422).send(errorResponseJSON)
    } else {
      // Unknown error
      return res.status(400).send(`Something went wrong`)
    }
  }

  const successResponseJSON = JSON.stringify({
    status: 'success',
    message: 'Entry added to Gravity Forms',
    confirmation_message: result.data.confirmation_message,
  })

  res.status(201).send(successResponseJSON)
}

function getCurrentTimestamp() {
  return Math.round(new Date().getTime() / 1000)
}

function new0AuthParameters(consumerKey) {
  return {
      oauth_consumer_key: consumerKey,
      oauth_timestamp: getCurrentTimestamp(),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
      oauth_nonce: nanoid(11),
  }
}
