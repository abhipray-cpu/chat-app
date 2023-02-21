import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default{
    namespaced:true,
    state(){
        return{

        }
    },
    mutations,
    getters,
    actions
}