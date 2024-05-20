const fs=require("fs");
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data); // null Nikhil (No error, output)
})

console.log(fs.readFileSync("file.txt")); // <Buffer 4e 69 6b 68 69 6c>
console.log(fs.readFileSync("file.txt").toString()); // Nikhil

console.log(("finished reading file"));

// fs.writeFile("file2.txt","Abc",(err,data)=>{
//     console.log("Written into file");
// })

fs.writeFileSync("file2.txt","Def");
console.log("Logged Def");
/*
finished reading file
null Nikhil

// even though we have written console.log(err,data) first then finished reading file , 
the first console.log takes some time for its execution
*/