import { createStore } from 'vuex'
import axios from 'axios'
import router from './router'

const store = createStore({
    state() {
        return {
            user: '',
            image: '',
            users: [],
            sendTo: '', //this will contain the user name of the person you will be sending the message to
            sentChat: [],
            receivedChat: [],

        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.userName
            state.image = payload.image
        },
        setReceiver(state, payload) {
            state.sendTo = payload.payload;
        },
        clearMessages(state) {
            state.sentChat = []
            state.receivedChat = []
        }

    },
    getters: {
        getUser(state) {

            return state.user;
        },
        getImage(state) {
            return state.image
        },
        getUsers(state) {
            return state.users
        },
        getReceiver(state) {
            return state.sendTo
        },
        getSentChat(state) {
            return state.sentChat
        },
        getReceivedChat(state) {
            return state.receivedChat
        }
    },
    actions: {
        signup(payload) {
            axios.post("https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app/User.json", {
                    userName: payload.username,
                    email: payload.email,
                    Contact: payload.number,
                    DOB: payload.dob,
                    password: payload.password,
                    image: payload.image,
                    bio: payload.bio
                })
                .then(response => {
                    console.log('success')
                    console.log(response);
                    router.replace('login')

                })
                //need to add error handling as well
                .catch(error => {
                    console.log('An error occured!!');
                    console.log(error);
                })
        },
        login(context, payload) {
            axios.get("https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app/User.json")
                .then(response => {
                    const user = payload.payload.username;
                    const password = payload.payload.password;
                    let keys = Object.keys(response.data);
                    keys.forEach(key => {
                        if (response.data[key].userName === user && response.data[key].password === password) {
                            context.commit('setUser', response.data[key]);
                            router.replace('profile')
                        }

                    })

                })
                .catch(err => {
                    console.log(err)
                })
        },
        getAllusers() {
            axios.get("https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app/User.json")
                .then(response => {
                    return response.data
                })
                .then(data => {
                    let keys = Object.keys(data);
                    keys.forEach(key => {
                        this.state.users.push(data[key])
                    })

                })

        },
        sendMessage(context, payload) {
            axios.post("https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json", {
                    sender: context.state.user,
                    receiver: context.state.sendTo,
                    text: payload.payload
                })
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getMessages(context) {
            context.commit('clearMessages')
            axios.get("https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json")
                .then(response => {
                    return response.data
                })
                .then(data => {

                    Object.keys(data).forEach(key => {

                        if (data[key].sender === this.state.user && data[key].receiver === this.state.sendTo && this.state.user != this.state.sendTo) {
                            this.state.sentChat.push(data[key])
                        } else if (data[key].sender === this.state.sendTo && this.state.user != this.state.sendTo) {
                            this.state.receivedChat.push(data[key])
                        }
                    })

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})

export default store