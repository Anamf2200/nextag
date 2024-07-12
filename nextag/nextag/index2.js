function login(){
    let f = document.getElementById("exampleInputName1").value;
    let g = document.getElementById("exampleInputPassword2").value;
    if(f && g){
      alert('Login complete');
    } else {
      alert('Form incomplete');
    }

    console.log(f)
  }
  
  let h = document.getElementById('click1');
  h.addEventListener('click', login);