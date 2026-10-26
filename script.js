document.addEventListener("DOMContentLoaded", () => {

const rope = document.getElementById("rope");
const bulb = document.getElementById("bulb");
const glow = document.getElementById("lightGlow");
const screen = document.getElementById("welcomeScreen");
const portal = document.getElementById("portalContent");

if(!rope) return;

rope.addEventListener("click", () => {

    rope.style.transform = "translateY(25px)";

    setTimeout(()=>{
        rope.style.transform = "translateY(0)";
    },200);

    bulb.style.background="#ffcc66";
    bulb.style.boxShadow="0 0 20px #ffcc66";

    glow.style.opacity="1";

    setTimeout(()=>{

        screen.style.opacity="0";

        setTimeout(()=>{

            screen.style.display="none";
            portal.classList.add("show");

        },1000);

    },1500);

});

});