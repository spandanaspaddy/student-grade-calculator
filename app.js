function getres(){
    var a =parseInt(document.getElementById('mathematics').value);
    var b =parseInt(document.getElementById('physics').value);
    var c =parseInt(document.getElementById('chemistry').value);
    var d =parseInt(document.getElementById('biology').value);
   
    if(a > 100 || b > 100 || c > 100 || d > 100 ){
        alert('Enter correct number');
    }
    else{
         var obtained = a + b + c + d;
         document.getElementById('obt').innerHTML = obtained;
         var per = obtained/400 * 100;
         document.getElementById('per').innerHTML = per+'%';
         if(per < 50){
            document.getElementById('grade').innerHTML = 'A';
         }

        
         else if(per > 50 &&  per < 60){
            document.getElementById('grade').innerHTML = 'C';
         }

         else if(per > 60 &&  per < 70){
            document.getElementById('grade').innerHTML = 'B';
         }

         else if(per > 70 &&  per < 100){
            document.getElementById('grade').innerHTML = 'A';
         }

         
    }
    

}