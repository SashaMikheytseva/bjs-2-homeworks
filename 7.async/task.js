class AlarmClock {
    constructor(alarmCollection, intervalId) {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {       //добавляет новый звонок в коллекцию существующих
      if (!callback || !time) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      for (let i = 0; i < this.alarmCollection.length; i++) {
        if (this.alarmCollection[i] === time) {
          console.warn('Уже присутствует звонок на это же время'); 
        }
      }
      this.alarmCollection.push({callback, time, canCall: true});
    }
  
    removeClock(time) {             //удаляет звонки по определённому времени
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
  
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  
    start() {
      if (this.intervalId !== null) {
        return;
      }
  
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        })
      }, 1000)
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }