<template>
    <div class="container">
         <!-- check why the image url is not working-->
         <div style="order:1"><img :src="image" :alt="name"></div>
         <div style="order:2"><h1>{{ name }}</h1> <br>
         <div id="buttons">
          <h3>{{ bio }}</h3>
         </div>
         
         </div>
    </div>
<div id="seprator"></div>
      <h2 style="margin-bottom:30px">Contact:    <span class="info">{{ contact }}</span></h2>
      <h2 style="margin-bottom:30px">Email:      <span class="info">{{ email }}</span></h2>
      <h2 style="margin-bottom:30px">DOB:        <span class="info">{{ dob }}</span></h2>
</template>


<script>
export default {
props:['name','image','bio','contact','email','dob'],


}
</script>


<style scoped>
h1{
    margin-bottom:0px
}
#seprator{
   width: 100%;
   height:1px;
   background-color:black;
   margin-top:17px;
   margin-bottom:10px
}
.container{
   height:120px;
   margin-top:5px;
   margin-bottom: 5px;
   display: flex;
   cursor:pointer;
}

img{
    width:100px;
    height:100px;
    border: 2px solid transparent;
    border-radius: 100px;
    margin-right:20px;
    margin-bottom:0px
}
.info{
    color:rgb(218, 5, 86);
    font-style:italic
}


</style>