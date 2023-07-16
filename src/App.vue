<template>
  <div class="task">
  
    1. Исправить чудовищно плохой код в методе goTurn
    2. Убрать кучу лишнего кода, исправить логику с очередью, чтоб он делал правильно + и -
    4. Начальная логика хода дамки есть, дамку он не запоминает и она потом ходит как обычная, исправить и написание для пользоватлей ходов тоже
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
