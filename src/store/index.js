import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { Store } from 'vuex';
const store = new Store({
    state() {
        return {
            groupMembers: [],
            newGroup: 'AddMembers',
            userName: '',
            password: '',
            loader: false,
            signupSystemError: false,
            loginSystemError: false,
            // these are related to user credentials
            idToken: '',
            refreshToken: '',
            localId: '',
            expiresIn: '',
            auth: false,
            status: '',
            gender: '',
            likes: [],
            dislikes: [],
            hobbies: []
        };
    },
    mutations,
    getters,
    actions,
})
export default store; //make sure to export store object