// task assignment
//
// The input is a string str of digits.
// Cut the string into chunks (a chunk here is a substring of the initial string)
// of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
// reverse that chunk; otherwise rotate it to the left by one position.
// Put together these modified chunks and return the result as a string.
//
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

function revrot(str, sz) {
	let finalString = "";
	if (sz <= 0 || str === "") {
		return console.log("str is empty or sz is 0");
	}
	for (var i = 0; i < (Math.floor(str.length / sz)); i++) {
		let final = 0;
		let chunkarr = str.split("").splice(Math.floor(sz * i), sz);

		chunkarr.forEach(function(e) {
			final += (e * e);
		});

		if (final % 2 === 0) {
			finalString += chunkarr.join("").reverse();
		} else {
			for (var j = 0; j < chunkarr.length - 1; j++) {
				// removes the last item from array and puts it in front of the array
				// which is shifting it left
				chunkarr.unshift(chunkarr.pop());
			}
			finalString += chunkarr.join("");
		}
	}
  return console.log(finalString);
}

// some test examples

revrot("123456987654", 6);
revrot("", 6);
revrot("123456987654", 0);
