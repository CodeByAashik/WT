function calculate(){
    let q1 = Number(document.getElementById('c').value);
    let q2 = Number(document.getElementById('a').value);
    let q3 = Number(document.getElementById('r').value);
    let q4 = Number(document.getElementById('m').value);

    let total = q1*100+q2*500+q3*200+q4*1000;
    document.getElementById('calculate').value=total;
}