<template>
    <div id="container">
        <h2 id="logo">Sandesha</h2>
        <h1 id="friends">Requests</h1>
        <div id="contacts">
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
            <request-comp/>
       </div>
    </div> 
</template>

<script>
import RequestComp from '../components/contacts/request-comp.vue'
export default {
    components:{
      
        RequestComp
    },
   
}
</script>

<style scoped>
#container{
    overflow-y:auto;
}
#container::-webkit-scrollbar{
    display: none;
    visibility: hidden;
}
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
text-fill-color: transparent;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#friends{
    position: absolute;
width: 69px;
height: 25px;
left: 14px;
top: 55px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 21px;
line-height: 25px;
/* identical to box height */


color: #000000;
}
#contacts{
    margin-top:80px;
}
</style>