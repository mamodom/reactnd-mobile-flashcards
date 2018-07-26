import { Notifications, Permissions } from 'expo';
import Storage from './storage';

const notification = {
  title: 'Mobile flashcards',
  body: "It's time to take a quiz",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
};

const oneDay = 1000 * 60 * 60 * 24;

const todayAt8PM = () => {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    20
  ).getTime();
};

const scheduleNotification = async ({ tomorrow } = {}) => {
  let time = todayAt8PM();

  if (tomorrow || time < new Date().getTime()) {
    time += oneDay;
  }

  const notificationId = await Notifications.scheduleLocalNotificationAsync(
    notification,
    { time: time, repeat: 'day' }
  );

  await Storage.setNextNotification({
    id: notificationId,
    time: time,
  });
};

export const ensureNotificationIsSetup = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') return;

  const nextNotification = await Storage.getNextNotification();

  if (!nextNotification) {
    await scheduleNotification();
  }
};

export const dismissTodaysNotification = async () => {
  const nextNotification = await Storage.getNextNotification();

  if (
    nextNotification &&
    new Date(nextNotification.time).getDate() == new Date().getDate()
  ) {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await scheduleNotification({ tomorrow: true });
  }
};
