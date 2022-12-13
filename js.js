//1.input, button ve contentDiv ve inputDiv tutmaliyiq 
const inputDiv = document.querySelector('.inputDiv');
const input= document.getElementById('input');
const button= document.getElementById('btn');
const contentDiv=document.querySelector('.contentDiv');
//2. Event listnerden istifade edirik buttonu clikledikde
// funksiya iwe dushsun ve yazdigimiz inputa deyer ekranda gorunsun 
// buttona eventListner veririk ve ('click', funksiyanin adi)
button.addEventListener('click',go); 
// eventlistnerde yazdigimiz funksiyani ayri yazib  
//daxilinde inputa yazdigimiz deyeri ekranda contentdiv gorunsun 
// yazdigimiz inputa yazi hansi elementin icinde olacaq meselen <p></p>
// onun ucunde bir variable yaziriq ve yeni bir element yaziriq
var calculate= 0;
//bir deyer veririk ve reqemlerin ardicil gelemesi ucun
// calculate++ yaziriq ki 1,2,3,4,5 gelsin
// daha sonra calculate+'.'(noqte qoyulsun)+1. 2. 3.
function go(){
    calculate++;
    var paragraph= document.createElement('p');
    paragraph.innerText=calculate+'.'+input.value;
    // yeni bir variable veririk ve ora contentDiv yazilan deyeri yaziriq p
    // paraqrafin teksti inputa yazdigimiz deyere beraber olacaq
    contentDiv.appendChild(paragraph);
    // sonra paraprafi (etdiyimiz yeni elementi p)
    // content Div icine aliriq birlewdirik 
    input.value="";// yazdiqdan sonra inputdaki yazi silinsin bow qalsin
    
    var deleteButton=document.createElement('div');
    //delete buttonu yaziriq 
    deleteButton.classList.add('deleteButton');
    paragraph.appendChild(deleteButton);
    deleteButton.innerText='Delete';


    /* deleteButton.addEventListener('click',function()){
        contentDiv.removeChild(paragraph);
    }); */

}
