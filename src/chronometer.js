class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()  => {
      this.currentTime += 1;

      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = 0;
    seconds = Math.floor(this.currentTime % 60);
    return seconds;
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
    // ... your code goes here
  }

  reset() {
    return this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return ` ${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
