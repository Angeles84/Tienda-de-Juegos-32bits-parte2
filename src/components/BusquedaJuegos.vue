<template>
    <div class="container mt-4">
      <label for="">Ingresa el código del juego para ver los datos</label><br>

      <input type="text" class="mb-2" :value="busquedaPorCodigo" 
        @input="$store.commit('SET_BUSQUEDA', $event.target.value)">

      <ul v-if="juegoPorId.length > 0">
        <li v-for="(juego, index) in juegoPorId" :key="index">
          <label>Nombre: {{juego.nombre}} | stock: {{juego.stock}} | precio: {{juego.precio}} | color: {{juego.color}}</label>
        </li>
      </ul>
      <ul v-else>
        <li><label>Sin código</label></li>
      </ul>

      <span class="mt-3 mb-1 mr-5">Cantidad total de juegos: <b>{{juegos.length}}</b></span> 
      <span> Stock total de todos los juegos: <b>{{sumaTotalStock}}</b></span>

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
    ...mapState(['juegos' , 'busquedaPorCodigo']),
    ...mapGetters(['sumaTotalStock', 'juegoPorId']),
  }
}
</script>