<script setup>
import ProgressBar from './ProgressBar.vue'
import ClientInfo from '../scripts/twitchClientAuth'
import axios from 'axios';


const props = defineProps({
  id: Number,
  title: String,
  voteAmount: Number
})


function sendPollAnswer(){
  console.log(ClientInfo.userId)

  axios.post('http://localhost:2000/poll/answer', {
    userId: ClientInfo.userId,
    answerId: props.id
  }).
  then(res => {
    console.log(res.data)
  })
}

</script>

<template>
  <button v-on:click="sendPollAnswer" class="poll-button">
    <div id="poll-title">{{ title }}</div>
    <ProgressBar :value="((props.voteAmount / 10) * 100).toString() + '%'" />
  </button>
</template>

<style>
.poll-button {
  width: 100%;
}
</style>