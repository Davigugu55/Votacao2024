<template>
  <div class="compare-page">
    <TelaTopo></TelaTopo>
    <br>
    <h2 align="center">Comparar | Prefeito</h2>
    <br>
    <div class="candidates-compare">
      <div class="candidate">
        <img :src="candidate1.image" alt="Candidate 1" class="candidate-image" />
        <p>{{ candidate1.name }}</p>
      </div>
      <p>X</p>
      <div class="candidate">
        <img :src="candidate2.image" alt="Candidate 2" class="candidate-image" />
        <p>{{ candidate2.name }}</p>
      </div>
    </div>
    <table>
      <tr>
        <td>{{ candidate1.party }}</td>
        <td>Nome do Partido</td>
        <td>{{ candidate2.party }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.number }}</td>
        <td>Número</td>
        <td>{{ candidate2.number }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.spendingLimit }}</td>
        <td>Limite Gastos</td>
        <td>{{ candidate2.spendingLimit }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.assets }}</td>
        <td>Patrimônio</td>
        <td>{{ candidate2.assets }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.education }}</td>
        <td>Escolaridade</td>
        <td>{{ candidate2.education }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.field }}</td>
        <td>Área de Formação</td>
        <td>{{ candidate2.field }}</td>
      </tr>
      <tr>
        <td>{{ candidate1.otherRuns }}</td>
        <td>Outras Candidaturas</td>
        <td>{{ candidate2.otherRuns }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import TelaTopo from "@/components/TelaTopo.vue";

export default {
  components: {TelaTopo},
  props: {
    candidate1: {
      type: Object,
      required: true
    },
    candidate2: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.compare-page {
  padding: 20px;
  background-color: #00052E;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #ffffff;
  font-family: "Inria S", serif;
}
.candidates-compare {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.candidate {
  text-align: center;
}

.candidate-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.vs {
  font-size: 2em;
  color: #555;
}
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #00052E;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
p {
  font-family: "Inria S", serif;
}
td {
  border: 1px solid #B4FFBD;
  padding: 12px;
  text-align: center;
  width: 33%;
  font-family: "Inria S", serif;
}
</style>
