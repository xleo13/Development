function setText() {

	var getWords = document.getElementById("textarea").value;

	// console.log(getWords);

	var setWords = document.getElementById("textarea").value = translatePigLatin(getWords);
}

function translatePigLatin(str) {

	var splitWords = str.split(' ');
	var splitWordsPigLatin = [];

	splitWords.forEach(function(word){

		var consonantStartPattern = /^[^a-z]*(([bcdfghjklmnpqrstvwxyz]){1}([a-z']*))/i,
		consonantMatches = word.match(consonantStartPattern),
		vowelStartPattern = /^[^a-z]*(([aeiou]){1}([a-z']*))/i,
		vowelMatches = word.match(vowelStartPattern),
		origWord, rebuiltWord = null;


		var consistentCases = function(matches) {
			if (/[A-Z]/.test(matches[2]) && matches[3].length > 0) {
				if (matches[3] !== matches[3].toUpperCase())
				matches[2] = matches[2].toLowerCase();
				matches[3] = matches[3].replace(/^[a-z]{1}/, matches[3][0].toUpperCase());
			}
		};


		if (consonantMatches !== null) {
			consistentCases(consonantMatches);
			origWord = consonantMatches[1];
			rebuiltWord = '' + consonantMatches[3] + consonantMatches[2] + 'ay';
		} else if (vowelMatches !== null) {
			consistentCases(vowelMatches);
			origWord = vowelMatches[1];
			rebuiltWord = '' + vowelMatches[3] + vowelMatches[2] + 'hay';
		}

		if (rebuiltWord) {
			word = word.replace(origWord, rebuiltWord);
		}

		splitWordsPigLatin.push(word);
	});


	pigLatin = splitWordsPigLatin.join(' ');

	return pigLatin;
};
