let inputspace = document.getElementById('operatorBox');

//function to display numbers and operators
function display(num){
    inputspace.value += num;
}

//function to clear display
function clea(){
    inputspace.value = inputspace.value.slice(0,0);
}

//function to delete
function del(){
    inputspace.value = inputspace.value.slice(0,-1);
}

//function to equate
function equa(){
    inputspace.value = eval(inputspace.value);
}
