let accordion = document.getElementsByClassName("accordionWrapper");
let i;

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        } else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
        
    
}






