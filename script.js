const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "FRONT-END DEVLOPER";
    }, 2000);
    setTimeout(() => {
        text.textContent = "IT ENGINNERING STUDENT";
    }, 4000);
     //1s = 1000 milliseconds
     setTimeout(() => {
        text.textContent = "YASH DOKE";
    }, 6000);
}
textLoad();
setInterval(textLoad, 12000);


