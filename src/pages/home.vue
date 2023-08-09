<template>
  <div>
    <div class="Parent">
      <parent />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Parent from '@/components/pages/home/Parent.vue'

@Component({
  components: {
    Parent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.Annotation {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 16px;
}

.Parent {
  margin-top: 20px;
  width: screeen;
  display: flex;
  justify-content: center;
}
</style>
