<template>
  <div class="area_for_tracker">
    <div class="turn_black" :class="{now_turn: currentTurn === 0}">
      <span class="text_for_black">Очередь Черных</span>
    </div>
    <div class="turn_white" :class="{now_turn: currentTurn === 1}">
      <span class="text_for_white">Очередь белых</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackForQuere",
  props: {
   currentTurn: {
      type: Number,
      required: true,
   }
  }
};
</script>

<style scoped>
.area_for_tracker {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   border: 2px solid black;
   width: 22%;
   height: 680px;
   z-index: -1;
}

.turn_black {
   width: 100%;
   height: 50%;
   background: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
 align-items: center;
}
.turn_white {
   width: 100%;
   height: 50%;
   background: white;
   opacity: 0.5;
   display: flex;
  justify-content: center;
 align-items: center;
}

.text_for_black {
   font-size: 24px;
   color: white;
}

.text_for_white{
   font-size: 24px;
   color: black;
}

.now_turn {
   opacity: 1;
   transition: 0.3s;
}
</style>
