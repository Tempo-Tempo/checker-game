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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyDeskGame",
  data() {
    return {
      turn: 1,
      queue: "white",
      endTurn: false,
      pickChecker: "",
      youCanGo: [],
      potentialShot: [],
      potentialKill: [],
      longDistance: 9,
      shortDistance: 7,
      multiShotItem: {},
      test: {},
    };
  },
  methods: {
    ...mapActions(["GET_CHECKERSCELL_FROM_API"]),
    helperMultiShot(itemForKill) {
      console.log(itemForKill);
      console.log(this.test)
      if(this.test.white === itemForKill.white || this.test.black === itemForKill.black) {
        console.log('nelzya')
        return false;
      } else if(this.test.white !== itemForKill.white || this.test.black !== itemForKill.black) {
        console.log('mozno')
        return true;
      }
    },
    goTurn(handlerCell) {
      console.log(handlerCell);
      if (handlerCell.canShot === true) {
        this.test = handlerCell;
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
            console.log("go kill white");
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
        this.turn >= 2 &&
        this.queue === "white" &&
        this.pickChecker !== "" &&
        handlerCell.color &&
        handlerCell.canStep
      ) {
        handlerCell.white = true;
        this.queue = "black";
        this.theEndTurn();
        this.pickChecker = "";
        return (this.endTurn = !this.endTurn);
      }
      if (
        this.turn >= 2 &&
        this.queue === "black" &&
        this.pickChecker !== "" &&
        handlerCell.color &&
        handlerCell.canStep
      ) {
        handlerCell.black = true;
        this.queue = "white";
        this.theEndTurn();
        this.pickChecker = "";
        return (this.endTurn = !this.endTurn);
      }
    },
    turnBlack(checkerBlack) {
      if (this.queue === "black") {
        this.pickChecker = checkerBlack;
        this.CHECKERSCELL.filter((checker) => {
          checker.canShot = false;
          if (checker === this.pickChecker) {
            checker.pick = true;
            this.findStep(checker);
          } else {
            checker.pick = false;
          }
        });
      } else {
        return;
      }
      if (checkerBlack.pick === true && this.queue === "black") {
        this.turn += 1;
      } else {
        this.turn -= 1;
      }
      this.multiShotItem = {};
    },
    turnWhite(checkerWhite) {
      this.multiShotItem = {};
      if (this.queue === "white") {
        this.pickChecker = checkerWhite;
        this.CHECKERSCELL.filter((checker) => {
          checker.canShot = false;
          if (checker === this.pickChecker) {
            checker.pick = true;
            this.findStep(checker);
          } else {
            checker.pick = false;
          }
        });
      } else {
        return;
      }
      if (checkerWhite.pick === false && this.queue === "white") {
        this.turn -= 1;
      } else {
        this.turn += 1;
      }
      this.multiShotItem = {};
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

      this.checkMultiShot(this.potentialShot);
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
      this.multiShotItem = {};
      this.CHECKERSCELL.forEach((cell) => {
        if (
          (cell.id === potentialEnemyUpLongId &&
            this.checkCheckerPos(cell) &&
            this.test.id - this.longDistance * 2 === potentialEnemyUpLongId) &&  this.helperMultiShot(item)  ||
          (cell.id === potentialEnemyDownLongId &&
            this.checkCheckerPos(cell) &&
            this.test.id + this.longDistance * 2 === potentialEnemyDownLongId)  &&  this.helperMultiShot(item)
        ) {
          !console.log(cell, "final 1");
          cell.canShot = true;
          this.pickChecker = this.test;
          this.pickChecker.pick = true;
          this.multiShotItem = item;
          this.potentialKill.push(item);
          return;
        } else if (
          (cell.id === potentialEnemyUpShortId &&
            this.checkCheckerPos(cell) &&
            this.test.id - this.shortDistance * 2 ===
              potentialEnemyUpShortId) &&  this.helperMultiShot(item) ||
          (cell.id === potentialEnemyDownShortId &&
            this.checkCheckerPos(cell) &&
            this.test.id + this.shortDistance * 2 === potentialEnemyDownShortId) &&  this.helperMultiShot(item) 
        ) {
          console.log(cell, "final 2");
          cell.canShot = true;
          this.pickChecker = this.test;
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
    findStep(pickChecker) {
      this.youCanGo = [];
      this.potentialShot = [];
      this.potentialKill = [];
      const distanceLongStep =
        this.pickChecker.id + this.longDistance * this.currentQueue;
      const distanceShortStep =
        pickChecker.id + this.shortDistance * this.currentQueue;
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
      const potentialEnemyUpLongId = this.test.id - this.longDistance;

      const potentialEnemyDownLongId = this.test.id + this.longDistance;

      const potentialEnemyUpShortId = this.test.id - this.shortDistance;

      const potentialEnemyDownShortId = this.test.id + this.shortDistance;

      this.multiShotItem = {};
      this.CHECKERSCELL.forEach((checker) => {
        if (
          (checker.id === potentialEnemyUpLongId &&
            !this.checkCheckerPos(checker)) ||
          (checker.id === potentialEnemyDownLongId &&
            !this.checkCheckerPos(checker))
        ) {
          console.log(checker, "long");
          this.canMultiShotItem(checker);
        } else if (
          (checker.id === potentialEnemyUpShortId &&
            !this.checkCheckerPos(checker)) ||
          (checker.id === potentialEnemyDownShortId &&
            !this.checkCheckerPos(checker))
        ) {
          console.log(checker, "short");
          this.canMultiShotItem(checker);
        }
      });

      console.log(this.multiShotItem, "after multiShot");
    },
  },

  computed: {
    ...mapGetters(["CHECKERSCELL"]),
    currentQueue() {
      if (
        (Object.keys(this.multiShotItem).length !== 0 &&
          this.multiShotItem.id > this.pickChecker.id) ||
        this.queue === "black"
      ) {
        console.log("nado + 1");
        return 1;
      } else {
        console.log("nado - 1");
        return -1;
      }
      // return this.queue === "black" ? 1 : -1;
    },
  },
  async mounted() {
    await this.GET_CHECKERSCELL_FROM_API();
    if (this.turn === 1) {
      this.CHECKERSCELL.forEach((checkerCell) => {
        if (checkerCell.row <= 3 && checkerCell.color) {
          checkerCell.black = true;
        } else {
          checkerCell.black = false;
        }
      });
      this.CHECKERSCELL.forEach((checkerCell) => {
        if (checkerCell.row >= 6 && checkerCell.color) {
          checkerCell.white = true;
        } else {
          checkerCell.white = false;
        }
      });
    }
  },
  watch: {
    // potentialShot() {
    //   console.log(this.potentialShot)
    //   console.log(this.potentialShot);
    //   console.log(this.potentialKill);
    // },
    youCanGo() {
      this.youCanGo.forEach((checker) => {
        if (this.checkCheckerPos(checker)) {
          checker.canStep = true;
        }
      });
    },
    pickChecker() {
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
