/*
module wrapper function 
behind the below programme this programme is run 
so that we can call __filename and __dirname also

(
    function(exports,require,module,__filename,__dirname)
    {
        const name="milan";
        console.log(name)
    }
);
*/
const name="milan";
console.log(name);

console.log(__filename);
console.log(__dirname);