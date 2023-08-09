let recipeBtns = document.querySelectorAll(".recipe-btn");
let drawerOpen = false;
function toggleDrawer(){
    let color = "rgb(158, 38, 140)";
    if(!drawerOpen){
        document.querySelector("#recipes").style.marginLeft = "0";
    }else{
        console.log(drawerOpen);
        document.querySelector("#recipes").style.marginLeft = "-300px";
        color = "rgb(78, 67, 68)";
    }
    recipeBtns.forEach(btn => {btn.style.color = color;});
    drawerOpen = !drawerOpen;
}
function resetDrawer(e){
    if(!e.target.classList.contains("recipe-btn")){
        drawerOpen = true;
        toggleDrawer();
    }
}
recipeBtns.forEach(btn => {btn.addEventListener("click", ()=>{toggleDrawer()});});
document.body.addEventListener("click", (e)=>{resetDrawer(e)});
document.body.addEventListener("scroll", (e)=>{resetDrawer(e)});