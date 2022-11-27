<template>
    <b-input-group size="sm" class="mb-2" id="search">
      <b-form-input type="search" placeholder="Search friends" id="input" v-model="data"></b-form-input>
        <b-icon icon="search" id="icon"></b-icon>
    
    </b-input-group>
</template>

<script>
export default {
    data(){
        return{
data:''
        }
    },
    methods:{
        search(){
            console.log('search this ',this.data);
            this.data=''
        }
    }
}
</script>


<style scoped>
#search{
box-sizing: border-box;
position: absolute;
width: 92vw;
height: 41px;
left: 3.65vw;
top: 62px;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 10px;
}
#icon{
    position: absolute;
left: 90.16%;
right: 4.89%;
top: 22.25%;
bottom: 26.49%;
color: rgba(0, 0, 0, 0.57);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#input{
box-sizing: border-box;
position: absolute;
width: 90vw;
height: 38px;
border: 1px solid transparent;
border-radius: 10px;
font-size:18px;
}
.form-control:focus {
box-shadow:0px 4px 4px rgba(0, 0, 0, 0);


}
</style>