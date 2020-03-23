<!--html -->
<template>
  <div>
    <h1>Game Started!</h1>
    <h1>{{ result }}</h1>
    <h3 v-if="tries">game count: {{ tries }}</h3>

    <form @submit="onSubmitForm">
      <input ref="input" maxlength="4" type="number" v-model="answer" />
      <button type="submit">제출</button>
      <div></div>
    </form>
  </div>
</template>

<!-- script -->
<script>
const createRandomNumber = function() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var number = [];
  for (var i = 0; i < 4; i++) {
    var randomNumber = Math.ceil(Math.random() * candidates.length - 1);
    number.push(candidates[randomNumber]);
    candidates.splice(randomNumber, 1);
  }
  return number;
};
const checkAnswer = function() {};

export default {
  data() {
    return {
      number: createRandomNumber(),
      answer: [],
      result: "",
      input: "",
      tries: ""
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.tries++;
      this.input = parseInt(this.input);
      while (this.input > 0) {
        this.answer.push(input % 10);
        this.input = parseInt(this.input / 10);
      }
      var sbo = [0, 0, 0];
      for (var i = 0; i < this.number.length; i++) {
        for (var j = 0; j < this.answer.length; j++) {
          if (this.answer[j] == this.number[i]) {
            if (i == j) sbo[0] += 1;
            else sbo[1] += 1;
          } else sbo[2] += 1;
        }
      }
      if (sbo[0] == this.answer.length) {
        this.result = "Congrats you got it";
        location.reload();
      } else if (sbo[2] == this.answer.length) {
        this.result = "You are out! Try again!";
      } else {
        this.result = "your score is " + sbo[0] + " S / " + sbo[1] + "B!";
      }
    }
  }
};
</script>

<!--css-->
<style></style>
