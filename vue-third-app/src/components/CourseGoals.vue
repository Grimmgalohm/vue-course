<template>
        <ul>
            <li v-for="goal in goals" :key="goal">
                {{goal}}
            </li>
        </ul>
</template>
<script>
export default {
    data(){
        goals: ['Finish the course','Learn Vue']
    }
}
</script>
