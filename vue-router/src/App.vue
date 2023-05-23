<script setup>
</script>

<template>
  <div>
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <router-link :to="{name:'chats'}">Chat</router-link>
    <router-link :to="{name:'course',params:{courseId:5}}">Course</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
</style>
