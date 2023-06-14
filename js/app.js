let buttons = document.querySelectorAll(".width");
for (const button of buttons) {
    button.onclick = function() {
        document.querySelector(".div").style.width = `${button.innerHTML}`;
        let a = document.querySelector(".active");
        a.classList.remove("active");
        this.classList.add("active");
    }
}

Sort = (array) =>{
   if(Array.isArray(array)){
     for (let i=0; i<array.length-1; i++){
         for (let j=0; j<array.length-i-1; j++){
             if(array[j]>array[j+1]){
                let c = array[j];
                array[j] = array[j+1];
                array[j+1] = c;
             }
         }
    }
    console.log(array);
  }
  else{
    console.log("not an array")
  }
}
let array = [3,7,4,9,2,10]
Sort(array)

