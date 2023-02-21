import authStore from './auth/index'
import userStore from './user/index'
import { Store } from 'vuex';
const store = new Store({
    modules: {
        auth:authStore,
        user:userStore
    },
})
export default store;