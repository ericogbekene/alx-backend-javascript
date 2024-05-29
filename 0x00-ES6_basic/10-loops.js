export default function appendToEachArrayValue(array, appendString) {
	let new_array = [];
	for (let idx of array) {
	  let value = idx;
	  new_array[idx] = appendString + value;

	}
	return new_array;
}
