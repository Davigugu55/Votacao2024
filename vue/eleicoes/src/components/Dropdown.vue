<template>
  <div class="dropdownStyle">
    <select v-model="selectedCity">
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select> <span class="year">2024</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: 'Cuiabá - MT',
      cities: ['Cuiabá - MT', 'São Paulo - SP', 'Rio de Janeiro - RJ']
    };
  }
};
</script>

<style scoped>
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
</style>
