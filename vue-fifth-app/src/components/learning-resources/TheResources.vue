<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')"></base-button>
        <base-button @click="setSelectedTab('add-resource')"></base-button>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            selectedTab: 'stored-resources'
        };
    }
}
</script>

<style></style>