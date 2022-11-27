<template>
    <div id="container" ref="chat">
        <div v-for="(val,index) in testData" :key="index" :class="[val.id==user?'sender':'receiver']" :id="val.id!=user?background[val.id]:''">
            
            <h3 id="msg">{{val.message}}</h3>
            <h5 id="name">{{val.id==user?'You':val.name}}</h5>
            <h5 id="time" stle>{{val.time}}</h5>
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
            //using a list of gradients in here
            user:'1',
            background:['chat-color1','chat-color2','chat-color3','chat-color4','chat-color5','chat-color6','chat-color7','chat-color8','chat-color9','chat-color10',
                         'chat-color11','chat-color12','chat-color13','chat-color14','chat-color15','chat-color16','chat-color17','chat-color18','chat-color19','chat-color20',
                          'chat-color21','chat-color22','chat-color23','chat-color24','chat-color25','chat-color26','chat-color27','chat-color28','chat-color29','chat-color30',
                          'chat-color31','chat-color32','chat-color33','chat-color34','chat-color35','chat-color36','chat-color37','chat-color38','chat-color39','chat-color40'],
            testData:[{
                
                'message':'hello',
                 'id':'1',
                 'time':'10:00 AM',
                 'name':'Abhi'
            },
            {
                'message':'hey',
                 'id':'2',
                 'time':'10:00 AM',
                    'name':'puttanpal'
            },
            {
                'message':'aur bhai kaisa hai?',
                 'id':'3',
                 'time':'10:00 AM',
                    'name':'mundal'

            },
            {
                'message':'bas badiya bhai tu bta kaisa hai?',
                 'id':'4',
                 'time':'10:00 AM'
                 ,'name':'roopali'
            },
            {
                'message':'bahi ab kya batau naukri lag nhi rhi bas bc gaand hi marwa rahe hai itne din se tu bta khuc hua ya berojgari ke saath hai abhi bhi relation mei',
                 'id':'1',
                 'time':'10:00 AM',
                    'name':'abhi'
            },
            {
                'message':'bhak teri maa ka bhosda!',
                 'id':'5',
                 'time':'10:00 AM',
                    'name':'chuttan'
            },
            {
                'message':'dhat teri maa ki chut!',
                 'id':'6',
                 'time':'10:00 AM',
                 'name':'tau'
            },
            {
                'message':'bhak saaale bichkapde!',
                 'id':'7',
                 'time':'10:00 AM',
                 'name':'nasty mathre'
            },
            {
                'message':'ja na bei napunsakchodu',
                 'id':'1',
                 'time':'10:00 AM',
                    'name':'abhi'
            },
            {
                'message':'tera baap napunsakchodu',
                 'id':'8',
                 'time':'10:00 AM',
                 'name':'bichkapda'
            },
            {
                'message':'tera baap dallal bc!',
                 'id':'1',
                 'time':'10:00 AM',
                 'name':'abhi'
            },
            {
                'message':'a bhej de apni behen ko phir',
                 'id':'2',
                 'time':'10:00 AM',
                    'name':'abhi'
            },
            {
                'message':'mc!',
                 'id':'9',
                 'time':'10:00 AM',
                 'name':'narku'
            },
            {
                'message':'ja ne be lawde',
                 'id':'10',
                 'time':'10:00 AM',
                 'name':'turkey'
            },
            {
                'message':'dhat teri maa ki chut',
                 'id':'11',
                 'time':'10:00 AM',
                 'name':'rarapuri'
            },

            {
                'message':'teri maa ka lund hai kya?',
                 'id':'1',
                 'time':'10:00 AM'
                    ,'name':'abhi'
            },
            {
                'message':'fuck off!!',
                 'id':'1',
                 'time':'10:00 AM'
                    ,'name':'abhi'
            },
            
            ]
        }
    },
    mounted(){
        for (let i = this.background.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.background[i], this.background[j]] = [this.background[j], this.background[i]];
    }
       this.scrollBottom();
        setTimeout(()=>{
            this.testData.push({
                'message':'hello ki maa ka bhoad',
                 'id':'2',
                 'time':'10:00 AM',
                 'name':'puttanpal'
            })
        },2000);
        setTimeout(()=>{
            this.testData.push({
                'message':'teri bhi maa ka bhosad',
                 'id':'3',
                 'time':'10:00 AM',
                    'name':'mundal'
            })
        },4000)
        setTimeout(()=>{
            this.testData.push({
                'message':'bhak bsdk!',
                 'id':'1',
                 'time':'10:00 AM'
                    ,'name':'abhi'
            })
        },6000)
        setTimeout(()=>{
            this.testData.push({
                'message':'chla ja bsdk!!',
                 'id':'2',
                 'time':'10:00 AM'
                    ,'name':'abhi'
            })
        },8000)
    },
    methods:{

        scrollBottom(){
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
            window.scrollTo(0,this.$refs.chat.scrollHeight);
            this.newMsg=false;
        }
    },
    watch:{
        testData(){
            console.log(this.$refs.chat.scrollTop,this.$refs.chat.scrollHeight);
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
#name{
    font-size:14px;
    float:right;
    margin-right:10px;
    margin-left:10px;
    font-weight:900;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#time{
    font-size:12px;
    float:left;
    margin-left:10px;
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
    margin-left:32vw;
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
/* these are the background colors that will be used for chats*/
#chat-color1{
     background: #2c3e50;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3498db, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3498db, #2c3e50);
}
#chat-color2{
    background: #73C8A9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #373B44, #73C8A9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #373B44, #73C8A9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color3{
    background: #D38312;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A83279, #D38312);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A83279, #D38312); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#chat-color4{
    background: #360033;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color5{
    background: #FFA17F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00223E, #FFA17F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00223E, #FFA17F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#chat-color6{
    background: #43cea2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color7{
    background: #ffb347;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffcc33, #ffb347); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color8{
    background: #6441A5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color9{
    background: #FEAC5E;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#chat-color10{
    background: #ff0084;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #33001b, #ff0084);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #33001b, #ff0084); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color11{
    background: #00bf8f;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #001510, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #001510, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-colot12{
    background: #136a8a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #267871, #136a8a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #267871, #136a8a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color13{
    background: #7b4397;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #dc2430, #7b4397);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #dc2430, #7b4397); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color14{
    background: #6A9113;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #141517, #6A9113);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #141517, #6A9113); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color15{
    background: #525252;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3d72b4, #525252);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3d72b4, #525252); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color16{
    background: #BA8B02;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #181818, #BA8B02);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #181818, #BA8B02); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color17{
    background: #2c3e50;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3498db, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3498db, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color18{
    background: #fc00ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color19{
    background: #e53935;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #e35d5b, #e53935);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #e35d5b, #e53935); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color20{
    background: #005C97;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color21{
    background: #f46b45;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #eea849, #f46b45);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #eea849, #f46b45); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color22{
    background: #00C9FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color23{
background: #673AB7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color24{
    background: #76b852;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8DC26F, #76b852);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color25{
    background: #8E0E00;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color26{
    background: #c2e59c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #64b3f4, #c2e59c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color27{
    background: #403A3E;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #BE5869, #403A3E);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #BE5869, #403A3E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color28{
    background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color29{
    background: #B24592;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F15F79, #B24592);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F15F79, #B24592); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color30{
    background: #457fca;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5691c8, #457fca);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #5691c8, #457fca); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color31{
    background: #6a3093;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #a044ff, #6a3093);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #a044ff, #6a3093); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color32{
    background: #fd746c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff9068, #fd746c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff9068, #fd746c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color33{
    background: #114357;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F29492, #114357);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F29492, #114357); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color34{
    background: #1e3c72;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2a5298, #1e3c72);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2a5298, #1e3c72); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color35{
    background: #5614B0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #DBD65C, #5614B0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #DBD65C, #5614B0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color36{
    background: #2980b9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color37{
    background: #834d9b;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #d04ed6, #834d9b);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #d04ed6, #834d9b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#chat-color38{
background: #4B79A1;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #283E51, #4B79A1);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #283E51, #4B79A1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color39{
    background: #ff4b1f;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff9068, #ff4b1f);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff9068, #ff4b1f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#chat-color40{
    background: #3a7bd5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3a6073, #3a7bd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>