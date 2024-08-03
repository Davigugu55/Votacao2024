<template>
  <CompararCandidatos
      :candidate1="candidate1"
      :candidate2="candidate2"
  />
</template>

<script>
import CompararCandidatos from "@/pages/CompararCandidatos.vue";
import Dropdown from "@/components/Dropdown.vue";
import Pesquisar from "@/components/Pesquisar.vue";

export default {
  components: {
    Pesquisar, Dropdown,
    CompararCandidatos
  },
  data() {
    return {
      selectedCity: 'Cuiabá - MT',
      cities: ['Cuiabá - MT', 'São Paulo - SP', 'Rio de Janeiro - RJ'],
      candidate1: {
        image: '/lulinha.jpeg',
        name: 'Lula Molusco',
        party: 'TP',
        number: '11',
        spendingLimit: 'R$ 65M',
        assets: 'R$ 1M',
        education: 'Doutorado',
        field: 'Serviço Social',
        otherRuns: 'Dep. Federal (2017)'
      },
      candidate2: {
        image: '/lulinha2.jpeg',
        name: 'Lula Frita',
        party: 'LSTP',
        number: '33',
        spendingLimit: 'R$ 65M',
        assets: 'R$ 500 Mil',
        education: 'Mestrado',
        field: 'Engenharia de Transportes',
        otherRuns: 'Vereador (2014) Dep. Estadual (2017)'
      }
    };
  }
};
</script>

<style>
select {
  padding: 5px;
  margin-bottom: 20px;
}
</style>
