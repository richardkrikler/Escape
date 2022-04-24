import {Debouncer} from "@/models/Debouncer";

let debouncer = new Debouncer(300);

export default {
    state: {
        test: 'Test Variable',
        save: {
        },
        settings: {
            music : 10,
            voice : 10,
            sfx : 10,
            sub : false,
            hints : false,
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
        },

        loadSettings(state) {
            // loads the settings variable from the localStorage and gives it to the store Object where the settings are saved
            if (JSON.parse(localStorage.getItem('settings')) !== null) {
                Object.assign(state.settings, JSON.parse(localStorage.getItem('settings')))
            }
        },

        setSetting(state, obj) {
            state.settings[obj.name] = obj.value
            debouncer.debounce(
                () => {
                // sets the settings variable in the localStorage and gives it the store Object where the settings are saved
                localStorage.setItem('settings',JSON.stringify(state.settings))
            })
        }
    }
}