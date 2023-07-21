<template>
   <div class="bg_for_desk">
      <my-desk-game @currentTurn="currentTurn"></my-desk-game>
      <kills-counter></kills-counter>
      <track-for-quere :currentTurn="turnName"></track-for-quere>
   </div>
</template>
<script>


export default {
   name: 'MainPage',
   data() {
      return {
         turnName: 1,
      }
   }, 
   methods: {
      currentTurn(num) {
         this.turnName = num;
      },
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