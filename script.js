function firstWord(s) {
    let words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            return words[i];
        }
    }
    return '';
}
	
// Do not change the code below
 const s = prompt("Enter String:");
alert(firstWord(s));
