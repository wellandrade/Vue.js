<template>
  <h1>Local Component</h1>
  <h2>{{ title }}</h2>
  <!-- Emitindo evento do componente pai, sem parametro -->
  <!-- <button @click="$emit('addClick')">Adicionar</button> -->
  <br />
  <br />
  <!-- Emitindo evento do componente pai, com parametro -->
  <button @click="$emit('addClick', 1)">Adicionar</button>
  <br />
  <br />
  <button @click="addTwo">Adicionar dois</button>
  <br />
  <br />
  <!-- Passar conteudo via slot -->
  <!-- <slot></slot> -->
  <slot name="header"></slot>
  <br>
  <slot name="content"></slot>
</template>

<script>
export default {
  // props: ["title"],
  props: {
    title: String,
  },
  methods: {
    addTwo: function () {
      this.$emit("addClick", 2);
    },
  },
};
</script>

<style scoped>
</style>