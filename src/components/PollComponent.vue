<script setup>

import { onMounted } from 'vue'
import PollOption from './PollOption.vue'

const pollOptions = [{ title: 'First', value: 8 }, { title: 'Second', value: 2 }, { title: 'Third', value: 5 },]

onMounted(() => {
    
})
</script>


<template>
    <div id = "poll-background">
        <p id="poll-question">Что это за вопрос?</p>

        <PollOption v-for="(pollOption, index) in pollOptions" :key="index" :id="index" :title="pollOption.title"
            :vote-amount="pollOption.value">

        </PollOption>
    </div>
</template>

<style>

#poll-background{
    font-family: cursive;
    font-size: x-large;
    text-align: center;

    background-color: gray;
    width: clamp(250px ,20%, 1000px);
}

</style>
