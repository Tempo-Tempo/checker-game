import axios from "axios";


import { createStore } from "vuex";

const store = createStore({
   state:{
      checkersCell: [],
      deadWhiteCheckers: [],
      deadBlackCheckers: [],
   },
   mutations:{
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
   },
   actions:{
      GET_CHECKERSCELL_FROM_API({commit}) {
         return axios('http://localhost:3000/checkersCell', {
            method: 'GET'
         })
         .then((checkersCell) => {
            checkersCell.data.forEach(checker => {
               if (checker.id % 2 !== 0 && checker.row % 2 !== 0 || checker.id % 2 == 0 && checker.row % 2 == 0) {
                  checker.color = true;
                } 
            });
            commit('SET_CHECKERSCELL_TO_STATE', checkersCell.data);
            return checkersCell;
         })
         .catch((error) => {
            console.log(error);
            return error;
         })
      },
      PUSH_DEAD_BLACK_CHECKER({commit}) {
         commit('SET_DEAD_BLACK_CHECKER_TO_STATE');
      },
      PUSH_DEAD_WHITE_CHECKER({commit}) {
         commit('SET_DEAD_WHITE_CHECKER_TO_STATE');
      },
      CLEAR_DEAD_CHECKER({commit}) {
         commit('SET_CLEAR_DEAD_CHECKERS');
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
   },
});

export default store;