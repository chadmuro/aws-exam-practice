export default function randomNumberGenerator() {
  // Update max number to match number of questions
  return Math.floor(Math.random() * 2) + 1;
};