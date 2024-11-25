import axios from 'axios'

// Set up essential values
const apiData = {
  base_url: 'https://api.trello.com/1/',
  key: process.env.TRELLO_API_KEY,
  token: process.env.TRELLO_TOKEN
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
    'patrick.carleton@eltoro.com',
    'sara@toptiervas.com',
    'miles@toptiervas.com',
    'Rachel@toptiervas.com',
    'joy.onlinemediapublishers@gmail.com'
  ]

  // Parse that post data body
  const data = req.body
  console.log(data)

  // Check for blacklisted email addresses
  if(blacklist.includes(data.emailAddress)) {
    return res.status(400).send('This email address has been blocked from this form.')
  }

  // Set up some variables
  let interests = data.interests
  if(Array.isArray(interests)) {
    interests = interests.join(', ')
  }

  let listId = '64b6a090d4507bdb77490651'

  // Set up card name
  let name
  if(data.companyName) {
    name = data.companyName
  } else {
    name = data.firstName + ' ' + data.lastName
  }

  // Set up card message
  let message =
    'First Name: ' + data.firstName + '\n' +
    'Last Name: ' + data.lastName + '\n' +
    'Email Address: ' + data.emailAddress + '\n' +
    'Company Name: ' + data.companyName + '\n\n' +
    'Phone Number: ' + data.phoneNumber + '\n' +
    'Message: ' + data.message + '\n\n' +
    'Budget: ' + data.budget + '\n' +
    'Interests: ' + interests + '\n' +
    'Source: ' + (data.utmSource || 'Unknown')


  try {
    // Create the card
    let card = await axios({
      method: 'post',
      url: apiData.base_url + '/cards',
      responseType: 'json',
      params: {
        idList: listId,
        key: apiData.key,
        token: apiData.token,
        name: name,
        desc: message,
        idLabels: '6744e7173ba02de392d70d79'
      }
    })

    console.log(card)

    if(card.status === 200 && card.data.id && card.data.id !== '') {
      const successResponseJSON = JSON.stringify({
        status: 'success',
        message: 'Lead added to Trello',
        confirmation_message: 'Thank you for your interest! We will review your information and get back to you as soon as we can.',
      })

      res.status(200).send(successResponseJSON)
    } else {
      res.status(400).send('Could not create Lead in Trello')
    }

  } catch (error) {
    // Check the function log for this!
    console.log(error)
  }
}
