<template>
  <div>
    <div id="screen" :class="states" @click="onClick">{{ message }}</div>
    <div>{{ states }}</div>
    <div>
      <div>반응시간: {{ responseTime[count] }} ms</div>
      <button @click="onReset" v-if="responseTime">다시하기</button>
    </div>
    <div>
      <p>Data Table</p>
      <p>responseTime: {{ responseTime }}</p>
      <p>setTime: {{ setTime }}</p>
      <p>states: {{ states }}</p>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
      <p>averageTime: {{ averageTime }}</p>
    </div>
  </div>
</template>

<script>
let startTime = "";
let endTime = "";
let timeout = null;
export default {
  data() {
    return {
      responseTime: [],
      setTime: "",
      states: "waiting",
      message: "Click the screen to start",
      count: "",
      averageTime: ""
    };
  },
  methods: {
    onReset() {},
    onClick() {
      if (this.states === "waiting") {
        this.message = "click when color changes to green";
        this.states = "ready";
        this.setTime =
          (Math.random() + Math.ceil(Math.random() * 2) + 1) * 1000;
        timeout = setTimeout(() => {
          this.message = "Click now!";
          this.states = "now";
          startTime = new Date();
        }, this.setTime);
      } else if (this.states === "ready") {
        this.message = "You clicked too early! Try again";
        clearTimeout(timeout);
      } else if (this.states === "now") {
        endTime = new Date();
        this.responseTime.push(endTime - startTime);
        this.count++;
        // this.states = "ready";
        console.log(this.averageTime);
        // averageTime(() => {
        //   let sum = 0;
        //   for (var i = 0; i < this.responseTime.length; i++) {
        //     sum += this.responseTime[i];
        //   }
        //   console.log(this.averageTime);
        //   this.averageTime = sum / this.responseTime.length;
        // });
      }
    }
  }
};
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
}
#screen.now {
  background-color: greenyellow;
}
</style>
