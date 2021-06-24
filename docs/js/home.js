const skaya_title = "Skaya RP";
const title = document.querySelector("#title");

let current_title = "";
let index = 0;

function animationTitle()
{
    var interval = setInterval(() => {
        if(index == skaya_title.length) {
            index = 0;
            
            clearInterval(interval);

            setTimeout(() => {
                resetAnimationTitle();
            }, 1500);
        } else {
            current_title = current_title + skaya_title[index];
            document.title = current_title;
            title.innerHTML = current_title;
            index = index + 1;
        }
    }, 200);
}

function resetAnimationTitle()
{
    index = 0;
    current_title = "";
    
    setTimeout(() => {
        animationTitle();
    }, 500);
}

animationTitle();