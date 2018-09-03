class Challenges {
  static challenges = [
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
    'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.',
  ]

  static getRandomChallenge () {
    return Challenges.challenges[Math.floor(Math.random() * Challenges.challenges.length)]
  }
}

export default Challenges
