
// manipulação variaveis e strings
var num1 = 30
var num2 = 7
console.log("Tenho " + (num1 + num2) + " anos de idade!!!");


// index
var nome = "James";
console.log(nome[0]);
console.log(nome[4]);
console.log(nome[3]);
console.log(nome[2-1]);
console.log( "O " + nome + " tem " + (num1+num2) + " anos de idade!!");

// scape de strings - aspas dentro da string em js:

var frase  = "Olá Odair , \"o que parece \", ocorrer ?";
console.log ( frase);

//comparando strings : para strings importa se as letras são maiusculas ou minusculas;

var yes1 = "Yes";
var yes2 = "yes";
var p1 = "green";
var p2 = "blue";
var p3 = "Green"
console.log(yes1==yes2);
console.log(yes1!=yes2);
console.log(p1>p2);
console.log(p1>p3);

// string com a comida predileta
console.log ("Parmeggiana ");

// Conserte a expressão do lado correto para que seja = True
// "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

var exp1 = "All STRINGS are CrEaTED Equal";
var exp2 = "All Strings are CrEaTeD Equal";
console.log(exp1==exp2);

//Construa uma única string que se assemelha à seguinte piada:
// Why couldn't the shoes go out and play?
// They were all "tied" up!

var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);

//Construa uma string utilizando concatenação, por meio da combinação das linhas deste famoso poema haiku de Yosa Buson:

//Blowing from the west

//Fallen leaves gather

//In the east.
var haiku = "Blowing from the west\n\nFallen leaves gather\n\nIn the east.";
console.log(haiku);

//for (var i=1;i<=100;i++){
//   console.log(i);
//  }


/* Instruções Quiz:
Crie uma variável chamada bill e atribua a ela o resultado de 10.25 + 3.99 + 7.15 (não faça a conta você mesmo, deixe o JavaScript fazer isso!). Em seguida, crie uma variável chamada tip e atribua a ela o resultado da multiplicação de bill por uma taxa tip de 15%. Finalmente, some bill e tip e armazene o resultado em uma variável de nome total.

Exiba o valor de total no console do JavaScript.

Dica: 15% na forma decimal é escrito como 0.15_._

DICA: para exibir o valor de total com o símbolo de dólar ($), utilize concatenação de strings. Para arredondar para duas casas decimais, utilize o método toFixed(). Para utilizar toFixed(), passe o número de casas decimais que você deseja ter. Por exemplo, se total for igual a 3.9860, então total.toFixed(2) retornará 3.99.*/

var bill = (10.25+3.99+7.15);
console.log(bill);
var tip = bill * 0.15;
console.log(tip);
var total= bill + tip;
var total = ("$" + total.toFixed(2));
console.log(total) ;

var loc = "Labs";
var date = "10/05/19";
var dayWeek  = "sexta-feira";
console.log ("Hoje, dia " + date + ", " + "estou no " + loc + ".\nUma ótima " + dayWeek + " à todos vocês.");

// Quiz Madlib.js : 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

var madLib = ("The Intro to JavaScript course is " + adjective1 + "." + " James and Julia are so " + adjective2+ "." +" I cannot wait to work through the rest of this " + adjective3 + " content!");
console.log(madLib);

//Quiz uma mensagem incrivel: 
//"Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
//"Hi, my name is James. I love baseball. In my spare time, I like to read."
//Hi, my name is Odair. I love javascript. In my spare time, I like to play soccer.
var firstName = "Odair";
var interest = "javascript";
var hobby = "play soccer";
var awesomeMessage = ("Hi, my name is " + firstName + "." + " I love " + interest + "." + " In my spare time, I like to " + hobby + "." );
console.log(awesomeMessage);





















