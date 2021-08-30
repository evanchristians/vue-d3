export const getAngle = (index, total) => {
  return Math.floor(
    (360 * index) / total +
      10 * (Math.random() * 2 - 1) +
      360 * Math.floor(Math.random() * 2 - 1)
  );
};
