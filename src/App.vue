<template>
<div id="container">
    <div id="body">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
//import axios from 'axios'
export default {
data(){
    return{
        values:[{image:'../images/martin.png',name:'Martin Garix'},{image:'../images/dhinchak.png',name:'Dhinchak Pooja'},{image:'../images/shotKing.png',name:'OM prakash'},{image:'../images/jhonny.png',name:'Dr Jhonny'},{image:'../images/mundal.png',name:'Mundal'}]
    }
},
provide(){
     return{
        'EmitValue':this.EmitValue,
        'Search':this.SearchValue,
        'dataValues':this.values,
        'sendRequest':this.sendRequest,
        'removePerson':this.removePerson,
        'openChats':this.openChats,
        'transferMessage':this.transferMessage,
        'showFriends':this.showFriends,
        'removeFriend':this.removeFriend,
        'showContacts':this.showContacts,
        'signup':this.signup,
    }
},
methods:{
    EmitValue(password,username)//the name we are using here should be the same we will be emiting in the component
    {
        
        console.log(`Username: ${username}`)
        console.log(`Password: ${password}`)
        //add a validation check here 
        this.$router.push('profile')
    },
    SearchValue(friend)
    {
        console.log(`Friend: ${friend}`)
    },
    sendRequest(name)
    {
        console.log(`Send request to ${name}`)
    },
    removePerson(name)
    {
        console.log( `Remove ${name} from list`)
    },
    openChats(name)
    {
        console.log(`Your chats with : ${name}`)
        this.$router.push('chat')
    },
    transferMessage(message)
    {
       this.$store.dispatch({
           type:"sendMessage",
           payload:message
       })
    } ,
    showFriends()
    {
          this.$router.push('friends')
    },
    removeFriend(value){
        console.log(`Your friend ${value} will be removed from your friend list`)
    },
    showContacts()
    {
        this.$router.push('contacts')
    },
    signup()
    {
        this.$router.push('signup');
    },
   },
   mounted(){
      this.$store.dispatch({
          type:'getAllusers'
      })
   }
  
}
</script>

<style scoped>
#body{
    border:2px solid black;
    border-radius:10px;
    width:440px;
    height:700px;
    padding:2px;
    margin-top:5px;
    margin-left: 35%;
    background-color:white;
    overflow-y: auto;
}
#body::-webkit-scrollbar{
    display: none
}
#container{
    background: #ee0979;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>