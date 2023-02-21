<template>
    <div id="container">
        <b-img v-if="userImage == ''" :src="require('/src/assets/profile1.jpg')" id="profile" rounded="circle" :alt="userName"></b-img>
        <b-img  :src="userImage" id="profile" rounded="circle" :alt="userName" v-else></b-img>
      
      <h2 id="username">{{userName}}</h2>
      <h3 id="bio">{{userStatus}}}</h3>
    <b-button id="suggestion" @click="suggestion">Suggestions</b-button>
    <b-button id="friend" @click="friend">Friends</b-button>
    </div>
</template>

<script>

export default {
    data(){
      return{
        image:'',
        name:'',
        status:''
      }
    },
    computed:{
         userImage(){
          return this.image
         },
         userName(){
          return this.name
         },
         userStatus(){
          return this.status
         }
    },
    methods:{
      suggestion(){
        this.$router.push({name:'suggestions'});
      },
      friend(){
        this.$router.push({name: 'friends'});
      }
    },
    async mounted(){
      
      this.image = this.$store.getters['auth/getProfileImage']
      this.name = this.$store.getters['auth/getUsername']
      this.status = this.$store.getters['auth/getStatus']

      if(this.image == '' || this.name == '' || this.status == ''){
        await this.$store.dispatch('auth/userHome')
        this.image = this.$store.getters['auth/getProfileImage']
      this.name = this.$store.getters['auth/getUsername']
      this.status = this.$store.getters['auth/getStatus']
      }

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia');
#container{
    margin-top:58px;
  position: absolute;
width: 100vw;
height:35vh;
background: #FFFFFF;
z-index:0;
overflow-x: hidden;
}
#profile{
position: absolute;
width: 26vw;
height: 14vh;
left: 3vw;
top: 1vh;
filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
}
#username{
position: relative;
width: 50vw;
height: 6vh;
left:32vw ;
top:6px;
font-family: 'Sofia';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 33px;
/* identical to box height */
color: #000000;
}
#bio{
position: absolute;
max-width: 50vw;
max-height: 10vh;
left: 32.5vw;
top:7vh;
font-family: 'Roboto';
font-style: italic;
font-weight: 300;
font-size: 15px;
line-height: 18px;
color: #000000;
}
#suggestion{
position: relative;
width:40vw;
height: 6vh;
left: 3.5vw;
top: 19vw;
padding:0;
background: #E90859;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
#friend{
   position: relative;
width: 40vw;
height: 6vh;
left: 15vw;
top: 19vw;
padding:0;
background: #E90859;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>