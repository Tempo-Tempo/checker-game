<template>
  <div class="wrapper_for_dead_checkers">
    <div class="checker_items">
      <div v-for="checker in DEADWHITECHECKERS" :key="checker.id" class="checker_white"></div>
    </div>
    <div class="checker_items">
      <div v-for="checker in DEADBLACKCHECKERS" :key="checker.id" class="checker_black"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "killsCounter",
  data() {
    return {};
  },
  computed: {
   ...mapGetters(["DEADWHITECHECKERS", "DEADBLACKCHECKERS"]),
  }
};
</script>

<style scoped>

.wrapper_for_dead_checkers {
   width: 19%;
  height: 840px;
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.checker_items {
   width:  95%;
   height: 45%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex-wrap: wrap;
  margin-top: 10px;
  padding: 10px;
   border: 4px solid black;;
   border-radius: 20px;
   background: rgba(165, 42, 42, 0.341);
}

.checker_black {
  background: black;
  border: 3px white solid;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
}

.checker_white {
  background: white;
  border: 3px black solid;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
