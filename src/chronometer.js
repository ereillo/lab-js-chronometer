class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;  
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    if (printTimeCallback) {  //ESTA LA SAQUÉ DEL FAQ, PERO REALMENTE NO ENTIENDO QUÉ ESTOY HACIENDO
       return printTimeCallback(this.currentTime);
    }
  }, 1000)
}

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    //segundos restantes para llegar al minuto
     return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //estas dos tuve que buscarlas en internet
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
