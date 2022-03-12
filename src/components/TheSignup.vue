<template>
<the-heading></the-heading>
<!--in this section create a form name password,confirm ,gender,dob,enail,number-->
<div id="form">
    <form>
            <div class="entry">
                <input type="text"  placeholder="USERNAME" v-model="username">
            </div>
            <div class="entry">
                <input type="email"  placeholder="Email" v-model="email">
            </div>
            <div class="entry">
                <input type="text"  placeholder="Contact" v-model='number'>
            </div>
            <div class="entry">
                <input type="text"  placeholder="Image" v-model='image'>
            </div>
            <div class="entry">
                <input type="text"  placeholder="Bio" v-model='bio'>
            </div>
            <div class="entry">
                <input type="date"  min="1923-09-21" max="2020-09-21" v-model='dob'>
            </div>
             <div class="entry">
                <input type="password"  placeholder="PASSWORD" v-model="password"> 
            </div>
            <div class="entry">
                <input type="password"  placeholder="Confirm Password" v-model="confirmPassword">
            </div>
           <button type="submit" style="display:none"></button>
            <div  class="button" @click="registerUser">
                <h2>Signup</h2>
            </div>
             </form>
</div>
</template>


<script>
import TheHeading from './TheHeading.vue' 
export default {
    components:{TheHeading},
   data(){
        return{
            username:'',
            password:'',
            confirmPassword:'',
            email:'',
            number:'',
            dob:'',
            image:'',
            bio:''
      }
},
methods:{
registerUser(){
      this.$store.dispatch({
          type:'signup',
          payload:{
              userame:this.username,
              email:this.email,
              number:this.number,
              dob:this.dob,
              password:this.password,
              image:this.image,
              bio:this.bio
          }
      })
}
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
</style>