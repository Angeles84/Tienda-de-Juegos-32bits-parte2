<template>
    <div class="container mt-5">
        <h1 v-text="titulo"></h1>
        <h2 class="mt-4" v-text="subtitulo"></h2>
    </div>
</template>

<script>
import {mapState} from 'vuex'
//import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState (['titulo', 'subtitulo'])
  },
}
</script>

<style scoped>
  h1 {
    color: forestgreen;
  }
</style>
