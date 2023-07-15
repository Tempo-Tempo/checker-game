<template>
  <div class="task">
  
    1. Продолжать декомпозировать до нормального уровня код, как в canShot и canStep
    2. Убрать кучу лишнего кода, исправить логику с очередью, чтоб он делал правильно + и -
    3. Следить за поведением multiShot, исправил currentQueue, Очередность вроде работает, убрать кучу лишних if.
    4. Нужна логика для "Дамки" и исправить написание для пользоватлей ходов 
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
  font-size: 25px;
}
</style>
