<template>
  <div class="container mt-5">
    <h5 class="my-4">Cantidad de productos con stock: <b>{{juegosConStock.length}}</b></h5>
    <ul>
      <li v-for="(juego, index) in juegosConStock" :key="index">
        <label >{{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}</label>
        <button type="button" class="btn btn-success ml-2" @click="vender(juego)">vender</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'Ventas',
  computed: {
    ...mapGetters(['juegosConStock']),
  },
  methods: {
    ...mapActions (['vender']),
  }
}
</script>

<style scoped>
  button {
    font-size: 0.85rem;
    padding: 0.2rem 0.9rem;
    transition: all 0.5s ease;
  }
</style>