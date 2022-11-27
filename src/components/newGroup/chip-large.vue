<template>
  <div id="container">
    <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" alt="name" id="image">
  <h3>Dogesh</h3>
<b-icon icon="x-circle-fill" class="icon"></b-icon>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#container{
  position: relative;
width: 80px;
height: 88px;
max-width: 80px;
max-height: 88px;
margin-top:7px;
margin-bottom:7px;
background: #FFFFFF;
}
#image{
  position: absolute;
width: 60px;
height: 60px;
left: 5px;
top: 0px;
border-radius: 100px;
}
h3{
position: absolute;
width: 37px;
height: 16px;
left: 4px;
top: 62px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;

color: #000000;
/* identical to box height */


color: #000000;
}
.icon{
    width:20px;
    height:20px;
position: absolute;
left:50px;
top: 67.92%;
color: #E90859;
}
</style>