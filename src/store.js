import {Debouncer} from './models/Debouncer'

let debouncer = new Debouncer(300)

export const BASE_IMG_PATH = '/media/images/'
export const BASE_AUDIO_PATH = '/media/audio/'


const getDefaultSaveState = () => {
    return {
        elapsedTime: 0,
        itembar: [
            {
                name: 'Start Brief',
                img: '',
                frame: 'frameStartBrief',
                pixelArt: 'PA_Start-Brief.png',
                visible: true
            }
        ],
        voice: {
            vl1: false,
            vl2: false,
            vl3: false,
            vl4: false,
            vl5: false,
            vl6: false,
            vl7: false,
            vl12: false
        },
        screen: {
            outerViews: [
                {
                    name: 'OV1',
                    pos: 1,
                    visible: true,
                    img: 'OV1.jpg',
                    pathOptions: [{name: 'Gerade aus', goal: 'OV2'}, {name: 'Rechts', goal: 'OV7'}],
                    innerViews: []
                },
                {
                    name: 'OV2',
                    pos: 2,
                    visible: false,
                    img: 'OV2.jpg',
                    pathOptions: [{name: 'Links', goal: 'IV1'}, {name: 'Zurück', goal: 'OV1'}],
                    innerViews: [
                        {
                            name: 'IV1',
                            img: 'IV1.jpg',
                            visible: false,
                            objects: [
                                {
                                    name: 'OB2 Schlüssel',
                                    img: 'IV1_OB2_Schluessel.png',
                                    frame: 'frameSchluessel1',
                                    pixelArt: 'PA_Schluessel.png',
                                    visible: true
                                },
                                {
                                    name: 'OB20 Batterie',
                                    img: 'IV_OB20_Batterie.png',
                                    frame: 'frameBatterie',
                                    pixelArt: 'PA_Batterie.png',
                                    visible: true
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'OV7',
                    pos: 3,
                    visible: false,
                    img: 'OV7.jpg',
                    pathOptions: [{name: 'Kasten', goal: 'IV7'}, {name: 'Zurück', goal: 'OV1'}],
                    innerViews: [
                        {
                            name: 'IV7',
                            img: 'IV7.jpg',
                            visible: false,
                            objects: [
                                {
                                    name: 'Kasten',
                                    needs: 'OB2 Schlüssel',
                                    opened: false,
                                    opens: 'IV7 offen',
                                    frame: 'frame_kasten1',
                                    visible: true
                                }
                            ]
                        },
                        {
                            name: 'IV7 offen',
                            img: 'IV7_offen.jpg',
                            visible: false,
                            objects: [
                                {
                                    name: 'IV7_offen_OB4 Brief',
                                    img: 'IV7_offen_OB4.png',
                                    frame: 'frameBrief1',
                                    pixelArt: 'PA_Brief.png',
                                    visible: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

export default {
    state: {
        overlay: {
            blurred: false,
            paused: false,
            settings: false,
            newGameModal: false,
            loadingGameModal: false,
            letter: {
                visible: false,
                img: ''
            }
        },
        settings: {
            music: 5,
            voice: 10,
            sfx: 10,
            subtitles: true,
            hints: false
        },
        music: {
            background1: new Audio(BASE_AUDIO_PATH + 'music/background1.wav'),
            background2: new Audio(BASE_AUDIO_PATH + 'music/background2.wav')
        },
        sfx: {
            collectEnvelope: new Audio(BASE_AUDIO_PATH + 'sfx/IV7_offen_brief_aufheben.mp3'),
            openCupboard: new Audio(BASE_AUDIO_PATH + 'sfx/IV7_schloss_aufschließen.mp3'),
        },
        voice: {
            vl1: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_1.mp3'),
            vl2: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_2.mp3'),
            vl3: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_3.mp3'),
            vl4: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_4.mp3'),
            vl5: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_5.mp3'),
            vl6: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_6.mp3'),
            vl7: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_7.mp3'),
            vl12: new Audio(BASE_AUDIO_PATH + 'voicelines/VL_12.mp3')
        },
        save: getDefaultSaveState()
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
            let ovResult = {}

            state.save.screen.outerViews.forEach(ov => ov.innerViews.forEach(iv => {
                if (iv.name === innerView.innerView.name) {
                    ovResult = ov
                }
            }))

            return ovResult
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
            Object.assign(state.save, getDefaultSaveState())
        },

        setSetting(state, obj) {
            state.settings[obj.name] = obj.value

            state.music.background1.volume = obj.value / 10
            state.music.background2.volume = obj.value / 10

            // sets the settings variable in the localStorage and gives it the store Object where the settings are saved
            debouncer.debounce(() => localStorage.setItem('settings', JSON.stringify(state.settings)))
        },

        setOuterView(state, viewPos) {
            state.save.screen.outerViews.forEach(ov => ov.visible = false)
            state.save.screen.outerViews.forEach(ov => ov.innerViews.forEach(iv => iv.visible = false))
            state.save.screen.outerViews[viewPos].visible = true
        },

        setInnerView(state, innerView) {
            innerView.visible = true
        },

        playVoiceLine(state, vl) {
            if (!state.save.voice[vl]) {
                state.voice[vl].volume = state.settings.voice / 10
                state.voice[vl].play();
                state.save.voice[vl] = true
            }
        },
    },

    actions: {
        switchOuterView({commit, getters, state}, {increment}) {
            if (increment) {
                commit('setOuterView', getters.currentView.pos === state.save.screen.outerViews.length ? 0 : getters.currentView.pos);
            } else {
                commit('setOuterView', getters.currentView.pos === 1 ? state.save.screen.outerViews.length - 1 : getters.currentView.pos - 2);
            }
        },

        changeView({commit, getters, state}, {screenName}) {
            state.save.screen.outerViews.forEach(ov => {
                if (ov.name === screenName) {
                    commit('setOuterView', ov.pos - 1)
                } else {
                    ov.innerViews.forEach(iv => {
                        if (iv.name === screenName) {
                            commit('setOuterView', ov.pos - 1)
                            commit('setInnerView', iv)
                        }
                    })
                }
            })
        }
    }
}