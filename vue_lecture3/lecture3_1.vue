
<!--html -->
<template>
<div>
    <h1>{{result}}</h1>
    <form @submit="onSubmitForm">
        <input ref="answer" maxlength=4 type="number" v-model="answer">
        <button type="submit">제출</button>
        <div> </div>
    </form>
    </div>
</template>

<!-- script --> 
<script>
const createRandomNumber= function(){
    return Math.ceil(Math.random()*9999);
}

export default {
    data() {
        return {
            number:createRandomNumber(),
            answer:'',
            result:'',
        }
    },
    methods:{
        onSubmitForm(e){
            e.preventDefault();
            if(this.number === this.answer){
                result = 'Strike';
            }
        },
    }
    
}
</script>

<!--css-->
<style>

</style>
