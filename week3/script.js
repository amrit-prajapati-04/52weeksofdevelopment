let addbtn = document.getElementById("add")
let maincontent = document.getElementById("enteredtask")
addbtn.addEventListener("click" , ()=>{
    let text = document.querySelector("#inputArea").value
    if (text){
    var display  = document.createElement("div")
    display.className = "taskdisplay"
    display.innerHTML = `${text}  <span id="delete"> - </span>`
    maincontent.appendChild(display)
    text.value = ""
    }
    let del = document.querySelectorAll("#delete")
    for (let i =0 ; i< del.length ; i++){

        del[i].addEventListener("click" , ()=>{
            maincontent.removeChild(del[i].parentElement) 
        })
    }
        
})


let flag = document.querySelector("h4")
let switcher = document.querySelector(".themeswitcher")
let root = document.querySelector(":root")

switcher.addEventListener("click" , ()=> {
    if (flag.innerText == "Dark Mode"){
        root.style.setProperty("--bgcolor" , "#fff")
        root.style.setProperty("--primary-color" , "#2D2C2E")
        root.style.setProperty("--tint-primary-color" , "#212121")
        root.style.setProperty("--add-button-color", "#04BA71")
        flag.innerText = "Light Mode"
        document.getElementById("dateandday").style.color = "#FD1F4A"
    }
    else{
        root.style.setProperty("--bgcolor" , "#0C3B2E") 
        root.style.setProperty("--primary-color" , "#fff") 
        root.style.setProperty("--tint-primary-color" , "#ffffff64")
        root.style.setProperty("--add-button-color", "#FFBA00")
        flag.innerText = "Dark Mode"
        document.getElementById("dateandday").style.color = "#FFF"

    }
})
