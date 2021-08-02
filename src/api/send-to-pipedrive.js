const axios = require('axios')

// Set up essential values
const apiData = {
  base_url: process.env.PIPEDRIVE_BASE_URL,
  key: process.env.PIPEDRIVE_API_KEY,
}

export default async function handler(req, res) {

  // Make sure we are dealing with a POST request
  if (req.method !== 'POST') {
    return res.status(400).send(`This was not a POST request!`)
  }

  // Parse that post data body
  const data = req.body

  console.log(data)

  let payload, organization, person, lead

  payload = {
    name: data.companyName
  }

  try {
    organization = await axios({
      method: 'post',
      url: apiData.base_url + '/organizations',
      responseType: 'json',
      params: {
        api_token: apiData.key,
      },
      data: payload,
    })

    if(organization.data.success === true) {
      const orgId = organization.data.data.id

      payload = {
        name: data.firstName + ' ' + data.lastName,
        org_id: orgId,
        email: [data.emailAddress],
        phone: [data.phoneNumber]
      }

      person = await axios({
        method: 'post',
        url: apiData.base_url + '/persons',
        responseType: 'json',
        params: {
          api_token: apiData.key,
        },
        data: payload,
      })

      if(person.data.success === true) {
        const personId = person.data.data.id

        payload = {
          title: data.firstName + ' ' + data.lastName + ' - ' + data.companyName,
          person_id: personId,
          organization_id: orgId,
          e423591cd31406913858c53d92aa8045a770f027: data.interests,
          c6650839586b6f3cd00edfcafea4511455ccfdee: data.message,
          bee97d02114cfcc15bd96ef44008c51c8438d959: data.budget
        }

        lead = await axios({
          method: 'post',
          url: apiData.base_url + '/leads',
          responseType: 'json',
          params: {
            api_token: apiData.key,
          },
          data: payload,
        })

        if(lead.data.success === true) {
          const successResponseJSON = JSON.stringify({
            status: 'success',
            message: 'Lead added to Pipedrive',
            confirmation_message: 'Thank you for your interest! We will review your information and get back to you as soon as we can.',
          })

          res.status(201).send(successResponseJSON)
        } else {
          res.status(400).send('Could not create Lead in Pipedrive')
        }
      } else {
        res.status(400).send('Could not create Person in Pipedrive')
      }
    } else {
      res.status(400).send('Could not create Organization in Pipedrive')
    }
  } catch (error) {
    // Check the function log for this!
    console.log(error)
  }
}
