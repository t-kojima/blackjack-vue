<template>
  <div class="player">
    <div class="flex">
      <card v-for="(card, index) in hands" :key="index" :suit="card.suit" :number="card.number" :show="card.show"></card>
    </div>
    <div class="flex">
      <button @click="hit">Hit</button>
      <button @click="stand">Stand</button>
    </div>
  </div>

</template>

<script>

import pick from '../utils/deck'
import calc from '../utils/calc'
import Card from './Card'

export default {
  name: 'player',
  components: { Card },
  data () {
    return {
      hands: []
    }
  },
  created: function () {
    this.hands.push(pick());
    this.hands.push(pick());
  },
  methods: {
    hit () {
      this.hands.push(pick());
      if (calc(this.hands) === 'Bust') {
        console.log('Bust')
      }
    },
    stand () {
      console.log(calc(this.hands));
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}

button {
  font-size: 1.5rem;
  width: 100px;
  height: 48px;
  margin: 1rem;
}
</style>
