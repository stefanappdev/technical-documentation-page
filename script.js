let bg=document.querySelector("#app-bg");
let themesettings=document.querySelector("#theme-settings");



//to change theme from light to dark

themesettings.addEventListener("click",toogleTheme);


const toogleTheme=()=>{
	if(themesettings.classList.contains("light")){
	
		themesettings.classList.add("dark");
		themesettings.classList.remove("light");
		
		bg.style.backgroundColor="#211c41";
		bg.style.color="white";
		themesettings.setAttribute("src","./images/toggle-on.png");
		
		
	}else if(themesettings.classList.contains("dark")){
		themesettings.classList.add("light");
		themesettings.classList.remove("dark");
		bg.style.color="black";
		bg.style.backgroundColor="#efeff6";
		themesettings.setAttribute("src","./images/toggle-off.png");
	}
	
	console.log("sucess");
}



