let current_age;
let desired_age;
while(isNaN(current_age) || current_age < 0 ){
    current_age = prompt("Please enter your current age:");
}

while(isNaN(desired_age) || desired_age <= current_age){
    desired_age = prompt("Please enter the age you want to retire in future:");
}

let left_time = desired_age - current_age;
let current_year = new Date().getFullYear();
let result = "You will be retired in " + (current_year + left_time) 
            + "\n" + left_time + " years left to retire for now";

alert(result);

