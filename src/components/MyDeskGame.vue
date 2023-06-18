<template>
  <div class="my_desk">
    <div
      @click="test(checkerCell)"
      v-for="checkerCell in myDesk"
      :key="checkerCell.id"
      class="item_cell_white"
      :class="{ black: checkerCell.color }"
    >
      <div
        @click.stop="turnBlack(checkerCell)"
        v-if="checkerCell.black"
        class="chekcer"
      >
        O
      </div>
      <div
        @click.stop="turnWhite(checkerCell)"
        v-if="checkerCell.white"
        class="chekcer"
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
      chekcersCell: [
        {
          row: 1,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 1,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 2,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 3,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 4,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 5,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 6,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 7,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "A",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "B",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "C",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "D",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "E",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "F",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "G",
          color: false,
          white: false,
          black: false,
        },
        {
          row: 8,
          colum: "H",
          color: false,
          white: false,
          black: false,
        },
      ],
      chekcers: [
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
    };
  },
  methods: {
    test(e) {
      if (this.turn === 2) {
        console.log(e);
      }
    },
    turnBlack(chekcerBlack) {
      console.log(chekcerBlack);
      this.turn = 1;
      this.turn += 1;
      console.log(this.turn);
    },
    turnWhite(chekcerWhite) {
      console.log(chekcerWhite);
      this.turn = 1;
      this.turn += 1;
      console.log(this.turn);
    },
  },
  computed: {
    myDesk() {
      for (let [key, value] of Object.entries(this.chekcersCell)) {
        if (key % 2 !== 0 && value.row % 2 !== 0) {
          value.color = true;
        } else if (key % 2 == 0 && value.row % 2 == 0) {
          value.color = true;
        }
      }

      return this.chekcersCell;
    },
  },
  mounted() {
    if (this.turn === 1) {
      this.chekcersCell.forEach((q) => {
        if (q.row <= 3 && q.color) {
          q.black = true;
        } else {
          q.black = false;
        }
      });
      this.chekcersCell.forEach((q) => {
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

.chekcer {
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

.white {
  color: white;
}
</style>
