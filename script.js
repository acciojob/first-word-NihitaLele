function firstWord(s) {
	let words = s;
   if (words.trim() === '') {
    return words;
  }
  words = words.split(" ");
  return words[0];
}	

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
