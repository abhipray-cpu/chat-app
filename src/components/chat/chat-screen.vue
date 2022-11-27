<template>
    <div id="container" ref="chat">
        <div v-for="(val,index) in testData" :key="index" :class="[val.id==user?'sender':'receiver']" v-touch:swipe="swipeHandler">
            <h3 id="msg">{{val.message}}</h3>
            <h5 id="time">{{val.time}}</h5>
        </div>
        <div id="noti" v-if="newAlert" @click="scrollBottom">
            <h3>New message</h3>
        </div>
    </div>
</template>


<script>
export default {
computed:{
    newAlert(){
        return this.newMsg;
    }
},
    data(){
        return{
            newMsg:false,
            user:'1',
            testData:[{
                'message':'hello',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'hey',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'aur bhai kaisa hai?',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'bas badiya bhai tu bta kaisa hai?',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'bahi ab kya batau naukri lag nhi rhi bas bc gaand hi marwa rahe hai itne din se tu bta khuc hua ya berojgari ke saath hai abhi bhi relation mei',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'bhak teri maa ka bhosda!',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'dhat teri maa ki chut!',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'bhak saaale bichkapde!',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'ja na bei napunsakchodu',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'tera baap napunsakchodu',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'tera baap dallal bc!',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'a bhej de apni behen ko phir',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'mc!',
                 'id':'1',
                 'time':'10:00 AM'
            },
            {
                'message':'ja ne be lawde',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'dhat teri maa ki chut',
                 'id':'1',
                 'time':'10:00 AM'
            },

            {
                'message':'teri maa ka lund hai kya?',
                 'id':'2',
                 'time':'10:00 AM'
            },
            {
                'message':'fuck off!!',
                 'id':'1',
                 'time':'10:00 AM'
            },
            
            ]
        }
    },
    mounted(){
       this.scrollBottom();
        setTimeout(()=>{
            this.testData.push({
                'message':'hello ki maa ka bhoad',
                 'id':'1',
                 'time':'10:00 AM'
            })
        },2000);
        setTimeout(()=>{
            this.testData.push({
                'message':'teri bhi maa ka bhosad',
                 'id':'2',
                 'time':'10:00 AM'
            })
        },4000)
        setTimeout(()=>{
            this.testData.push({
                'message':'bhak bsdk!',
                 'id':'1',
                 'time':'10:00 AM'
            })
        },6000)
        setTimeout(()=>{
            this.testData.push({
                'message':'chla ja bsdk!!',
                 'id':'2',
                 'time':'10:00 AM'
            })
        },8000)
    },
    methods:{

        scrollBottom(){
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
            window.scrollTo(0,this.$refs.chat.scrollHeight);
            this.newMsg=false;
        },
        swipeHandler(){
            console.log('reading this swipe event')
        }
    },
    watch:{
        
        testData(){
            
            if(this.$refs.chat.scrollTop<(this.$refs.chat.scrollHeight/2)-100)
           {
            this.newMsg=true;
            setTimeout(()=>{
                this.newMsg=false;
            },5000);
           }
else if(this.newMsg==false)
this.scrollBottom();
            
        }
    }
}
</script>

<style scoped>
#container{
position: relative;
width:100vw;
max-height: 83vh;
left: 0px;
top: 68px;
display: flex;
flex-direction: column;
width: 100%;
overflow-y:auto;
margin-bottom:3vh;
}
#container::-webkit-scrollbar {
    display: none;
    visibility: hidden;
}
.sender{
    margin-right: 10px;
    margin-top: 15px;
    font-size: 14px;
    color: #fff;
       background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #485563, #29323c); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #485563, #29323c);
    border-radius: 20px;
    max-width:70%;
    width:fit-content;
         align-self: flex-end;
  text-align: right;
  padding-left:15px;
    padding-right: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.555);
    margin-bottom:3px;
}
.receiver{
   max-width:70%;
    margin-left: 10px;
    margin-top: 15px;
    font-size: 14px;
    color: #fff;
    width:fit-content;
    background-color: rgb(228, 30, 79);
    border-radius: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    align-self: flex-start;
    padding-left:5px;
    padding-right: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.555);
    margin-bottom:3px;
}
#msg{
    font-weight: 500;
    font-size:20px;
    margin-top:10px;
    margin-bottom:10px;
    margin-left:5px;
    margin-right:5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#time{
    font-size:12px;
    float:right;
    margin-right:10px;
    font-weight:500;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#noti{
    width:150px;
    height:50px;
    background: #673AB7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    position: fixed;
    border-radius: 20px;
    padding:10px;
    bottom:80px;
    margin-left:31vw;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.582);
    z-index:1;
    animation: bounce 0.75s ease-in-out;
}
#noti h3{
    color:white;
    text-align:center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top:2px;
    font-size:20px;
    font-weight: 400;
}
@keyframes bounce {
   0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-30px);} 
   60% {transform: translateY(-15px);} 
}
</style>