<template>
    <div id="container">
        <b-overlay
        id="overlay-background"
       class="overlay"
       :show="loading"
       variant="transparent"
       opcaity="0.50"
       blur="1"
       style="height:100vh">
       <b-alert :show="alertState" variant="dark" id="alert" style="background:rgba(0,0,0,0.8);font-weight:500;color:white;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;">Something went wrong on our side</b-alert>
            <b-img :src="require('/src/assets/login-logo.png')" fluid center alt="app logo"></b-img>
        <h3 id="quote">A minimalist chat app</h3>
        <div id="form">
            <b-form @submit="login" @reset="formReset">
                 <b-form-input
          id="username"
          v-model="userName"
          :class="[errorStyle==0?'error':'']"
          placeholder="Username"
          required
        ></b-form-input>
         <b-form-input
         v-model="password"
         type="password"
          id="password"
          :class="[errorStyle==1?'error':'']"
          placeholder="Enter password"
          required
        ></b-form-input>

            </b-form>
           
        </div>
        <div >
            <h5 id="help" @click="help">get help with login</h5>
        </div>
       <b-button id="btn" class="shadow-none" @click="login">Login</b-button>
     <span><h4 id="signup">Don't have an account</h4> <h1 id="link" @click="signup">Signup</h1></span>
        </b-overlay>
    </div>
</template>

<script>
export default {
    
   data(){
    return{
        userName:'',
        password:'',
        error:-1
    }
   },
   computed:{
    errorStyle()
    {
        return this.error;
    },
    loading(){
   
   return this.$store.getters['getLoader'];
},
alertState(){
    return this.$store.getters['getLoginError']
},
   },
    methods:{
        async login(){
            this.$store.commit('setLoader',{value:true})
            const email = await this.$store.dispatch('getMail',{userName:this.userName})
            if(email.status === 'OK')
            {
                let res = await this.$store.dispatch('login',{email:email.mail,
                password:this.password})
                if(res.status=="password")
                {
                    this.error=1;
                    this.password="wrong password";
                    this.$store.commit('setLoader',{value:false})
                }
                else if(res.staus=="system")
                {  
                    this.$store.commit('setLoginError',{value:true});
                    this.$store.commit('setLoader',{value:false})
                    setTimeout(this.$store.commit('setLoginError',{value:true}),2000);
                }
            else
            {
                this.userName='';
            this.password='';
            this.$store.commit('setLoader',{value:false})
            }
            }
            else
            {
                this.error=0; // the username is wrong
                this.userName='No such user!'
                this.$store.commit('setLoader',{value:false})
            }
        },
        help(){
            console.log('login help!');
        },
        formReset(){
            console.log('form reset')
        },
        signup(){
            this.$router.push({name:'signup'});
        }
    }
       
}
</script>

<style scoped>
#quote{
    text-align: center;
    font-weight: 400;
    font-style:italic;
    color:rgba(0, 0, 0, 0.538);
    }
#form{
    margin-top:7vw;
}
.form-control:focus {
   border: 1px solid rgba(233, 8, 89, 0.89);
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;

}
.form-control{
    box-sizing: border-box;
    position: absolute;
    width: 361px;
    height: 53px;
    border: 1px solid #000000;
    border-radius: 13px;
    margin-left:6.87%;
}
#username{
    margin-top:40px;
    margin-left:4vw;
    width:92vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#password{
    margin-top:110px;
    margin-left:4vw;
    width:92vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#help{
    margin-top:196px;
    color:rgba(233, 8, 89, 0.89);
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left:61%;
    font-size:16px;
}
#btn{
    background: rgba(233, 8, 89, 0.89);
    color:white;
    width:75%;
    margin-top:4.25%;
    margin-left:12.75%;
    font-size:19px;
}
.form-control:-webkit-autofill,
.form-control:-webkit-autofill:hover,
.form-control:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}
#or{
    text-align:center;
    font-weight: 500;
    color:rgba(0, 0, 0, 0.738);
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-top:10.35%;
    margin-bottom:6.45%;
}
#google{
    display:grid;
    grid-template-columns:max-content max-content;
    width:75%;
    padding-left:17%;
    grid-gap:10px;
    margin-top:5.5%;
}
#facebook{
    display:grid;
    grid-template-columns:max-content max-content;
    width:75%;
    padding-left:17%;
    grid-gap:10px;
    margin-top:8.5%;
}
.alternate{
    margin-top:3.55%;
    font-weight: 450;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#signup{
position: absolute;
width: 246px;
height: 26px;
left: 42px;
margin-top: 20%;
font-family:'Times New Roman', Times, serif;
font-style: italic;
font-weight: 300;
font-size: 22px;
line-height: 26px;
/* identical to box height */

color: #000000;
}
#link{
    position: absolute;
width: 86px;
height: 33px;
left: 249px;
margin-top: 20%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 33px;
/* identical to box height */

float:left;
color: #E90859;
}
.error{
    border:2px solid red;
}
/*alert styling*/
#alert{
    animation: horizontal-shaking 0.5s;
}
@keyframes horizontal-shaking {
 0% { transform: translateX(0) }
 25% { transform: translateX(5px) }
 50% { transform: translateX(-5px) }
 75% { transform: translateX(5px) }
 100% { transform: translateX(0) }
}
</style>