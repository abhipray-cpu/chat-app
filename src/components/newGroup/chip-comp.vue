<template>
  <div id="contain">
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
#contain{
  position: relative;
width: 68px;
height: 74px;

background: #FFFFFF;
}
#image{
  position: absolute;
width: 50px;
height: 50px;
left: 5px;
top: 1px;
border-radius: 100px;
}
h3{
  position: absolute;
max-width: 50px;
height: 12px;
left: 7px;
top: 54px;
overflow: hidden;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 12px;
/* identical to box height */


color: #000000;
}
.icon{
  position: absolute;
 float:right;

color: #E90859;
}
</style>