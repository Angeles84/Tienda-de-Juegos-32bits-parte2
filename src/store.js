import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo: '32bits',
    subtitulo: 'Juegos de PC y consolas',
    totalVentas: 0,
    ventas: [],
    juegos: [
      {codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: true},
      {codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "blue", destacado: false},
      {codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "green", destacado: true},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color: "yellow", destacado: false},
      {codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "blue", destacado: false},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "red", destacado: true},
    ],
  },
  getters: {
    juegoPorId: (state) => (codigo) => {
      return state.juegos.filter((juego) => juego.codigo == codigo);
    },
    juegosConStock: (state) => {
      return state.juegos.filter((juego) =>  juego.stock > 0);
    },
    sumaTotalStock: (state) => state.juegos.reduce((accumulator, juego) => {
      accumulator += juego.stock
      return accumulator
    }, 0)
  },
  mutations: {
    REMOVE_PRODUCT(state, juego) {
      state.juegos.forEach((p) => {
        if (p.codigo == juego.codigo && p.stock > 0) {
          p.stock--;
        }
      })
    },
    ADD_SALE:(state, juego)=>{
      state.ventas.push({
        codigo:juego.codigo,
        nombre: juego.nombre,
        precio:juego.precio
      })
    },
    SET_TOTAL_SALES(state, juego) {
      state.totalVentas += juego.precio;
    }
  },
  actions: {
    async vender({  dispatch }, juego) {
      await dispatch("procesarVenta", juego)
        .then(() => {
          dispatch("actualizarTotal", juego);
        })
        .catch(() => {
          alert("Venta rechazada. No hay stock o el producto no existe");
        });
        alert("Venta procesada");
        dispatch("registrarVenta", juego);
    },
    procesarVenta({ commit, state }, juego) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let resultado = false;
          state.juegos.forEach((p) => {
            if (p.codigo == juego.codigo && p.stock > 0) {
              commit("REMOVE_PRODUCT", juego);
              resultado = true;
            }
          });
          if (resultado) resolve();
          else reject();
        }, 2000);
      })
    },
    registrarVenta({commit}, juego){
      return new Promise((resolve)=>{
        setTimeout(() => {
          commit('ADD_SALE', juego)
          resolve()
        }, 1000);
      })
    },
    actualizarTotal({ commit }, juego) {
      return new Promise(() => {
        setTimeout(() => {
          commit("SET_TOTAL_SALES", juego);
        }, 4000);
      })
    }
  }
});

export default store;
