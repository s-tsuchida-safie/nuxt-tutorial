<template>
  <button class="button-view" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CustomButton extends Vue {
  onClick() {
    this.$emit('click')
  }
}
</script>

<style scoped>
.button-view {
  background-color: lightgray;
  border: none;
  font-size: 13px;
  padding: 5px 15px;
  border-radius: 30px;
  height: 30px;
}

.button-view:active {
  padding: 4px 14px;
  height: 29px;
}
</style>
