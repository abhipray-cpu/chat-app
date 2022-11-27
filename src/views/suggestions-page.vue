<template>
    <div id="container">
        <h2 id="logo">Sandesha</h2>
        <search-bar></search-bar>
        <div id="contacts">
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>
            <suggestion-comp/>

        </div>
    </div> 
</template>

<script>
import SearchBar from '../components/contacts/search-comp.vue'
import SuggestionComp from '../components/contacts/suggestion-comp.vue'
export default {
    components:{
        SearchBar,
        SuggestionComp
    },
}
</script>

<style scoped>
#container{
    overflow-y:auto;
    position: relative;
}
#container::-webkit-scrollbar{
    display: none;
    visibility: hidden;
}
@import url('https://fonts.googleapis.com/css?family=Sofia');
#logo{
    position: absolute;
width: 87px;
height: 33px;
left: 6px;
top: 7px;

font-family: 'Sofia';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 33px;
/* identical to box height */


background: linear-gradient(95.76deg, #1708C2 2.71%, rgba(147, 12, 174, 0.94825) 54.21%, rgba(233, 8, 89, 0.89) 112.18%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#contacts{
    margin-top:116px;
}
</style>