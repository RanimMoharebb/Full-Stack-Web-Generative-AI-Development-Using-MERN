// task 1

console.log("--------------------------")
console.log("Lab 1, Task 1 :")

var TodoList = 
{
    TaskNames: [], 

    addTask: function(newTask) 
    {
        this.TaskNames.push(newTask);
    },

    removeTask: function(taskName) 
    {
        var counter = this.TaskNames.indexOf(taskName);
        if (counter !== -1) 
        {
            this.TaskNames.splice(counter, 1);
            console.log( taskName + " task removed");
        } 
        else 
        {
            console.log( taskName + " task not found");
        }
    },

    printTasks: function() 
    {
        if (this.TaskNames.length === 0) 
        {
            console.log("No tasks in the list");
        } 
        else 
        {
            console.log("Tasks:");

            for (var i in this.TaskNames) 
            {
                console.log( parseInt(i)+1 + "." + this.TaskNames[i]);
            }
        }
    }
};

TodoList.addTask("Learn JavaScript");
TodoList.addTask("Go for a run");
TodoList.printTasks();
TodoList.removeTask("Go for a run");
TodoList.printTasks();





// task 2

console.log("--------------------------")
console.log("Lab 1, Task 2 :")

function createUser(name, age, street, city) 
{
    return {
        name: name,
        age: age,
        address: 
        {
            street: street,
            city: city
        },
        getFullAddress: function() 
        {
            return this.address.street + ", " + this.address.city;
        }
    };
}

var userProfileManager = 
{
    users: [], 

    addUser: function(user) 
    {
        this.users.push(user);
    },


    editUser: function(name, newData) 
    {
        var user = null;
        for (var i in this.users) 
        {
            if (this.users[i].name === name) 
            {
                user = this.users[i];
                break;
            }
        }

        if (user) 
        {
            if (newData.address) 
            {
                Object.assign(user.address, newData.address);
            }
            Object.assign(user, newData);
            console.log("User " + name + " updated");
        } 
        else 
        {
            console.log("User " + name + " not found");
        }
    },


    deleteUser: function(name) 
    {
        var userIndex = -1;
        for (var i in this.users) 
        {
            if (this.users[i].name === name) 
            {
                userIndex = i;  
                break;          
            }
        }

        if (userIndex !== -1) 
        {
            this.users.splice(userIndex, 1); 
            console.log("User " + name + " deleted");
        } 
        else 
        {
            console.log("User " + name + " not found");
        }
    },


    sortUsers: function(by = "name") 
    {
        var n = this.users.length;
        for (var i in this.users) 
        {
            for (var j in this.users) 
            {
                var idxI = parseInt(i);
                var idxJ = parseInt(j); 

                if (idxJ >= n - 1 - idxI) continue; // 3shan lw tal3t out of bounds

                if (by === "name" && this.users[idxJ].name > this.users[idxJ + 1].name) 
                {
                    var temp = this.users[idxJ];
                    this.users[idxJ] = this.users[idxJ + 1];
                    this.users[idxJ + 1] = temp;
                }

                if (by === "age" && this.users[idxJ].age > this.users[idxJ + 1].age) 
                {
                    var temp = this.users[idxJ];
                    this.users[idxJ] = this.users[idxJ + 1];
                    this.users[idxJ + 1] = temp;
                }
            }
        }
    },



    filterByAge: function(age) 
    {
        var result = [];
        for (var i in this.users) 
        {
            if (this.users[i].age === age) 
            {
                result.push(this.users[i]);
            }
        }
        return result;
    },


    printUsers: function() 
    {
        for (var i in this.users) 
        {
            console.log("Name: " + this.users[i].name + ", Age: " + this.users[i].age + ", Address: " + this.users[i].getFullAddress());
        }
    }

};


var user1 = createUser("Ranim", 24, "123 Main St", "Anytown");
var user2 = createUser("Ali", 30, "456 Oak St", "Othertown");
var user3 = createUser("Sara", 24, "789 Pine St", "Sometown");

userProfileManager.addUser(user1);
userProfileManager.addUser(user2);
userProfileManager.addUser(user3);



console.log(" \n All users:");
userProfileManager.printUsers();

console.log("------");


console.log(" \n Sorted by name:");
userProfileManager.sortUsers("name");
userProfileManager.printUsers();

console.log("------");


var filteredUsers = userProfileManager.filterByAge(30);
console.log("\nFiltered by age 30:");
for (var i in filteredUsers) {
    console.log(
        (parseInt(i)+1) + 
        ". Name: " + filteredUsers[i].name +
        ", Age: " + filteredUsers[i].age +
        ", Address: " + filteredUsers[i].getFullAddress()
    );
}


console.log("------");


console.log(" \n Edit user Sara:");
userProfileManager.editUser("Sara", {age: 25, address: {city: "Newcity"}});
userProfileManager.printUsers();

console.log("------");

console.log(" \n Delete user Ali:");
userProfileManager.deleteUser("Ali");
console.log(" \n All users after editing and deleting:");
userProfileManager.printUsers();

