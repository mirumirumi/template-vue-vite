<template>
  <div class="loading_back">
    <span class="loader"></span>
  </div>
</template>

<script setup lang="ts">
const p = withDefaults(defineProps<{
  zIndex?: number
}>(), {
  zIndex: 999
})
const zIndex = ref(p.zIndex)
</script>

<style lang="scss" scoped>
.loading_back {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0.666;
  cursor: default;
  content: "";
  z-index: v-bind(zIndex);
  .loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 32px 0 #ffffff, -32px 0 #ffffff;
    position: relative;
    animation: flash 0.5s ease-out infinite alternate;
  }
}
@keyframes flash {
  0% {
    background-color: #ffffff22;
    box-shadow: 32px 0 #ffffff22, -32px 0 #ffffff;
  }
  50% {
    background-color: #ffffff;
    box-shadow: 32px 0 #ffffff22, -32px 0 #ffffff22;
  }
  100% {
    background-color: #ffffff22;
    box-shadow: 32px 0 #ffffff, -32px 0 #ffffff22;
  }
}
</style>
  