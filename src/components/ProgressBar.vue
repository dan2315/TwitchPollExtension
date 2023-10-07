<script setup>
const props = defineProps(['value'])
</script>

<template>
    <div class="progress-background">
        <div class="progress-line"></div>
        <p class="progress-text">{{value}}</p>
    </div>

</template>

<style>


.progress-background {
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: rgb(206, 206, 206);
  border-radius: 5px;
  padding: 0 4px;

  height: 40px;
  width: 100%;
}

.progress-line {
  align-self: flex-start;
  border-radius: 5px;
  background-color: red;
  height: 80%;
  width: v-bind("props.value");
}

.progress-text {
  margin: 0;

  position: absolute;
}

</style>