// console.log('JavaScript is Rad');
// var number = 10;
// var string = 'Hello There';
// var isRad = true;

// document.getElementById('box').innerHTML = string;
// document.getElementById('box').innerHTML = number + 12;

// if (number = 10) {
//     console.log('Yeah');
// } else {
//     console.log('Nope')
// }

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var groceries = ['Milk', 'Eggs', 'Cheese'];

// for (var i = 0; i < groceries.length; i++) {
//     console.log(groceries[i]);
// }

var groceries = ['Milk', 'Eggs', 'Cheese'];
function listGroceries() {
    for (var i = 0; i < groceries.length; i++) {
        console.log(groceries[i]);
    }
}
listGroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});