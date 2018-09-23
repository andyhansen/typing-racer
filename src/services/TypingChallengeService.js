
/**
 * Service used for tracking the progress of the challenge
 * as the user types input
 */
class TypingChallengeService {
  constructor (typingChallenge) {
    if (typingChallenge) {
      this.setChallenge(typingChallenge)
    }
  }

  /**
   * Set up service so that's it's ready for
   * the next challenge
   * @param {string} typingChallenge
   */
  setChallenge (typingChallenge) {
    if (this.rawTypingChallenge === typingChallenge) {
      return false
    }
    this.rawTypingChallenge = typingChallenge
    this.challengeWordArray =
      typingChallenge
        .split(' ')
        .map(word => `${word} `)

    let lastWord = this.challengeWordArray[this.challengeWordArray.length - 1]
    this.challengeWordArray[this.challengeWordArray.length - 1] = lastWord.trim()

    this.currentWordIndex = 0
    this.totalCorrectCharacters = 0
    this.totalIncorrectCharaters = 0
    this.currentCorrectCharacters = 0
    this.currentIncorrectCharacters = 0
    this.isCurrentChallengeComplete = false

    return true
  }

  /**
   * Get the word which is currently being tested
   */
  currentWord () {
    return this.challengeWordArray[this.currentWordIndex]
  }

  /**
   * Update the current challenge progress based on what the user
   * has entered so far.
   * @param {string} currentInput
   */
  updateProgress (currentInput) {
    const currentChallengeWord = this.currentWord()
    const minLength = Math.min(currentInput.length, currentChallengeWord.length)

    let correctCharacters = 0
    let incorrectCharacters = 0
    let foundIncorrectCharacters = false
    for (let i = 0; i < minLength; i++) {
      if (
        currentInput.charAt(i) === currentChallengeWord.charAt(i) &&
        !foundIncorrectCharacters
      ) {
        correctCharacters++
      } else if (
        currentInput.charAt(i) !== currentChallengeWord.charAt(i) ||
          foundIncorrectCharacters
      ) {
        incorrectCharacters++
        foundIncorrectCharacters = true
      }
    }

    if (currentInput.length > currentChallengeWord.length) {
      incorrectCharacters += currentInput.length - currentChallengeWord.length
    }

    const challengeWordComplete = currentChallengeWord.length === correctCharacters
    if (challengeWordComplete) {
      this.currentWordIndex++
      this.currentCorrectCharacters = 0
      this.currentIncorrectCharacters = 0
      this.totalCorrectCharacters += correctCharacters
      this.totalCorrectCharacters += incorrectCharacters

      if (this.currentWordIndex === this.challengeWordArray.length) {
        this.isCurrentChallengeComplete = true
      }
    } else {
      this.currentCorrectCharacters = correctCharacters
      this.currentIncorrectCharacters = incorrectCharacters
    }

    return challengeWordComplete
  }

  isChallengeComplete () {
    return this.isCurrentChallengeComplete
  }

  getCorrectInput () {
    return this.rawTypingChallenge
      .substr(0, this.totalCorrectCharacters + this.currentCorrectCharacters)
  }

  getIncorrectInput () {
    return this.rawTypingChallenge
      .substr(
        this.totalCorrectCharacters + this.currentCorrectCharacters,
        this.totalIncorrectCharaters + this.currentIncorrectCharacters
      )
  }

  getRemainingInput () {
    return this.rawTypingChallenge
      .substr(
        this.totalCorrectCharacters + this.currentCorrectCharacters +
        this.totalIncorrectCharaters + this.currentIncorrectCharacters
      )
  }
}

export default TypingChallengeService
