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
      checkers: [
        {
          white: [
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
          ],
          black: [
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
            {
              row: 1,
              colum: "A",
            },
          ],
        },
      ],
      turn: 1,
      queue: "white",
      endTurn: false,
      pickChecker: "",
      helperTurn: [],
      youCanGo: [],
      potocenialShot: [],
      potocenialKill: [],
    };
  },
  methods: {
    goTurn(e) {
      console.log(e);
      if (e.canShot === true) {
        this.potocenialKill.forEach((q) => {
          if (q.black) {
            q.black = false;
            e.white = true;
            this.queue = "black";
            this.theEndTurn();
          } else if (q.white) {
            q.white = false;
            e.black = true;
            this.queue = "white";
            console.log(this.potocenialKill);
            this.theEndTurn();
          }
        });
      }
      if (
        this.turn >= 2 &&
        this.queue === "white" &&
        this.pickChecker !== "" &&
        e.color &&
        e.canStep
      ) {
        e.white = true;
        this.queue = "black";
        this.theEndTurn();
        this.pickChecker = "";
        return (this.endTurn = !this.endTurn);
      }
      if (
        this.turn >= 2 &&
        this.queue === "black" &&
        this.pickChecker !== "" &&
        e.color &&
        e.canStep
      ) {
        e.black = true;
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
    },
    turnWhite(checkerWhite) {
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
    },
    theEndTurn() {
      this.checkersCell.forEach((q) => {
        q.canShot = false;
        q.canStep = false;
        if (q.pick === true) {
          q.pick = !q.pick;
          q.black = false;
          q.white = false;
        }
      });
    },
    findStep(pickChecker) {
      this.youCanGo = [];
      this.potocenialShot = [];
      if (this.queue === "white") {
        this.checkersCell.forEach((q) => {
          q.canStep = false;
          if (q.id === pickChecker.id - 7 || q.id === pickChecker.id - 9) {
            this.youCanGo.push(q);
            this.youCanGo.filter((q) => {
              if (q.black) {
                this.potocenialKill.push(q);
                this.canShots(q);
              }
              if (!q.black && !q.white && q.row === this.pickChecker.row - 1) {
                q.canStep = true;
              }
            });
          }
        });
      }
      if (this.queue === "black") {
        this.checkersCell.forEach((q) => {
          q.canStep = false;
          if (q.id === pickChecker.id + 7 || q.id === pickChecker.id + 9) {
            this.youCanGo.push(q);
            this.youCanGo.filter((q) => {
              if (q.white) {
                this.potocenialKill.push(q);
                this.canShots(q);
              }
              if (!q.black && !q.white && q.row === this.pickChecker.row + 1) {
                q.canStep = true;
              }
            });
          }
        });
      }
    },
    canShots(itemShot) {
      if (this.queue === "black") {
        this.checkersCell.forEach((q) => {
          if (q.pick && q.id + 9 === itemShot.id) {
            this.checkersCell.find((i) => {
              if (i.id === itemShot.id + 9) {
                i.canShot = true;
              }
            });
          } else if (q.pick && q.id + 7 === itemShot.id) {
            this.checkersCell.find((i) => {
              if (i.id === itemShot.id + 7) {
                i.canShot = true;
              }
            });
          }
        });
      }
      if (this.queue === "white") {
        this.checkersCell.forEach((q) => {
          if (q.pick && q.id - 9 === itemShot.id) {
            this.checkersCell.find((i) => {
              if (i.id === itemShot.id - 9) {
                i.canShot = true;
              }
            });
          } else if (q.pick && q.id - 7 === itemShot.id) {
            this.checkersCell.find((i) => {
              if (i.id === itemShot.id - 7) {
                i.canShot = true;
              }
            });
          }
        });
      }
    },
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
  },
  mounted() {
    if (this.turn === 1) {
      this.checkersCell.forEach((q) => {
        if (q.row <= 3 && q.color) {
          q.black = true;
        } else {
          q.black = false;
        }
      });
      this.checkersCell.forEach((q) => {
        if (q.row >= 6 && q.color) {
          q.white = true;
        } else {
          q.white = false;
        }
      });
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
