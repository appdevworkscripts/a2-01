class Car{
    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model;
        this.price=price;
    }
    showCar(){
        var str:string=<string> <any> this.price;
        var x:string|number=10;
        x="hello";
        console.log(this.model+' - '+this.price);
        //tuple
        var arr=[1,3,"hello",true]
        //Array
        var numArray:number[]=[4,66,8,9];

        numArray.forEach(function(num){
            console.log(num);
        });
        
        
        numArray.forEach(num=>{
            console.log(num);
        });
    }
}