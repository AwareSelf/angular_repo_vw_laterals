class Human {
    #species;
    constructor(species)
    {
        this.species = species;
    }

    getSpecies = ()=> this.species;
}

class Person extends Human {
    
    name = "namrata";
    printMyName = () => {
     console.log('this is '+this.getSpecies()+" with name "+this.name);
     }
 }
    
     const person = new Person('Human');
     person.printMyName();
     console.log(person.getSpecies()); 