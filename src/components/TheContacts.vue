<template>
    <the-heading></the-heading>
        <h2 style="margin-bottom:5px">Friends</h2>
        <!--later add inifinite scrolling in this section-->
        <the-person v-for="value in getUsers"
        :key=value.userName
        :name=value.userName
        :image=value.image
        :from='contact'>
        </the-person>
</template>

<script>
import TheHeading from './TheHeading.vue'
import ThePerson from './ThePerson.vue'
export default {
    components:{TheHeading,ThePerson},
    inject:['Search'],
    data(){
        return{
            friend:''
        }
    },
    computed:{
        getUsers(){
            return this.$store.getters['getUsers'];
        }
    },
    mounted(){
        console.log(this.getUsers);
    }
   
}
</script>

<style scoped>
#form{
    margin-left:22%;
    margin-top:20px
}
.entry input{
    margin-top:10px;
    margin-bottom:30px;
    width:250px;
    font-size:24px;
    font-weight: 700;
    padding:2px
}
.entry input::placeholder{
    font-weight:700;
    color:black
}

.entry input:hover{
    border:2px solid rgb(243, 3, 95)
}
.entry input:focus {
    outline: none !important;
    border:2px solid rgb(243, 3, 95);
}
</style>