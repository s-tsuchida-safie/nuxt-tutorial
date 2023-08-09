<template>
  <div>
    <global-header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GlobalHeader from '@/components/app/Header.vue'

@Component({
  components: {
    GlobalHeader,
  },
})
export default class DefaultVue extends Vue {}
</script>
