//DOM 
const pointbox = document.querySelector("#score") ;//point tavle
const dragfoodbox = document.querySelectorAll (".foodcontainer article") ; //mad
const targetanimal = document.querySelectorAll("#animals div")  ; // dyrne
const foodbox = document.querySelector ("foodcontainer"); //madkassen

// EVENTS PÅ ELEMENTERNE

// dragfoodbox.forEach(function(element){
//     element.addEventlistener("dragstart", startDrag);
// })

dragfoodbox.forEach(function(element){
    element.addEventListener("dragstart", startDrag);
})

targetanimal.forEach(function(element){
    element.addEventListener("dragover", cancelDefault);
    element.addEventListener("drop", dropMad);
})
//funktioner :))


function startDrag(event){
    //console.log("hejx"); 
    event.dataTransfer.setData("foodId",this.id);
    event.dataTransfer.setData("foodName",this.dataset.food)
}
function cancelDefault(event){
   // event.preventDefault(this.dataset.food);
    event.preventDefault();
}
function dropMad(event){
    //console.log("hejy"); 

    let madid = event.dataTransfer.getData("foodId");
    let madType = event.dataTransfer.getData("foodName");

    if (madType== this.dataset.food) {
        let heart=document.createTextNode("❤")
        pointbox.innerHTML=parseInt(pointbox.innerHTML) + 100;
    } else {
        alert("puhaaaaaaaa!")
        pointbox.innerHTML=parseInt(pointbox.innerHTML) - 100;
        foodbox.removeChild(document.querySelector(madid))
    }


}
