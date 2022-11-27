<template>
  <div id="container">
    <head-comp></head-comp>
    <div id="chats">
        <h1 style="font-size:21px;font-weight:550;margin-left:4vw;">Chats</h1>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
        <chat-comp></chat-comp>
    </div>
  </div>
</template>

<script>
import HeadComp from '../components/home/head-comp.vue'
import ChatComp from '../components/home/chat-comp.vue'
export default {
    components:{
        HeadComp,
        ChatComp
    }
}
</script>

<style scoped>
#container{
    width: 100vw;
    overflow-x:hidden;
    overflow-y:auto;
}
#container::-webkit-scrollbar{
    display: none;
    visibility: hidden;
}
#chats{
position: absolute;
width:100vw;
height: fit-content;
left: 0px;
top:33vh;
}

</style>