const array1 = [{name : 'a'}, {name : 'b'}, {name: 'c'}];


array1.forEach(function(element){
    console.log(element);
},this)

console.log("=========================");
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
