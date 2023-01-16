 <template>
    <div id="container">
      <b-alert :show="errorState==1" variant="dark" id="alert" style="text-align:center; background:rgba(0,0,0,0.715);font-weight:500;color:white;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;" class="animateAlert">Please enter atleast 5 things you like</b-alert>
      <b-alert :show="errorState==2" variant="dark" id="alert" style="text-align:center; background:rgba(0,0,0,0.715);font-weight:500;color:white;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;" class="animateAlert">Please enter atleast 5 things you dislike</b-alert>
      <h3 style="text-align:center;font-style:italic;color:rgba(0,0,0,0.76);font-weight:300;margin-top:4px;">Complete your bio</h3>  
      <profile-image></profile-image>
    <user-details></user-details>
    <gender-comp></gender-comp>
    <likes-comp></likes-comp>
    <hate-comp></hate-comp>
<b-button @click="redirect" id="button">Next</b-button>
    </div>
 </template>

 <script>
 import ProfileImage from '../components/profile/profile-pic.vue'
 import UserDetails from '../components/profile/details-1.vue'
 import GenderComp from '../components/profile/gender-comp.vue'
 import LikesComp from '../components/profile/likes-comp.vue'
 import HateComp from '../components/profile/hate-comp.vue'
 export default {
    components:{
        ProfileImage,
        UserDetails,
        GenderComp,
        LikesComp,
        HateComp,
    },
    computed:{
      errorState(){
         return this.errStatus
      }
    },
    data(){
      return{
         errStatus:0,
      }
    },
    methods:{
      redirect(){
         // will be updating the user data after all the checks are passed else refresh page
         // with warning
         if(!this.likesCheck()){this.errStatus=1}
         if(!this.dislikesCheck()){this.errStatus=2}

         // dispatch action when all the checks are passed
         if(this.likesCheck() && this.dislikesCheck())
         {
            console.log('all ok!')
         }
      },
      likesCheck(){
         let likes = this.$store.getters.getLikes
         if(likes.length !== 5)
         {
            return false
         }
         return true
      },
      dislikesCheck(){
         let dislikes = this.$store.getters.getDislikes
         if(dislikes.length !== 5)
         {
            return false
         }
         return true
      },
    }
 }
 </script>

 <style scoped>
 #container{
    width: 100vw;
    overflow-x:hidden !important;
    overflow-y:scroll !important;
 }
 #container::-webkit-scrollbar{
    width: 0px;
    height: 0px;
    display:none;
 }
 #confirm{
   float:right;
   margin-right:5vw;
   margin-top:2vh;
   font-size:42px;
   font-weight: 500;
   color:rgb(245, 2, 75);
   
}
/*alert message animations*/
.animateAlert{
   animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
#button{
   width:45vw;
   height:5vh;
   margin-left:25vw;
   background-color:rgba(233, 8, 89, 1);
   color:white;
   text-align:center;
   font-size:26px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   padding:0px;
   line-height: 5vh;
   margin-bottom:27.5px;
}
 </style>