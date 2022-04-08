export default {
    state: {
        test: 'Test Variable',
        save: {
        }
    },

    getters: {

    },

    mutations: {

        saveGame(state) {
            localStorage.setItem('saveGame',JSON.stringify(state.save))
        },

        loadGame(state) {
            Object.assign(state.save, JSON.parse(localStorage.getItem('saveGame')))
            console.log('loaded Game')
        },
    }
}