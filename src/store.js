import {Debouncer} from './models/Debouncer'

let debouncer = new Debouncer(300)

const BASE_IMG_PATH = '/src/assets/media/images/'

export default {
    state: {
        save: {
            elapsedTime: 0,
            screen: {
                outerViews: [
                    {
                        name: 'OV1',
                        pos: 1,
                        img: 'OV1.png',
                        visible: true,
                        innerViews: [
                            {
                                name: 'IV1',
                                img: '',
                                visible: true,
                                frame: '',
                                objects: [
                                    {
                                        'OB1': {
                                            name: '',
                                            img: '',
                                            frame: '',
                                            visible: true
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'OV2',
                        pos: 2,
                        visible: false,
                        img: 'OV2.png',
                        innerViews: []
                    }
                ]
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
        },

        currentView(state) {
            const visibleOuterView = state.save.screen.outerViews.filter((ov) => ov.visible === true)[0]
            const visibleInnerView = visibleOuterView.innerViews.filter((iv) => iv.visible === true)[0]
            return visibleInnerView !== undefined ? visibleInnerView : visibleOuterView
        },

        outerViewOfInnerView: (state) => (innerView) => {
            return state.save.screen.outerViews.filter((ov) => ov.visible === true)[0]
        },

        outerViewVisible(state) {
            const visibleOuterViews = state.save.screen.outerViews.filter((ov) => ov.visible === true)
            if (visibleOuterViews.length > 0) {
                return visibleOuterViews[0].innerViews.filter((iv) => iv.visible === true)[0] === undefined
            } else {
                return false
            }
        },

        imgPath: () => (filename) => {
            return BASE_IMG_PATH + filename
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
            // sets the settings variable in the localStorage and gives it the store Object where the settings are saved
            debouncer.debounce(() => localStorage.setItem('settings', JSON.stringify(state.settings)))
        },

        setOuterView(state, viewPos) {
            state.save.screen.outerViews.forEach(ov => ov.visible = false)
            state.save.screen.outerViews.forEach(ov => ov.innerViews.forEach(iv => iv.visible = false))
            state.save.screen.outerViews[viewPos].visible = true
        },

        changeScreen(state, input) {
            console.log(input.outerView)
            console.log(input.screen)
            console.log(state.save.gameState[input.screen])

            state.save.screen.outerView = input.outerView
            state.save.screen.screen = input.screen
        }
    },

    actions: {
        switchOuterView({commit, getters, state}, {increment}) {
            if (increment) {
                commit('setOuterView', getters.currentView.pos === state.save.screen.outerViews.length ? 0 : getters.currentView.pos);
            } else {
                commit('setOuterView', getters.currentView.pos === 1 ? state.save.screen.outerViews.length - 1 : getters.currentView.pos - 2);
            }
        },
    }
}