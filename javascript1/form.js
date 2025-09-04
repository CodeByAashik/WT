function valid() {
    let p = document.getElementById('pass').value;
    let cp = document.getElementById('cpass').value;
    let ppat = /^A[0-9]{3}[a-z]{4}/i;

    if (p === '' || p === null) {
        alert('Please insert Password');
        return false;
    } else if (p.length < 8) {
        alert('Password length is too short');
        return false;
    } else if (p.search(ppat) < 0) {
        alert('Pattern of password didnt match');
        return false;
    } else if (cp === '' || cp === null) {
        alert('Please insert Confirm Password');
        return false;
    } else if (p !== cp) {
        alert('Password and Confirm Password didn\'t match');
        return false;
    } else {
        alert('Success!');
        return true;
    }
}