const pokerDeck = {
  '2C': [2, 'C'],
  '2D': [2, 'D'],
  '2H': [2, 'H'],
  '2S': [2, 'S'],
  '3C': [3, 'C'],
  '3D': [3, 'D'],
  '3H': [3, 'H'],
  '3S': [3, 'S'],
  '4C': [4, 'C'],
  '4D': [4, 'D'],
  '4H': [4, 'H'],
  '4S': [4, 'S'],
  '5C': [5, 'C'],
  '5D': [5, 'D'],
  '5H': [5, 'H'],
  '5S': [5, 'S'],
  '6C': [6, 'C'],
  '6D': [6, 'D'],
  '6H': [6, 'H'],
  '6S': [6, 'S'],
  '7C': [7, 'C'],
  '7D': [7, 'D'],
  '7H': [7, 'H'],
  '7S': [7, 'S'],
  '8C': [8, 'C'],
  '8D': [8, 'D'],
  '8H': [8, 'H'],
  '8S': [8, 'S'],
  '9C': [9, 'C'],
  '9D': [9, 'D'],
  '9H': [9, 'H'],
  '9S': [9, 'S'],
  '10C': [10, 'C'],
  '10D': [10, 'D'],
  '10H': [10, 'H'],
  '10S': [10, 'S'],
  'JC': [11, 'C'],
  'JD': [11, 'D'],
  'JH': [11, 'H'],
  'JS': [11, 'S'],
  'QC': [12, 'C'],
  'QD': [12, 'D'],
  'QH': [12, 'H'],
  'QS': [12, 'S'],
  'KC': [13, 'C'],
  'KD': [13, 'D'],
  'KH': [13, 'H'],
  'KS': [13, 'S'],
  'AC': [14, 'C'],
  'AD': [14, 'D'],
  'AH': [14, 'H'],
  'AS': [14, 'S']
};

const handValues = {
  1: "Royal Flush",
  2: "Straight Flush",
  3: "Four of a Kind",
  4: "Full House",
  5: "Flush",
  6: "Straight",
  7: "Three of a Kind",
  8: "Two Pair",
  9: "One Pair",
  10: "High Card",
};

function hasStraight(hand) {

  let formattedHand = formatHand(hand)

  if (formattedHand.length < 5) {
    console.log('Please provide a valid 5-card hand!')
    return false
  }

  let currentValue = formattedHand[0][0]

  for (let i = 1; i < formattedHand.length; i++) {

    if (currentValue === 5 && i === 4) {
      if (formattedHand[4][0] === 14) {
        console.log(`This hand contains a straight from ace to 5`)
        return true
      }
    }

    if (formattedHand[i][0] === currentValue + 1) {
      currentValue += 1
    } else {
      console.log('This hand does not contain a straight')
      return false
    }
  }

  console.log(`This hand contains a straight from ${formattedHand[0][0]} to ${formattedHand[4][0]}`)
  return true
}

function hasOfAKind(hand){
  let formattedHand = formatHand(hand)

  if (formattedHand.length < 5) {
    console.log('Please provide a valid 5-card hand!')
    return false
  }

  let lastValue = formattedHand[0][0]
  let count = 1
  let max = 1

  for (let i = 1; i < formattedHand.length; i++) {

    if (formattedHand[i][0] === lastValue) {
      count += 1
      max = Math.max(count, max)
    } 

    lastValue =formattedHand[i][0]
  }

  console.log(`This hand contains ${max} of a kind!`)
  return max
}

function hasFullHouse(hand) {

  if (hasOfAKind(hand) !== 3) {
    console.log('This hand does not contain a full house')
    return false
  }

  let formattedHand = formatHand(hand)

  if (formattedHand[0][0] !== formattedHand[1][0] || formattedHand[3][0] !== formattedHand[4][0] ) {
    console.log('This hand does not contain a full house')
    return false
  }

  console.log(`This hand contains a full house!!!`)
  return true
}

function hasFlush(hand) {

  return true
}

function formatHand(hand) {

  for (const card of hand) {
    if (card in pokerDeck === false) {
      console.log('Invalid! Please enter cards in form "AH", "3D", etc ')
      return []
    }
  }

  const arrayWithValues = hand.map((cardValue) => {
    return pokerDeck[cardValue]
  })

  // sort by number value
  return arrayWithValues.sort((a, b) => a[0] - b[0])
}

console.log(formatHand(['AH', '2H', '3D']))
console.log(hasStraight(['AH', '3H', '4H', '6H']))
console.log(hasStraight(['3H', '4H', '5H', '6S', '7D']))
console.log(hasStraight(['3H', '2H', '5H', 'AS', '4D']))
console.log(hasStraight(['3H', '2H', '5H', 'AS', 'ACE of spades']))
console.log(hasOfAKind(['3H', '4H', '5H', '3S', '7D']))
console.log(hasOfAKind(['3H', '4H', '4H', '4S', '5D']))
console.log(hasAFullHouse(['3H', '4H', '4H', '4S', '5D']))

module.exports = {formatHand, hasStraight, hasFullHouse}