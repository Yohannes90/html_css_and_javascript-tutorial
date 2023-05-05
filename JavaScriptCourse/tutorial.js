// Basic Types

    // numbers
    /*
    console.log(10);// prints 10
    console.log(typeof 10);// prints "number"
    console.log(typeof "10");// prints "string"

    // we can also use the built-in Math object to perform more complex mathematical operations
    console.log(Math.random());// prints random number
    console.log(Math.PI);// prints PI

    console.log("10" + 200);// concatenate them so prints 10200

    console.log(parseInt("10") + 200); // adds them so prints 210
    console.log(parseInt("hello"));// prints NaN(Not a Number)

    console.log(isNaN("hello"));// prints true (which means is not a number)
    
    */

 // String - in javascript are Unicode characters
        //   - we use qoutes for strings (double or single interchangeabley)
        /*
        console.log("Hello");

        console.log("SuperDuper".length);// builtin method to get the length of a string
        console.log("Yohannes".charAt(0));// builtin method to get char at specific index

        console.log("Hello" + " " + "World" + "!");// concatinating strings
        console.log("Hello World!".toUpperCase());// builtin method to change all letters to uppercase
        */
    // Booleans
    /*
    console.log(true);
    console.log(false);
    var cool = null;
    console.log(cool);
    console.log(cool === null);// true
    if (cool == null) {
        console.log("var is Null");
    } else {
        console.log("var is not Null");
    }
    null != undefined
    */

    // Objects - Collection of name-value pairs
        //two ways
     /*   var myObject = new Object();// one way or 
        var myOtherObject = {}; // both are preety much equivalent, and empty

        myObject['1'] = "Chris";
        myObject['2'] = "Saley";
        myObject['3'] = "Bob";
        console.log(myObject);// {1: 'Chris', 2: 'Saley', 3: 'Bob'}
        
        myOtherObject = {
            1: "Chris",
            2: "Saley",
            3: "Bob",
        };
        console.log(myOtherObject);// {1: 'Chris', 2: 'Saley', 3: 'Bob'}
        myOtherObject[4] = "Ashley";
        console.log(myOtherObject);// {1: 'Chris', 2: 'Saley', 3: 'Bob', 4: 'Ashley'}

    var anotherObject = { // Each key should e unique
        firstName : "Chris",
        lastName : "Smith",
        age : 50,
        phone : "555-555-5555",
    };
    console.log(anotherObject);// {firstName: 'Chris', lastName: 'Smith', age: 50, phone: '555-555-5555'}

    console.log(anotherObject.firstName);// Chris !this and the next both functionally equivalet
    console.log(anotherObject["age"]);// 50

    var moreObject = {
        name : "Yohannes",
        numbers : {
            mobile : "555-555-5555",
            home : "444-444-4444",
        },
        address : "123-fake-street"
    };
    console.log(moreObject);// {name: 'Yohannes', numbers: {…}, address: '123-fake-street'}

    console.log(moreObject.numbers);// {mobile: '555-555-5555', home: '444-444-4444'}

    console.log(moreObject.numbers.mobile);// 555-555-5555
    console.log(moreObject.numbers["home"]);// 444-444-4444

    var userMobileNumber = moreObject.numbers.mobile;
    console.log(userMobileNumber);// 555-555-5555

    var donut = {
        type : "coconut",
        glazed : true,
        sweetness : 8,
        hasChocalate : false,
        sayHi : function() {
            console.log("Hi!");
        },
        sayType : function() {
            console.log("Type: " + this.type);
        },
        saySweetness : function () {
            console.log("Sweetness : " + this.sweetness + "/10");
        }
    }
    donut.sayHi();// Hi!
    donut.sayType();// Type: coconut
    donut.saySweetness();// Sweetness : 8/10

   