document.querySelector(".nav-icon").onclick = function() {
  if (document.querySelector(".page-navigation__items").style.display === "block") {
    document.querySelector(".page-navigation__items").style.display = "none";
  } else {  
    document.querySelector(".page-navigation__items").style.display = "block";
  }
};


document.querySelector(".button").onclick = function() {
  var para = document.createElement("P");
  para.innerHTML = "Have fun!";
  document.querySelector(".concerts__info").appendChild(para);
  document.querySelector(".button").remove();
}


const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {

    e.preventDefault();
    var formData = new FormData();
    formData.append('email', document.getElementById("email").value);
    formData.append('topic', document.getElementById("topic").value);

  for(var pair of formData.entries()) {
    console.log(pair[0]+ ': '+ pair[1]); 
  }
});