<template>
  <button @click="compare" class="compare-button">Comparar</button>
</template>

<script>
export default {
  methods: {
    compare() {
      this.$emit('compare');
    }
  }
};
</script>

<style scoped>
.compare-button {
  background-color: #a5d6a7;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
