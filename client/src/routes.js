import TitleScreen from '@/components/TitleScreen'
import GameScreen from '@/components/GameScreen'

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