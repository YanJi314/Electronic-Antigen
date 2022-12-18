clickTimes=0;
function sClick(ele){
    clickTimes++;
    if(window.removeTimeout){clearTimeout(removeTimeout);}
    ele.classList.add("water");
    removeTimeout=setTimeout(()=>{
        ele.classList.remove("water");
    },500)
    if(clickTimes==3){
        document.body.classList.add("animation");
        setTimeout(()=>{
            document.getElementById("line").style.background="#b2848e";
        },9400);
        setTimeout(()=>{
            alert("祝您和身边的人健康平安！");
        },16000);
    }
}
