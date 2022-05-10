<template>
    <div id="active-user">
        <h2>{{userName}}</h2>
        <h3>{{userAge}}</h3>
    </div>
</template>
<script>
export default ({
    props:{
        userAge: {
            type: String,
            required: true
        },
        userName:{
            type: String,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {}
})
</script> 