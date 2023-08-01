<template>
   <div class="bg_for_desk">
      <my-desk-game @currentTurn="currentTurn" @startTimer="startTimerGame" @restartTimerGame="restartTimerGame"></my-desk-game>
      <kills-counter></kills-counter>
      <track-for-quere :currentTurn="turnName" :startTimer="startTimer" :restartTimer="restartTimer"></track-for-quere>
   </div>
</template>
<script>


export default {
   name: 'MainPage',
   data() {
      return {
         turnName: 1,
         startTimer: false,
         restartTimer: false,
      }
   }, 
   methods: {
      currentTurn(num) {
         this.turnName = num;
      },
      startTimerGame() {
         this.startTimer = !this.startTimer;
      },
      restartTimerGame() {
         this.restartTimer = !this.restartTimer;
      }
   }
}
</script>

<style scoped>

.bg_for_desk {
   width: 100%;
   height: 100vh;
   position: relative;
}

</style>