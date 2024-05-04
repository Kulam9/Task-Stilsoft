<template>
  <div>
    <p>Вы уверены, что хотите удалить этот объект?</p>
    <button @click="confirmDelete">Да</button>
    <button @click="cancelDelete">Нет</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirmDelete() {
        this.$emit('entityDeleted');
    },
    cancelDelete() {
      
    }
  }
};
</script>