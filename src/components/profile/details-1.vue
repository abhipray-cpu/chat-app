<template>
 <div id="container">
    <div class="row">
        <h3 class="label">Username</h3>
        <input type="text" :placeholder="name" v-model="user_name" v-on:input="updateUsername">
    </div>
    <div class="row" style="margin-top:24px;">
        <h3 class="label">Bio</h3>
        <input type="text" v-model="user_status" :placeholder="status" v-on:input="updateStatus">
    </div>
 </div>   
</template>

<script>
export default {
    // these are the watchers to update
    // the state on value change
    computed:{
        name(){
            return this.user_name
        },
        status(){
            return this.user_status
        }
    },
    data(){
        return{
            user_name:'',
            user_status:''
        }
    },
methods:{
    // these functions will directly update the states
  updateUsername(){

    this.$store.commit('setUsername',{value:this.user_name})
  },
  updateStatus(){
    this.$store.commit('setStatus',{value:this.status})
  }
},
mounted(){
    this.user_name=this.$store.getters.getUsername
    this.user_status=this.$store.getters.getStatus
}
}
</script>

<style scoped>
#container{
    width:100vw;
    height:180px;
    overflow-x:hidden !important;
}
.row{
    position: inherit;
    width:100vw;
    max-height:60px;
    margin-top:12px;
}

h3{
    margin-left:5vw;
    font-size:18px;
    font-weight: 400;
    font-style: oblique;
     font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
input{
    width:90vw;
    margin-left:8vw;
    height:5vh;
    min-height:35px;
    border-radius:6px;
    margin-top:4px;
    font-size:16px;
    font-weight:400;
    font-style: italic;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline:none;
    border:2px solid rgba(0, 0, 0, 0.668);
}
input:focus,input::selection{
border-color: purple;
outline:none;
}
</style>