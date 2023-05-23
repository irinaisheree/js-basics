function salary (input) {
    let index = 0;
let tabsCount = Number(input[index]);
index++;
let givenSalary = Number(input[index]);
index++;
 
for (let i = 1; i <= tabsCount; i++) {
    let curTab = input[index];
    if (curTab === 'Facebook') {
        givenSalary -= 150;
    } else if (curTab === 'Instagram') {
        givenSalary -= 100;
    } else if (curTab === 'Reddit') {
        givenSalary -= 50;
    } else {
        givenSalary = givenSalary;
    }
 
    if (givenSalary <= 0) {
        console.log("You have lost your salary.");
     return;
    }
    index++;
    }
 
 
 
 
console.log(givenSalary)
} 
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])