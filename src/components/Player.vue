<template>
<div>
  <div v-for="(card, index) in hands" :key="index">
    {{ card.suit }} / {{ card.number }}
  </div>
</div>

</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      hands: []
    }
  }
}
</script>
