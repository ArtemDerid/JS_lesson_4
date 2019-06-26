function show(object){
	console.log(object);
	console.log('_________________________________________');
}

var arrayOfStudents = [];

var student_1 = {
	yearOfStuding : 3,
	facultyName : "foreignLanguages"
}

var student_2 = {
	yearOfStuding : 2,
	facultyName : "math"
}

var student_3 = {
	yearOfStuding : 1,
	facultyName : "finance"
}

var student_4 = {
	yearOfStuding : 3,
	facultyName : "foreignLanguages"
}

var student_5 = {
	yearOfStuding : 4,
	facultyName : "programming"
}

var student_6 = {
	yearOfStuding : 1,
	facultyName : "foreignLanguages"
}

var student_7 = {
	yearOfStuding : 2,
	facultyName : "programming"
}

var student_8 = {
	yearOfStuding : 2,
	facultyName : "programming"
}

var student_9 = {
	yearOfStuding : 4,
	facultyName : "math"
}

var student_10 = {
	yearOfStuding : 5,
	facultyName : "finance"
}

arrayOfStudents.push(student_1, student_2, student_3, student_4, student_5,
		student_6, student_7, student_8, student_9, student_10);

function getFaculty(student){
	return student.facultyName;
}

var facultyArray = arrayOfStudents.map(getFaculty);
show(facultyArray);

function countYearsOfStuding(sumOfYears, student){
	return sumOfYears + student.yearOfStuding;
}

var totalYearsOfStuding = arrayOfStudents.reduce(countYearsOfStuding, 0);
show(totalYearsOfStuding);





