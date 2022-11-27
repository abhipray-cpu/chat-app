<template>
    <div id="container">
        <b-img id="dp"  src="https://www.the-sun.com/wp-content/uploads/sites/6/2021/01/NINTCHDBPICT000631473461.jpg"  rounded="circle" alt="username"></b-img>
    <h1 id="username">Mia malkova</h1>
    <h3 id="bio">
        God said that be fruitful and multiply
    </h3>
    <b-button id="message" class="text shadow-none" @click="connect" >Connect</b-button>
    <b-button id="remove" class="text shadow-none" @click="remove">Remove</b-button>
        </div>
</template>


<script>
export default {
  methods:{
    connect(){},
    remove(){}
  }
}
</script>

<style scoped>
  #container{
    min-height: 121px;
position: relative;
width: 100vw;
height: 18vh;
margin-top:1vh;
margin-bottom:1vh;
background: #FFFFFF;
border-bottom:1px solid rgba(0, 0, 0, 0.57);
    }
#dp{
position: relative;
width:22vw;
height:11.75vh;
min-height: 90px;
margin-left:2vw;
margin-top:2.78vh;
border-radius: 100px;
}
#username{
position: absolute;
width: 134px;
height: 28px;
left:27vw;
top:3.18vh;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;

color: #000000;
}
#bio{
position: absolute;
width: 65vw;
max-height: 4vh;
left: 27vw;
top:55px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;

color: #000000;
}
#message{
position: absolute;
width: 30vw;
height: 4vh;
left: 26vw;
top:80px;
min-height: 36px;
padding:0;
background: #E90859;
border-radius: 6px;
}
#remove{
position: absolute;
width: 30vw;
height: 4vh;
left: 64vw;
min-height: 36px;
top:80px;
padding:0;
background: #E90859;
border-radius: 6px;
}

</style>