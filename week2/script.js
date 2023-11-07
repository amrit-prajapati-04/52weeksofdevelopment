let clutter  = ""
var encrypt_page = document.querySelector("#encryption")
var decrypt_page = document.querySelector("#decryption")
var enc_btn = document.querySelector("#enc-btn")
var dec_btn = document.querySelector("#dec-btn")
enc_btn.addEventListener("click", ()=> {
    encrypt_page.style.display = "flex"
    decrypt_page.style.display = "none"
    document.querySelector(".arrow").style.rotate = "0deg"
    enc_btn.style.backgroundColor = "#8989894e"
    dec_btn.style.backgroundColor = "transparent"
    document.querySelector(".decresult").innerHTML = "";  

})

dec_btn.addEventListener("click", ()=> {
    encrypt_page.style.display = "none"
    decrypt_page.style.display = "flex"
    document.querySelector(".arrow").style.rotate = "180deg"
    enc_btn.style.backgroundColor = "transparent"
    dec_btn.style.backgroundColor = "#8989894e"
    document.querySelector(".encresult").innerHTML = "";

})


document.querySelector(".encrypt-btn").addEventListener("click" , ()=>{
    let data = document.querySelector("#txtmsg").value;
    let str = data.split("");
    str.forEach(element => {
       clutter += `&#128${element.charCodeAt()} ` 
    });
    document.querySelector(".encresult").innerHTML = clutter;
    document.querySelector(".encresult").style.display = "block";
    document.querySelector(".encresult").style.height = "fit-content";    
})


document.querySelector(".decrypt-btn").addEventListener("click" , ()=>{
    let data = document.querySelector("#decmsg").value;
    let str = data.split(" ");
    var string = "";

     const toUni = function (str) {
       return `&#${ (str.codePointAt(0)) };`
      }

      str.forEach(ele =>{
        let word = toUni(ele)
        let pos = word.replace("&#128" , "").replace(";" , "");
        string += String.fromCharCode(pos);
      })
      console.log(string)
      document.querySelector(".decresult").innerHTML = string;  
      document.querySelector(".decresult").style.display = "block";
      document.querySelector(".decresult").style.height = "fit-content";    

})