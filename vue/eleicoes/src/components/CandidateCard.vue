<template>
  <div class="candidate-card">
    <img :src="image" alt="Candidate" class="candidate-image" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.candidate-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
.candidate-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
