const course={
     coursename:"JS by Debal",
     price:"599",
     courseInstructor:"Debal",
}
// course.courseInstructor

// object destructure 
const {courseInstructor}= course;
console.log(courseInstructor);
const {courseInstructor:instructor}= course;// if you feel like the courseInstructor is lenghthy then you can change it as well 
console.log(instructor);

// in React there are some method basic methods 
// const navbar =(props.company)=>{
//}
const navbar=({company})=>{ // destructre in React 
}
navbar(company ="Debal")

// API 
//JSON -{ 
//} JSON - Is looks like object and [{},{}] -> javaScript Object Notation 

// {
//     "name":"Debal",
//     "price":"500",
//     "id":"101";
// } This is an example of JSON where it doesn't have a variable and the key also have string " " and values as well ""

// we get API in the form of array as well like below : -> randomeuser me  

// [
//     {},
//     {},
//     {},
// ] 
// to understand such format we can use JSON formatter