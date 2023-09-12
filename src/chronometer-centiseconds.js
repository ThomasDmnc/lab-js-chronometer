class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()  => {
      this.currentTime += 1;

      if (printTimeCallback) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    let minutes = 0;
    minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = 0;
    seconds = Math.floor(this.currentTime / 100 % 60);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = 0;
    centiseconds = Math.floor(this.currentTime % 100);
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
      return value.toString();
    } else {
      return ("0" + value).slice(-2)
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
