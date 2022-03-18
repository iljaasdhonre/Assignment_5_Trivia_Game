import { Base_URL } from "./";
const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
// const apiKey = '9c4e656f-9d58-4e5f-a37a-48b92e8b568f'

async function checkUserName(username){
fetch(`${Base_URL}?username=${username}`)
    .then(response => response.json())
    .then(results => {
            return results.length
    })
    .catch(error => {

    })
}

export async function apiUserRegister(username) {
    console.log(typeof parseInt(checkUserName(username)), typeof checkUserName(username))
    try {
        if(parseInt(checkUserName(username)) === 0){
            console.log("username still available")

                const config = 
                    {
                        method: 'POST',
                        headers: {
                            'X-API-Key': apiKey,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            score: 0 
                        })
                        }
                // register
                const response = await fetch (`${Base_URL}?username=${username}`, config)
                const {success, data, error = "An error occured while loggin in"} = await response.json()
                console.log(await fetch (`${Base_URL}`, config))
                if (!success) {
                    throw new Error(error)
                }
                return [null, data]
            } else {console.log("username already taken!")}
    }
    catch(error){
        return [error.message, null]

    }

}