<template>
  <div class=" container mt-5">
    <h3 class="mb-4">Listado de ventas registradas:</h3>
    <ul>
      <li v-for="(venta , index) in ventas" :key="index">
        <label for="">Codigo: {{venta.codigo}} | Nombre: {{venta.nombre}} | Precio: ${{venta.precio}}</label>
      </li>
    </ul>

    <p class="mt-5">Monto total de ventas: <b>{{totalVentas}}</b></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Total',
  computed: {
    ...mapState(['ventas' , 'totalVentas']),
  },
  methods: {
  }
}
</script>