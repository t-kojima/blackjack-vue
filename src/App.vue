<template>
<div>
  Hello Vue {{ message }}
  <deck />
  <player />
  <button @click="click">add hand</button>
</div>
</template>

<script>

import deck from './components/Deck'
import player from './components/Player'

export default {
  name: "app",
  components: { deck, player },
  data () {
    return {
      message: 'PICK',
    }
  },
  created: function () {

  },
  methods: {
    click () {
      player.hands.push(this.deck.pick());
    }
  }
}
</script>
