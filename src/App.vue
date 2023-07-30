<template>
  <div class="task">
    1. Исправить чудовищно плохой код в методе goTurn, много лишних if, и целом декомпоз(пока что просто вынес это в разные методы)
    2. ОЧЕНЬ МНОГО ПОВТОРЯЮЩЕГОСЯ КОДА В ЛОГИКЕ ХОДА ДАМКИ, ЗАВТРА ЖЕ УБРАТЬ ЛИШНЕЕ И ФИКСИТЬ БАГИ
    3. ДАМКА СУПЕР ПЛОХО РАБОАЕТ
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
