# Document Object Model (DOM) - Web API

###  Notice about this page   
if you get any Error or typo in this page. please let me know I will correct this for you.    

## how to write something in html page through js
you can write content inside `html document` through javaScript in lot of ways. Today I have showed how can we write something in html page using `id` selector.     
first create a `id`  inside `html` file. Let id name is `kayes`

~~~html
  <div id="kayes"></div>
~~~

 So, In order to write something inside kayes I have to select html id `kayes` in my script file and store in a variable. Let, I will store kayes id in `kayes_id` variable

~~~js
var kayes_id = document.getElementById('kayes');
~~~    

So I have selected html id `kayes` in `kayes_id`. Now I can write anything inside `kayes_id` using `innerHTML`.  

~~~js
kayes_id.innerHTML = 'some text written in html using js';
~~~
We just output only some text. We can pass any html as well. One thing you have to keep in mind it's a  `js` file. It's not `html` file. So all your html code actually string. I mean you have to write inside double or single quote. go with only one. Never mix double quote with single quote. Other wise you will be confused. Here I have used single quote.   
Now I out put some html content   
~~~js
kayes_id.innerHTML = '<h1>First Heading from js.</h1>';
~~~

So we write some heading content in side kayes_id. We can write content using variable help when we needed. 
~~~js
var heading = '<h1>First Heading from js.</h1>';
kayes_id.innerHTML = heading;
~~~

State above code we assign `'<h1>First Heading from js</h1>'` to `heading` variable. So now we can write `kayes_id.innerHTML = heading;`.     
How actually variable will help me you will be understad by following code.

~~~js
var content = '<h1>First Heading from js.</h1>';

var content = content + '<p>Some paragraph text</p>';

var content = content + '<ul>';
var content = content + '<li>Apple</li>';
var content = content + '<li>Orange</li>';
var content = content + '<li>Banana</li>';
var content = content + '</ul>';

kayes_id.innerHTML = content;
~~~  
Here I have write a heading, paragraph, and un-ordered list using help of variable. I can write whole html content in one line but I used some `string concatenation` help. First I assign some content to `content` variable. Then in next line I add new content with previous content and assign to content variable.

In some case we may show value from some variable in our html content. 

~~~js
var fruits = ['Apple', 'Orange', 'Banana'];
var content = '<h1>First Heading from js.</h1>';

var content = content + '<p>Some paragraph text</p>';

var content = content + '<ul>';

var content = content + '<li>' + fruits[0] + '</li>';
var content = content + '<li>' + fruits[1] + '</li>';
var content = content + '<li>' + fruits[2] + '</li>';

var content = content + '</ul>';

kayes_id.innerHTML = content;
~~~  
From state above code we will get same output But here we have getting list value from variable `fruits`.
We can dynamically generate '<li>' using for each loop. We need loop only `0 - 2`. Since our array length is 3. So we can refactor our code by following  

~~~js
var fruits = ['Apple', 'Orange', 'Banana'];
var content = '<h1>First Heading from js.</h1>';

var content = content + '<p>Some paragraph text</p>';

var content = content + '<ul>';
for (var i = 0; i < 3; i++ ) {
  var content = content + '<li>' + fruits[i] + '</li>';
}
var content = content + '</ul>';

kayes_id.innerHTML = content;
~~~  

Here Insted of manually extracting value from array I have used `for` loop. Which will iterate 3 times.    
Here we told to `for loop` to iterate 3 times for getting output value 0, 1, 2. When our array length is increased we have to increse condition manually. Which is not efficient. So we can refactor our `for` loop using `array.length` helper.

~~~js
for (var i = 0; i < fruits.length; i++ ) {
  var content = content + '<li>' + fruits[i] + '</li>';
}
~~~

Please go with step by step. Do at least 2 hours practice at home. If you are not understand this you won't understand tommorow class. Which evntually kill your and mine precise time. 









