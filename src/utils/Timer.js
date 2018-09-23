/**
 * A simple timer which can be started, stopped, and
 * return the seconds elapsed. Optionally, can be given
 * a callback function which will be called at each interval.
 */
class Timer {
  /**
   * @param {Function} callback Callback called at each interval
   * @param {Number} interval The timer will be called on (milliseconds)
   */
  constructor (callback = null, interval = 1000) {
    this.interval = interval
    this.callback = callback
    this.milliseconds = 0
    this.ticker = null
  }

  seconds () {
    return this.milliseconds / 1000
  }

  _tick () {
    this.milliseconds += this.interval
    if (this.callback) this.callback(this.seconds())
  }

  start () {
    if (this.ticker) return
    this.ticker = setInterval(this._tick, this.interval)
  }

  stop () {
    if (!this.ticker) return
    clearInterval(this.ticker)
    this.ticker = null
  }

  reset () {
    this.stop()
    this.ticker = null
    this.milliseconds = 0
  }
}

export default Timer
