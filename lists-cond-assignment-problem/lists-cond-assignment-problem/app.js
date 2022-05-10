const app = Vue.createApp({
    data(){
        return{
            taskAdded:'',
            tasks:[],
            showList: true
    };
},
methods:{
    addTask(){
        this.tasks.push(this.taskAdded);
    },
    hideList(){
        this.showList = !this.showList;
    }
}
});

app.mount('#assignment');