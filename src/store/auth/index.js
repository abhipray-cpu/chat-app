import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import mutations from '../auth/mutations'
import getters from '../auth/getters'
import actions from '../auth/actions'
export default {
    namespaced:true,
    state(){
        return{
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
            hobbies: [],
            profileImage:'',
            resetMail:''
        };
    },
    mutations,
    getters,
    actions,
        }
    
    
//make sure to export store object