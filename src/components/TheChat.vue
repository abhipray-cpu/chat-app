<template>
    <div>
        <the-person :name="name"
        :image="image"
        :from = "chat">
        </the-person>
        <div id="seprator"></div>
        <!--in this section add infinite scrolling to scroll through messages-->
        <div>

        </div>
        <chat-window></chat-window>
      
            <form @submit.prevent="sendMessage()">
                <input type="text" v-model="message" placeholder="Message">
                <button type="submit" style="display:none;"></button>
            </form>
       
    </div>
</template>

<script>
// study sockets and infinte scrolling for this section and also study real time communication
import ThePerson from './ThePerson.vue'
import ChatWindow from './ChatWindow.vue'
export default {
    inject:['transferMessage'],
    props:['name','image'],
    components:{ThePerson,
    ChatWindow},
    data(){
        return{
            message:'',
            chat:''
        }
    },
    methods:{
      sendMessage(){
          this.transferMessage(this.message);
          this.message=''
          console.log(`The message will be sent to ${this.$store.getters['getReceiver']}`)
      }  
    },
    mounted(){
        this.$store.commit({
           type:"setReceiver",
            payload:this.name
        })
       
    }
  
}
</script>

<style scoped>
#seprator{
   width: 100%;
   height:1px;
   background-color:black;
   margin-top:0px;
   margin-bottom:10px
}
/*this is how you place an element at the bottom of the page*/
form input{
    position:absolute;
    bottom:60px;
}
form input{
    width:420px;
    border:2px solid black;
    border-radius: 30px;
    margin-left:4px;
    height:20px;
    font-weight:bold;
}
form input:hover{
 
    border:2px solid rgb(243, 3, 95);
}
form input:focus{
    outline: none !important;
    border:2px solid rgb(243, 3, 95);}   

</style>