<template>
    <div id="container" @click="clicked">
    <b-img  src="https://indianmemetemplates.com/wp-content/uploads/amit-shah-looking-while-delivering-a-speech.jpg" id="image" rounded="circle" alt="motabhai"></b-img>
    <h2 id="username">Motabhai</h2>
    <b-icon icon="check-circle-fill" id="icon" v-if="show"></b-icon>
    <h4 id="chat-header">Mota bhai avi gayo mei bolta hu na that God said be fruitful and multiply karte hai</h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            state:false
        }
    },
    computed:{
        show(){
            return this.state;
        }
    },
    methods:{
        clicked(){
            this.state = !this.state;
        }
    }
}
</script>

<style scoped>
#container{
position: relative;
width: 100vw;
max-height:140px;
overflow: hidden;
height:20vh;
border-bottom:1px solid rgba(0, 0, 0, 0.54);
padding-left:1vw;
padding-right:1vw;
}
#image{
width: 20vw;
height: 12vh;
max-height:90px;
margin-top:3.5vh;
margin-left:1.5vw;
}
#username{
position: absolute;
width:50vw;
height:5vh;
left:25vw;
top:4vh;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 33px;
/* identical to box height */


color: #000000;
}
#chat-header{
position: absolute;
width: 65vw;
max-height:7vh;
left: 25vw;
top: 10vh;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 16px;
color: #000000
}
#icon{
    position: absolute;
width: 90px;
height: 35px;
left: 83vw;
top: 2vh;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color:#E90859;
}
</style>