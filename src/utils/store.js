import { createStore } from "vuex";

const store = createStore({
    state: {
        questionsUrl: "",
        user: {
            username: "",
            highScore: 0,
            id: 0
        },
        categories: [],
        questions: []
    },
    mutations:{
        setUser: (state, payload) => {
            state.user = payload;
        },
        setQuestionsUrl: (state, payload) => {
            state.questionsUrl = payload;
        }
    },
    actions:{

    }
})

export default store;