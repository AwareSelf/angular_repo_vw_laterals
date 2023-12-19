class Human {
    species = 'human';
    constructor(species)
    {
        this.species = species;
    }
}

class Person extends Human {
    constructor(species,name)
    { 
        super(species);
        this.name = name;
    }
    
    printMyName = () => {
     console.log('this is '+this.species+" with name "+this.name);
     }
 }
    
     const person = new Person('Human','Namrata');
     person.printMyName();
     console.log(person.species); 