class NotificationService {
  static requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.log('Desktop notifications are not supported by your browser.');
      return;
    }

    if (Notification.permission === 'granted') {
      console.log('Notification permission already granted.');
    } else if (Notification.permission !== 'denied') {
      const handlePermissionRequest = () => {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
          }
        });
      };
    }
  }

  static createNotification(title, body) {
    if (Notification.permission === 'granted') {
      this._createNotification(title, body);
    } else {
      console.log('Notification permission is not granted.');
    }
  }

  static _createNotification(title, body) {
    const options = {
      body,
    };
    const notification = new Notification(title, options);
  }
}

export default NotificationService;
