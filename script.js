


let bg=document.querySelector("#app-bg");
let themeslider=document.querySelector("#theme-settings-img");


//to change theme from light to dark


if(themeslider.classList.contains("light")){
	
	themeslider.classList.remove("light");
	themeslider.classlist.add("dark");
	bg.setAttribute("backgroundColor","#3443eb");
	themeslider.setAttribute("src","./images/toogle-on");
	
	
}else if(themeslider.classList.contains("dark")){
	themeslider.classList.remove("dark");
	themeslider.classlist.add("light");
	bg.setAttribute("backgroundColor","#efeff6;");
	themeslider.setAttribute("src","./images/toogle-off");
}