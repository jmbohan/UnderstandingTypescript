class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    //add access modifier in front of the parameter
    constructor(private id: string, public name: string) {
        // this.name = n;
        // this.id = id;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//const engineering = new Department('Engineering');

// engineering.describe();

// engineering.addEmployee('Max');
// engineering.addEmployee('Anna');

//The reseaon this returns undefined is because the variable is not assigned a value. Because this. is resposive to the object that is being referenced 
//which in this case is the engineeringCopy which has no name property. You can add a this parameter with a type being the type you are refrencing
//which is the Department class. This adds extra type checking or type safety to your code.

//So now we need to add a name property to the Department class.
// const engineeringCopy = { name: 'New', describe: engineering.describe };

// engineeringCopy.describe();


//-----------------------------------------//
// Adding Employees:                       //
//-----------------------------------------//


// engineering.addEmployee('Max');
// engineering.addEmployee('Manu');

//we added a private modifier to employees so we can't access it from outside the class.
//engineering.employees[2] = 'Anna';

//This overwrites the department name with the new name. This is not a good idea.
// engineering.name = 'New Name';

// engineering.describe();
// engineering.printEmployeeInformation();

