
/**
 * Service used for tracking the progress of the challenge
 * as the user types input
 */
class TypingChallengeService {
  constructor (currentChallenge) {
    this.currentChallenge = currentChallenge
    this.currentInput = ''
  }
}

export default TypingChallengeService
