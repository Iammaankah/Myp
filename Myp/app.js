let burger = document.querySelector(".burger");
let navigationBar = document.querySelector(".navigation-bar");

burger.addEventListener('click', () => {
  navigationBar.classList.toggle('active');
});

// burger.addEventListener('click', () => {
// alert("you clicked")
// })



// let Services = document.querySelector(".container");
// Services.addEventListener('click', () => {
//   // document.body.style.background = "#FF70FD"
// });
 
// let time = 20;
// (time > 18) ? console.log("Good day.") : console.log("Good evening.");







/// calling http request

let request = new XMLHttpRequest;
// console.log(request.readyState)
request.addEventListener('readystatechange',()=>{
  if (request.readyState === 4 && request.status== 200){
    console.log(request.responseText)
  }else{
    console.log('somthing wrong..')
  }
})


request.open('GET','https://jsonplaceholder.typicodee.com/posts/1');

request.send()
//  console.log(request.readyState)
//  console.log(request)
  


