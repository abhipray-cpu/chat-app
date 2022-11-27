<template>
    <div id="container">
        <h3 id="hob">Hobbies</h3>
        <div id="flex">
<div v-for="hobby in Hobbies" :key="hobby" class="chip">
         <h4>{{hobby.slice(0,25)}} <span><b-icon icon="x-lg" class="icon" @click="removeHobby(hobby)"></b-icon></span></h4>
        </div>
        </div>
        <div id="options">
 <div class="option" v-for="hobby in options" :key="hobby" @click="addLike(hobby)">{{hobby}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            add:'',
            hobbies:[],
            options:["Antiquing",
        "Aquarium Keeping",
    "Archery",
"Asrtology","Astronomy","Baking","Beekeeping","Biking",
"Billiards","Bird watching","Blogging","Bodybuilding",
"Bowling","Brewing beer",'Cake decoration',"Calligraphy",
"Camping","Candle Making","Canyoneering","Cricket","Gambling","Chess",
"Adult Coloring","Cooking","Dancing","Drawing","Fishing","Football","Fitness",
"Gokarting","Golf","Graffiti Art","Hiking","Interior Design",
"Ice Skating","Jewelry making","Kayaking","Knitting","Magic",
"Martial Arts","Meditation","Mixology","Mountaineering",
"Music","Networking","Origami","Painting","Shooting","Photography",
"Trading","Pottery","Rappelling","Rapping","Reading",
"Beatboxing","Rock climbing","Running","Sailing","Scuba Diving","Self care",
"Sking","Skateboarding","Standup","Surfing","Swimming","Tennis",
"Anime&Manga","Travelling","UFC","Video Gaming","Netflix&Chill","Wine tastin",
"Writing","Yoga"]
        }
    },
    computed:{
        Hobbies(){
            return this.hobbies;
        }
    },
     methods:{
        removeHobby(index){
            this.hobbies=this.hobbies.filter(val=>val!=index);
        },
        addLike(hobby){
            if(this.hobbies.includes(hobby)|| this.hobbies.length >= 5)
            return;
            else
            this.hobbies.push(hobby);
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
#hob{
     margin-left:5vw;
     font-size:18px;
     font-weight: 500;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    background: rgb(4, 200, 21);
    border-radius:15px;
    min-height:30px;
    min-width:70px;
    overflow: hidden !important;
    margin-top:5px;
    margin-bottom:5px;
}
.chip h4{
    color:white;
    font-weight: 400;
    font-size:18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.icon{
    color:white;
    font-weight: 600;
    margin-left:5px;
}
#options{
    width:96vw;
    margin-left:2vw;
    padding-left:3.5vw;
    padding-right:3.5vw;
    padding-top:5px;
    padding-bottom:5px;
    height:250px;
    border:1px solid black;
    border-radius: 15px;
    overflow-x:hidden !important;
    overflow-y:scroll;
    display: grid;
    grid-template-columns: repeat(2,40fr);
}
#options::-webkit-scrollbar{
    display: none;
}
.option{
    margin-top:5px;
    margin-bottom:5px;
    font-size:19px;
    font-weight: 500;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>