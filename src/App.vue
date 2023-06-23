<template>
  <div class="task">
    1. Добавить логику срубания шашки, и подсвечивать когда срубить можно (подсвечивает даже там, где есть шашка, исправить)
    2. Разделить кучу if на отдельные функции, чтобы было максимум по 2 ifa, не стеснятся переменных
    3. Перечитать все еще раз в телеге от Андрея
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
