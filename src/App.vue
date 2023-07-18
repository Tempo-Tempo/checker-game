<template>
  <div class="task">
    1. Исправить чудовищно плохой код в методе goTurn, много лишних if, и целом декомпоз(пока что просто вынес это в разные методы)
    2. При клике на поле, мимо шашки, передается дамка(поправил это нелепым return в начале goTurn, думаю есть лучше вариант)
    3. Научить рубить дамку 
  </div>

  <mainPage> </mainPage>
</template>

<script>
import mainPage from "./pages/mainPage.vue";

export default {
  components: { mainPage },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background: url(../src/assets/img/bg_oneTone.jpg);
  position: relative;
}

body {
  margin:  0px;;
}

.task {
  font-size: 20px;
}
</style>
