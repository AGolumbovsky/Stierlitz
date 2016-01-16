console.log("Stierlitz ohuel");

function encode() {

	var gotText = document.getElementById('text-original').value;

	if(!gotText) alert("Your coded letter ain't much..");

	else {

		/*
		- need to .split('space') the text and store in arr
		- iterate over the arr
			-check for words<=3
			-scramble letters between word[0] and word[length-1]
		- .join
		- profit
		*/

		var gaveText = document.getElementById('text-encoded');
		gaveText.value = "Wait for it...";

	}
}