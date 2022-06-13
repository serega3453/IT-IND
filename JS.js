document.getElementById("prop").onclick = function()
{
alert(`Clicked property JS button`);
};

function handler() 
{
alert('Clicked listened JS button');
}

const input = document.getElementById("listened_button");

input.addEventListener("click", handler);