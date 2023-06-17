<template>
   <div class="bg_for_desk">
      <my-desk-game></my-desk-game>
   </div>
</template>
<script>
import MyDeskGame from '../components/MyDeskGame.vue';

export default {
   name: 'mainPage',
   components: {
      MyDeskGame
     
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