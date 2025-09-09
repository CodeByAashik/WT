function valid(){
    let n=document.getElementById('name').value;
    let ne=document.getElementById('name-err');

    let e=document.getElementById('e').value;
    let ee = document.getElementById('e-err');
    let epat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if(n.length<8){
        ne.innerHTML="Name is too short";
        flag=0; 
    }else if(n === '' || n === null){
        ne.innerHTML="Name cant be empty";
        flag=0; 
    }else{
        ne.innerHTML="Success!!!!";
        flag=1; 
    }

    

    if(e===''||e==='null'){
       ee.innerHTML="Email cant be empty!";
       flag=0; 
    }else if(e.search(epat)<0){
        ee.innerHTML="Email ko patetern milena";
        flag=0;

    }else{
        ee.innerHTML="Success";
        flag=1;
    }

    if(flag){
        return true;
    }else{
        return false;
    }
}