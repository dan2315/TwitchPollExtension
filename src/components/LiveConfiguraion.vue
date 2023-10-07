<script setup>
import { ref } from 'vue';
import websocket from '../scripts/websocket';


const answerOptions = ref([]);

const titleInput = ref('')
const optionTitleInput = ref('') 

function addOption(optionTitle) {
    answerOptions.value.push(optionTitle)
    console.log(optionTitleInput.value)
    optionTitleInput.value = ''
}

function deleteOption(index) {
    answerOptions.value.splice(index, 1)
}

function submitPoll() {
    console.log(websocket) 
}

</script>

<template>
    <div id="live-config-background">
        <div id="title-field">
            <p style="margin: 0%;">Title: </p>
            <input v-model="titleInput">
        </div>
        <div id="answer-options">
            <li  v-for="(option, index) in answerOptions" v-bind:key="index">{{ option }} <button @click="deleteOption(index)">➖</button> </li>
            <div id="add-option-block">
                <input v-model="optionTitleInput">
                <button @click="addOption(optionTitleInput)">Add new ➕</button>
            </div>
        </div>
        <button @click="submitPoll">Start Poll</button>
    </div>
</template>

<style scoped>
#live-config-background {
    display: flex;
    flex-direction: column;

    position: relative;
    width: 30%;
    top: 0px;
    right: 0px;
}

#title-field {
    display: flex;

}

#answer-options {
    background-color: gray;
}
</style>
