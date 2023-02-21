import { parseSync } from '@babel/core';
<template>
    <div id="container">
       <b-overlay
       id="overlay-background"
       class="overlay"
       :show="loading"
       variant="transparent"
       opcaity="0.50"
       blur="1"
       style="height:100vh"
       >
       <b-alert :show="alertState" variant="dark" id="alert" style="background:rgba(0,0,0,0.8);font-weight:500;color:white;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;">Something went wrong on our side</b-alert>
        <b-img :src="require('/src/assets/login-logo.png')" fluid center alt="app logo"></b-img>
        <h3 id="quote">A minimalist chat app</h3>
        <div id="form">
            <b-form @submit="signup">
        
     <input type="text"
          id="username"
          :class="[errorStyle==0?'error':'']"
          v-model="userName"
          placeholder="Username"
          required
          >
        <input 
        v-model="mail"
         type="email"
          id="email"
          :class="[errorStyle==1?'error':'']"
          placeholder="@email"
          required>
          <!---good thing we don't need to hash password firebase does it automatically-->
        <input  
        v-model="password"
         type="password"
          id="password"
          :class="[errorStyle==2 || errorStyle==3?'error':'']"
          placeholder="Enter password"
          required
          @input="checkPassword">
          <div id="strength" v-if="inputOn">
            <div id="weak" class="box" :class="[color >1 && color <10? 'weak':color>=10 && color<=20?'ok':color>20?'strong':'']"></div>
            <div id="ok" class="box" :class="[color >=10 && color<=20?'ok':color>20?'strong':'']"></div>
            <div id="strong" class="box" :class="[color > 20 ?'strong':'']"></div>
          </div>
        <input  
        v-model="confirm"
         type="password"
          id="confirm"
          :class="[errorStyle==3?'error':'']"
          placeholder="Re-enter password"
          required>
            </b-form>
           
        </div>
        <div >
            <h5 id="help" @click="help"></h5>
        </div>
       <b-button id="btn" class="shadow-none" @click="signup">Signup</b-button>
     <span><h4 id="signup">Already have an account</h4> <h1 id="link" @click="signin">Signin</h1></span>
       </b-overlay>
    </div>
</template>

<script>

export default {
    watch:{
        password(){
            if(this.password.length == 0)
            {
                this.inputState=false;
              this.strength=0;
           }
        }
    },
   data(){
    return{
        userName:'',
        password:'',
        mail:'',
        confirm:'',
        inputState:false,
        strength:0,
        error:-1
    }
   },
   computed:{
inputOn(){
    return this.inputState;
},
errorStyle(){
    return this.error;
},
alertState(){
    return this.$store.getters['auth/getSignupError']
},
loading(){
   
    return this.$store.getters['auth/getLoader'];
},
color(){
return this.strength;
}
},
       methods:{
        async signup(){
            // these are the signup credentials validatdations
            // that user must validate
            this.$store.commit('auth/setLoader',{value:true})
            const approve1 = await this.signupCheck2();
            const approve2 = await this.signupCheck3();
            const approve3 = this.minLenght();
            const approve4 = this.signupCheck1();
            if(approve1 && approve2 && approve3 && approve4)
           {
             await this.$store.dispatch('auth/signup',{
                userName:this.userName,
                password:this.password,
                mail:this.mail,
                confirm:this.confirm,
            })
            this.userName='';
            this.mail='';
            this.password='';
            this.confirm='';
           }
        },
        // these are the signup checks
        signupCheck1(){
            if(this.password != this.confirm)
            {
               this.error=3;
               this.password='password do not match';
               this.confirm='password do not match';
               this.inputState=false;
               this.$store.commit('auth/setLoader',{value:false})
               return false;
            }
            else
            {
            return true;
            }
        }
        ,
        
        // this will change whether mail is taken or not
        async signupCheck2(){
            let response = await this.$store.dispatch('auth/checkEmail',{'email':this.mail});
         console.log(response)
            if(response == false)
         { 
            this.mail="mail in use"
            this.error=1;
            this.$store.commit('auth/setLoader',{value:false})
         }
         return response;
        },
        // this will check whether user is taken or not
        async signupCheck3(){
            let response = await this.$store.dispatch('auth/checkUser',{'name':this.userName});
            console.log(response);
            if(response==false)
            { 
                this.userName="Username taken"
                this.error=0;
                this.$store.commit('auth/setLoader',{value:false})
            }
            return response;
        },
        
        // this function will check whether the password is strong or not
        checkPassword(){
            this.inputState=true;
        var paswd = this.password;
        if (paswd.match(/[a-z]+/)) {
    this.strength += 1;
  }
  if (paswd.match(/[A-Z]+/)) {
    this.strength += 1;
  }
  if (paswd.match(/[0-9]+/)) {
    this.strength += 2;
  }
  if (paswd.match(/[$@#&!]+/)) {
    this.strength += 3;
 }
},
minLenght(){
    if(this.password.length < 8)
    {
        this.password="min length should be 8"
        this.error=2;
        this.password="password should of min 8 characters"
    return false;
    }
    else
    {  this.$store.commit('auth/setLoader',{value:false})
        return true;
    }
},

        // this function is for google signup
        googleSignup(){
           
        },
        // this function is for facebook signup
        facebookSignup(){
            
        },
        // this is the signin router forwarder
        signin(){
            this.$router.push({name:'login'})
        },
        // this is the function to route to login help page
        help(){
            // in here route to the forgotten password page
        }
    },
    async mounted(){
        if(this.$store.getters['auth/getSignupError'])
        {
            setTimeout(this.$store.commit('auth/setSignupState',{value:true}),
            2000)
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
    margin-top:2%;
}
input:focus {
   border: 1px solid rgba(233, 8, 89, 0.89);
box-shadow:1px 1px 2px rgba(0, 0, 0, 0.25);
border-radius: 13px;
outline:none;
}
input{
    box-sizing: border-box;
    outline:none;
    position: absolute;
    width: 361px;
    height: 53px;
    border: 1px solid #000000;
    border-radius: 13px;
    margin-left:6.87%;
    padding-left:10px;
}
#username{
    margin-top:10%;
    margin-left:7vw;
    width:86vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#email{
    margin-top:28%;
    margin-left:7vw;
    width:86vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#password{
    margin-top:46%;
    margin-left:7vw;
    width:86vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#confirm{
    margin-top:67%;
    margin-left:7vw;
    width:86vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#help{
    margin-top:79.75%;
    color:rgba(233, 8, 89, 0.89);
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left:54%;
}
#btn{
    background: rgba(233, 8, 89, 0.89);
    color:white;
    width:75%;
    margin-top:6.25%;
    margin-left:12.75%;
    font-size:18px;
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
    padding-left:14%;
    grid-gap:10px;
    margin-top:5.5%;
}
#facebook{
    display:grid;
    grid-template-columns:max-content max-content;
    width:75%;
    padding-left:14%;
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
width: 256px;
height: 26px;
left: 9vw;
margin-top: 15%;
font-family:'Times New Roman', Times, serif;
font-style: italic;
font-weight: 300;
font-size: 18px;
line-height: 26px;
/* identical to box height */

color: #000000;
}
#link{
    position: absolute;
    margin-left:2vw;
width: 86px;
height: 33px;
left: 59vw;
margin-top: 13.6%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 33px;
/* identical to box height */

float:left;
color: #E90859;
}
/* this is the password strength check component styling*/
#strength{
position:absolute;
    margin-top: 61%;
    width:80%;
    height:13px;
    display: grid;
    grid-template-columns:100px 100px 100px;
margin-left:9.5vw;
}
.box{
    margin-top:5px;
    border-radius: 3px;
    width:90px;
    height:10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.589);
}
.weak{
    background:rgba(183, 0, 255, 0.729); 
}
.ok{
    background:rgba(203, 5, 147, 0.729);
}
.strong{
background: rgba(249, 4, 77, 0.725);
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