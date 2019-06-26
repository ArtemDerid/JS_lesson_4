var array = [ 1, 3, 45, 67, -3, 690, -43, 23, -1, 56, 78, 93, 32, 45, 2, 6, 7,
		9, -22, -156, -45, 45, 67, 89 ];

function show(object){
	console.log(object);
	console.log('_________________________________________');
}

show(array);

function numberAscComparing(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

function numberDescComparing(firstNumber, secondNumber) {
	return secondNumber - firstNumber;
}

array.sort(numberAscComparing);
show(array);

array.sort(numberDescComparing);
show(array);

function filterPositiveNumbers(obj){
	return obj >= 0;
}

function filterNegativeNumbers(obj){
	return obj < 0;
}

var positiveArray = array.filter(filterPositiveNumbers);
show(positiveArray);

var negativeArray = array.filter(filterNegativeNumbers);
show(negativeArray);