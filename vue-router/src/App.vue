<script setup>
</script>

<template>
  <section>
    <header>
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'about'}">About</router-link>
      <router-link :to="{name:'chats'}">Chat</router-link>
    </header>
    <section>
      <router-view/>
    </section>
    <footer>
      Todos los derechos reservados
    </footer>
  </section>
</template>

<style scoped>
</style>
