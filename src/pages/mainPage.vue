<template>
   <div class="bg_for_desk">
      <my-desk-game></my-desk-game>
      <kills-counter></kills-counter>
   </div>
</template>
<script>
import MyDeskGame from '../components/MyDeskGame.vue';
import KillsCounter from '@/components/KillsCounter.vue';
export default {
   name: 'mainPage',
   components: {
      MyDeskGame,
      KillsCounter,
   },
}
</script>

<style scoped>

.bg_for_desk {
   width: 100%;
   height: 100vh;
   position: relative;
}

</style>