<template>
  <div class="card">
    <img src="image" alt=""> [ {{ suit }} / {{ number }} / {{ show }}]
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['number', 'suit', 'show'],
  data () {
    return {

    }
  }
}
</script>
