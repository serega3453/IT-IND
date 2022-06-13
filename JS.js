document.getElementById("prop").onclick = function()
{
alert(`Clicked property JS button`);
document.getElementById("status").innerHTML = "You pressed second button!";
};

function handler() 
{
alert('Clicked listened JS button');
document.getElementById("status").innerHTML = "You pressed third button!";
}

const input = document.getElementById("listened_button");

input.addEventListener("click", handler);
