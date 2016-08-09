// I want this to return one string
//   that equals the concatenation of two
//   arguments


var contextTodayString =  "Jason is teaching me scope.";
var realTalkString =  " Its not very fun to be honest ¯\_(ツ)_/¯ ";

// Function declaration (original creation)
//   We have two arguments here... without them
//   There is nothing to add!
function concatTwoStrings(string1, string2){
  // inside of this function is a different
  //   scope than outside...
  // Concat the two strings
  var concatedStrings = string1 + string2;
  // Return one string!
  return concatedStrings;
}

// var addedStrings = contextTodayString + realTalkString;

// Using two parens after a reference to a function name
//  will press "start" on the function and set your var
//  equal to the return value
var usingFunction = concatTwoStrings(contextTodayString, realTalkString);
console.log(usingFunction);


// I want to create a reusable function to calculate
//   a circle's area...
//   This function should return the area of the circle
function calcCircleArea(radius){
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  //   Math.pow(7, 2);    // 49
  // http://www.w3schools.com/jsref/jsref_pi.asp
  //   Math.PI;
  // http://www.w3schools.com/js/js_operators.asp
  // crazy equation (A=πr2)
  var areaOfCircle = Math.PI * Math.pow(radius, 2);
  // return area
  return areaOfCircle;
}

// Square root of circle area divided by pi
function calcCircleRadius(circleArea){
  // http://www.w3schools.com/jsref/jsref_obj_math.asp
  // var y = Math.sqrt(16);      // Returns the square root of 16
  var radiusOfCircle = Math.sqrt(circleArea / Math.PI);
  return radiusOfCircle;
}

// Happy fun time
var calculatedAreaOfMyFakeCircle = calcCircleArea(3); // equals 28.27
// Check this in browser
console.log(calculatedAreaOfMyFakeCircle);

var calculatedRadiusOfMyFakeCircle = calcCircleRadius(calculatedAreaOfMyFakeCircle);
console.log(calculatedRadiusOfMyFakeCircle);

// DRY - Dont repeat yourself
var arrayOfStudents = ["Max", "Ernesto", "Lauren", "Gilbert", "Atom"];

// In for loops three things happen
//  1. Creating an iterator variable and setting to 0
//       only executes once (when loop begins)
//  2. Determine whether current iterator variable is less than
//       array length
//  3. Iterate iterator by 1 (just add 1)
//       this step occurs AFTER code in block (in curly brackets)
for(var i = 0; i < arrayOfStudents.length; i++){
  var studentName = arrayOfStudents[i];
  console.log(studentName);
}

var arrayOfJasonsBag = ["Laptop", "Random Receipts", "Lighting Cable", "Beats by Dre", "Pen", "P. Terrys Sticker", "iPhone"];

var preambleString = "In Jasons bag he has: ";
// In Jason's bag he has: item1, item2, etc...
for (var i = 0; i < arrayOfJasonsBag.length; i++) {
  // With if statements we use double or triple `=` signs
  // Minus one because the `array index` is not equal to `length`
  //   the array index IS EQUAL to length minus 1
  if((arrayOfJasonsBag.length - 1) === i){
    // we no longer want comma at the end of our string
    preambleString += arrayOfJasonsBag[i] + ".";
  }else{
    // we totally want the comma after the item in jasons bag
    preambleString += arrayOfJasonsBag[i] + ", ";
  }
}

console.log(preambleString);

// double equal signs will NOT assert TYPE "loose type"
// triple equal signs WILL assert TYPE
console.log(0 === "0");

var classroomObject = {
  tables: 4,
  chairs: 8,
  students: ["Max", "Ernesto", "Lauren", "Gilbert", "Atom"],
  clean: false,
  windows: false
}

// To loop over an object
for(var item in classroomObject) {
  // classroomObject.tables
  // classroomObject.item => literally looks for key of "item" it
  //   does not reference the iterator with the for...in loop
  console.log(classroomObject[item]);
}


var grades = {
  a: {
    max: 100,
    min: 90
  },
  b: {
    max: 89,
    min: 80
  },
  c: {
    max: 79,
    min: 70
  },
  d: {
    max: 69,
    min: 60
  },
  f: {
    max: 59,
    min: 0
  }
}

// If my grade is 95 it should be an a
// Return You currently have <GradeLetter>
function getGrade(gradeNumber){
  // Arguments, or assertion (usually `==` || "or" `===`)
  // For an "A" grade... we need the number to be
  //   More than 90 (grades.a.min)
  //   Less than 100 (grades.a.max)
  // @TODO: COPIED AND PASTED SHOULD REFACTOR AS FUNCTION
  if(gradeNumber >= grades.a.min && gradeNumber <= grades.a.max ){
    // The number is higher than 90
    return "You currently have: A";
  }else if(gradeNumber >= grades.b.min && gradeNumber <= grades.b.max ){
    return "You currently have: B";
  }else if(gradeNumber >= grades.c.min && gradeNumber <= grades.c.max ){
    return "You currently have: C";
  }else if(gradeNumber >= grades.d.min && gradeNumber <= grades.d.max ){
    return "You currently have: D";
  }else if(gradeNumber >= grades.f.min && gradeNumber <= grades.f.max ){
    return "You currently have: F";
  }
}

var currentGradeLetter = getGrade(59);
console.log(currentGradeLetter);


/*
  REFACTORED GRADE WITH FUNCTIONS
*/


// If my grade is 95 it should be an a
// Return You currently have <GradeLetter>
function getGradeRefactored(gradeNumber){
  // Arguments, or assertion (usually `==` || "or" `===`)
  // For an "A" grade... we need the number to be
  //   More than 90 (grades.a.min)
  //   Less than 100 (grades.a.max)
  for (var gradeLetter in grades) {
    if(gradeNumber >= grades[gradeLetter].min && gradeNumber <= grades[gradeLetter].max ){
      // The number is higher than 90
      return "You currently have: " + gradeLetter;
    }
  }
}

var newGrade = getGradeRefactored(100);
console.log(newGrade);
