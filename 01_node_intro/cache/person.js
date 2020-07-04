var person = {
    name: 'Bill',
    age: 65,
    phone: 111,

    sayHello: function(){
       console.log("Hello " + this.name
        +  ", age   = " + this.age
        + ", phone " + this.phone
      );
    }
}

module.exports = person;