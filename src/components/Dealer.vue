<template>
  <div class="dealer">
    <div class="flex">
      <card v-for="(card, index) in hands" :key="index" :suit="card.suit" :number="card.number" :show="card.show"></card>
    </div>
  </div>

</template>

<script>

import pick from '../utils/deck'
import Card from './Card'

export default {
  name: 'dealer',
  components: { Card },
  data () {
    return {
      hands: []
    }
  },
  created: function () {
    this.hands.push(pick());
    this.hands.push(pick());

    this.hands[0].show = false;
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}
</style>
