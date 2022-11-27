<template>
    <div id="container" style="width:100%;height:100%;">
        <img :src="require('../assets/hermes 1.png')" alt="logo" id="image">
        <h1 id="text1" @click="redirect">Sandesha</h1>
        <h3 id="text2">A minimal chat app for simple messaging</h3>
    </div>
</template>

<script>
export default {
   methods:{
   async redirect(){
        let res=await this.$store.dispatch('autoLogin');
        if(res!=true)
        this.$router.push({name:'login'});
    }
   },
//    mounted(){
//     setTimeout(this.redirect(),2500);
//    }
     
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia');
#image{
    position: relative;
width: 90vw;
height: 40vh;
left: 3vw;
top: 6vh;
animation: bounce 0.5s;
            animation-direction: alternate;
            animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
            animation-iteration-count: infinite;
}
#text1{
    position: relative;
width: 100vw;
height: 91px;
margin-top:24vh;
text-align: center;
font-family: 'Sofia';
font-style: normal;
font-weight: 400;
font-size: 58px;
line-height: 91px;
background: linear-gradient(95.76deg, #1708C2 2.71%, rgba(147, 12, 174, 0.94825) 54.21%, rgba(233, 8, 89, 0.89) 112.18%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#text2{
    position: relative;
width: 100vw;
height: 5vh;
text-align: center;

font-family: 'Sofia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;
/* identical to box height */


color: #000000;
}
@keyframes bounce {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(0, 200px, 0);
            }
        }
</style>