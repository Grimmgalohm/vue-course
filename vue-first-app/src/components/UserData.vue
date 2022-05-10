<template>
    <form @submit.prevent="sendData">
        <div>
            <label>Name</label>
            <input v-model="userName" type="text">
        </div>
        <div>
            <label>Age</label>
            <input v-model="userAge" type="text">
        </div>
        {{userName}}
        <div>
            <button>Add User</button>
        </div>
    </form>
</template>
<script>
export default ({
    emits:[
        'user-data'
    ],
    data() {
        return {
            userName: '',
            userAge: ''
        }
    },
    methods: {
        sendData(){
            this.$emit('user-data', this.userName, this.userAge);
        }
    }
})
</script> 