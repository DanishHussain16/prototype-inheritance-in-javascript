function User(name,email){
          this.name=name,
          this.email=email
}

User.prototype.greetings= function(){
    return this.name+'hello';
}

var user1=new User('danish','danish@gmail.com');

// console.log(user1);

function Customer(name,email,id,adress){
     User.call(this,name,email);

     this.id=id,
     this.adress=adress
}

// inherit customer in user

Customer.prototype=Object.create(User.prototype);


// create a customer constructor()
Customer.prototype.constructor=Customer;



customer1=new Customer('danish','danish@','987','sikander');
console.log(customer1);
