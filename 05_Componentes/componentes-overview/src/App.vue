<template>
  <global-component></global-component>
  <!-- Quando ocorrer um clique no componente filho (LocalComponente), usar @addClick para receber o que foi emitido do componente filho -->
  <!-- <local-component :title="tituloDoComponente" @addClick="count++"></local-component> -->

  <!-- Receber o valor que foi enviado do componente filho, o valor esta no $event -->
  <local-component :title="tituloDoComponente" @addClick="count += $event">
    <!-- Slost test -->
    <template v-slot:header>Slot Header</template>
    <template v-slot:content>Slot Content</template>
  </local-component>

  <p>Contador {{ count }}</p>
</template>

<script>
import LocalComponent from "./components/LocalComponent.vue";

export default {
  data() {
    return {
      tituloDoComponente:
        "Titulo do componente passado pela diretiva v-bind, representada por :title",
      count: 0,
    };
  },
  methods: {},
  components: {
    LocalComponent,
  },
  // ganchos de inicializacao
  beforeCreate() {
    console.log(
      "beforeCreate - Executado antes da inicializacao do componente"
    );
  },
  created() {
    console.log("created - Executado assim que o componente é renderizado");
  },
  // ganchos de montagem
  beforeMount() {
    console.log(
      "beforeMount - Executado antes da PRIMEIRA renderizacao do componente"
    );
  },
  mounted() {
    // Ideal para fazer chamadas assincronas e colocar algum load na tela
    console.log("mounted - Executado depois que o componente foi renderizado");
  },
  // ganchos de atualizacao
  beforeUpdate() {
    console.log(
      "beforeUpdate - Executado antes que a tela seja atualizada novamente, apos atualizacao dos dados"
    );
  },
  updated() {
    console.log(
      "updated - Executado apos as propriedades e componente ser renderizados"
    );
  },
  // ganhos de destruicao
  beforeUnmount() {
    console.log(
      "beforeUnmount - Executado antes de um componente ser destruido"
    );
  },
  unmounted() {
    console.log(
      "unmounted - Executado depois que o componente foi destruido, removido do DOM"
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
