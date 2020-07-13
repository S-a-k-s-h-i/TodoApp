var list=document.getElementById('list')
let dateObj = new Date();
            let month = String(dateObj.getMonth() + 1).padStart(2, '0');
            let day = String(dateObj.getDate()).padStart(2, '0');
            let year = dateObj.getFullYear();
            let output = day + '-' + month + '-' + year;
document.getElementById('date').innerHTML=output;

//clear all
function removeAll(){
    document.getElementById('list').innerHTML='';
}

//adding a list element
function AddMe(){
    addlis(list);
    document.getElementById('addinput').value='';
    document.getElementById('addinput').focus();
}
function addlis(targetul){
    var inputText=document.getElementById('addinput').value;
    var li=document.createElement('li');
    var textNode=document.createTextNode(inputText+' ')
    var rad=document.createElement('input');
    var trash=document.createElement('i');

    if(inputText!=''){
        trash.className='fa fa-trash-o';
        trash.setAttribute('onclick','removeMe(this)');
        rad.setAttribute('type','checkbox');
          rad.className='custom-control input';
//        rad.onclick = updateItem();
        rad.setAttribute('onclick','updateItem(inputText)')
        li.appendChild(rad);
        li.append(rad);
        li.appendChild(textNode);

        targetul.appendChild(li);
        li.append(trash);
    }else{
        alert('Please enter a todo');
    }
}
function removeMe(item){
    var p=item.parentElement;
    p.parentElement.removeChild(p);
}
function updateItem(inputText) {
        if (document.getElementById("checkbox").checked) {
            inputText.style.textDecoration = "line-through"
        }
        }