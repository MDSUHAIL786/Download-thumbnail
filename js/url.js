const urlInp=document.querySelector(".url input");
previewArea=document.querySelector(".preview-area");
imgtag=previewArea.querySelector(".thumbnail");



urlInp.onkeyup=()=>{
     previewArea.classList.add("active");
     let text=urlInp.value;
     if(urlInp.indexOf("https://www.youtube.com/watch?v=")!=-1){
          
     }
}
