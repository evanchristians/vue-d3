export const getAngle = (index, total) => {
  return Math.floor(
    (360 * index) / total +
      360 * Math.floor(Math.random() * 2 - 1)
  );
};
