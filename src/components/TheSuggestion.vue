<template>
 <div class="container" >
     <div style="width:100px" id="first">
         <!-- check why the image url is not working-->
         <div><img :src="image" alt=""></div>
         
     </div>
     <div id="second" style="width:fit-content;margin-left:10px">
         <div @click="getDetails"><h2>{{ name }}</h2></div>
         <div id="">
             <div class="button" @click="sendRequest(name)"><h3>Add</h3></div>
             <div class="button" @click="removePerson(name)"><h3>Remove</h3></div>
         </div>
     </div>
</div>  
</template>


<script>
export default {
    props:['name','image'],
    inject:['sendRequest','removePerson'],
    methods:{
        getDetails(){
            this.$store.getters['getUsers'].forEach(user=>{
                if(user.userName === this.name)
                {   console.log('match found')
                    this.$router.push({name:'details',
                    params:{
                    name:user.userName,
                    image:user.image,
                    email:user.email,
                    contact:user.Contact,
                    bio:user.bio,
                    dob:user.DOB}})
                }
            })
        }
        }
   
}
</script>

<style scoped>
.container{
   height:120px;
   margin-top:5px;
   margin-bottom: 5px;
}
img{
    width:100px;
    height:100px;
    border: 2px solid transparent;
    border-radius: 100px;
    margin-right:20px
}
#second{
    
    display: inline-block;
   
}
#first{
    display: inline-block;
}
.button{
    display: inline-block;
    margin-left:10px;
    margin-right:10px;
    border:2px solid rgb(243, 3, 95);
    padding:3px;
    width:75px;
    height:35px;
    border-radius: 30px;
}
.button h3{
    text-align: center;
    font-weight: bold;
    margin-top:6px
}
.button:hover{
    background-color:rgb(243, 3, 95) ;
}
.button:hover h3{
    color:white
}
</style>

