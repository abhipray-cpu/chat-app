<template>
    <div id="container">
        <b-icon icon="arrow-left" id="next" style="width:50px;height:30px;"></b-icon>
        <img :src="require('/src/assets/profile.jpg')" alt="wallpaper" id="image">
        <div class="input">
          <input type="text" v-model="groupName" placeholder="Group Name">
          
        </div>
        <div class="input">
            <input type="text" v-model="groupDescription" placeholder="Group description">
        </div>
        <h4 id="mem">Members</h4>
       <div id="members">
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
        <group-members></group-members>
       </div>
 

    <b-icon icon="check" id="submit"></b-icon>

</div>
</template>

<script>
import GroupMembers from './chip-large.vue'
export default {
    components:{
        GroupMembers
    },
    data(){
        return{
            groupName:'',
            groupDescription:""
        }
    }
}
</script>

<style scoped>
#container{
    width:100vw;
    overflow: hidden;
}
#image{
position: relative;
 width:128px;
height: 130px;
border-radius:50%  ;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.368);
left: 30vw;
top: 15px;
margin-bottom:10px;

}
#icon{
    position: absolute;
width:40px;
height:40px;
top:20vh;
left:30vw;
color: #00000074;
}
.input{
    position: relative;
    margin-top:20px;
    margin-bottom:20px;
}
input{
    width:86vw;
    margin-left:7vw;
    border:none;
    border-bottom: 1px solid black;
    outline:none;
    font-size:23px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
input:focus{
    border:none;
    border-bottom: 2px solid #E90859;
    outline:none;
     font-size:23px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#next{
    position: absolute;
left: 2.79%;
top: 2.43%;

}
#mem{
    margin-left:14px;
    font-weight:300;
    
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgba(0, 0, 0, 0.59)
}
#members{
    width:90vw;
    display: grid;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,auto);
    z-index: 0;
    margin-top:15px;
    padding-left:7vw;
    padding-top:4px;
    margin-bottom:20px;
}
#submit{
   width:70px;
   height: 70px;
   border-radius: 100px;
   margin-left:76%;
   background-color:#E90859;
   color:white;
   box-shadow: 2px 2px 4px black;
   margin-bottom:3vh;
}
</style>