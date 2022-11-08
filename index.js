// THIS METHOD IS USED TO GET VALUE FROM HTML
//BEGINNING OF IIFE FUNCTION

var GetInput =(function(){
        return {
        
            getData: function() { 
                return{
                     text: document.querySelector("#todoInput").value
                };
            }
        };
})(); // THE END OF IFFE FUNCTION
const InputF =()=>{
    var resultData= GetInput.getData();     
     return(resultData.text);
    }
// THIS IS THE END OF THE METHOD USED TO GET DATA FROM HTML

//CREATE NEW POST & DISPLY TO BROWSER 
var createpost=()=>{
    createNewPost.innerHTML +=`
        <div class="newInput--container">
            <p>${InputF()}</p>
            <span class="newInput--btn">
                <button class="btn--edit" onclick="EditPost(this)">edit</button>
                <button  class="btn--delete"onclick="deletePost(this)">delete</button>
            </span>
        </div> 
            
      
    ` ; 
};
const InputDefaultSettings= ()=>{
    if (InputF () === ''){
        alert("input feild can not be empty")
        }else{
          createpost()
          todoInput.value ="";
  
        }
}
// EDIT FUNCTION 
const EditPost = (e)=>{
    todoInput.value=
    e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

}
// DELETE FUNCTION 
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
    todoInput.value ="";
  };

document.querySelector(".btn--add").addEventListener("click", function(){
    InputDefaultSettings();
});

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            InputDefaultSettings();
        }
    })
 
    


   