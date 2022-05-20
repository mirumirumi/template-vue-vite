<template>
  <div class="loaders">
    <div class="ball-beat" style="transform: scale(1.13);">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "loaders.css"  // https://connoratherton.com/loaders
</script>

<style lang="scss" scoped>
.loaders {
  margin: 99.9px auto;
  .ball-beat {
    text-align: center;
    > div {
      background-color: #ababab;
    }
  }
}
</style>
