const app = Vue.createApp({
  data() {
    return {
      input: "",
      secondInput: "",
    };
  },
  methods: {
    buttonClick() {
      alert("Hi there!");
    },
    userInput(event) {
      this.input = event.target.value;
    },
    repeatInput(event) {
      this.secondInput = event.target.value;
    },
  },
}).mount("#assignment");
