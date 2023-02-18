<template>
    <div>
        <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >  
    <div>
        <img  :src="img1" v-if="imageData != null" alt="profile Image">
        <img :src="require('/src/assets/profile1.jpg')" alt="No DP" @click="click1" v-else>

    </div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
export default {
        data(){
            return {
                img1: '',
                imageData: null
            }
        } ,
        methods:{
            click1() {
  this.$refs.input1.click()   
},
previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},
onUpload(){
  try{
    this.img1=null;
  const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          this.$store.commit('setProfileImage',{value:this.img1})
        });
      }      
    )
  }
  catch(err){
    console.log("unable to upload to cloud storage")
    console.log(err)
  }
 },
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