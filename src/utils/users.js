import { Base_URL } from "./";
const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
// const apiKey = '9c4e656f-9d58-4e5f-a37a-48b92e8b568f'

export async function apiUserRegister(username) {
    try {
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
        
            
        const response = await fetch (`${Base_URL}?username=${username}`, config)
        const {data} = await response.json()
        return [null, data]

    }
    catch(error){
        return [error.message, null]

    }

}