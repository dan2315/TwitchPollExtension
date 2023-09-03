<script setup>

import PollOption from './PollOption.vue'

    const pollOptions = [ { title: 'First', value: 8 }, { title: 'Second', value: 2 }, { title: 'Third', value: 5 }, ]

</script>


<template>
    <PollOption v-for="(pollOption, index) in pollOptions" :key="index" 
        :title="pollOption.title"
        :vote-amount="pollOption.value">

    </PollOption>
</template>
