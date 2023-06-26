<template>
  <div class="task">
  
    1. Разделить кучу if на отдельные функции, чтобы было максимум по 2 ifa, не стеснятся переменных
    2. Докомпозировать все похожие методы с 9 и 7 по примеру canShots, убрать просто цифры из кода, заменить их на константы
    3. Важно исправить баг с potocenialKill ибо она не отчищается когда нужно, а запоминает все предыдущие выборы
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
