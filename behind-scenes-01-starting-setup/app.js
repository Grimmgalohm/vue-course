const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: '',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.getText.value;
    },
  },
});

app.mount('#app');

// . . .

const data = {
  message: 'hello',
  longMessage: 'Hello!!!'
};

const handler = {
  set(target, key, value) {
    if(key === 'message'){
      target.longMessage = value + ' World';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'HELLO!';

console.log(proxy.longMessage);