export const getRandomNumber = (min = 40, max = 150) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
