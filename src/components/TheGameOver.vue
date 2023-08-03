<template>
  <div class="wrapper_modal_winner" :class="{close: !gameOver}">
    <div class="modal_winner">
      <div class="title_winner">Поздравляю!</div>
      <div class="body_winner">Победу одежрал "игрок" {{currentWinner}} шашек.</div>
      <div class="btn_winner">
        <my-buttons @click="CloseOrOpenModalGameOver()">Сыграть заново</my-buttons>
        <my-buttons>Статистика</my-buttons>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
   name: 'TheGameOver',
   data(){ 
      return {
         gameOver: true,
      }
   },
  methods: {
   CloseOrOpenModalGameOver() {
      
      this.gameOver = !this.gameOver
      console.log(this.gameOver)
      this.$emit('restartGame')
   }
  },
   computed: {
      ...mapGetters(["DEADWHITECHECKERS", "DEADBLACKCHECKERS"]),
      currentWinner() {
         let winner = ""
         if(this.DEADWHITECHECKERS.length === 3 ) {
           return winner = "черных";
         } else if(this.DEADBLACKCHECKERS.length === 2) {
          return  winner = "белых";
         }
         return winner;
      }
   },
}
</script>

<style scoped>
.wrapper_modal_winner {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0000007a;
  z-index: 2;
  transition: 0.5s;
}

.close {
  opacity: 0;
  display: none;
  transition: 0.5s;
}

.modal_winner {
  width: 600px;
  height: 200px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  line-height: 50px;
}

.title_winner {
  font-size: 48px;
  font-weight: bold;
  padding: 10px;
  color: black;
}
.body_winner {
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.btn_winner {
  display: flex;
  justify-content: space-around;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
}
</style>
