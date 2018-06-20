<template>
  <div class="card">
    <img :src="image" height="280">
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    number: Number,
    suit: String,
    hide: Boolean,
  },
  computed: {
    image: function () {
      const filename = this.hide ? 'back' : `${this.suit}_${this.number.toString().padStart(2, "0")}`
      return require(`../assets/card_${filename}.png`)
    }
  }
}
</script>
