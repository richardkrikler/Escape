import TitleScreen from '@/components/TitleScreen'
import GameView from "@/components/GameView";

export default [
    {
        name: 'GameView',
        path: '/game',
        component: GameView,
        props: true
    },
    {
        name: 'default',
        path: '/',
        component: TitleScreen,
        props: true
    }
]