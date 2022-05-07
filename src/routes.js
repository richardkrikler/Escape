import TitleScreen from '@/components/TitleScreen.vue'
import GameScreen from '@/components/GameScreen.vue'
import ImprintScreen from '@/components/ImprintScreen.vue'

export default [
    {
        name: 'GameScreen',
        path: '/game',
        component: GameScreen,
        props: true
    },
    {
        name: 'ImprintScreen',
        path: '/imprint',
        component: ImprintScreen,
        props: true
    },
    {
        name: 'default',
        path: '/',
        component: TitleScreen,
        props: true
    }
]