const app = Vue.createApp({
    data(){
        return{
            theName: 'César',
            currentAge: 28,
            imgUrl:'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2018/07/adventure-time.jpg?fit=1080%2C608&quality=80&ssl=1',
        }
    },
    methods:{
        randomNumber(){ 
            return Math.random();
        }
    }
});

app.mount('#assignment');