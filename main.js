/*var space = " ";
for (var i = 1; i < 10; i++) {
   space = " ";
    for(j=i; j < 10; j++) {
space += " "
   }
    for(k=0; k<(i*2)-1; k++) {
        space += "0"
    }
    document.write(space);
}*/


/*********************************************** */
/*
function sparkling(){
    let imagebg =document.getElementById("image1"); //get the text
    let colors = ["red", "green", "yellow"]; //color choices
    let generateColor =Math.floor(Math.random() * colors.length); //basis for color
    imagebg.style.background = colors[generateColor]; //final style
    
    let text =document.getElementById("xmas"); //get the text
    let textcolor = ["red", "green", "yellow"]; //color choices
    let textgenerateColor =Math.floor(Math.random() * colors.length); //basis for color
    text.style.color = textcolor[textgenerateColor]; //final style   

}

function start(){
    start_color = setInterval(sparkling, 1000);
}
function stop(){
    clearInterval(start_color);
} */

/******************************************************** */
function sparkling(){
    let imagebg =document.getElementById("image1"); //get the text
    let colors = ["white", "pink", "yellow", "green","red","gold"]; //color choices
    let generateColor =Math.floor(Math.random() * colors.length); //basis for color
    imagebg.style.background = colors[generateColor]; //final style
    
    let text =document.getElementById("xmas"); //get the text
    let red = Math.floor(Math.random(255) *256);
    let blue = Math.floor(Math.random(255) *256);
    let green = Math.floor(Math.random(255) * 256);
    let a = document.getElementById("rgboutput").innerText = `RGB(${red}, ${blue},${green})`; // "RGB" + "(" + red + "," + blue + "," + green + ")"
    text.style.color = `RGB(${red}, ${blue},${green})`;
    
    let text2 =document.getElementById("xmas2"); //get the text
    let h = document.getElementById("rgboutput2").innerText = `RGB(${red}, ${blue},${green})`; // "RGB" + "(" + red + "," + blue + "," + green + ")"
    text2.style.color = `RGB(${red}, ${blue},${green})`;
  
   

}
 
function start(){ 
    start_color = setInterval(sparkling, 500);
    
}
function start2(){ 
    start_color = setInterval(sparkling, 1000);
    
}
function start3(){ 
    start_color = setInterval(sparkling, 3000);
    
}
function stop(){
    clearInterval(start_color);
} 