export default {
    state: {
        test: 'Test Variable',
        save: {
        },
        settings: {
            mama : 'kek',
        },
    },

    getters: {

    },

    mutations: {

        saveGame(state) {
            // sets the saveGame variable in the localStorage and gives it the store Object where the status of the Game is saved
            localStorage.setItem('saveGame',JSON.stringify(state.save))
        },

        loadGame(state) {
            // loads the saveGame variable from the localStorage and gives it to the store Object where the status of the Game is saved
            Object.assign(state.save, JSON.parse(localStorage.getItem('saveGame')))

            // TODO: remove after demonstration, just for demonstration purposes
            console.log('loaded Game')
            let joe = 'mama'
            console.log(state.settings[joe])
        },
    }
}