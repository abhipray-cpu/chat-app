<template>
    <img :src="require('/src/assets/profile1.jpg')" alt="No DP">
</template>

<script>
export default {
        data(){
            return {
                img: ''
            }
        } ,
        computed:{
            image(){
                return this.img;
            }
        }   
        // mounted pull the image
}
</script>

<style scoped>
img{
    width:128px;
    height: 138px;
    border-radius:50%  ;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.368);
    margin-top:30px;
    margin-left:32.5vw;

}
</style>