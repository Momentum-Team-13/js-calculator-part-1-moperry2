console.log("test")
let buttons = document.querySelectorAll(".button");
console.log( buttons )

let result = ""

let display = document.querySelector(".display"); 
let equalsbutton = document.querySelector("#equal")
console.log(display)


for (let button of buttons) {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      result += event.target.textContent
      console.log(result)
      display.textContent=result
    });
}
    equalsbutton.addEventListener("click",function (){
        const calcresult= eval(result)
        display.textContent=calcresult
    } );

    

     //   event.target.classList.remove("unhighlight");
   //   event.target.classList.add("highlight");
//     });
// }
// function display() {
//     document.getElementById("result").innerHTML = "7";
// }
// event.target.classList.remove("unhighlight");
//     event.target.classList.add("highlight");
//   });() {
//     document.getElementById("result")
//    }
// function display

//    function clearScreen() {
    
//    }
//    function calculate() {
    
//    }