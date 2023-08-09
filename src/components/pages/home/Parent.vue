<template>
  <div class="parent-body">
    <div class="parent-title">親コンポーネント</div>
    <align-two-object :margin-top="'15px'">
      <template #left-el>Vuex2が押された回数</template>
      <template #right-el>{{ count2 }}回</template>
    </align-two-object>
    <align-two-object :margin-top="'15px'">
      <template #left-el><custom-button @click="onClickTimer">タイマー</custom-button></template>
      <template #right-el>{{ timerCount }}回</template>
    </align-two-object>
    <align-two-object :margin-top="'20px'">
      <template #left-el><custom-button @click="onClickA">ボタンA</custom-button></template>
      <template #right-el><custom-button @click="onClickB">ボタンB</custom-button></template>
    </align-two-object>
    <align-two-object :margin-top="'15px'">
      <template #left-el><child :name="'A'" :state="countA" /></template>
      <template #right-el
        ><child :name="'B'" :background-color="'light-green'" :state="countB"
      /></template>
    </align-two-object>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Child from './Parent/Child.vue'
import AlignTwoObject from '@/components/common/AlignTwoObject.vue'
import CustomButton from '~/components/ui-library/CustomButton.vue'

@Component({
  components: {
    AlignTwoObject,
    CustomButton,
    Child,
  },
})
export default class Parent extends Vue {
  countA = 0
  countB = 0
  timerCount = 0
  intervalId = 0
  isTimerRunning = false
  @Getter('app/count2') count2!: number
  onClickA() {
    this.countA++
  }

  onClickB() {
    this.countB++
  }

  onClickTimer() {
    if (this.isTimerRunning) {
      window.clearInterval(this.intervalId)
      this.timerCount = 0
    } else {
      this.intervalId = window.setInterval(() => {
        this.timerCount++
      }, 1000)
    }
    this.isTimerRunning = !this.isTimerRunning
  }
}
</script>

<style scoped>
.parent-body {
  background-color: rgba(232, 236, 56, 0.5);
  width: 600px;
  height: 380px;
}

.parent-title {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
}
</style>
