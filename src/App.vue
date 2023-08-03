<template>
  <div class="task">
    1. Исправить чудовищно плохой код в методе goTurn, много лишних if, и целом декомпоз(пока что просто вынес это в разные методы)
    2. ЗИРО ИДЕЙ ЧТО ПОКА ДЕЛАТЬ С ДАМКОЙ, какой я тупой
    3. При старте новой игры не останвливается таймер!! 
    4. При нажатие сыграть снова тоже не просиходит рестарта таймера
  </div>

  <mainPage> </mainPage>
 
</template>

<script>



export default {
  name: "App",
};
</script>

<style
    KillsCounter>
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
  position: absolute;
  font-size: 20px;
}
</style>
