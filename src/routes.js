import TitleScreen from '@/components/TitleScreen.vue'
import GameScreen from '@/components/GameScreen.vue'

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