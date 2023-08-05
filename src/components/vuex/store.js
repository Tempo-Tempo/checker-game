import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    checkersCell: [],
    deadWhiteCheckers: [],
    deadBlackCheckers: [],
    gameIsOver: false,
    currentWinner: "",
  },
  mutations: {
    SET_CHECKERSCELL_TO_STATE: (state, checkersCell) => {
      state.checkersCell = checkersCell;
    },
    SET_DEAD_BLACK_CHECKER_TO_STATE: (state) => {
      state.deadBlackCheckers.push(1);
    },
    SET_DEAD_WHITE_CHECKER_TO_STATE: (state) => {
      state.deadWhiteCheckers.push(1);
    },
    SET_CLEAR_DEAD_CHECKERS: (state) => {
      state.deadBlackCheckers = [];
      state.deadWhiteCheckers = [];
    },
    SET_GAME_IS_OVER: (state) => {
      state.gameIsOver = !state.gameIsOver;
    },
    SET_CURRENT_WINNER: (state, winner) => {
      state.currentWinner = winner;
    },
  },
  actions: {
    GET_CHECKERSCELL_FROM_API({ commit }) {
      return axios("http://localhost:3000/checkersCell", {
        method: "GET",
      })
        .then((checkersCell) => {
          checkersCell.data.forEach((checker) => {
            if (
              (checker.id % 2 !== 0 && checker.row % 2 !== 0) ||
              (checker.id % 2 == 0 && checker.row % 2 == 0)
            ) {
              checker.color = true;
            }
          });
          commit("SET_CHECKERSCELL_TO_STATE", checkersCell.data);
          return checkersCell;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    PUSH_DEAD_BLACK_CHECKER({ commit }) {
      commit("SET_DEAD_BLACK_CHECKER_TO_STATE");
    },
    PUSH_DEAD_WHITE_CHECKER({ commit }) {
      commit("SET_DEAD_WHITE_CHECKER_TO_STATE");
    },
    CLEAR_DEAD_CHECKER({ commit }) {
      commit("SET_CLEAR_DEAD_CHECKERS");
    },
    GAME_IS_OVER({ commit }) {
      commit("SET_GAME_IS_OVER");
    },
    CHECK_CURRENT_WINNER({ commit, state }) {
      let winner = "";
      if (state.deadWhiteCheckers.length === 3) {
        commit("SET_GAME_IS_OVER");
        console.log("work");
        winner = "Победу одежрал игрок черных шашек";
      } else if (state.deadBlackCheckers.length === 3) {
        console.log("work");
        commit("SET_GAME_IS_OVER");
        winner = "Победу одежрал игрок белых шашек";
      }
      commit("SET_CURRENT_WINNER", winner);
    },
    CHECK_TIME_CURRENT_WINNER({ commit, state}) {
      let winner = "";
      if (state.deadBlackCheckers.length > state.deadWhiteCheckers.length) {
         console.log("work");
         commit("SET_GAME_IS_OVER");
         winner = "Победу одежрал игрок белых шашек";
       } else if (state.deadBlackCheckers.length < state.deadWhiteCheckers.length) {
         commit("SET_GAME_IS_OVER");
         console.log("work");
         winner = "Победу одежрал игрок черных шашек";
       } else if (state.deadBlackCheckers.length === state.deadWhiteCheckers.length) {
         commit("SET_GAME_IS_OVER");
         winner = "Побидтеля нет, у нас ничья";
       }
       commit("SET_CURRENT_WINNER", winner);
    }
  },
  getters: {
    CHECKERSCELL(state) {
      return state.checkersCell;
    },
    DEADWHITECHECKERS(state) {
      return state.deadWhiteCheckers;
    },
    DEADBLACKCHECKERS(state) {
      return state.deadBlackCheckers;
    },
    GAMEISOVER(state) {
      return state.gameIsOver;
    },
    CURRENTWINNER(state) {
      return state.currentWinner;
    },
  },
});

export default store;
