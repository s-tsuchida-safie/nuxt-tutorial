<template>
  <div class="child-body" :class="backgroundColor">
    <div class="child-title">{{ '子コンポーネント' + name }}</div>
    <div class="button-assign">
      <custom-button @click="onClick1">Vuex1</custom-button>
    </div>
    <div class="button-assign">
      <custom-button @click="onClick2">Vuex2</custom-button>
    </div>
    <align-two-object :font-size="'13px'">
      <template #left-el>ボタン{{ name }}が押された数</template>
      <template #right-el>{{ state }}回</template>
    </align-two-object>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import AlignTwoObject from '~/components/common/AlignTwoObject.vue'
import CustomButton from '~/components/ui-library/CustomButton.vue'
@Component({
  components: {
    CustomButton,
    AlignTwoObject,
  },
})
export default class Child extends Vue {
  @Prop({ default: '', type: String }) name!: string
  @Prop({ default: 0, type: Number }) state!: number
  @Prop({ default: 'pink', type: String }) backgroundColor!: string

  @Watch('state', { immediate: true })
  onClick1() {
    this.$store.dispatch('app/count1Up', 1)
  }

  onClick2() {
    this.$store.dispatch('app/count2Up', 1)
  }

  value = 'fdf'
}
</script>

<style lang="scss" scoped>
.child-body {
  width: 90%;
  height: 170px;
}
.pink {
  background-color: rgba(222, 56, 236, 0.5);
}

.pink-fade {
  background-color: rgba(222, 56, 236, 0.2);
}

.light-green {
  background-color: rgba(56, 160, 236, 0.5);
}

.light-green-fade {
  background-color: rgba(56, 160, 236, 0.2);
}

.child-title {
  position: relative;
  padding-top: 5px;
  padding-left: 5px;
  font-size: 15px;
  width: fit-content;
}

.button-assign {
  margin: 15px;
  height: 30px;
  display: flex;
  justify-content: center;
}
</style>
