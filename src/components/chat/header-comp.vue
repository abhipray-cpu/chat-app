v<template>
    <div id="container">
        <b-icon id="back" icon="arrow-left"></b-icon>
        <img src="https://i.ebayimg.com/images/g/lWwAAOSwxw1hvpR-/s-l500.jpg" alt="mia khalifa" id="dp">
       <h3 id="name">Mia Malkova</h3>
       <h5 id="status">online</h5>
       <b-icon icon="three-dots-vertical" id="menu" @click="toggleMenu"></b-icon> 
       <div id="content" v-if="state">
<div class="elem" @click="forward('profile')">
    <b-icon class="icon" icon="person-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">View Profile</h2>
</div>
<div class="elem" @click="forward('requests')">
    <b-icon class="icon" icon="volume-mute-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Mute</h2>
</div>
<div class="elem" @click="forward('new-group')">
    <b-icon class="icon" icon="brush-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Change Color</h2>
</div>
<div class="elem">
    <b-icon class="icon" icon="shield-fill" style="width: 30px; height: 30px;top:18px;"></b-icon>
    <h2 class="text">Hide Chat</h2>
</div>
</div>   
       </div>
</template>


<script>
export default {
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
#container{
    position: absolute;
width: 428px;
height: 63px;
left: 0px;
top: 0px;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
}
#back{
    position: absolute;
left: 1.24%;
right: 94.94%;
top: 32.27%;
bottom: 39.68%;
width:25px;
height: 25px;
color: #000000;
}
#dp{
    position: absolute;
width: 50px;
height: 50px;
left: 43px;
top: 8px;
border-radius: 100px;
}
#name{
    position: absolute;
max-width: 199px;
height: 23px;
left: 98px;
top: 15px;
overflow: hidden;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;

color: #000000;
}
#status{
    position: absolute;
width: 42px;
height: 18px;
left: 98px;
top: 42px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: rgba(0, 0, 0, 0.63);

}
#menu{
position: absolute;
width: 33.25px;
height: 39.25px;
left: 92.5vw;
top: 16.75px;
}
#content{
    top:20.75px;
    width:45vw;
    margin-left:52vw;
    margin-top:26px;
    height:300px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.518);
    background: white;
    padding-top:20px;
    z-index:1;
    position: relative;
}
.elem{
    position: relative;
width:45vw;
height: 68px;

background: #FFFFFF;
}
.icon{
    position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.text{
    position: absolute;
max-width: 124px;
height: 23px;
left: 54px;
top: 25px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;

color: #000000;
}
</style>