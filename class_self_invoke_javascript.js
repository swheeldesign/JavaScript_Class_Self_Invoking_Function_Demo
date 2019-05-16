//	Demonstrating that a class 
//	can be made in a self-invoked function 
class Person {
 constructor(){
  this.number = 1;
 }
 Hello(){
  console.log("Hello, world!");
 }
 
}

//	The self-invoked function
(function(){
 this.player = new Person();
 this.player.number++;
 this.some_function = function(){
	this.player.Hello();
	console.log(this.player.number);
 }
 some_function();
 console.log(this.player.number);
})();
