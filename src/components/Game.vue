<template>
  <div class="game">
    <dealer ref="dealer" @result="postexec" />
    <span>
      {{ mainMessage }}
    </span>
    <player @stand="stand" :showButtons="showButtons" />
    <span>
      {{ resultMessage }}
    </span>
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
      mainMessage: 'Welcome to Black Jack',
      playersResult: 0,
      dealersResult: 0,
      showButtons: true,
    }
  },
  methods: {
    stand: function (playersResult) {
      this.playersResult = playersResult;
      this.$refs.dealer.$emit('postexec', playersResult === 'Bust')
    },
    postexec: function (dealersResult) {
      this.dealersResult = dealersResult
      this.showButtons = false
      this.mainMessage = `Dealer : ${dealersResult} / Player : ${this.playersResult}`
    },
  },
  computed: {
    resultMessage: function () {
      if (this.showButtons) {
        return ''
      }
      if (this.playersResult > this.dealersResult) {
        return 'You Win'
      } else if (this.playersResult < this.dealersResult) {
        return 'You Lose'
      } else {
        return 'Draw'
      }
    }
  }
}
</script>
