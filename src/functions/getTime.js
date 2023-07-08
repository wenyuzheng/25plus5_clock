import twoDigits from "./twoDigits";

const getTime = (time) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;

  return `${twoDigits(minute)}:${twoDigits(second)}`;
};

export default getTime;
