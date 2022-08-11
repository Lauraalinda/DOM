let div= document.getElementsByClassName("container")[0]//accessing frst div
console.log(div);

//body and div contains objects 

let child = document.createElement("p");
let features =document.createTextNode("Hello Mother");//creating features for the child fr us to bak bitw
child.appendChild(features)//child adopting features

//we cant got thru the div to create elements we go thru the grand father document

div.appendChild(child)
//adopting the child the features grandf created

let head = document.querySelector("#header")//callling in css
console.log(head)