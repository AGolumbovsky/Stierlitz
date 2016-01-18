
function shuffle (arr) {

	var i = 0,
		j = 0,
		temp = null;
	
	for (i = arr.length-1; i>0; i-=1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	return arr;
}

function encode() {

	var gotText = document.getElementById('text-original').value;

	if (gotText.length <= 3) alert("Your coded letter ain't much.."); //add more checks

	else {

		var words = gotText.split(' ');
		console.log(words);

		for (var i=0; i<words.length; i++) {

			if (words[i].length>3) { // check the word is longet than 3 chars

				if (/[^a-zA-Z0-9]/.test(words[i][words[i].length-1])) { // check the last char is alphanum

					var obrez = words[i].substring(1, words[i].length-1).split(''); 
					var obrezM = shuffle(obrez).join('');
					words[i] = words[i][0] + obrezM + words[i][words[i].length-1];
				}

				else words[i][words[i].length-2] = words[i][words[i].length-2]; // last char doesn't change
			} 

			else words[i] = words[i]; // word doesn't change
		}
		
		var gaveText = document.getElementById('text-encoded');
		gaveText.value = words.join(' ');

	}
}

// deal with punctuation (eg "...", ":" and such) don't treat punctuation as last character
// need to make sure the random always shuffles the words
//need to mail it from stierlitz email or user's 