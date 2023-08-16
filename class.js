// class and object
// class is a blue print of aobject
// object is consider as an antity having properties and methods
// example


class item{
    wheel(){
        document.write("wheel is selected  <br>");
    }
    model(){
        document.write( "2026 <br>");
    }

    comany(){
        document.write("bmw  <br>" ) ;
    }

}
let car = new item();
car.wheel();
car.model();
car.comany();


class item{
    user(){
        document.write("zain");
    }
    regestation(){
        document.write("23");
    }
    seatnumber(){
        document.write("3445");
    }
}
let train = new item();
car.user();
car.regestation();
car.s();





const std = [

    { fname : "ali", age :"30", rollno : "2" ,location : "city"},
    { fname : "zain", age :"12", rollno : "3" ,location : "city"},
    { fname : "raza", age :"13", rollno : "23" ,location : "city"},
]

let std_info = std.map(data)
  document.write( std_info)

function data(x){
    return x.fname   + "<br>"
}