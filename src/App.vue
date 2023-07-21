<template>
  <div class="task">
    1. Исправить чудовищно плохой код в методе goTurn, много лишних if, и целом декомпоз(пока что просто вынес это в разные методы)
    3. Сделать очередность чтоб не сбивалась и отпавлять ее в новый компонент
    2. Очень много багов с дамкой, после переключения с обычной на дамку, canStep не пропадает(именно у черных), рубит всех кто попадает в массив potetialKill, и переступает через свои
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
