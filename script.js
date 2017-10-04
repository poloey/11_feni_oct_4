var fruits = ['apple', 'orange', 'mango', 'pine apple', 'jack fruits'];
var hello = document.getElementById('hello');
var text = "<h1>hello world from  js. I live in dhaka. I am a web developer</h1><p>this is paragraph</p>";

text = text + '<p>this pargraph from anoter assigning</p>';
text = text + '<ul>';

for (var n = 0; n < fruits.length; n++ ) {
    text = text + '<li>' + fruits[n] + '</li>';
}



text = text + '</ul>';

hello.innerHTML = text;