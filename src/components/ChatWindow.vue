<template>
    <div id="window">
        <div style="margin-left:5px;margin-top:40px">
             <received-message v-for="message in received"
             :key="message.text"
             :text="message.text"></received-message>
         </div>
         <div style="margin-left:40px;margin-top:80px">
             <sent-message v-for="message in sent"
             :key="message.text"
             :text="message.text"
             ></sent-message>
         </div>
    </div>
</template>
<script>
import SentMessage from './sentMessage.vue'
import ReceivedMessage from './receivedMessage.vue' 
export default {
    components: {
        SentMessage,
        ReceivedMessage
    },
    computed:{
           sent(){
               return this.$store.getters['getSentChat']
           },
           received()
           {
               return this.$store.getters['getReceivedChat']
            },
            },
    methods:{
        
         updateMessages(){
             this.$store.dispatch({
            type:"getMessages"
        })
        console.log(this.sent);
        console.log(this.received);
        console.log('This is the zipped chats array');
        console.log(this.chats);
        setTimeout(this.updateMessages,10000);
         }
    },
  mounted(){
     this.updateMessages();
       
  }    
}
</script>

<style scoped>
#window{
  height:500px;
  width:440px;
  margin-bottom:30px;
  overflow-y: auto;
  display:grid;
  grid-template-columns: 200px 200px;
}
#window::-webkit-scrollbar {
  display: none;
}

</style>