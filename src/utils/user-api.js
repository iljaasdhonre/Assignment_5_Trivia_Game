//Fetch funcions for users

//Check if users exist otherwise register them
const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
const Base_URL = "https://api-noroff.herokuapp.com/trivia"

export async function checkUserName(username){
  await fetch(`${Base_URL}?username=${username}`)
      .then(response => response.json())
      .then(results => {
        if(results.length == 0){
          register(username)
        }
        else{
          console.log("login successful")
        }
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  function register(username){
    fetch(`${Base_URL}`, {
      method: 'POST',
      headers: {
          'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          username: username, 
          highScore: 0 
      })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Could not create new user')
    }
    return response.json()
  })
  .then(newUser => {
    console.log(newUser)
  })
  .catch(error => {
    console.log(error.message)
  })
  }


/**
 * End check and register user
 */