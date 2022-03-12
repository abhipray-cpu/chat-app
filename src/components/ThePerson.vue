<template>
 <div class="container" @click="getChat">
         <!-- check why the image url is not working-->
         <div style="order:1"><img :src="image" alt="name"></div>
         <div style="order:2"><h2>{{ name }}</h2>
         <!--in this div display the last message as well-->
         <h4>Aur bhai kaisa hai? <bold style="margin-left:3px"></bold></h4>
         </div>
</div>
     
    
</template>


<script>
export default {
    props:['name','image'],
    methods:{
        getChat(){
            this.$store.getters['getUsers'].forEach(user=>{
                if(user.userName === this.name)
                {   
                    this.$router.push({name:'chat',
                    params:{
                    name:this.name,
                    image:this.image,
                    }})
                }
            })
        }
    },
    inject:['sendRequest','removePerson']
   
}
</script>

<style scoped>
.container{
   height:120px;
   margin-top:5px;
   margin-bottom: 5px;
   display: flex;
   cursor:pointer;
}
img{
    width:100px;
    height:100px;
    border: 2px solid transparent;
    border-radius: 100px;
    margin-right:20px
}
h4
{
    color:#ee0979
}
h4 bold{
    color:black
}
</style>