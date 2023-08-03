<template>
  <div class="area_for_tracker">
    <div class="turn_black" :class="{ now_turn: currentTurn === 0 }">
      <span class="text_for_black">Очередь Черных</span>
      <span class="text_for_timer_black"
        >{{ timeBlack }}
        <img
          style="margin-left: 10px"
          src="../assets/icon/timver-universal-v2.png"
          alt=""
      /></span>
    </div>
    <div class="turn_white" :class="{ now_turn: currentTurn === 1 }">
      <span class="text_for_timer"
        >{{ timeWhite }}
        <img
          style="margin-left: 10px"
          src="../assets/icon/timver-universal-v2.png"
      /></span>
      <span class="text_for_white">Очередь белых</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackForQuere",
  data() {
    return {
      timeWhite: 300,
      timeBlack: 300,
      timerWhite: null,
      timerBlack: null,
    };
  },
  props: {
    currentTurn: {
      type: Number,
      required: true,
    },
    startTimer: {
      type: Boolean,
      required: true,
    },
    restartTimer: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    setTimerForWhite() {
      this.timerWhite = setInterval(() => {
        this.timeWhite--;
      }, 1000);
    },
    setTimerForBlack() {
      this.timerBlack = setInterval(() => {
        this.timeBlack--;
      }, 1000);
    },
  },
  watch: {
    currentTurn() {
      if (this.currentTurn === 1) {
        clearInterval(this.timerBlack);
        this.setTimerForWhite();
      } else if (this.currentTurn === 0) {
        clearInterval(this.timerWhite);
        this.setTimerForBlack();
      }
    },
    startTimer() {
      clearInterval(this.timerWhite);
      clearInterval(this.timerBlack);
      this.setTimerForWhite();
    },
    restartTimer() {
      setTimeout(() => {
        clearInterval(this.timerWhite);
      clearInterval(this.timerBlack);
      this.timeBlack = 300;
      this.timeWhite = 300;
      this.timerBlack = null;
      this.timerWhite = null;
      }, 1000)
    },
  },
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
  flex-direction: column;
  line-height: 40px;
  align-items: center;
  transition: 0.6s;
}
.turn_white {
  width: 100%;
  height: 50%;
  background: white;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height: 40px;
  align-items: center;
  transition: 0.6s;
}

.text_for_black {
  font-size: 24px;
  color: white;
}

.text_for_timer_black {
  font-size: 34px;
  color: white;
  display: flex;
  align-items: center;
}

.text_for_timer {
  font-size: 34px;
  color: black;
  display: flex;
  align-items: center;
}
.text_for_white {
  font-size: 24px;
  color: black;
}

.now_turn {
  opacity: 1;
  transition: 0.3s;
}
</style>
