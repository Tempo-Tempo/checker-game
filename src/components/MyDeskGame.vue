<template>
  <div class="my_desk">
    <div
      @click="goTurn(checkerCell)"
      v-for="checkerCell in myDesk"
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
export default {
  name: "MyDeskGame",
  data() {
    return {
      checkersCell: [
        {
          id: 1,
          row: 1,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 2,
          row: 1,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 3,
          row: 1,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 4,
          row: 1,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 5,
          row: 1,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 6,
          row: 1,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 7,
          row: 1,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 8,
          row: 1,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 9,
          row: 2,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 10,
          row: 2,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 11,
          row: 2,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 12,
          row: 2,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 13,
          row: 2,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 14,
          row: 2,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 15,
          row: 2,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 16,
          row: 2,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 17,
          row: 3,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 18,
          row: 3,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 19,
          row: 3,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 20,
          row: 3,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 21,
          row: 3,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 22,
          row: 3,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 23,
          row: 3,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 24,
          row: 3,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 25,
          row: 4,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 26,
          row: 4,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 27,
          row: 4,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 28,
          row: 4,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 29,
          row: 4,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 30,
          row: 4,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 31,
          row: 4,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 32,
          row: 4,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 33,
          row: 5,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 34,
          row: 5,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 35,
          row: 5,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 36,
          row: 5,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 37,
          row: 5,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 38,
          row: 5,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 39,
          row: 5,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 40,
          row: 5,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 41,
          row: 6,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 42,
          row: 6,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 43,
          row: 6,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 44,
          row: 6,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 45,
          row: 6,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 46,
          row: 6,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 47,
          row: 6,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 48,
          row: 6,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 49,
          row: 7,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 50,
          row: 7,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 51,
          row: 7,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 52,
          row: 7,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 53,
          row: 7,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 54,
          row: 7,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 55,
          row: 7,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 56,
          row: 7,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 57,
          row: 8,
          colum: "A",
          posForTurn: 1,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 58,
          row: 8,
          colum: "B",
          posForTurn: 2,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 59,
          row: 8,
          colum: "C",
          posForTurn: 3,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 60,
          row: 8,
          colum: "D",
          posForTurn: 4,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 61,
          row: 8,
          colum: "E",
          posForTurn: 5,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 62,
          row: 8,
          colum: "F",
          posForTurn: 6,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 63,
          row: 8,
          colum: "G",
          posForTurn: 7,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          id: 64,
          row: 8,
          colum: "H",
          posForTurn: 8,
          canStep: false,
          canShot: false,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
      ],
      turn: 1,
      queue: "white",
      endTurn: false,
      pickChecker: "",
      helperTurn: [],
      youCanGo: [],
      potentialShot: [],
      potentialKill: [],
      longDistance: 9,
      shortDistance: 7,
      multiShotItem: {},
    };
  },
  methods: {
    goTurn(handlerCell) {
      console.log(handlerCell)
      if (handlerCell.canShot === true) {
        
        
        this.potentialKill.forEach((checker) => {
          const currentShotLongId = handlerCell.id + (-this.longDistance * this.currentQueue);
        const currentShotShortId = handlerCell.id + (-this.shortDistance * this.currentQueue);
          if (checker.black && checker.id === currentShotLongId || checker.black && checker.id === currentShotShortId) {
            checker.black = false;
            handlerCell.white = true;
            handlerCell.black = false;
            this.queue = "black";
            this.theEndTurn();
          } else if (checker.white && checker.id === currentShotLongId || checker.white && checker.id === currentShotShortId) {
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
        this.checkersCell.filter((checker) => {
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
        this.checkersCell.filter((checker) => {
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
      this.checkersCell.forEach((checker) => {
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
    checkShotPos(itemShotId) {
      this.checkersCell.forEach((checker) => {
        if(checker.id === itemShotId && !checker.black && !checker.white && checker.color) {
          return true;
        }
      })
    },
    findStep(pickChecker) {
      this.youCanGo = [];
      this.potentialShot = [];
      this.potentialKill = [];
      console.log(pickChecker)
      const distanceLongStep =
        this.pickChecker.id + this.longDistance * this.currentQueue;
      const distanceShortStep =
        pickChecker.id + this.shortDistance * this.currentQueue;
      this.checkersCell.forEach((checker) => {
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
     
      console.log(this.currentQueue)
      this.checkersCell.forEach((checker) => {
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
          console.log('short')
          this.potentialShot.push(checker);
          return this.test()
        } else if (
          distanceLongShot === longShotId &&
          checker.id === longShotId &&
          this.checkCheckerPos(checker)
        ) {
          this.potentialKill.push(itemShot);
          console.log('long')
          
           this.potentialShot.push(checker);
           return this.test()
        }
      });
    },
    checkMultiShot(potentialShot) {
      const shotRowDown = potentialShot.row - 1;
      const shotRowUp = potentialShot.row + 1;
      const shotPosLeft = potentialShot.posForTurn - 1;
      const shotPosRight = potentialShot.posForTurn + 1;
     this.multiShotItem = {};
     console.log(this.currentQueue)
      this.checkersCell.forEach((checker) => {
        if (
          (checker.row === shotRowDown &&
            checker.posForTurn === shotPosLeft && 
            !this.checkCheckerPos(checker)) ||
          (checker.row === shotRowDown &&
            checker.posForTurn === shotPosRight &&
            !this.checkCheckerPos(checker))
        ) {
          this.multiShotItem = checker;
          this.pickChecker = potentialShot;
          return;
        } else if (
          (checker.row === shotRowUp &&
            checker.posForTurn === shotPosRight &&
            !this.checkCheckerPos(checker)) ||
          (checker.row === shotRowUp &&
            checker.posForTurn === shotPosLeft &&
            !this.checkCheckerPos(checker))
        ) {
          this.multiShotItem = checker;
          this.pickChecker = potentialShot;
          return;
        }
      });
    
    
      this.canShots(this.multiShotItem);
    },
    test() {
      this.potentialShot.forEach((q) => {
        console.log(q)
        this.checkersCell.filter((checker) => {
        console.log('suka ti ebana')
       console.log(q)
        if (checker === q) {
          checker.canShot = true;
        } else {
          checker.canShot = false;
        }
      });
      })
    }
  },

  computed: {
    myDesk() {
      this.checkersCell.forEach((checker) => {
        if (checker.id % 2 !== 0 && checker.row % 2 !== 0) {
          checker.color = true;
        } else if (checker.id % 2 == 0 && checker.row % 2 == 0) {
          checker.color = true;
        }
      });
      return this.checkersCell;
    },
    currentQueue() {
        if(Object.keys(this.multiShotItem).length !== 0 && this.multiShotItem.id > this.pickChecker.id || this.queue === 'black') {
        console.log('нужна 1')
        return 1;
      } else  {
        console.log('нужна -1 ')
        return -1;
      }
      // return this.queue === "black" ? 1 : -1;
    },
   
  },
  mounted() {
    if (this.turn === 1) {
      this.checkersCell.forEach((checkerCell) => {
        if (checkerCell.row <= 3 && checkerCell.color) {
          checkerCell.black = true;
        } else {
          checkerCell.black = false;
        }
      });
      this.checkersCell.forEach((checkerCell) => {
        if (checkerCell.row >= 6 && checkerCell.color) {
          checkerCell.white = true;
        } else {
          checkerCell.white = false;
        }
      });
    }
  },
  watch: {
    potentialShot() {
      // console.log(this.potentialShot)
      console.log(this.potentialShot)
      console.log(this.potentialKill)

    
     
    },
    youCanGo() {
      this.youCanGo.forEach((checker) => {
        if (this.checkCheckerPos(checker)) {
          checker.canStep = true;
        }
      });
    },
    pickChecker() {
    
      this.checkersCell.forEach((checker) => {
        if(checker.id === this.pickChecker.id) {
          checker.pick = true;
        }
      })
    }
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
