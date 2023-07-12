class StorageService {
  static setWorkTime(value) {
    localStorage.setItem('WORK_TIME', value);
  }
  static setBreakTime(value) {
    localStorage.setItem('BREAK_TIME', value);
  }
  static getWorkTime() {
    return localStorage.getItem('WORK_TIME') ?? 45 * 60;
  }
  static getBreakTime() {
    return localStorage.getItem('BREAK_TIME') ?? 15 * 60;
  }
}

export default StorageService;
