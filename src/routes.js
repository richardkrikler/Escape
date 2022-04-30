import TitleScreen from '@/views/TitleScreen.vue'
import GameScreen from '@/views/GameScreen.vue'

export default [
    {
        name: 'GameScreen',
        path: '/game',
        component: GameScreen,
        props: true
    },
    {
        name: 'default',
        path: '/',
        component: TitleScreen,
        props: true
    }
]