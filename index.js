function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let button = document.querySelector(".toggle");
    button.textContent = document.body.classList.contains("dark-mode") ? "☀" : "☾";
}
const charval=document.getElementById('textarea');
let charcount=document.getElementById('total-count');
let remcount=document.getElementById('rem-count');
let char=0;
//apply event listner
const updatecounter =()=>{
userchar=charval.value.length;
charcount.innerText=userchar;
remcount.innerText=250-userchar;
}
charval.addEventListener("keyup",()=>updatecounter());
//copy text code
const copytext=()=>{
    charval.select();
    charval.setSelectionRange(0,9999)//range
    navigator.clipboard.writeText(charval.value);//important
}