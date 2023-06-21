<template>
  <div class="my_desk">
    <div
      @click="goTurn(checkerCell)"
      v-for="checkerCell in myDesk"
      :key="checkerCell.id"
      class="item_cell_white"
      :class="{ black: checkerCell.color }"
    >
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
          row: 1,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 1,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 2,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 3,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 4,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 5,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 6,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 7,
          colum: "H",
          posForTurn: 8,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "A",
          posForTurn: 1,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "B",
          posForTurn: 2,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "C",
          posForTurn: 3,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "D",
          posForTurn: 4,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "E",
          posForTurn: 5,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "F",
          posForTurn: 6,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "G",
          posForTurn: 7,
          color: false,
          white: false,
          black: false,
          pick: false,
        },
        {
          row: 8,
          colum: "H",
          posForTurn: 8,
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
      posForTurn: {},
      pickChecker: "",
    };
  },
  methods: {
    goTurn(e) {
      if (this.test(this.pickChecker, e) === false) {
        return;
      }
      if (
        this.turn >= 2 &&
        this.queue === "white" &&
        this.pickChecker !== "" &&
        e.color
      ) {
        e.white = true;
        this.queue = "black";
        this.theEndTurn();
        console.log("white");
        this.pickChecker = "";
        return (this.endTurn = !this.endTurn);
      }
      if (
        this.turn >= 2 &&
        this.queue === "black" &&
        this.pickChecker !== "" &&
        e.color
      ) {
        e.black = true;
        this.queue = "white";
        this.theEndTurn();
        console.log("black");
        this.pickChecker = "";
        return (this.endTurn = !this.endTurn);
      }
      console.log(this.pickChecker.colum + 1);
    },
    turnBlack(checkerBlack) {
      if (this.queue === "black") {
        checkerBlack.pick = !checkerBlack.pick;
        this.pickChecker = checkerBlack;
      } else {
        return;
      }
      if (checkerBlack.pick === true && this.queue === "black") {
        this.turn += 1;
      } else {
        this.turn -= 1;
      }

      console.log(this.pickChecker.colum);
    },
    turnWhite(checkerWhite) {
      if (this.queue === "white") {
        checkerWhite.pick = !checkerWhite.pick;
        this.pickChecker = checkerWhite;
      } else {
        return;
      }
      if (checkerWhite.pick === false && this.queue === "white") {
        this.turn -= 1;
      } else {
        this.turn += 1;
      }
      console.log(this.turn);
    },
    theEndTurn() {
      this.checkersCell.find((q) => {
        if (q.pick === true) {
          q.pick = !q.pick;
          q.black = false;
          q.white = false;
        }
      });
    },
    test(pickChecker, turnChecker) {
      const range = 1;
      console.log(pickChecker.row, turnChecker.row - range);
      if (this.queue === "white") {
        if (pickChecker.row + range === turnChecker.row) {
          return false;
        }
        if (
          (pickChecker.row - range === turnChecker.row &&
            pickChecker.posForTurn === turnChecker.posForTurn - range) ||
          pickChecker.posForTurn === turnChecker.posForTurn + range
        ) { console.log('gogogo')
        } else {
          return false;
        }
      }
      if (this.queue === "black") {
        if (pickChecker.row - range === turnChecker.row) {
          return false;
        }
        if (
          (pickChecker.row + range === turnChecker.row &&
            pickChecker.posForTurn === turnChecker.posForTurn + range) ||
          pickChecker.posForTurn === turnChecker.posForTurn - range
        ) {
          console.log('gogogo')
        } else {
          return false;
        }
      }
    },
  },

  computed: {
    myDesk() {
      for (let [key, value] of Object.entries(this.checkersCell)) {
        if (key % 2 !== 0 && value.row % 2 !== 0) {
          value.color = true;
        } else if (key % 2 == 0 && value.row % 2 == 0) {
          value.color = true;
        }
      }

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
  background: rgba(128, 128, 128, 0.59);
}

.white {
  color: white;
}
</style>
