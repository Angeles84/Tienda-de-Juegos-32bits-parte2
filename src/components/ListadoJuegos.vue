<template>
  <div>
    <h4 class="mt-4">{{titulo}}</h4>
    <ul>
      <li v-for="(juego , index) in $store.state.juegos" :key="index" :style="{backgroundColor: juego.color}">
        {{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Lista',
  data: () => ({
    titulo: 'Listado de juegos',
  }),
}
</script>