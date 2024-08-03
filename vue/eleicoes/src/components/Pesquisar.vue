<template>
  <div class="search-bar">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Pesquisar"
        @input="onInput"
    />
    <button @click="onSearch"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  name: 'Pesquisar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onInput() {
      this.$emit('input', this.searchQuery);
    },
    onSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar input {
  padding: 5px;
  flex: 1;
  background: #00052E;
}
.search-bar button {
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
</style>
