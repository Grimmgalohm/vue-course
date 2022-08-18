<template>
<h2>Manage Goals</h2>
<input type="text" ref="goal">
<button @click="setGoal">Set Goal</button>
<teleport to="body"> <!--Teleport se usa para poder enviar un elemento a cierta parte del DOM sin crearlo ahí, para no tenerlo super nesteado-->
    <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter at least a few charactes...</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
</teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default{
    components:{
        ErrorAlert
    },
    data(){
        return{
            inputIsInvalid: false
        }
    },
    methods:{
        confirmError(){
            this.inputIsInvalid = false;
        },
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>