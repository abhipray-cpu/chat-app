<template>
    <div class="container" @click="openChats(name)">
         <!-- check why the image url is not working-->
         <div style="order:1"><img :src="userImage" :alt="userName"></div>
         <div style="order:2"><h1>{{ userName }}</h1> <br>
         <div id="buttons">
           <div class="button" @click="showFriends">
                <h3>Suggestion</h3>
            </div>
            <div class="button" @click="showContacts" style="margin-left:20px">
                <h3>Friends</h3>
            </div>
         </div>
         
         </div>
    </div>
<div id="seprator"></div>
 <the-list v-for="value in getUsers"
        :key=value.userName
        :name=value.userName
        :images=value.image
        :from='contact'>
        </the-list>
</template>


<script>
import TheList from './TheList.vue'
export default {
    components:{
        TheList
    },
    inject:['dataValues','showFriends','showContacts'],
   computed:{
       userName()
       {
             return this.$store.getters['getUser']
       },
       userImage()
       {
            return this.$store.getters['getImage']
       },
        getUsers(){
            return this.$store.getters['getUsers'];
        }
   },
   methods:{
        openChats(val){
           console.log(val);
       }
   },
   mounted(){
       console.log(this.getUsers)
   }
}
</script>


<style scoped>
h1{
    margin-bottom:0px
}
#seprator{
   width: 100%;
   height:1px;
   background-color:black;
   margin-top:17px;
   margin-bottom:10px
}
.container{
   height:120px;
   margin-top:5px;
   margin-bottom: 5px;
   display: flex;
   cursor:pointer;
}

img{
    width:100px;
    height:100px;
    border: 2px solid transparent;
    border-radius: 100px;
    margin-right:20px;
    margin-bottom:0px
}
#buttons{
   height:fit-content;
   margin-top:0px;
   margin-bottom: 5px;
   display: flex;
}
.button{
      border:2px solid transparent;
      background-color:rgb(243, 3, 95);
      width:100px;
      height:50px;
      border-radius: 30px;
      margin-top:0px;
      cursor: pointer;
  }
  .button h3{
      text-align:center;
      font-weight: bolder;
      margin-top:13px;
      color:white
  }

</style>