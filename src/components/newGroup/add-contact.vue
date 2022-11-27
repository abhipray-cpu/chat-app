<template>
    <div id="container">
        <h3 id="logo">Sandesha</h3>
        <b-icon icon="arrow-right" style="width:50px;height:30px;"
    id="next"></b-icon>
    <h2 id="add">Add members</h2>
    <div id="added">
        <chip-comp></chip-comp>
        <chip-comp></chip-comp>
        <chip-comp></chip-comp>
        <chip-comp></chip-comp>
        <chip-comp></chip-comp>
        <chip-comp></chip-comp>
        
    </div>
    <div id="contacts">
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
        <contact-comp></contact-comp>
    </div>
    </div>
</template>

<script>
import ContactComp from './contact-list.vue'
import ChipComp from './chip-comp.vue'
export default {
    components:{
        ContactComp,
        ChipComp
    }
}
</script>


<style scoped>
#container{
    width:100vw;
    overflow: hidden;
}
#logo{
    position: absolute;
width: 87px;
height: 33px;
left: 21px;
top: 17px;

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
#next{
    position: absolute;
left: 85.79%;
right: 4.67%;
top: 4.43%;
bottom: 92.66%;
font-weight:600;
color: #000000;
}
#add{
position: absolute;
width: 132px;
height: 25px;
left: 12px;
top: 8vh;
overflow-x:auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 25px;
margin-bottom:4vh;
/* identical to box height */
color: #000000;
}
#added::-webkit-scrollbar{
    display: none;
    visibility: hidden;
}
#added{
position: relative;
width:100vw;
height: fit-content;
left: 3vw;
top: 13vh;
border-bottom:1px solid rgba(0, 0, 0, 0.529);
margin-top:2%;
margin-bottom:28%;
display: grid;
grid-template-columns: repeat(5,auto);
}
#contacts{
    position:relative;
    width:100vw;
}
</style>