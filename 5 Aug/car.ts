	class Student{
		name;
		roll;
		constructor(name,roll){
			this.name=name;
			this.roll=roll;
		}
		show(){
			console.log(this.name+'-'+this.roll);
		}
	}
	
	function sum(a:number,b:number){
		b=b||0;
		return a+b;
	}
	
	console.log(sum(9,8));
	console.log(sum('Hello','Bye'));