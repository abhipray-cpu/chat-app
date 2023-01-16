<template>
    <div id="container">
        <h3 id="gender">Gender</h3>
        <!---this will be a grid consisting of 6 choices+-->
        <div id="choice">
            <div :class="[selected == 'female'?'selected':'option']" class="gend" @click="changeSeletion('female')">
                <h4>Female</h4>
                <img :src="require('/src/assets/femlae-gender.jpg')" alt="female">
            </div>
            <div :class="[selected == 'male'?'selected':'option']" class="gend"  @click="changeSeletion('male')">
                <h4>Male</h4>
                <img :src="require('/src/assets/male-gender.jpg')" alt="male">
            </div>
            <div :class="[selected == 'lesbian'?'selected':'option']" class="gend"  @click="changeSeletion('lesbian')">
                <h4>Lesbian</h4>
                <img :src="require('/src/assets/lesbian-gender.png')" alt="lesbian">
            </div>
            <div :class="[selected == 'gay'?'selected':'option']" class="gend"  @click="changeSeletion('gay')">
                <h4>Gay</h4>
                <img :src="require('/src/assets/gay-gender.png')" alt="gay">
            </div>
            <div :class="[selected == 'bi'?'selected':'option']" class="gend" @click="changeSeletion('bi')">
                <h4>Bisexual</h4>
                <img :src="require('/src/assets/bisexual-gender.png')" alt="bisexual">
            </div>
            <div :class="[selected == 'asexual'?'selected':'option']" class="gend"  @click="changeSeletion('asexual')">
                <h4>Asexual</h4>
                <img :src="require('/src/assets/asexual.png')" alt="asexual">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selection:'female',
            genders:[{gender:'female',image:'femlae-gender.jpg'},
            {gender:'male',image:'male-gender.jpg'},
            {gender:'lesbian',image:'lesbian-gender.png'},
            {gender:'gay',image:'gay-gender.png'},
            {gender:'bisexual',image:'bisexual-gender.png'},
            {gender:'asexual',image:'asexual.png'},]
        }
    },
    computed:{
        selected(){
            return this.selection;
        }
    },
    methods:{
        changeSeletion(value){
            this.selection = value;
            this.$store.commit('setGender',{value:value})
        }
    },
    mounted(){
        this.selection = this.$store.getters.getGender
    }
}
</script>

<style scoped>
#container{
    width:100vw;
    margin-top:20px;
    max-height: 250px;
}
#gender{
    margin-left:5vw;
    font-size:18px;
    font-weight: 400;
    font-style:oblique;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
}
#choice{
    width:100vw;
    display:grid;
    padding-left:2vw;
    grid-template-columns:repeat(3,30vw);
    grid-gap:10px;
}
.option{
    width:30vw;
    height:15vh;
    max-height: 95px;
    min-height:90px;
    border:1px solid black;
    padding-left:2vw;
    padding-right:2vw;
    padding-top:2px;
    padding-bottom:2px;
    border-radius: 10px;
    box-shadow:1px 1px 2px rgba(0, 0, 0, 0.538);
}
.option h4{
    text-align:center;
    font-size:21px;
    font-weight:500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin-top:2px;
}
.option img,
.selected img{
    width:15vw;
    height:5vh;
    min-height:45px;
    border-radius: 10px;
    margin-left:5vw;
 margin-top:2px;
 opacity: 0.74;
} 
.gend:hover{
    border:2px solid rgb(226, 1, 69);
    box-shadow:2px 2px 4px rgb(86, 27, 68);
}
.gend:hover h4{
    color:rgb(226, 1, 69);
}
.selected{
        width:30vw;
    height:15vh;
    min-height:90px;
    max-height:95px;
    padding-left:2vw;
    padding-right:2vw;
    padding-top:2px;
    padding-bottom:2px;
    border-radius: 10px;
     border:2px solid rgb(226, 1, 69);
    box-shadow:2px 2px 4px rgb(86, 27, 68);
}
.selected h4{
    text-align:center;
    font-size:21px;
    font-weight:500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin-top:2px;
    color:rgb(226, 1, 69);
}
</style>