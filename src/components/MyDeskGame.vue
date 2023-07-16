<template>
  <div class="my_desk">
    <div
      @click="goTurn(checkerCell)"
      v-for="checkerCell in CHECKERSCELL"
      :key="checkerCell.id"
      class="item_cell_white"
      :class="{ black: checkerCell.color }"
    >
      <span v-if="checkerCell.canStep" class="pre_turn"></span>
      <span v-if="checkerCell.canShot" class="can_shot"></span>
      <div
        @click.stop="turnBlack(checkerCell)"
        v-if="checkerCell.black"
        class="checker"
        :class="{ pick_checker: checkerCell.pick }"
      >
        O
      </div>
      <div
        @click.stop="turnWhite(checkerCell)"
        v-if="checkerCell.white"
        class="checker"
        :class="{ pick_checker: checkerCell.pick }"
      >
        X
      </div>
    </div>
  </div>
  <button @click.stop="startOrRestartGame((turn = 1))">restart</button>
  <div>Ход {{ turn }}</div>
  <div>{{ this.test }}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyDeskGame",
  data() {
    return {
      turn: 1,
      queue: "white",
      pickChecker: "",
      youCanGo: [],
      endTurn: false,
      potentialShot: [],
      potentialKill: [],
      longDistance: 9,
      shortDistance: 7,
      multiShotItem: {},
      pickedCheckerAfterMultiShot: {},
      turnName: "Очередь белых",
      forWhiteQueens: [],
      forBlackQueens: [],
    };
  },
  methods: {
    ...mapActions(["GET_CHECKERSCELL_FROM_API"]),
    helperMultiShot(itemForKill) {
      if (
        this.pickedCheckerAfterMultiShot.white === itemForKill.white ||
        this.pickedCheckerAfterMultiShot.black === itemForKill.black
      ) {
        return false;
      } else if (
        this.pickedCheckerAfterMultiShot.white !== itemForKill.white ||
        this.pickedCheckerAfterMultiShot.black !== itemForKill.black
      ) {
        return true;
      }
    },
    goTurn(handlerCell) {
      console.log(handlerCell);
      if (handlerCell.canShot === true) {
        this.pickedCheckerAfterMultiShot = handlerCell;
        this.potentialKill.forEach((checker) => {
          const currentShotLongId =
            handlerCell.id + -this.longDistance * this.currentQueue;
          const currentShotShortId =
            handlerCell.id + -this.shortDistance * this.currentQueue;
          if (
            (checker.black && checker.id === currentShotLongId) ||
            (checker.black && checker.id === currentShotShortId)
          ) {
            checker.black = false;
            handlerCell.white = true;
            handlerCell.black = false;
            this.queue = "black";
            this.theEndTurn();
          } else if (
            (checker.white && checker.id === currentShotLongId) ||
            (checker.white && checker.id === currentShotShortId)
          ) {
            checker.white = false;
            handlerCell.black = true;
            handlerCell.white = false;
            this.queue = "white";
            this.theEndTurn();
          }
        });
      }
      if (
        this.turn >= 1 &&
        this.queue === "white" &&
        this.pickChecker !== "" &&
        handlerCell.color &&
        handlerCell.canStep
      ) {
        handlerCell.white = true;
        this.queue = "black";
        this.pickChecker = "";
        return this.theEndTurn();
      }
      if (
        this.turn >= 1 &&
        this.queue === "black" &&
        this.pickChecker !== "" &&
        handlerCell.color &&
        handlerCell.canStep
      ) {
        handlerCell.black = true;
        this.queue = "white";
        this.pickChecker = "";
        return this.theEndTurn();
      }
    },
    turnBlack(checkerBlack) {
      if (this.queue !== "black") return;
      this.pickChecker = checkerBlack;
      this.CHECKERSCELL.filter((checker) => {
        checker.canShot = false;
        checker.pick = false;
        if (checker.queen && checker.black) {
          console.log(checker);
          this.findTurnForQueen(checker);
        } else if (checker === this.pickChecker && checker.black) {
          checker.pick = true;
          this.findStep();
        }
      });
    },
    turnWhite(checkerWhite) {
      if (this.queue !== "white") return;
      this.pickChecker = checkerWhite;
      this.CHECKERSCELL.filter((checker) => {
        checker.canShot = false;
        checker.pick = false;
        if (checker.queen && checker.white) {
          this.findTurnForQueen(checker);
        } else if (checker === this.pickChecker && checker.white) {
          checker.pick = true;
          this.findStep();
        }
      });
    },
    checkCheckerPos(checker) {
      if (!checker.black && !checker.white && checker.color) {
        return true;
      } else if (checker.black && this.queue !== "black") {
        this.canShots(checker);
        return false;
      } else if (checker.white && this.queue === "black") {
        this.canShots(checker);
        return false;
      }
    },
    canMultiShotItem(item) {
      const potentialEnemyUpLongId = item.id - this.longDistance;
      const potentialEnemyDownLongId = item.id + this.longDistance;
      const potentialEnemyUpShortId = item.id - this.shortDistance;
      const potentialEnemyDownShortId = item.id + this.shortDistance;

      this.CHECKERSCELL.forEach((cell) => {
        if (
          (cell.id === potentialEnemyUpLongId &&
            this.checkCheckerPos(cell) &&
            this.pickedCheckerAfterMultiShot.id - this.longDistance * 2 ===
              potentialEnemyUpLongId &&
            this.helperMultiShot(item)) ||
          (cell.id === potentialEnemyDownLongId &&
            this.checkCheckerPos(cell) &&
            this.pickedCheckerAfterMultiShot.id + this.longDistance * 2 ===
              potentialEnemyDownLongId &&
            this.helperMultiShot(item))
        ) {
          cell.canShot = true;
          this.pickChecker = this.pickedCheckerAfterMultiShot;
          this.pickChecker.pick = true;
          this.multiShotItem = item;
          this.potentialKill.push(item);
          return;
        } else if (
          (cell.id === potentialEnemyUpShortId &&
            this.checkCheckerPos(cell) &&
            this.pickedCheckerAfterMultiShot.id - this.shortDistance * 2 ===
              potentialEnemyUpShortId &&
            this.helperMultiShot(item)) ||
          (cell.id === potentialEnemyDownShortId &&
            this.checkCheckerPos(cell) &&
            this.pickedCheckerAfterMultiShot.id + this.shortDistance * 2 ===
              potentialEnemyDownShortId &&
            this.helperMultiShot(item))
        ) {
          cell.canShot = true;
          this.pickChecker = this.pickedCheckerAfterMultiShot;
          this.pickChecker.pick = true;
          this.multiShotItem = item;
          this.potentialKill.push(item);
          return;
        }
      });
    },
    checkShotPos(itemShotId) {
      this.CHECKERSCELL.forEach((checker) => {
        if (
          checker.id === itemShotId &&
          !checker.black &&
          !checker.white &&
          checker.color
        ) {
          return true;
        }
      });
    },
    findStep() {
      this.youCanGo = [];
      this.potentialShot = [];
      this.potentialKill = [];
      this.pickedCheckerAfterMultiShot = {};
      const distanceLongStep =
        this.pickChecker.id + this.longDistance * this.currentQueue;
      const distanceShortStep =
        this.pickChecker.id + this.shortDistance * this.currentQueue;
      this.CHECKERSCELL.forEach((checker) => {
        checker.canStep = false;
        if (
          checker.id === distanceShortStep ||
          checker.id === distanceLongStep
        ) {
          this.youCanGo.push(checker);
        } else {
          return false;
        }
      });
    },
    canShots(itemShot) {
      this.CHECKERSCELL.forEach((checker) => {
        const shortShotId =
          itemShot.id + this.shortDistance * this.currentQueue;
        const longShotId = itemShot.id + this.longDistance * this.currentQueue;
        const distanceLongShot =
          this.pickChecker.id + this.longDistance * 2 * this.currentQueue;
        const distanceShortShot =
          this.pickChecker.id + this.shortDistance * 2 * this.currentQueue;
        if (
          distanceShortShot === shortShotId &&
          checker.id === shortShotId &&
          this.checkCheckerPos(checker)
        ) {
          this.potentialKill.push(itemShot);
          this.potentialShot.push(checker);
          return this.potentialShot.forEach(
            (shotCell) => (shotCell.canShot = true)
          );
        } else if (
          distanceLongShot === longShotId &&
          checker.id === longShotId &&
          this.checkCheckerPos(checker)
        ) {
          this.potentialKill.push(itemShot);
          this.potentialShot.push(checker);
          return this.potentialShot.forEach(
            (shotCell) => (shotCell.canShot = true)
          );
        }
      });
    },
    checkMultiShot() {
      const potentialEnemyUpLongId =
        this.pickedCheckerAfterMultiShot.id - this.longDistance;
      const potentialEnemyDownLongId =
        this.pickedCheckerAfterMultiShot.id + this.longDistance;
      const potentialEnemyUpShortId =
        this.pickedCheckerAfterMultiShot.id - this.shortDistance;
      const potentialEnemyDownShortId =
        this.pickedCheckerAfterMultiShot.id + this.shortDistance;
      this.multiShotItem = {};
      this.CHECKERSCELL.forEach((checker) => {
        if (
          (checker.id === potentialEnemyUpLongId &&
            !this.checkCheckerPos(checker)) ||
          (checker.id === potentialEnemyDownLongId &&
            !this.checkCheckerPos(checker))
        ) {
          this.canMultiShotItem(checker);
        } else if (
          (checker.id === potentialEnemyUpShortId &&
            !this.checkCheckerPos(checker)) ||
          (checker.id === potentialEnemyDownShortId &&
            !this.checkCheckerPos(checker))
        ) {
          this.canMultiShotItem(checker);
        }
      });
    },
    startOrRestartGame() {
      if (this.turn === 1) {
        this.queue = "white";
        this.CHECKERSCELL.forEach((checkerCell) => {
          checkerCell.canShot = false;
          checkerCell.canStep = false;
          checkerCell.pick = false;
          this.turnName = "Очередь белых";
          if (checkerCell.row <= 3 && checkerCell.color) {
            checkerCell.black = true;
          } else if (checkerCell.row >= 6 && checkerCell.color) {
            checkerCell.white = true;
          } else {
            checkerCell.black = false;
            checkerCell.white = false;
          }
        });
      }
    },
    timeToQueen() {
      this.CHECKERSCELL.forEach((checker) => {
        if (checker.white && checker.row === 1) {
          checker.queen = true;
          this.forWhiteQueens.push(checker);
        } else if (checker.black && checker.row === 8) {
          checker.queen = true;
          this.forBlackQueens.push(checker);
        }
      });
    },
    findTurnForQueen(anyQueen) {
      this.CHECKERSCELL.forEach((checker) => {
        if (
          (Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
            this.checkCheckerPos(checker)) ||
          (Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
            this.checkCheckerPos(checker))
        ) {
          console.log(checker);
          checker.canStep = true;
        }
      });
    },
    theEndTurn() {
      this.CHECKERSCELL.forEach((checker) => {
        checker.canShot = false;
        checker.canStep = false;
        if (checker.pick === true) {
          checker.pick = !checker.pick;
          checker.black = false;
          checker.white = false;
        }
      });
      this.endTurn = !this.endTurn;
      this.checkMultiShot();
    },
  },

  computed: {
    ...mapGetters(["CHECKERSCELL"]),
    currentQueue() {
      if (Object.keys(this.multiShotItem).length !== 0) {
        return this.pickChecker.id > this.multiShotItem.id ? -1 : 1;
      } else {
        return this.queue === "black" ? 1 : -1;
      }
    },
    test() {
      if (this.currentQueue === 1 || this.multiShotItem.white) {
        return this.turnName = "Очередь черных";
      } else {
        return this.turnName = "Очередь белых";
      }
    },
  },
  async mounted() {
    await this.GET_CHECKERSCELL_FROM_API();
    this.startOrRestartGame();
  },
  watch: {
    endTurn() {
      this.turn += 1;
      console.log(this.queue);
      this.timeToQueen();
    },

    youCanGo() {
      this.youCanGo.forEach((checker) => {
        if (this.checkCheckerPos(checker)) {
          checker.canStep = true;
        }
      });
    },
    pickChecker() {
      console.log(this.pickChecker);
      this.CHECKERSCELL.forEach((checker) => {
        if (checker.id === this.pickChecker.id) {
          checker.pick = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.pick_checker {
  transform: scale(1.1, 1.1);
  opacity: 0.5;
  transition: 0.4s;
}
.my_desk {
  width: 1120px;
  height: 840px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  box-shadow: 1px 1px 10px white;
}

.checker {
  font-size: 90px;
  color: rgb(115, 48, 14);
  cursor: pointer;
}
.colum_items {
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
.colum_item {
  width: 50%;
  height: 7%;
  background: black;
}

.item_cell_white {
  width: 140px;
  height: 105px;
  background: white;
  float: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.black {
  background: #000;
}

.pre_turn {
  background: green;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.can_shot {
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.white {
  color: white;
}
</style>
