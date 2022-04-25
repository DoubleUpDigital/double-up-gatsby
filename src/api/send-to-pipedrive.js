const axios = require('axios')

// Set up essential values
const apiData = {
  base_url: process.env.GATSBY_PIPEDRIVE_BASE_URL,
  key: process.env.GATSBY_PIPEDRIVE_API_KEY,
}

export default async function handler(req, res) {

  // Make sure we are dealing with a POST request
  if (req.method !== 'POST') {
    return res.status(400).send(`This was not a POST request!`)
  }

  const blacklist = [
    'info@yournewsecretweapon.com',
    'test@test.com',
    'greg@system4georgia.net',
    'patrick.carleton@eltoro.com'
  ]

  // Parse that post data body
  const data = req.body
  console.log(data)
  let payload, organization, person, lead, orgId, personId

  if(blacklist.includes(data.emailAddress)) {
    return res.status(400).send('This email address has been blocked from this form.')
  }

  payload = {
    name: data.companyName
  }

  try {
    const matchedOrg = await axios({
      method: 'get',
      url: apiData.base_url + '/organizations/find',
      responseType: 'json',
      params: {
        api_token: apiData.key,
        term: data.companyName
      }
    })
    const matchedOrgId = matchedOrg.data.data[0] ? matchedOrg.data.data[0].id : false

    if(matchedOrgId) {
      orgId = matchedOrgId
      console.log('found a matching organization')
    } else {
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
        orgId = organization.data.data.id
      } else {
        res.status(400).send('Could not create Organization in Pipedrive')
      }
    }

    const matchedPerson = await axios({
      method: 'get',
      url: apiData.base_url + '/persons/search',
      responseType: 'json',
      params: {
        api_token: apiData.key,
        term: data.emailAddress,
        organization_id: orgId,
        start: 0,
        limit: 1
      }
    })
    const matchedPersonId = matchedPerson.data.data.items[0] ? matchedPerson.data.data.items[0].item.id : false

    if(matchedPersonId) {
      personId = matchedPersonId
      console.log('found a matching person')
    } else {
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
        personId = person.data.data.id
      } else {
        res.status(400).send('Could not create Person in Pipedrive')
      }
    }

    let interests = data.interests
    if(Array.isArray(interests)) {
      interests = interests.join(', ')
    }

    payload = {
      title: data.firstName + ' ' + data.lastName + ' - ' + data.companyName,
      person_id: personId,
      organization_id: orgId,
      e423591cd31406913858c53d92aa8045a770f027: interests,
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

      res.status(200).send(successResponseJSON)
    } else {
      res.status(400).send('Could not create Lead in Pipedrive')
    }

  } catch (error) {
    // Check the function log for this!
    console.log(error)
  }
}
