import {Debouncer} from './models/Debouncer'

let debouncer = new Debouncer(300)

export default {
    state: {
        save: {
            elapsedTime: 0,
            screen: {
                outerView: true,
                screen: 1
            },
            gameState: {
                O1: {
                    batterie : true,
                    schlussel1 : true,
                },
                4: {
                    offen: false,
                    schraubenzieher: true,
                    ziffer4 : true,
                },
                6: {
                    offen: false,
                    ziffer2: true,
                    zettel2: true,
                },
                7: {
                    offen: false,
                    closeup: false,
                    ziffer3: true,
                    brief1: true,
                }
            }
        },
        overlay: {
            blurred: false,
            paused: false,
            settings: false,
            newGameModal: false,
            loadingGameModal: false
        },
        settings: {
            music: 10,
            voice: 10,
            sfx: 10,
            subtitles: true,
            hints: false
        },
        music: {
            background1: new Audio('../src/assets/media/audio/background1.wav'),
            background2: new Audio('../src/assets/media/audio/background2.wav'),
        }
    },

    getters: {
        elapsedTime(state) {
            const date = new Date(state.save.elapsedTime * 1000)
            const result = new Date(date.toISOString().slice(0, -1))
            const timeFormat = n => n !== 0 ? n < 10 ? '0' + n : n : ''

            return (result.getDate() !== 1 ? timeFormat(result.getDate() - 1) + ' Tage' : '') +
                (result.getHours() !== 0 ? timeFormat(result.getHours()) + ':' : '') +
                (result.getMinutes() < 10 ? '0' + result.getMinutes() : result.getMinutes()) + ':' +
                timeFormat(result.getSeconds())
        }
    },

    mutations: {
        saveGame(state) {
            // sets the saveGame variable in the localStorage and gives it the store Object where the status of the Game is saved
            console.log(state.save)
            localStorage.setItem('saveGame', JSON.stringify(state.save))
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

        resetGame(state) {
            localStorage.removeItem('saveGame')
            state.save.elapsedTime = 0
        },

        setSetting(state, obj) {
            state.settings[obj.name] = obj.value
            state.music.background1.volume = obj.value/10
            state.music.background2.volume = obj.value/10

            debouncer.debounce(
                () => {
                    // sets the settings variable in the localStorage and gives it the store Object where the settings are saved
                    localStorage.setItem('settings', JSON.stringify(state.settings))
                })
        },

        switchOuterView(state, increment) {
            let currentScreen = state.save.screen.screen
            if(increment) {
                state.save.screen.screen = currentScreen===2 ? 1 : (currentScreen+1)
            } else {
                state.save.screen.screen = currentScreen===1 ? 2 : (currentScreen-1)
            }
        },

        changeScreen(state, input) {
            console.log(input.outerView)
            console.log(input.screen)
            console.log(state.save.gameState[input.screen])

            state.save.screen.outerView = input.outerView
            state.save.screen.screen = input.screen
        }
    }
}