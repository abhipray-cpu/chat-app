<template>
    <div id="container" ref="chats">
        <head-comp style="position:absolute"></head-comp>
        <chat-screen style="position:absolute"></chat-screen>
        <chat-box style="position:absolute"/>
    </div>
</template>

<script>
import HeadComp from '../components/chat/group-header.vue'
import ChatScreen from '../components/chat/group-chat.vue'
import ChatBox from '../components/chat/chat-box.vue'
export default {
  mounted(){
    // in here set the to message id
    console.log(this.$route.params['to'])
 },
  components:{
    HeadComp,
    ChatScreen,
    ChatBox
  }    
}
</script>

<style scoped>
#container{
  width:100vw !important;
  overflow-x: hidden !important ;

}
</style>