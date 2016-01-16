
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
	console.log(arr + " shuffled");
	return arr;
}

function encode() {

	var gotText = document.getElementById('text-original').value;

	if (gotText.length <= 3) alert("Your coded letter ain't much.."); //check more

	else {

		var words = gotText.split(' ');

		for (var i=0; i<words.length; i++) {

			var obrez = words[i].substring(1, words[i].length-1).split('');
			var obrezM = shuffle(obrez);

				
			console.log(obrezM);

		}
		
		var gaveText = document.getElementById('text-encoded');
		gaveText.value = "Wait for it...";

	}
}