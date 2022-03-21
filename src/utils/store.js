import { createStore } from "vuex";

const apiKey = '9c4e656f9d584e5fa37a48b92e8b568f'
const Base_URL = "https://api-noroff.herokuapp.com/trivia"

const store = createStore({
    state: {
        questionsUrl: "",
        user: [],
        questions: [],
        userAnswers: [],
        score: 0
    },
    mutations:{
        setUser: (state, payload) => {
            state.user = payload;
        },
        setQuestionsUrl: (state, payload) => {
            state.questionsUrl = payload;
        },
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        setUserAnswers: (state, payload) => {
            state.userAnswers.push(payload);
        },
        reSetUserAnswers:(state, payload) => {
            state.userAnswers = payload;
        },
        setScore: (state, payload) => {
            state.score += payload;
        },
        reSetScore: (state, payload) => {
            state.score = payload;
        }
    },
    actions:{

        updateScore({commit}){
            commit("setScore", 10);
        },

        addAnswer({commit}, [question, answer]){
            commit("setUserAnswers", {answeredQuestion: question, answer: answer});
        },

        async checkUserName({commit, dispatch}, username){
            return fetch(`${Base_URL}?username=${username}`)
                .then(response => response.json())
                .then(user => {
                  if(user.length == 0){
                   dispatch("register", username);
                  }
                  else{
                    commit("setUser", user)
                  }
                })
                .catch(error => {
                  console.log(error.message)
                })
            },

            async register({commit},username){
                return fetch(`${Base_URL}`, {
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
                    commit("setUser", newUser);
                })
                .catch(error => {
                    console.log(error.message)
                })
            },

            async updateHighScore({commit, state}, score){
                fetch(`${Base_URL}/${state.user[0].id}`, {
                    method: 'PATCH', // NB: Set method to PATCH
                    headers: {
                        'X-API-Key': apiKey,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // Provide new highScore to add to user with id 1
                        highScore: score  
                    })
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Could not update high score')
                  }
                  return response.json()
                })
                .then(updatedUser => {
                  // updatedUser is the user with the Patched data
                  commit("setUser", updatedUser);
                })
                .catch(error => {
                    console.log(error.message)
                })
            },
    
            async getQuestions({commit, state}) {
                return fetch(state.questionsUrl)
                 .then((response) => response.json())
                 .then((questions) => {
                  commit("setQuestions", questions.results)
                 });
                }

    },
        
})

export default store;