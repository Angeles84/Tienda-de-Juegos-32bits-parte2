<template>
    <div class="container mt-5">
      <label for="">Ingresa el código del juego para ver los datos</label><br>
      <input type="text" class="mb-2" v-model="busquedaPorId">
      <ul v-if="juegoPorId.length > 0">
        <li v-for="(juego, index) in juegoPorId" :key="index">
          <label>Nombre: {{juego.nombre}} | stock: {{juego.stock}} | precio: {{juego.precio}} | color: {{juego.color}}</label>
        </li>
      </ul>
      <ul v-else>
        <li><label>Sin código</label></li>
      </ul>

      <p class="mt-3 mb-1">Cantidad total de juegos: <b>{{juegos.length}}</b></p>
      <p>Suma total de stock: <b>{{sumaTotalStock}}</b></p>

      <Lista/>

    </div>
</template>
<script>
import { mapState , mapGetters } from 'vuex'

import Lista from '@/components/ListadoJuegos.vue';

export default {
  components: {
    Lista
  },
  data: () => ({
    busquedaPorId: ''
  }),
  computed: {
    ...mapState(['juegos']),
    ...mapGetters(['sumaTotalStock']),

    juegoPorId(){
      return this.$store.getters.juegoPorId(this.busquedaPorId)
    },
   
  }
}
</script>