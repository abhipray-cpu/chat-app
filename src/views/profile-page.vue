 <template>
    <div id="container">
      <b-icon icon="check2" id="confirm" @click="redirect"></b-icon>
        <profile-image></profile-image>
    <user-details></user-details>
    <gender-comp></gender-comp>
    <likes-comp></likes-comp>
    <hate-comp></hate-comp>
    <hobbies-comp></hobbies-comp>

    </div>
 </template>

 <script>
 import ProfileImage from '../components/profile/profile-pic.vue'
 import UserDetails from '../components/profile/details-1.vue'
 import GenderComp from '../components/profile/gender-comp.vue'
 import LikesComp from '../components/profile/likes-comp.vue'
 import HateComp from '../components/profile/hate-comp.vue'
 import HobbiesComp from '../components/profile/hobbies-comp.vue'
 export default {
    components:{
        ProfileImage,
        UserDetails,
        GenderComp,
        LikesComp,
        HateComp,
        HobbiesComp
    },
    methods:{
      redirect(){
         console.log(this.$store.getters.getStatus)
      }
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
   font-size:36px;
   font-weight: 500;
   color:rgb(245, 2, 75);
   

 }
 </style>