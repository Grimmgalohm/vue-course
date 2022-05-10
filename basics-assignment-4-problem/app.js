const app = Vue.createApp({
    data(){
        return {
            myclass: '',
            ishidden: false,
            bg_color: ''
        }
    },
    methods:{
        hideme(){
            this.ishidden = !this.ishidden;
        }
    },
    computed:{
        changeStyle(){
            this.myclass = this.myclass;
        }
    }
});
app.mount('#assignment');