
const controls  = document.querySelector('.controls');
const mode = document.querySelector('.mode');

const change = document.querySelector('.chng');
let showControl = true;
console.log("HI");
change.addEventListener('click', hideControl);

function hideControl()
{
    if(showControl)
    {
        mode.innerHTML = "Autonavigation"
        controls.classList.add('hide')
        showControl = false;
        
    }
    else{
        mode.innerHTML = "Manual"
        controls.classList.remove('hide')
        showControl = true;

    }
    console.log("hey");
}
