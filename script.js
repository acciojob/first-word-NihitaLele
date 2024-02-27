function firstWord(s) {
  s = s.split(" ")
	return s[0]
if (s.trim() === '') {
  return '';
}	

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
