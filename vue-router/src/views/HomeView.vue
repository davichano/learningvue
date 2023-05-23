<script>
export default {
  data() {
    return {
      username: ""
    }
  }
}
</script>
<template>
  <main>
    <h3>Username:</h3>
    <input placeholder="username" v-model="username">
  </main>
</template>
