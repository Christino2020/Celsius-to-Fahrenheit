function calculate(){
    Celsius = document.getElementById("Celsius").value
    Fahrenheit = Celsius*1.8+32;
    Answer = document.getElementById("LabelAnswer").value

   if (Fahrenheit >= 95){
        Answer = "It's Hot";
        console.log(Answer)
        document.getElementById("LabelAnswer").innerHTML = "It's Hot";
   }
   else{
       Answer = "It's Cold"
       console.log(Answer)
       document.getElementById("LabelAnswer").innerHTML = "It's Cold"
   }
}