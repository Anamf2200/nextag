function submit() {
    let a = document.getElementById('exampleInputName').value;
    let b = document.getElementById('exampleInputEmail1').value;
    let c = document.getElementById('exampleInputPassword1').value;
    let d = document.getElementById('flexRadioDefault1').checked

  
    if (a && b && c && d) {

      
      alert('Your order is placed');
    }
    
    else {
        alert('Form incomplete');
      }
  }
  
  let e = document.getElementById('click');
  e.addEventListener('click', submit);


 


 