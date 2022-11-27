export default {
    addMember(state, member) {
        state.groupMembers.push(member);
    },
    toggleGroup(state, page) {
        state.newGroup = page;
    },
    setUsername(state, username) {
        console.log('this is from the mutation');
        console.log(username)
        state.userName = username.value;
    },
    setPassword(state, password) {
        state.password = password;
    },
    setLoader(state, payload) {
        state.loader = payload.value;
    },
    setSignupState(state, payload) {
        state.signupSystemError = payload.value;
    },
    setUser(state, payload) {
        state.idToken = payload.idToken;
        state.refreshToken = payload.refreshToken;
        state.localId = payload.localId;
        state.expiresIn = payload.expiresIn;
    },
    setAuth(state, payload) {
        state.auth = payload.value;
    },
    setLoginError(state, payload) {
        state.loginSystemError = payload.value;
    },
    // these mutations are for setting user data
    setStatus(state, payload) {
        state.status = payload.value;
    },
    setGender(state, payload) {
        state.gender = payload.value;
    },
    setLikes(state, payload) {
        state.likes = payload.value;
    },
    setDislikes(state, payload) {
        state.dislikes = payload.value;
    },
    setHobbies(state, payload) {
        state.hobbies = payload.value;
    }
}