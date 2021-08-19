import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo: '32bits',
    subtitulo: 'Juegos de PC y consolas',
    totalVentas: 0,
    busquedaPorCodigo: "",
    carritoDeCompras: [],
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
    juegoPorId(state) {
      return state.juegos.filter(
        (juego) => juego.codigo === state.busquedaPorCodigo
      );
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
    SET_BUSQUEDA(state, value) {
      state.busquedaPorCodigo = value;
    },
    REMOVE_PRODUCT(state,productIndex) {
      state.juegos[productIndex].stock -= 1;
    },
    ADD_SALE(state, juego) {
      state.carritoDeCompras.push(juego);
    },
    ADD_STOCK_TO_SHOPPINGCART(state, productIndex) {
      state.carritoDeCompras[productIndex].stock += 1;
    },
    SET_TOTAL_SALES(state, juego) {
      state.totalVentas += juego.precio;
    }
  },
  actions: {
    agregarJuegosCarritoDeCompras({ state, commit }, { juego, index }) {
      const juegoAlCarrito = state.carritoDeCompras.findIndex(
        (juegoEnCarrito) => juegoEnCarrito.codigo === juego.codigo
      )
      setTimeout(() => {
        if(juegoAlCarrito !== -1) {
          commit("ADD_STOCK_TO_SHOPPINGCART", juegoAlCarrito);
          commit("REMOVE_PRODUCT", index);
        }else{
          commit("REMOVE_PRODUCT", index)
        }
        setTimeout(() => {
          commit("ADD_SALE", { ...juego, stock: 1 });
          commit("SET_TOTAL_SALES", juego)  
          alert(`Venta procesada`);

        },1000)
        
      },2000)
    },
  }
});

export default store;
