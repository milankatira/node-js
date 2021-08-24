const chalk=require('chalk');
const validator =require('validator');

console.log(chalk.green.inverse("hello"));
console.log(chalk.green("hello"));


const res =validator.isEmail("milankatira@gmail.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));


const res_1 =validator.isEmail("milankatira@gmail.m");
console.log(res_1 ? chalk.green.inverse(res_1):chalk.red.inverse(res_1));