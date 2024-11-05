// functions
function greet() {
    console.log('hello world this is a function');
}

greet()


// Function Parameters and Arguments

function message(name) {

    console.log('hello ' + name)

}

message("ayub");  
message("abdi");


// Another Example

function calculateTotal(price,quantity) {


    console.log('price is $' + price * quantity);

}

calculateTotal(2, 10);
calculateTotal(2, 5);
calculateTotal(100, 5);


// Function Return Values

function add(a,b) {
    return a+b;
}

let result = add(30,40);

console.log(result / 2)

// Function Expression
const hello = function(name) {
    console.log("hello !" + name)
}

hello("amina");
hello("sacdiya")



const sum = function(a, b){
    return a+b;
}

     let added =  sum(20,20)

     console.log(added /2);



// Exercise

     function Addition(a, b) {
        console.log(a+b)
     }
     
     Addition(20,50);


    //  Exercise | Function Expression
    const SumAdd = function(a,b) {
        console.log(a+b)
    }

    SumAdd(30,40);
    SumAdd(300, 500)


    // Arrow Function (ES6)

    const Meeting = (named) => {
        console.log("hello man " + named);
    }

    Meeting("Ayub Abdi");


    // Exercise ||  Arrow Function (ES6)

    const subtraction = (a, b) => {
        console.log(a-b);
    }

    subtraction(50,30);
    subtraction(200,50);