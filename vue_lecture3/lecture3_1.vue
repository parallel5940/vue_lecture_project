
<!--html -->
<template>
<div>
    <h1>{{result}}</h1>
    <form @submit="onSubmitForm">
        <input ref="answer" maxlength=4 type="number" v-model="answer">
        <button type="submit">제출</button>
        <div> </div>
    </form>
    <div>{{number}}</div>
</div>
</template>

<!-- script --> 
<script>
const createRandomNumber = function(){  
    var number = [];
    for(var i = 0; i<4;i++){
        number.push(Math.ceil(Math.random()*9)-1);
    }
    return number;
}

export default {
    data() {
        return {
            number: createRandomNumber(),
            answer:'',
            result:'',
        }
    },
    methods:{
        onSubmitForm(e){
            e.preventDefault();
            console.log(this)
            if(this.number === this.answer){
                this.result = 'Strike';
            }
            else{
                this.result = 'Out';
            }
        },
    }
    
}
</script>

<!--css-->
<style>

</style>
