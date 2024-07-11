
// Call keyword 
function setUsername(username){
    console.log("called");
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email ;
    this.password = password
}

const vishnu = new createUser("vishnu","@getcodr.com",123)
const ram = new createUser("ram","@ram.com",1354)
console.log(vishnu);
console.log(ram);

