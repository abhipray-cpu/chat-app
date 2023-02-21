import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser ,sendPasswordResetEmail } from "firebase/auth";
import { db } from '/src/firebase.js'
import { doc,setDoc} from "firebase/firestore";
import { collection, query, where, getDocs,getDoc,deleteDoc} from "firebase/firestore";
import { ref, deleteObject,getStorage } from "firebase/storage";
import bcrypt from "bcryptjs";
import router from '../../router/router'
/*

always keep this in mind that the firebase app needs to be initialzed
first and we do so by calling it by importig db
if you try to access any class before intilizing the app it is not going to work
*/
export default {
    // these are the login,signup and authentication actions

    // this is the signup actions
    async signup(context, payload,dispatch) {
        const auth = getAuth();
        context.commit('setLoader', { value: true });
        try{
            var hashedPassword  = await bcrypt.hash(payload.password,13)
         //yes this works use it in the password change function   console.log(bcrypt.compare(payload.password,hashedPassword));
            }
            catch(err){
                console.log(err)
                console.log('failed to hash the password!');
            context.commit('setLoader', { value: false });
            context.commit('setSignupState', { value: true });
            router.push({ name: 'signup' })
            }
        try {
            
            const user = await createUserWithEmailAndPassword(auth, payload.mail, payload.password)
            await setDoc(doc(db, "users", `${user._tokenResponse.localId}`), {
                "username": payload.userName,
                "password": hashedPassword,
                "mail": payload.mail,
                "gender":"",
                'bio': '',
                'likes': [],
                'hates': [],
                'hobbies': [],
                'suggestions': [],
                'image':''
            });
            context.commit('setLoader', { value: false });
            context.commit('setUsername', { value: payload.userName })
            
            router.push({ name: 'profile' })

        } catch (err) {
            this.$log.error(`failed to authenticate user ${err}`)
            context.commit('setLoader', { value: false });
            context.commit('setSignupState', { value: true });
            await dispatch('rollBack')
            router.push({ name: 'signup' })
                // redirect to same page with fault message
        }

    },
    // this will be used to check if username is already taken
    async checkUser(context, payload) {
        try {
            const q = query(collection(db, "users"), where("username", "==", payload.name));
            let user = await getDocs(q);
            if (user.docs.length == 0)
                return true;
            else
                return false;
        } catch (err) {
            // need to handle error here
            return false;
        }
    },

    // this will check if the mail is already taken or not
    async checkEmail(context, payload) {
        try {
            const q = query(collection(db, "users"), where("mail", "==", payload.email));
            let user = await getDocs(q);
            if (user.docs.length == 0)
                return true;
            else
                return false;
        } catch (err) {
            // need to handle error here
            return false;
        }
    },

    // this is the login action
    async login(context, payload) {
        const auth = getAuth();
        try {
            //this is just a simple check and will be used in some other cases when user wants to change password
            const user = await signInWithEmailAndPassword(auth, payload.email, payload.password);
            localStorage.setItem('token', user._tokenResponse.idToken);
            localStorage.setItem('expires', user._tokenResponse.expiresIn);
            localStorage.setItem('user', user._tokenResponse.localId);
            localStorage.setItem('refresehToken', user._tokenResponse.refreshToken);
            context.commit('setUser', {
                idToken: user._tokenResponse.idToken,
                refreshToken: user._tokenResponse.refreshToken,
                localId: user._tokenResponse.localId,
                expiresIn: user._tokenResponse.expiresIn
            })
            let expires = +user._tokenResponse.expiresIn * 1000; //converting to miliseconds
            let expirationDate = new Date().getTime + expires;
            //storing this in local storage
            localStorage.setItem('expiratonDate', expirationDate);
            context.commit('setAuth', { value: true });
            router.push('home')
            return { "status": 'OK' };
        } catch (err) {
            if (err.code === 'auth/wrong-password') {
                return { "status": "password" }
            } else {
                return { "status": "system" }
            }
            // need to handle error here
        }
    },
    // this will return the coressponding email to the username
    async getMail(context, payload) {
        try {
            const q = query(collection(db, "users"), where("username", "==", payload.userName));
            let mail = await getDocs(q);
            console.log(mail);
            if (mail.size >= 1) {
                return { 'status': "OK", "mail": mail.docs[0].data()['mail'] }
            } else {
                return { "status": "No user found", "mail": "" }
            }
        } catch (err) {
            this.$log.error(`failed to fetch user ${payload.userName} mail :${err}`);
            // in here raise the system fault notification!
        }
    },
    // this function is for autologin
    async autoLogin(context) {
        try {
            let expiry = +localStorage.getItem('expiratonDate') - new Date().getTime();
            if (expiry <= 0) {
                context.dispatch('logout');
                return false;
            } else {
                let token = localStorage.getItem('token');
                let Uid = localStorage.getItem('user');
                let refreshToken = localStorage.getItem('refresehToken');
                let expiresIn = localStorage.getItem('expires');
                let expires = +expiresIn * 1000; //converting to miliseconds
                let expirationDate = new Date().getTime + expires;
                //storing this in local storage
                localStorage.setItem('expiratonDate', expirationDate);
                context.commit('setUser', {
                    idToken: token,
                    refreshToken: refreshToken,
                    localId: Uid,
                    expiresIn: expiresIn
                })
                context.commit('setAuth', { value: true });

                router.push({
                    name: 'home'
                })
                return true;

            }
        } catch (err) {
            return false;
        }

    },
    // this function is for auotlogout
    // this is the logout function
    async logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        localStorage.removeItem('user');
        localStorage.removeItem('refresehToken');
        localStorage.removeItem('expiratonDate');
        context.commit('setUser', {
            idToken: '',
            refreshToken: '',
            localId: '',
            expiresIn: ''
        })
        context.commit('setAuth', { value: false });
    },
    // this function is for updating the user data
    async updateUser(context,payload,dispatch){
        let userName = context.getters['getUsername']
        let bio = context.getters['getStatus']
        let gender = context.getters['getGender']
        let likes = context.getters['getLikes']
        let dislikes = context.getters['getDislikes']
         let interests = payload.interests
         const q = query(collection(db, "users"), where("username", "==", userName));
            let user = await getDocs(q);
            const docId = user.docs[0].id

        try {
            await db.collection('users').doc(docId).update({
                bio:bio,
                likes:likes,
                hates:dislikes,
                hobbies:interests,
                gender:gender,
                image:context.getters.getProfileImage
            })

            router.push({name:'login'})
        } catch (err) {
            // need to handle error here
            this.$log.error(`failed to update user credentials:${err}`);
           await dispatch('rollBack')
            router.push({name:'profile'})

            // in this case we will delete the document and rewrite the user to signup page

        }

        //update the fetched document
        
    },
    // this is a rollback function to ensure atomicity
    // this rollback is giving error fix during production
    async rollBack(dispatch){
        let authStatus = await dispatch('deleteAuth')
        let firebaseStatus = await dispatch('deleteFirebase')
        let storageStatus = await dispatch('deleteStorage')

        if (authStatus !== ''){
            this.$log.error(authStatus)
        }
        if(firebaseStatus !== ''){
            this.$log.error(firebaseStatus)
        }
        if(storageStatus !== ''){
            this.$log.error(storageStatus)
        }
    },
    async deleteAuth(){
        const auth = getAuth();
        const user = auth.currentUser;
         try{
            let res = await deleteUser(user)
            if(res)
            return '';
            else
            return `failed to delete auth for ${auth.currentUser}`;
         }
catch(err){
    return err
}
    },
    async deleteFirebase(context){
         let user = context.getters.getUsername
         try{
            const q = query(collection(db, "users"), where("username", "==", user));
            let res = await deleteDoc(q);
            if(res)
            return true
            else
            return `need to delete the user data for ${user}`

         }
         catch(err){
            return `need to delete the user data for ${user}`
         }

    },
    async deleteStorage(context){
        const storage = getStorage();
        const image = context.getters.getProfileImage
        try{
            // Create a reference to the file to delete
        const desertRef = ref(storage, 'images/desert.jpg');

        let res = await deleteObject(desertRef)
         if(res){
            return true;
         }
         else{
            return `delete image ${image}`
         }
        }
        catch(err){
            return `delete image ${image}`
        }
    },
    async userHome(context){
        let user = localStorage.getItem('user')
        const userRef = doc(db, "users", user);
        let credentials = await getDoc(userRef);
       let data = credentials.data();
       context.commit('setUsername',{value:data.username})
       context.commit('setStatus',{value:data.bio})
       context.commit('setProfileImage',{value:data.image})
    },
    async sendMail(context){
        let mail = context.getters.getResetMail
        try{
            let auth = getAuth()
            // the thing is that these mails are getting forwarded to spams sambhog!!
            let res = await sendPasswordResetEmail(auth,mail)
            console.log(res)
            return true;
        }
        catch(err){
            console.log(err)
            this.$log.error('failed to send reset mail',err);
            return false;
        }
    }
}

 