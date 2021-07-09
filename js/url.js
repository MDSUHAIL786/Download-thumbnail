const urlInp=document.querySelector(".url input");
previewArea=document.querySelector(".preview-area");
imgtag=previewArea.querySelector(".thumbnail");
button=document.querySelector(".btn");



urlInp.onkeyup=()=>{
     previewArea.classList.add("active");
     let text=urlInp.value;
     if(text.indexOf("https://www.youtube.com/watch?v=")!=-1){
          let videoId=text.split("v=")[1].substring(0,11);
          let videoThumbnail=`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          // console.log(videoThumbnail);
          imgtag.src=videoThumbnail;
          
     }else if(text.indexOf("https://youtu.be/")!=-1){
          let videoId=text.split("be/")[1].substring(0,11);
          let videoThumbnail=`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          
          imgtag.src=videoThumbnail;
     }else if(text.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){
          
          imgtag.src=text;
     }else{
          imgtag.src="";
          previewArea.classList.remove("active");
          
     }

     // }else if(urlInp.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){

     // }
}
