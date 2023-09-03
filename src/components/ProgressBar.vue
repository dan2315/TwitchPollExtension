<script setup>
const props = defineProps(['value'])
</script>

<template>
    <div class="progress-background">
        <div class="progress-line"></div>
        <div id="progress-text">{{value}}</div>
    </div>

</template>

<style>

.progress-background {
    position: relative;

    background-color: gray;
    text-align: center;

    display: flex;
    height: 40px;
    width: 100%;
}

.progress-line {
    position: absolute;

    background-color: red;
    height: 90%;
    width: v-bind('props.value');
}

#progress-text{
    z-index: 999;
}

</style>