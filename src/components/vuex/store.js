import axios from "axios";


import { createStore } from "vuex";

const store = createStore({
   state:{
      checkersCell: [],
      
   },
   mutations:{
      SET_CHECKERSCELL_TO_STATE: (state, checkersCell) => {
         state.checkersCell = checkersCell;
      }
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
      }
   },
   getters: {
      CHECKERSCELL(state) {
         return state.checkersCell;
      }
   },
});

export default store;