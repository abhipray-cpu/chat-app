<template>
<the-heading></the-heading>
   <div style="margin-left:16%">
       <img src="../images/login.jpg" alt="">
   </div>
    <div>
        <div id="form" @submit.prevent="validateUser">
            <form>
            <div class="entry">
                <input type="text" v-model="username" placeholder="USERNAME">
            </div>
             <div class="entry">
                <input type="password" v-model="password" placeholder="PASSWORD">
            </div>
           <a href="#">forgot password</a>
           <button type="submit" style="display:none"></button>
            <div id="login" class="button" @click="validateUser">
                <h2>Login</h2>
            </div>
             </form>
        </div>
           <h1>Or</h1>
           <div id="signup" class="button" @click='signup'>
               <h2>Signup</h2></div>
    </div>
</template>
<script>
import TheHeading from './TheHeading.vue'
export default {
    data(){
        return{
            username:'',
            password:''
        
        }
    },
    inject:['signup'],
    methods:{
        validateUser(){
           this.$store.dispatch({
               type:'login',
                payload:{
                     username:this.username,
                     password:this.password
                          }
                                         })
        }
    },
    
   
    components:{
        TheHeading
    }
}
</script>

<style scoped>
#form{
    margin-left:22%;
    margin-top:20px
}
.entry input{
    margin-top:10px;
    margin-bottom:30px;
    width:250px;
    font-size:24px;
    font-weight: 700;
    padding:2px
}
.entry input::placeholder{
    font-weight:700;
    color:black
}

.entry input:hover{
    border:2px solid rgb(243, 3, 95)
}
.entry input:focus {
    outline: none !important;
    border:2px solid rgb(243, 3, 95);
  
  }
  h1{
      margin-left: 45%;
      font-weight: bolder;
  }
  #login{
      margin-left:22%
  }
  #signup{
      margin-left: 39%;
  }
  .button{
      border:2px solid transparent;
      background-color:rgb(243, 3, 95);
      width:100px;
      height:50px;
      border-radius: 30px;
      margin-top:10px;
      cursor: pointer;
  }
  .button h2{
      text-align:center;
      font-weight: bolder;
      margin-top:10px;
      color:white
  }
  a{
      color:rgb(243, 3, 95);
      text-decoration: none;
      margin-bottom: 7px;
  }
</style>