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
       <b-alert :show="alertState" variant="dark" id="alert" style="background:rgba(0,0,0,0.8);font-weight:500;color:white;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:2%;">Plz select atlest 5 interests</b-alert>
        <div id="top">
          <b-icon id="backBtn" icon="arrow-left" @click="back"></b-icon>
          <img src="../assets/logo-=small.png" alt="logo" id="appLogo">
        </div>
        <img src="../assets/interests.png" alt="wallpaper" id="image">
        <h2 style="text-align:center;font-weight:400;margin-top:1.5vh">Select your interests</h2>
        <h5 style="text-align:center;font-weight:250;font-style:italic">Select atlest 5</h5>
        <div id="flex">
          <div :class="[option.state==0?'chip':'chipSelect']" v-for="(option, index) in options" :key="option.value" @click="doSomething(index)">
            <h4>{{option.value}}</h4>
          </div>
        </div>
        <b-button @click="redirect" id="button">Finish</b-button>
        </b-overlay>
</div>
</template>

<script>
export default {
    data(){
        return{
            error:0,
            add:'',
            hobbies:[],
            options:[{value:"Antiquing",state:0},
        {value:"Aquarium Keeping",state:0},
    {value:"Archery",state:0},
{value:"Asrtology",state:0},
{value:"Astronomy",state:0},
{value:"Baking",state:0},
{value:"Beekeeping",state:0},
{value:"Biking",state:0},
{value:"Billiards",state:0},
{value:"Bird watching",state:0},
{value:"Blogging",state:0},
{value:"Bodybuilding",state:0},
{value:"Bowling",state:0},
{value:"Brewing beer",state:0},
{value:'Cake decoration',state:0},
{value:"Calligraphy",state:0},
{value:"Camping",state:0},
{value:"Candle Making",state:0},
{value:"Canyoneering",state:0},
{value:"Cricket",state:0},
{value:"Gambling",state:0},
{value:"Chess",state:0},
{value:"Adult Coloring",state:0},
{value:"Cooking",state:0},
{value:"Dancing",state:0},
{value:"Drawing",state:0},
{value:"Fishing",state:0},
{value:"Football",state:0},
{value:"Fitness",state:0},
{value:"Gokarting",state:0},
{value:"Golf",state:0},
{value:"Graffiti Art",state:0},
{value:"Hiking",state:0},
{value:"Interior Design",state:0},
{value:"Ice Skating",state:0},
{value:"Jewelry making",state:0},
{value:"Kayaking",state:0},
{value:"Knitting",state:0},
{value:"Magic",state:0},
{value:"Martial Arts",state:0},
{value:"Meditation",state:0},
{value:"Mixology",state:0},
{value:"Mountaineering",state:0},
{value:"Music",state:0},
{value:"Networking",state:0},
{value:"Origami",state:0},
{value:"Painting",state:0},
{value:"Shooting",state:0},
{value:"Photography",state:0},
{value:"Trading",state:0},
{value:"Pottery",state:0},
{value:"Rappelling",state:0},
{value:"Rapping",state:0},
{value:"Reading",state:0},
{value:"Beatboxing",state:0},
{value:"Rock climbing",state:0},
{value:"Running",state:0},
{value:"Sailing",state:0},
{value:"Scuba Diving",state:0},
{value:"Self care",state:0},
{value:"Sking",state:0},
{value:"Skateboarding",state:0},
{value:"Standup",state:0},
{value:"Surfing",state:0},
{value:"Swimming",state:0},
{value:"Tennis",state:0},
{value:"Anime&Manga",state:0},
{value:"Travelling",state:0},
{value:"UFC",state:0},
{value:"Video Gaming",state:0},
{value:"Netflix&Chill",state:0},
{value:"Wine tastin",state:0},
{value:"Writing",state:0},
{value:"Yoga",state:0}]
       }
    },
     methods:{
        back(){
            this.$router.push({name:'profile'})
        },
        redirect(){
            if(this.hobbies.length < 5)
            this.error=1;
            else
            this.$store.dispatch('updateUser',{'interests':this.hobbies})
            //will invoke a action in this step
        },
        doSomething(index){
            try{
            if(this.options[index].state==0)
            {
                this.options[index].state=1;
                this.addLike(this.options[index].value)
            }
            else{
                this.options[index].state=0
                this.removeHobby(this.options[index].value)
            }
          }
          catch(err){
            console.log(err,"There is an error in the doSomething function")
          }
        },
        removeHobby(index){
            this.hobbies=this.hobbies.filter(val=>val!=index);
          this.$store.commit('setHobbies',{value:this.hobbies})
        },
        addLike(hobby){
            if(this.hobbies.includes(hobby))
            return;
            else{
            this.hobbies.push(hobby);
            this.$store.commit('setHobbies',{value:this.hobbies})
        }
    }
},
computed:{
    loading(){
   
   return this.$store.getters['getLoader'];
},
alertState(){
    return this.$store.getters['getSignupError']
}
}
}
</script>

<style scoped>
#container{
    width:100vw;
    min-height:320px;
    height:fit-content;
}
#top{
    width:100vw;
    margin-top:1px;
}
#backBtn{
    margin-top:2vh;
    font-size:42px;
    margin-left:4vw;
    float:left
}
#appLogo{
    margin-top:3.5vh;
    margin-left:22.5vw;
}
#image{
    width:90vw;
    height:30vh;
    margin-top:3vh;
    margin-left:5vw;
}
#flex{
    width:100vw;
  display:flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left:3vw;
  padding-right:3vw;
}
.chip{
    width:fit-content;
    max-width:170px;
    margin-left:5px;
    margin-right:5px;
    padding:7px;
    border:1px solid rgba(233, 8, 89, 1);
    border-radius:15px;
    min-height:30px;
    min-width:70px;
    overflow: hidden !important;
    margin-top:5px;
    margin-bottom:5px;
}
.chip h4{
    color:black;
    font-weight: 400;
    font-size:18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.chipSelect{
    width:fit-content;
    max-width:170px;
    margin-left:5px;
    margin-right:5px;
    padding:7px;
    background:rgba(233, 8, 89, 1);
    border-radius:15px;
    min-height:30px;
    min-width:70px;
    overflow: hidden !important;
    margin-top:5px;
    margin-bottom:5px;
}
.chipSelect h4{
    color:white;
    font-weight: 400;
    font-size:18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
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
   margin-top:6px;
}
</style>