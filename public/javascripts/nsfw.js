$( document ).ready(function() { nsfwEnable(); })
function nsfwEnable(){
  let elements = document.getElementsByClassName("ture")
  for (var i = 0; i < elements.length; i++){
      let l = elements[i];
      l.children[0].style.display = "none"
      l.children[0].src = elements[i].href
      let lewd = new Image();
      lewd.src = "https://vrsocial.io/images/lewd.png";
      
      l.classList.remove("progressive") //removing the loading animation
      l.classList.add("progressiveNSFW")
      l.classList.add("null")
      elements[i].parentElement.appendChild(lewd);
      
      lewd.onclick = ()=>{
        l.parentElement.removeChild(lewd)
        //lewd.style.display = "none"
        l.children[0].style.display = "block"
        
        //return false;
      }
      
  }
}
/*function nsfwEnable(){
    let elements = document.getElementsByClassName("ture")
    for (var i = 0; i < elements.length; i++){
        //elements[i].style = "filter: blur(50px);";
        //elements[i].children[0]//.style = "filter: blur(50px);";

        elements[i].style.visibility  = "hidden"
        elements[i].style.display = "none"
        //console.log(elements[i].children[0].classList)
        let lewd = new Image();
        lewd.src = "https://vrsocial.io/images/lewd.jpg";
        
        elements[i].parentElement.appendChild(lewd);
        let l = elements[i];
        lewd.onclick = ()=>{
          l.style.display = "block"
          l.style.visibility  = "visible"
          l.parentElement.removeChild(lewd)
        }
        
    }
}*/
/*
function nsfwDisable(){
  let elements = document.getElementsByClassName("ture")
  for (var i = 0; i < elements.length; i++){
   elements[i].addEventListener("click",  (event)=>{
        //console.log(event.target.style);
        event.target.parentElement.style ="filter: none;";
    });
      
  }
}
*/