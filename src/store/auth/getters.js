export default {
    getMemebers(state) {
        return state.groupMembers;
    },
    getNewGroup(state) {
        return state.newGroup;
    },
    getUsername(state) {
        return state.userName;
    },
    getPassword(state) {
        return state.password;
    },
    getLoader(state) {
        return state.loader;
    },
    getSignupError(state) {
        return state.signupSystemError;
    },
    getAuth(state) {
        return state.auth;
    },
    getLoginError(state) {
        return state.loginSystemError;
    },
    // these getters are for getting user data
    getStatus(state) {
        return state.status;
    },
    getGender(state) {
        return state.gender;
    },
    getLikes(state) {
        return state.likes;
    },
    getDislikes(state) {
        return state.dislikes;
    },
    getHobbies(state) {
        return state.hobbies;
    },
    getProfileImage(state){
        return state.profileImage
    },
    getResetMail(state){
        return state.resetMail;
    }


}