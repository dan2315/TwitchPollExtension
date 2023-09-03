<script setup>
import ProgressBar from './ProgressBar.vue'

const props = defineProps({
  title: String,
  voteAmount: Number
})



</script>

<template>
  <button class="poll-button">
    <ProgressBar :value="((props.voteAmount / 10) * 100).toString() + '%'" />
  </button>
</template>

<style>
.poll-button {
  width: 100%;
}
</style>