const app = Vue.createApp({
    data(){
        return{
            numero: 0,
            message: ''
        }
    },
    computed:{},
    methods:{
        addFive(){
            this.numero = this.numero + 5;
            return this.numero;
        },
        addOne(){
            this.numero = this.numero + 1;
            return this.numero;
        },
        add(value){
            this.numero = this.numero + value;
            return this.numero;
        }
    },
    watch:{
        numero(){
            if(this.numero < 37){
                this.message = 'Not yet';
            }else if(this.numero > 37){
                this.message = 'Too much';
                const that = this;
                setTimeout(function(){
                    that.numero = 0;
                }, 5000);
            }else{
                this.message = this.numero;
                const that = this;
                setTimeout(function(){
                    that.numero = 0;
                }, 5000);
            }
        }
    }
});
app.mount('#assignment');