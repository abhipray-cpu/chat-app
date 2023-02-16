import index from 'vue-meta';
<template>
    <div id="container">
<h3 id="likes">Hates<span style="color:rgba(0,0,0,0.6);font-style: italic;">(Atleast 5)</span></h3>
    <div id="flex">
        <div v-for="like in likes" :key="like" class="chip">
         <h4>{{like.slice(0,25)}} <span><b-icon icon="x-lg" class="icon" @click="removeLike(like)"></b-icon></span></h4>
        </div>
    <input type="text" placeholder="add what you hate" v-model="add" v-on:keyup.enter="addLike" ref="input" @click="goto('input')">
    </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            add:'',
            like:[]
        }
    },
    computed:{
        likes(){
            return this.like;
        }
    },
    methods:{
        removeLike(index){
            this.like=this.like.filter(val=>val!=index);
            this.$store.commit('setDislikes',{value:this.like})
        },
        addLike(){
            if(this.like.includes(this.add) || this.likes.length >= 5)
            return
            else
            {
                this.like.push(this.add);
                this.$store.commit('setDislikes',{value:this.like})
                this.add='';
            }
        },
        goto(refName) {
            console.log('the click is event is captured')
      var element = this.$refs[refName];
      var top = element.offsetTop;
      
      window.scrollTo(0, top);
    }
    }
}
</script>

<style scoped>
#container{
    width:100vw;
    margin-top:2px;
    height:fit-content;
    min-height:100px;
}

#flex{
    width:100vw;
  display:flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left:3vw;
  padding-right:3vw;
}
.chip{
    width:fit-content;
    max-width:170px;
    margin-left:5px;
    margin-right:5px;
    padding:7px;
    background: rgb(160, 2, 118);
    border-radius:15px;
    min-height:30px;
    min-width:70px;
    overflow: hidden !important;
    margin-top:5px;
    margin-bottom:5px;
}
.chip h4{
    color:white;
    font-weight: 400;
    font-size:18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.icon{
    color:white;
    font-weight: 600;
    margin-left:5px;
}
#likes{
    margin-left:5vw;
    font-size:18px;
    font-weight: 400;
    font-style: oblique;
     font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
input{
    width:90vw;
    margin-left:2vw;
    height:5vh;
    min-height:35px;
    border-radius:6px;
    margin-top:4px;
    font-size:20px;
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