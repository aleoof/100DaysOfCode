class Users {
    
    constructor(){
        this.id = null;
        this.name = '';
        this.email = '';
        this.password = ''
    }

    displayName(name){
        this.name = name
        console.log(this.name);
    }
}

module.exports = new Users()