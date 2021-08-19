<template>
  <div class="container mt-5">
    <h5 class="my-4">Cantidad de productos con stock: <b>{{juegosConStock.length}}</b></h5>
    <ul class="pt-3">
      <li v-for="(juego, index) in juegosConStock" :key="index">
        <label >{{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}</label>
        <button type="button" class="btn btn-success ml-2" @click="venderJuego(juego, index)">vender</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Ventas',
  computed: {
    ...mapGetters(['juegosConStock']),
  },
  methods:{
    venderJuego(juego, index) {
      this.$store.dispatch("agregarJuegosCarritoDeCompras", {juego, index,});
    },
  },
}
</script>

<style scoped>
  button {
    font-size: 0.85rem;
    padding: 0.2rem 0.9rem;
    transition: all 0.5s ease;
  }
</style>