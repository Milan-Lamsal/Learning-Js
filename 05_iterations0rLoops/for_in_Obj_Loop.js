// For in  -> Object 

const language ={
    js: 'JavaScript',
    cpp:'c++',
    rb:'ruby',
    py:"python"
};

 for (const lang in language) {
         console.log(lang) // gives the key  - js, cpp, rb, py 
         console.log(language[lang]);// gives the value 
 }

//  Trying For in -> in arry 

const programming =["js", "cpp","py", "java"]
for (const prog in programming) {
     console.log(prog); // 0 1 2 3
     console.log(programming[prog]); // js, cpp, py , java
}
// arrays key is 0, 1, 2, 3,

//  Trying in Map - for in loop -> it doesnot print  using for in loop , it wont iterations 

const map = new Map() // 
map.set('NJ', '08332')
map.set('Millville', '08332')
map.set('kathmandu', '08332')
map.set('kathmandu', '08332')

for (const key in map) {
    console.log(key); // it doesnot print ,
}