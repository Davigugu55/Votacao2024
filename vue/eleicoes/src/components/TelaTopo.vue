<template>
  <div class="telaTopoStyle">
    <h1>Eleições Municipais</h1>
    <div class="dropdownStyle">
      <select v-model="selectedCity">
        <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
      </select> <span class="year">2024</span>
    </div>
    <div class="pesquisarStyle">
      <h2>Candidatos</h2>
    </div>
    <div class="search-bar">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Pesquisar"
          @input="onInput"
      />
      <button @click="onSearch">Pesquisar</button>
    </div>
  </div>
</template>

<script>
import Pesquisar from "@/components/Pesquisar.vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: {Dropdown, Pesquisar},
  data() {
    return {
      searchQuery: '',
      selectedCity: 'Cuiabá - MT',
      cities: ['Cuiabá - MT', 'São Paulo - SP', 'Rio de Janeiro - RJ']
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

<style>
.telaTopoStyle {
  background: white;
}
h1 {
  color: black;
}
.year {
  color: green;
}
.pesquisarStyle {
  background: #00052E;
}
h2 {
  color: #47BE55;
}
select {
  padding: 5px;
  margin-bottom: 20px;
}
.year {
  font-size: 25px;
}
.dropdownStyle {
  border-radius: 30px;
}
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
