
function shuffle (arr) {

	// old code, needs improvement
	let i = 0;
	let	j = 0;

	let temp = null;
	
	for (let i = arr.length-1; i>0; i-=1) {

		j = Math.floor(Math.random() * (i + 1));

		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	
	return arr;
}


function encode() {

	let gotText = document.getElementById('text-original').value;

	if (gotText.length <= 3) alert("Your coded letter ain't much.."); 
	//add more checks
	else {

		let words = gotText.split(' ');

		console.log("logged words", words);

		for (let i=0; i<words.length; i++) {

			// check the word is longet than 3 chars
			if (words[i].length>3) {

				// check the last char is alphanumeric
				if (/[^a-zA-Z0-9]/.test(words[i][words[i].length-1])) { 

					console.log(words[i][words[i].length-1]);
					words[i][words[i].length-2] = words[i][words[i].length-2]; // last char doesn't change

				}
				else { 

					console.log(words[i][words[i].length-1]);

					let obrez = words[i].substring(1, words[i].length-1).split(''); 
					let obrezM = shuffle(obrez).join('');
					words[i] = words[i][0] + obrezM + words[i][words[i].length-1];

				}
			} 

			else words[i] = words[i]; // word doesn't change

		}
		
		
		// left over from old, on its way out...
		// let gaveText = document.getElementById('text-encoded');
		// gaveText.value = words.join(' ');
		
		let h1 = document.createElement('H1');
		let textResult = document.createTextNode(words.join(' '));
		console.log(textResult)
		h1.appendChild(textResult);
		let resultTextDiv = document.getElementById('text-result');
		resultTextDiv.innerHTML = '';
		resultTextDiv.appendChild(h1)

	}
}

let keyCombination; // make = to ctrl + alt

document.addEventListener(keyCombination , encode, false);

// deal with punctuation (eg "...", ":" and such) don't treat punctuation as last character
// need to make sure the random always shuffles the words
// need to mail it from stierlitz email or user's 

