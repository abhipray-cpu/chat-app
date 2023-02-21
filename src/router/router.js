// make sure to protect routes before production
import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/login-comp.vue';
import SignupPage from '../components/signup-comp.vue'
import HomePage from '../views/main-page.vue'
import SuggestionsPage from '../views/suggestions-page.vue'
import FriendsPage from '../views/friends-page.vue'
import ProfilePage from '../views/profile-page.vue'
import NewRequests from '../views/requests-page.vue'
import NewGroup from '../views/new-group.vue'
import ChatPage from '../views/chat-page.vue'
import WelcomePage from '../views/welcom-page.vue'
import GroupPage from '../views/group-chats.vue'
import InterestsPage from '../views/interests-page.vue'
import ForgotPage from '../components/forgot-password.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        
        {
            name:'forgot',
            path:'/forgot',
            component:ForgotPage
        }
        ,
        {
            name: 'login',
            path: '/login',
            component: LoginPage,
           
            
        },
        {
            name: 'signup',
            path: '/signup',
            component: SignupPage,
           

        },
        {
            name: 'home',
            path: '/home',
            component: HomePage

        },
        {
            name: 'suggestions',
            path: '/suggestions',
            component: SuggestionsPage
        },
        {
            name: 'friends',
            path: '/friends',
            component: FriendsPage
        },
        {
            name: 'profile',
            path: '/profile',
            component: ProfilePage,
            
        },
        {
            name:'Interests',
            path: '/interests',
            component: InterestsPage
        },
        {
            name: 'requests',
            path: '/requests',
            component: NewRequests
        },
        {
            name: 'new-group',
            path: '/new-group',
            component: NewGroup
        },
        {
            name: 'chat',
            path: '/chat/:to',
            component: ChatPage,
            props: true
        },
        {
            name: 'welcome',
            path: '/',
            component: WelcomePage

        },
        {
            name: 'group',
            path: '/group/:groupId',
            component: GroupPage,
            props: true
        }
    ]
})