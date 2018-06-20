<template>
  <div class="game">
    <dealer />
    <span>
      Hello Vue {{ message }}
    </span>
    <player />
  </div>
</template>

<script>

// import deck from './components/Deck'
import Dealer from './Dealer'
import Player from './Player'

export default {
  name: "game",
  components: { Dealer, Player },
  data () {
    return {
      message: 'PICK',
    }
  },
  created: function () {

  },
  methods: {
  }
}
</script>
