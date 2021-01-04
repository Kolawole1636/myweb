//document.write("<h1> hello world my people</h1>")//



function fn1(){
    var fname=document.getElementById('Fname');
    var lname=document.getElementById('Lname');
    var uname=document.getElementById('Uname');
    var num=document.getElementById('Mobile');
    var regx = /[A-Z]{6}/ 
         //alert('this is mine: '+k)//
        if(fname.value.trim()=='' ){

          // alert('pls provide your user name')//
           fname.style.border='1px solid red'
            document.getElementById('nof').style.visibility='visible';
            fname.focus()
            return false;
        } 
        
        
        /*else if(regx.test(fname)==false) {
            fname.style.border='1px solid red'
            document.getElementById('nof').style.visibility='hidden';
            document.getElementById('nop').style.visibility='visible';
            fname.focus()
            return false;
        }*/

        else if(lname.value.trim()=='' ) {
            document.getElementById('nop').style.visibility='hidden';
            fname.style.border='1px solid white'
            lname.style.border='1px solid red'
            document.getElementById('nof').style.visibility='hidden';
            document.getElementById('nol').style.visibility='visible';
            lname.focus()
            return false;
        }

        
        else if(uname.value.trim()=='' ) {
            lname.style.border='1px solid white'
            uname.style.border='1px solid red'
            document.getElementById('nof').style.visibility='hidden';
            document.getElementById('nol').style.visibility='hidden';
            document.getElementById('nou').style.visibility='visible';
            uname.focus()
            return false;
        }
        
        else if(num.value.trim()=='' ) {
            uname.style.border='1px solid white'
            num.style.border='1px solid red'
            document.getElementById('nof').style.visibility='hidden';
            document.getElementById('nol').style.visibility='hidden';
            document.getElementById('nou').style.visibility='hidden';
            document.getElementById('nom').style.visibility='visible';
            num.focus()
            return false;
        }






        else {

            return true;
        }
  }















