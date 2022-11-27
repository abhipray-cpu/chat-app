<template>
    <div id="container">
        <h2 id="logo">Sandesha</h2>
         <div id="sub-menu">
            <b-icon icon="three-dots-vertical"  font-scale="3" id="menu"  @click="toggleMenu"></b-icon>
<div id="content" v-if="state">
<div class="elem" @click="forward('profile')">
    <b-icon class="icon" icon="person-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Profile</h2>
</div>
<div class="elem" @click="forward('requests')">
    <b-icon class="icon" icon="person-plus-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Requests</h2>
</div>
<div class="elem" @click="forward('new-group')">
    <b-icon class="icon" icon="people-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">New Group</h2>
</div>
<div class="elem">
    <b-icon class="icon" icon="power" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Logout</h2>
</div>
</div>

</div>
       
         <profile-comp/>
    </div>
</template>


<script>

import ProfileComp from './info-comp.vue'
export default {
    components:{
        ProfileComp,
       
    },
    data(){
        return{
            toggle:false
        }
    },
    computed:{
        state(){
            return this.toggle;
        }
    },
    methods:{
        toggleMenu(){
            this.toggle=!this.toggle;
        },
        forward(to){
            this.$router.push({name:to})
        }
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia');
#logo{
    position: absolute;
width: 87px;
height: 33px;
left: 6px;
top: 7px;

font-family: 'Sofia';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 33px;
/* identical to box height */
background: linear-gradient(95.76deg, #1708C2 2.71%, rgba(147, 12, 174, 0.94825) 54.21%, rgba(233, 8, 89, 0.89) 112.18%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#menu{
position: absolute;
width: 4vw;
height: 6vh;
top:1vh;
left:92vw;
width:7vw;
height:7vh;
font-weight: 600;
color:black;
}
#sub-menu{
    position: absolute;
    z-index: 1;
    height:fit-content;
}
#content{
    width:50vw;
    margin-left:47vw;
    margin-top:8vh;
    height:fit-content;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.518);
    background: white;
    padding-top:20px;
}
.elem{
    position: relative;
width: 50vw;
height:10vh;

background: #FFFFFF;
}
.icon{
    position: absolute;
left: 8.33vw;
right: 8.33vw;
top: 8.33vw;
bottom: 8.33vw;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.text{
    position: absolute;
max-width: 124px;
height: 23px;
left: 21vw;
top: 25px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;

color: #000000;
}
</style>