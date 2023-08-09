<template>
  <div :style="`display: flex; justify-content: center; width: 100%;  margin-top: ${marginTop}`">
    <div
      class="assign"
      :style="`width: ${width}; font-size: ${fontSize}; gap: ${gap}; justify-content: ${alignedPosition}`"
    >
      <div class="assign-el" :style="`justify-content: ${alignedPosition}`">
        <slot name="left-el"></slot>
      </div>
      <div class="assign-el" :style="`justify-content: ${alignedPosition}`">
        <slot name="right-el"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class AlignTwoObject extends Vue {
  @Prop({ default: '100%' }) width!: string
  @Prop({ default: '16px' }) fontSize!: string
  @Prop({ default: '0' }) gap!: string
  @Prop({ default: '20px' }) marginTop!: string
  @Prop({ default: 'center' }) alignedPosition!: 'center' | 'left' | 'right'
}
</script>
<style scoped>
.assign {
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
}

.assign-el {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 30px;
  vertical-align: middle;
}
</style>
