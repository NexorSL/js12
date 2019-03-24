//EVERY
function isBigEnough(element) {
  return element >=10;
}
var arr1 = [12, 5, 8, 130, 44];
var arr2 = [12, 54, 18, 130, 44];

function NewEvery(arr,func){
  var bool = true;
  for(var i in arr){
    if(func(arr[i])!=true){
      bool = false;
    }
  } console.log(bool);
  return bool;
}
NewEvery(arr2,isBigEnough);

// SOME

var arr3 = [1];

function NewSome(arr,func){
  var bool = false;
  for(var i in arr){
    if(func(arr[i])==true){
      bool = true;
    }
  } console.log(bool);
  return bool;
}
NewSome(arr3,isBigEnough);

// MAP

function suM(num){
  return num * 2;
}
var testArray = [1,2,4,5];
var voidArray = [];

function NewMap(arr,newArr,callback){
  for(var i in arr){
    newArr[i] = arr[i];
    if(typeof callback === 'function'){
      newArr[i] = callback(arr[i]);
    }
  }
  return newArr;
}
console.log(NewMap(testArray,voidArray,suM));
console.log(voidArray);

// FOREACH

function NewForEach(arr,callback){
  for(var i in arr){
    if(typeof callback === 'function'){
      arr[i] = callback(arr[i]);
    }
  }
  return arr;
}
console.log(NewForEach(testArray,suM));
console.log(testArray);

// FIND

function cond(elem){
  if(elem >= 10){
    return elem;
  }
  return undefined;
}

function newFind(arr,callback){
  for(var i in arr){
    if(callback(arr[i]) != undefined){
      return arr[i];
    }
  }
}
console.log(NewForEach(testArray,suM));
console.log(newFind(testArray,cond)); // arr[4,8,16,20]

// FILTER

var newArray = [];

function NewFilter(arr,newArr,callback){
  var k = 0;
  for(var i in arr){
    if(cond(arr[i]) != undefined){
      newArr[k] = arr[i];
      k++;
    } else {
      continue;
    }
  }
  return newArr;
}
console.log(NewFilter(testArray,newArray,cond)); // arr[4,8,16,20]  newArray[16,20]

// FLAT

var arrWithArr = [1,2,[3,4,5],6,7,[8,9,10],11,[12,13,[14,15,[16,17,[18,19]]]],20];
var empty = [];
function NewFlat(arr,newArr,depth){
  var test = [];
  if(depth == 0){
    return arr;
  }
  for(var a = 0;a<depth;a++){
    for(var i = 0; i<arr.length;i++){
      if(Array.isArray(arr[i])){
        var copy = arr[i].slice(0,arr[i].length);
        var len = copy.length;
        for(var j = 0; j<len;j++){
           test[j] = copy.pop();
        }
        test.reverse();
        var l = newArr.length;
        for(var j = 0; j<len;j++){
          newArr[l+j] = test[j];
        }
        test = [];
      } else {
        var h = newArr.length;
        newArr[h] = arr[i];
      }
    }
    if(depth-a>1){
    arr = newArr;
    newArr = [];
    } else {
      continue;
    }
  }
  test = [];
  return newArr;
}
console.log(NewFlat(arrWithArr,empty,3)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, Array(2), 20]
