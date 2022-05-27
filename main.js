console.log("test")
let buttons = document.querySelectorAll(".button");
console.log( buttons )


for (let button of buttons) {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
    });
}
// let display = target.textContent

     //   event.target.classList.remove("unhighlight");
   //   event.target.classList.add("highlight");
//     });
// }
// function display() {
//     document.getElementById("result").innerHTML = "7";
// }
// event.target.classList.remove("unhighlight");
//     event.target.classList.add("highlight");
//   });
// function display() {
//     document.getElementById("result")
//    }

//    function clearScreen() {
    
//    }
//    function calculate() {
    
//    }