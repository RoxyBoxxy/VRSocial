$( document ).ready(function() {nsfwEnable(); nsfwDisable();})
function nsfwEnable(){
    let elements = document.getElementsByClassName("ture")
    for (var i = 0; i < elements.length; i++){
        elements[i].style = "filter: blur(50px);";
        //elements[i].parentElement.getElementById("nsfw_msg").style = "filter: blur(10px);"; //or watever
    }
}
function nsfwDisable(){
  let elements = document.getElementsByClassName("ture")
  for (var i = 0; i < elements.length; i++){
   elements[i].addEventListener("click",  (event)=>{
        console.log(event.target.style);
        event.target.parentElement.style ="filter: none;";
    });
      
  }
}