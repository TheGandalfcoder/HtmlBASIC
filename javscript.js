window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
	  document.querySelector(".Gray-Divider").textContent = "Reviews"; 
    document.querySelector(".Gray-Divider").style.width = "90%";
	
  }  else if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
	  document.querySelector(".Gray-Divider").textContent = "Services"; 
    document.querySelector(".Gray-Divider").style.width = "55%";
  }
	
	else {
    document.querySelector(".Gray-Divider").style.width = "20%";
	document.querySelector(".Gray-Divider").textContent = ""; 
  }
}

