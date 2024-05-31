import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const myArray = [];
  const arrays = [19, 20, 34];
  for (const x of arrays) {
    myArray.push(new ClassRoom(x));
  }
  return myArray;
}
