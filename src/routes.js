import TitleScreen from '@/components/TitleScreen.vue'
import GameScreen from '@/components/GameScreen.vue'
import ImprintScreen from '@/components/ImprintScreen.vue'
import GuideScreen from "@/components/GuideScreen.vue";

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
        name: 'GuideScreen',
        path: '/guide',
        component: GuideScreen,
        props: true
    },
    {
        name: 'default',
        path: '/',
        component: TitleScreen,
        props: true
    },

]