const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec}`;
};

const secondToMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

const minutesToSeconds = (minutes) => {
  return minutes * 60;
};

export { formatTime, secondToMinutes, minutesToSeconds };
