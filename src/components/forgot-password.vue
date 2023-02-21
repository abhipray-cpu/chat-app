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
       <b-alert :show="alertState" variant="dark" id="alert" style="background:rgba(0,0,0,0.8);font-weight:500;color:white;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;text-align:center">{{alertDialogue}}</b-alert>
            <b-img :src="require('/src/assets/login-logo.png')" fluid center alt="app logo"></b-img>
        <h3 id="quote">A minimalist chat app</h3>
        <div id="form">
            <b-form @submit="sendMail" @reset="formReset">
                 <b-form-input
          id="usermail"
          v-model="userMail"
          :class="[errorStyle==0?'error':'']"
          placeholder="Enter your mail(check spam folder)"
          required
          type = email
        ></b-form-input>

            </b-form>
           
        </div>
       <b-button id="btn" class="shadow-none" @click="sendMail">Send mail</b-button>
        </b-overlay>
    </div>
</template>

<script>
export default {
    
   data(){
    return{
        userMail:'',
        error:-1,
        alertError:''
    }
   },
   computed:{
    alertDialogue(){
        return this.alertError;
    },
    errorStyle()
    {
        return this.error;
    },
    loading(){
   
   return this.$store.getters['auth/getLoader'];
},
alertState(){
    if(this.alertError != '')
    return true;
    else
    return false;
},
   },
    methods:{
        async sendMail(){
            this.$store.commit('auth/setLoader',{value:true})
            if(!this.validateMail(this.userMail)){
                this.alertError = 'please enter a valid email';
               this.$store.commit('auth/setLoader',{value:false})
            }            
           else{
            try{
                this.$store.commit('auth/setResetMail',{value:this.userMail})
                let res = await this.$store.dispatch('auth/sendMail')
                if(res){
                    this.alertError = 'an email is sent to your mail'
                this.userMail = ''
                this.$store.commit('auth/setLoader',{value:false})
                }
                else{
                    this.alertError = 'something went wrong on our side'
                this.userMail = ''
                this.$store.commit('auth/setLoader',{value:false})
                }
                
            }
            catch(err){
                console.log('the error is occuring while sending email')
                console.log(err)
                this.alertError = 'seems like fault in our side!'
                this.$store.commit('auth/setLoader',{value:false})
            }
           }

        },
        validateMail(email){
     return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
        },
        help(){
            console.log('login help!');
        },
        formReset(){
            console.log('form reset')
        },
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
    margin-top:7vh;

}
.form-control:focus {
   border: 1px solid rgba(233, 8, 89, 0.89);
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;

}
.form-control{
    box-sizing: border-box;
    position: absolute;
    width:70vw;
    height: 53px;
    border: 1px solid #000000;
    border-radius: 13px;
    margin-left:6.87%;
}
#usermail{
    margin-top:15px;
    margin-left:4vw;
    width:92vw;
    font-size:24px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#btn{
    background: rgba(233, 8, 89, 0.89);
    position:absolute;
    margin-top:75px;
    margin-left:70vw;

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