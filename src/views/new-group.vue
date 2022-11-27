<template>
<keep-alive>
    <component :is="componentId"></component>
</keep-alive>
</template>

<script>
import AddMembers from '../components/newGroup/add-contact.vue'
import AddDetails from '../components/newGroup/group-details.vue'
export default {
    components:{
        AddMembers,
        AddDetails
    },
    data(){
        return{
            componentId:'AddMembers'
        }
    }
}
</script>

<style scoped>

</style>