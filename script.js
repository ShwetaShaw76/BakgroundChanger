let background=document.querySelector("body");
let images=document.querySelectorAll(".img");
let display=document.querySelector(".image-holder");
let dis=document.querySelector(".slider");
let btns=document.querySelector(".buttons")
background.addEventListener("click",(e)=>{
    if(e.target.className!="btn" && e.target.className!="img"){
dis.style.display="none";
btns.style.display="none";
    }
})
background.addEventListener("dblclick",(e)=>{
    if(e.target.className!="btn" && e.target.className!="img"){
dis.style.display="block";
btns.style.display="inline-block";
    }
})
images[0].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://wallpapercave.com/wp/wp9139823.jpg)"
})
images[1].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://as2.ftcdn.net/v2/jpg/05/84/95/65/1000_F_584956595_jJz4GqGQLZTIAiwir15VCk4sglgi9RGx.jpg)"
})
images[2].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://cdn.wallpapersafari.com/34/26/dfl2A0.jpg)"
})
images[3].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://wallup.net/wp-content/uploads/2018/10/08/955073-fish-fishes-underwater-ocean-sea-sealife-nature.jpg)"
})
images[4].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://wallpapers.com/images/hd/savannah-background-7mpkl528yph58rx5.jpg)"
})
images[5].addEventListener("click",()=>{
    background.style.backgroundImage="url(https://wallpaperaccess.com/full/29872.jpg)"
})