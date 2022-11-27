<template>
   <div id="container" ref="container"  >
    <b-icon icon="emoji-smile" id="emoji"></b-icon>
    <textarea type="text" id="input"  rows="1"
   ref="messageInput"
   v-model="message"/>
   <b-icon icon="mic-fill" id="audio"></b-icon>
   </div>
</template>
<script>
export default {
    methods:{
        setFocus(){
            document.getElementById('input').focus();
        }
    },
    data(){
        return{
            message:'',
            move:false
        }
    },
    watch: {
    message: function() {
      let { messageInput } = this.$refs;
      let container = this.$refs.container;
      const lineHeightInPixels = 16;
      
      // Reset messageInput Height
      messageInput.setAttribute(
          `style`,
          `height:${lineHeightInPixels}px;overflow-y:hidden;`
      );
      container.setAttribute(
          `style`,
          `height:${lineHeightInPixels}px;overflow-y:hidden;`
      );

      // Calculate number of lines (soft and hard)
      const height = messageInput.style.height;
      const scrollHeight = messageInput.scrollHeight;
      messageInput.style.height = height;
      const count = Math.floor(scrollHeight / lineHeightInPixels);
      this.$nextTick(() => {
        if(count*lineHeightInPixels<=84){
        messageInput.setAttribute(
            `style`,
            `height:${count*lineHeightInPixels}px;overflow-y:hidden;`
        );
        container.setAttribute(
            `style`,
            `height:${count*lineHeightInPixels}px;overflow-y:hidden;`
        );
        }
        else
        {
             messageInput.setAttribute(
            `style`,
            `height:84px;overflow-y:auto;`
        );
        container.setAttribute(
            `style`,
            `height:84px;overflow-y:auto;`
        );
        }
      });
    },
}
}
</script>

<style scoped>
#container{
    height: 44px;
    min-height:44px;
    position: fixed;
    bottom:3px;
    background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #485563, #29323c); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #485563, #29323c);
  border-radius: 20px;
  overflow-x:hidden;
}
#input{
position:fixed;
width: 80vw;
line-height: 16px;
min-height: 44px;
left: 12vw;
bottom:3px;
background: transparent;
border-radius: 20px;
margin-top:10px;
outline:none;
border:none;
padding-left:16px;
padding-right:16px;
padding-top:12px;
padding-bottom:12px;
color:white;
font-weight: 500;
font-size:18px;

}
#input::-webkit-scrollbar{
    display: none;
    visibility: hidden;
}
#input:focus{
outline:none;
}
#audio{
position: fixed;
width: 30px;
height: 30px;
bottom:10px;
margin-left:9px;
margin-right:5px;
color:rgb(228, 30, 79);  /* fallback for old browsers */
color: -webkit-linear-gradient(to right, #485563, #29323c); /* Chrome 10-25, Safari 5.1-6 */
color: linear-gradient(to right, #485563, #29323c);
left:85%;
}
#emoji{
 position: fixed;
 width: 30px;
height: 30px;
margin-left:10px;
bottom:11px;
color:rgb(228, 30, 79);   

}
</style>