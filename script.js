const viewer=document.querySelector("#viewer");

const reset=document.querySelector("#reset");

const rotate=document.querySelector("#rotate");

let spinning=true;

reset.onclick=()=>{

viewer.cameraOrbit="30deg 75deg auto";

viewer.jumpCameraToGoal();

}

rotate.onclick=()=>{

spinning=!spinning;

viewer.autoRotate=spinning;

rotate.innerHTML=

spinning?

"Pause Rotation"

:

"Start Rotation";

}
