<template>
  <div>
    <input type="text" v-model="name" placeholder="Имя" />

    <button @click="addEntity">Добавить объект</button>
  </div>
</template>

<script>

import MockApiService from "./MockApiService"

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async addEntity() {
      if (!this.name.trim()) {
        alert('Name is required')
        return
      }
      await MockApiService.addEntity({ name: this.name })

      this.name = ''
      this.$emit('entityAdded'); 
    }
  }
}
</script>

<style scoped>
  input {
    border-radius: 5px;
  }
</style>