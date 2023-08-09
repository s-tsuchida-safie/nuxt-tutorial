<template>
  <div class="app-header">{{ headerText }}</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
@Component
export default class GlobalHeader extends Vue {
  @Getter('app/headerText') headerText!: string
  @Getter('app/count1') count1!: string
  mounted() {
    this.$store.dispatch('app/changeHeaderText', 'Vuex1が呼ばれた回数: ' + this.count1 + '回')
  }

  @Watch('count1')
  onChangeCount1(value: number) {
    this.$store.dispatch('app/changeHeaderText', 'Vuex1が呼ばれた回数: ' + value + '回')
  }
}
</script>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 140, 149, 0.5);
  height: 49px;
  padding: 2px;
  font-size: medium;
}
</style>
