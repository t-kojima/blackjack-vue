const deck = []
;['spade', 'club', 'diamond', 'heart'].forEach(suit => {
  Array.from(Array(13), (_, i) => ++i).forEach(number => {
    deck.push({ suit, number, show: true })
  })
})

export default () => {
  return deck.splice(Math.floor(Math.random() * Math.floor(deck.length)), 1)[0]
}
