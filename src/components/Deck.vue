<template>
</template>

<script>

export default {
  name: 'deck',
  data () {
    return {
      deck: []
    }
  },
  created: function () {
    ['spade', 'club', 'diamond', 'heart'].forEach(suit => {
      Array.from(Array(13), (_, i) => ++i).forEach(number => {
        this.deck.push({ suit, number })
      })
    });
  },
  methods: {
    pick () {
      return this.deck.splice(Math.floor(Math.random() * Math.floor(this.deck.length)), 1);
    }
  }
}
</script>
