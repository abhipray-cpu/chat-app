<template>
<div id="card">
    <h4>{{ text }}</h4>
</div>
</template>

<script>
export default {
props:['text']    
}
</script>

<style scoped>
#card{

    background-color: #ff6a00;
    border-radius: 20px;
    margin-bottom:15px;
    margin-top:15px;
    text-align: center;
    height:fit-content;
}
h4{ color:white;
    font-weight:900;
    font-size:20px;
    font-style:italic;
}
</style>