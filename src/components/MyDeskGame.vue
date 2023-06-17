<template>
   <div class="my_desk">
      <div class="item_cell"></div>
   </div>
</template>

<script>
 export default {
   name: 'MyDeskGame',
   data() {
      return {
        
      }
   }
 }
</script>

<style scoped>

.my_desk {
   width: 1120px;
   height: 840px;
   background: white;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   border: 1px solid black;
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

.item_cell {
   width: 140px;
   height: 105px;
   background: #000;
   float: left;
}

.black {
   background: #000;
}

.white {
   background: white;
}
</style>
