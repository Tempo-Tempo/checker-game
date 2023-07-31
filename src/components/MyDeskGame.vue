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
        class="checker_black"
        :class="{ pick_checker: checkerCell.pick }"
      ></div>
      <div
        @click.stop="turnWhite(checkerCell)"
        v-if="checkerCell.white"
        class="checker_white"
        :class="{ pick_checker: checkerCell.pick }"
        :style="{ queenTest: checkerCell.queen }"
      ></div>
    </div>
  </div>
  <my-buttons
    v-if="Object.keys(this.multiShotItem).length !== 0"
    @anyClick="nextTurn((turn += 1))"
  >
    Закончить ход
  </my-buttons>
  <div class="area_for_btn_next_turn">
    <div class="text_for_trun">Ход {{ turn }}</div>
  </div>

  <div class="area_for_btn_new_game">
    <my-buttons @anyClick="startOrRestartGame((turn = 1))"
      >Новая игра</my-buttons
    >
    <div>{{ turnName }}</div>
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
      helperTurn: {},
      forWhiteQueens: [],
      forBlackQueens: [],
      turnItem: {},
      currentNumQuere: 1,
      closedStepForQueenLong: [],
      closedStepForQueenShort: [],
      closedStepFriendlyForQueen: [],
      filtredFriendlyItems: [],
    };
  },
  methods: {
    ...mapActions([
      "GET_CHECKERSCELL_FROM_API",
      "PUSH_DEAD_BLACK_CHECKER",
      "PUSH_DEAD_WHITE_CHECKER",
      "CLEAR_DEAD_CHECKER",
    ]),
    nextTurn() {
      if (this.pickChecker.black) {
        this.queue === "white";
        this.pickChecker.pick = false;
        this.pickChecker = "";
        this.multiShotItem = {};
        return this.CHECKERSCELL.forEach((q) => (q.canShot = false));
      } else {
        this.queue === "black";
        this.pickChecker.pick = false;
        this.pickChecker = "";
        this.multiShotItem = {};
        return this.CHECKERSCELL.forEach((q) => (q.canShot = false));
      }
    },
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
    goKillEnemy(handlerCell) {
      console.log(handlerCell);
      if (!handlerCell.canShot) return;
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
          this.PUSH_DEAD_BLACK_CHECKER();
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
          this.PUSH_DEAD_WHITE_CHECKER();
          this.queue = "white";
          this.theEndTurn();
        }
      });
    },
    goStepWhite(handlerCell) {
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
    },
    goStepBlack(handlerCell) {
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
    goTurn(handlerCell) {
      console.log(handlerCell);
      if (!this.checkCheckerPos(handlerCell)) return;
      if (this.pickChecker.queen && handlerCell.canStep) {
        console.log("work0", this.potentialKill);
        this.pickChecker.queen = false;
        handlerCell.queen = true;
        this.potentialKill.forEach((q) => {
          console.log(q, "kill");
          q.black = false;
          q.white = false;
        });
      }
      this.goKillEnemy(handlerCell);
      this.goStepWhite(handlerCell);
      this.goStepBlack(handlerCell);
      this.turnItem = handlerCell;
      this.currentTurn();
    },
    turnBlack(checkerBlack) {
      if (
        this.queue !== "black" ||
        Object.keys(this.multiShotItem).length !== 0
      )
        return;
      this.pickChecker = checkerBlack;
      this.CHECKERSCELL.filter((checker) => {
        checker.canShot = false;
        checker.pick = false;
        if (checker.queen && checker.black) {
         return this.findStepForQueen(checker);
          
        } else if (checker === this.pickChecker && checker.black) {
          checker.pick = true;
          this.findStep();
        }
      });
    },
    turnWhite(checkerWhite) {
      if (
        this.queue !== "white" ||
        Object.keys(this.multiShotItem).length !== 0
      )
        return;
      this.pickChecker = checkerWhite;
      this.CHECKERSCELL.filter((checker) => {
        checker.canShot = false;
        checker.pick = false;
        if (checker.queen && checker.white) {
          return this.findStepForQueen(checker);
  
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
          this.currentTurn();
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
          this.currentTurn();
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
        this.CLEAR_DEAD_CHECKER();
        this.multiShotItem = {};
        this.CHECKERSCELL.forEach((checkerCell) => {
          checkerCell.canShot = false;
          checkerCell.canStep = false;
          checkerCell.pick = false;
          checkerCell.queen = false;
          this.turnName = "Очередь белых";
          if (checkerCell.row <= 3 && checkerCell.color) {
            checkerCell.black = true;
            checkerCell.white = false;
          } else if (checkerCell.row >= 6 && checkerCell.color) {
            checkerCell.white = true;
            checkerCell.black = false;
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
    findStepForQueen(anyQueen) {
      this.CHECKERSCELL.filter((checker) => {
        this.filtredFriendlyItems = [];
        checker.canStep = false;
        this.checkStepsForQueenFriendly(checker, anyQueen);
        this.findBlockStepsForQueen(checker, anyQueen);

        // if (
        //   this.filtredFriendlyItems.length !== 0 &&
        //   Math.min.apply(null, this.filtredFriendlyItems) <
        //     Math.min.apply(null, this.closedStepForQueen)
        // ) {

        this.friendlyBlockLongItem(checker, anyQueen);
        this.friendlyBlockShortItem(checker, anyQueen);
        // } else if (
        //   this.filtredFriendlyItems.length !== 0 &&
        //   Math.min.apply(null, this.filtredFriendlyItems) >
        //     Math.min.apply(null, this.closedStepForQueen)
        // ) {
        // console.log('условие 2')
        // this.friendlyBlockLongItem(checker, anyQueen);
        // this.friendlyBlockShortItem(checker, anyQueen);
        // } else {

        this.findStepLongForQueen(checker, anyQueen);
        this.findStepShortForQueen(checker, anyQueen);
        //}
      });
    },
    findStepLongForQueen(checker, anyQueen) {
      setTimeout(() => {
        console.log(this.closedStepForQueenLong, "long");
        if (anyQueen.id < Math.min.apply(null, this.closedStepForQueenLong)) {
          if (
            checker.id < Math.min.apply(null, this.closedStepForQueenLong) &&
            Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
            anyQueen === this.pickChecker &&
            this.checkCheckerPos(checker)
          ) {
            checker.canStep = true;
            return;
          } else if (
            anyQueen.id > Math.min.apply(null, this.closedStepForQueenLong)
          ) {
            if (
              checker.id > Math.max.apply(null, this.closedStepForQueenLong) &&
              Number.isInteger(
                (checker.id - anyQueen.id) / this.longDistance
              ) &&
              anyQueen === this.pickChecker &&
              this.checkCheckerPos(checker)
            ) {
              checker.canStep = true;
              return;
            }
          }
        }
      }, 200);
    },
    findStepShortForQueen(checker, anyQueen) {
      setTimeout(() => {
        // console.log(this.closedStepForQueenShort, "short");
        // console.log(
        //   anyQueen.id < Math.min.apply(null, this.closedStepForQueenShort),
        //   "1short",
        //   anyQueen.id,
        //   "<",
        //   Math.min.apply(null, this.closedStepForQueenShort)
        // );
        // console.log(
        //   anyQueen.id > Math.max.apply(null, this.closedStepForQueenShort),"2short",
        //   anyQueen.id,">", Math.max.apply(null, this.closedStepForQueenShort)
        // );

       
        if (
          checker.id < Math.min.apply(null, this.closedStepForQueenShort) &&
          Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
          anyQueen === this.pickChecker &&
          this.checkCheckerPos(checker)
        ) {
         
          checker.canStep = true;
        }

        if (
          checker.id > Math.max.apply(null, this.closedStepForQueenShort) &&
          Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
          anyQueen === this.pickChecker &&
          this.checkCheckerPos(checker)
        ) {
          
          checker.canStep = true;
        }
      }, 200);
    },
    findBlockStepsForQueen(checker, anyQueen) {
      if (
        Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
        anyQueen === this.pickChecker &&
        !this.checkCheckerPos(checker) &&
        checker.color &&
        this.pickChecker !== checker &&
        anyQueen.black !== checker.black
      ) {
        this.blockStepsForQueen(checker, "short");
        this.potentialKillCheckerForQueen(checker, "short");
      } else if (
        Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
        anyQueen === this.pickChecker &&
        !this.checkCheckerPos(checker) &&
        checker.color &&
        this.pickChecker !== checker &&
        anyQueen.black !== checker.black
      ) {
        this.blockStepsForQueen(checker, "long");
        this.potentialKillCheckerForQueen(checker, "long");
      }
    },
    blockStepsForQueen(itemBlock, distance) {
      const longMinusId = itemBlock.id - this.longDistance;
      const longPlusId = itemBlock.id + this.longDistance;
      const shortMinusId = itemBlock.id - this.shortDistance;
      const shortPlusId = itemBlock.id + this.shortDistance;
      this.CHECKERSCELL.forEach((checker) => {
        if (
          (distance === "long" &&
            checker.id === longMinusId &&
            !this.checkCheckerPos(checker) &&
            checker.color &&
            this.pickChecker !== checker) ||
          (distance === "long" &&
            checker.id === longPlusId &&
            !this.checkCheckerPos(checker) &&
            checker.color &&
            this.pickChecker !== checker)
        ) {
          this.closedStepForQueenLong.push(checker.id);
        } else if (
          (distance === "short" &&
            checker.id === shortMinusId &&
            !this.checkCheckerPos(checker) &&
            checker.color &&
            this.pickChecker !== checker) ||
          (distance === "short" &&
            checker.id === shortPlusId &&
            !this.checkCheckerPos(checker) &&
            checker.color &&
            this.pickChecker !== checker)
        ) {
          this.closedStepForQueenShort.push(checker.id);
        }
      });
    },
    potentialKillCheckerForQueen(itemKill, distance) {
      let testQueue = this.pickChecker.id < itemKill.id ? 1 : -1;
      const longId = itemKill.id + this.longDistance * testQueue;
      const shortId = itemKill.id + this.shortDistance * testQueue;
      this.potentialKill = [];
      // КОСТЫЛЬ, ИБО НЕ УСПЕВАЕТ ПРИМЕНИНТСЯ canStep = true ко всем элементам, надо искать проблемы
      setTimeout(() => {
        console.log(this.potentialKill);
        this.CHECKERSCELL.forEach((checker) => {
          if (checker.canStep && checker.id === longId && distance === "long") {
            console.log(checker, "tvar");
            this.potentialKill.push(itemKill);
          } else if (
            checker.canStep &&
            checker.id === shortId &&
            distance === "short"
          ) {
            console.log(checker, "tvar2");
            this.potentialKill.push(itemKill);
          }
        });
      }, 500);
    },
    checkStepsForQueenFriendly(checker, anyQueen) {
      if (
        (Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
          anyQueen === this.pickChecker &&
          !this.checkCheckerPos(checker) &&
          checker.color &&
          this.pickChecker !== checker) ||
        (Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
          anyQueen === this.pickChecker &&
          !this.checkCheckerPos(checker) &&
          checker.color &&
          this.pickChecker !== checker)
      ) {
        this.closedStepFriendlyForQueen.push(checker);

        this.filterFriendlyItems();
      }
    },
    friendlyBlockLongItem(checker, anyQueen) {
      if (anyQueen.id < Math.min.apply(null, this.filtredFriendlyItems)) {
        if (
          checker.id < Math.min.apply(null, this.filtredFriendlyItems) &&
          Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
          anyQueen === this.pickChecker &&
          this.checkCheckerPos(checker)
        ) {
          console.log("work", checker);

          return;
        } else if (
          anyQueen.id > Math.min.apply(null, this.filtredFriendlyItems)
        ) {
          if (
            checker.id > Math.max.apply(null, this.filtredFriendlyItems) &&
            Number.isInteger((checker.id - anyQueen.id) / this.longDistance) &&
            anyQueen === this.pickChecker &&
            this.checkCheckerPos(checker)
          ) {
            console.log("work2", checker);

            return;
          }
        }
      }
    },
    friendlyBlockShortItem(checker, anyQueen) {
      if (
        anyQueen.id < Math.min.apply(null, this.filtredFriendlyItems) &&
        this.filterFriendlyItems.length !== 0
      ) {
        if (
          checker.id < Math.min.apply(null, this.filtredFriendlyItems) &&
          Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
          anyQueen === this.pickChecker &&
          this.checkCheckerPos(checker)
        ) {
          checker.canStep = true;
          console.log("rabotay");
          return;
        } else if (
          anyQueen.id >
          Math.min.apply(
            null,
            this.filtredFriendlyItems && this.filterFriendlyItems.length !== 0
          )
        ) {
          if (
            checker.id > Math.max.apply(null, this.filtredFriendlyItems) &&
            Number.isInteger((checker.id - anyQueen.id) / this.shortDistance) &&
            anyQueen === this.pickChecker &&
            this.checkCheckerPos(checker)
          ) {
            checker.canStep = true;
            console.log("rabotay2");
            return;
          }
        }
      }
    },

    currentTurn() {
      if (Object.keys(this.multiShotItem).length !== 0) {
        this.currentNumQuere = this.multiShotItem.white === true ? 0 : 1;
        return this.$emit("currentTurn", this.currentNumQuere);
      } else if (Object.keys(this.multiShotItem).length === 0) {
        this.currentNumQuere = this.turnItem.white === true ? 0 : 1;
        return this.$emit("currentTurn", this.currentNumQuere);
      }
    },
    filterFriendlyItems() {
      this.filtredFriendlyItems = [];
      if (this.pickChecker.black) {
        this.closedStepFriendlyForQueen.forEach((checker) => {
          if (checker.black) {
            this.filtredFriendlyItems.push(checker.id);
          }
        });
      } else if (this.pickChecker.white) {
        this.closedStepFriendlyForQueen.forEach((checker) => {
          if (checker.white) {
            this.filtredFriendlyItems.push(checker.id);
          }
        });
      }
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
      this.multiShotItem = {};
      this.closedStepForQueenLong = [];
      this.closedStepForQueenShort = [];
      this.filtredFriendlyItems = [];
      this.potentialKill = [];
      this.endTurn = !this.endTurn;
    },
  },
  computed: {
    ...mapGetters(["CHECKERSCELL", "DEADBLACKCHECKERS", "DEADWHITECHECKERS"]),
    currentQueue() {
      if (Object.keys(this.multiShotItem).length !== 0) {
        return this.pickChecker.id > this.multiShotItem.id ? -1 : 1;
      } else {
        return this.queue === "black" ? 1 : -1;
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
      this.checkMultiShot();
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
      this.helperTurn = this.pickChecker;

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
.text_for_trun {
  font-size: 18px;
  color: white;
  font-weight: bold;
}

.area_for_btn_next_turn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  width: 60px;
  height: 60px;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}
.area_for_btn_new_game {
  position: absolute;
  top: 1%;
  left: 2%;
  z-index: 1;
}
.queenTest {
  background: red;
}
.pick_checker {
  transform: scale(1.1, 1.1);
  opacity: 0.5;
  transition: 0.4s;
}
.my_desk {
  width: 920px;
  position: absolute;
  left: 47.5%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  border: 4px solid #463013;
  box-shadow: 2px 2px 10px rgb(14, 1, 1);
}

.checker_black {
  background: black;
  border: 3px white solid;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
}

.checker_white {
  background: white;
  border: 3px black solid;
  width: 60px;
  height: 60px;
  border-radius: 50%;
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
  width: 115px;
  height: 85px;
  background: white;
  float: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.black {
  background: #000000cd;
}

.pre_turn {
  background: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.can_shot {
  background: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.white {
  color: white;
}
</style>
