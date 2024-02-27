function firstWord(s) {
	let words = s
   if (words.trim() === '') {
    return words;
  }
  words = words.split(" ");
  return words[0];
}	



const s = prompt("Enter String:");
alert(firstWord(s));
