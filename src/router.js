import { createRouter, createWebHistory } from 'vue-router';
import TheLogin from './components/TheLogin.vue'
import TheFriends from './components/TheFriends.vue'
import TheContacts from './components/TheContacts.vue'
import TheChat from './components/TheChat.vue'
import TheProfile from './components/TheProfile.vue'
import TheSignup from './components/TheSignup.vue'
import TheDetails from './components/TheDetails.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { name: 'friends', path: '/friends', component: TheFriends },
        { name: 'contacts', path: '/contacts', component: TheContacts },
        {
            name: 'chat',
            path: '/chat',
            component: TheChat,
            props: true
        },
        { name: 'login', path: '/login', component: TheLogin },
        { name: 'profile', path: '/profile', component: TheProfile },
        { name: 'Signup', path: '/signup', component: TheSignup },
        {
            name: 'details',
            path: '/details',
            component: TheDetails,
            props: true
        },
    ]
})
export default router;