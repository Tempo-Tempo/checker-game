<template>
   <button @click="anyClick()" class="any_button">
      <slot></slot>
   </button>
</template>

<script>
export default {
   name: 'MyButtons',
   methods: {
      anyClick() {
         this.$emit('anyClick')
      }
   }
}
</script>

<style scoped>
   .any_button{
      width: 200px;
      height: 40px;
      font-size: 20px;
      font-weight: bold;
      background: #000;
      color: white;
      border-radius: 10px;
      cursor: pointer;
   }

   .any_button:hover {
      opacity: 0.7;
      transition: 0.3s;
   }

</style>