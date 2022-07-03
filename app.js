var list = document.getElementById('list')

function additem(){
    var text = document.getElementById('text')
    
    var li = document.createElement('li')
    var litext = document.createTextNode(text.value + " ")
    li.appendChild(litext)
  
    

    var delbtn = document.createElement('button')
    var delbtntxt = document.createTextNode('delete')
    delbtn.appendChild(delbtntxt)
    delbtn.setAttribute("onclick","deletebtn(this)")
    li.appendChild(delbtn)
    

    var editbtn = document.createElement('button')
    var editbtntxt = document.createTextNode('Edit')
    editbtn.appendChild(editbtntxt)
    editbtn.setAttribute("onclick","editbtn(this)")
    li.appendChild(editbtn)



    list.appendChild(li)
    text.value = ""

    

    console.log(deletebtn)

}
function deletebtn(d){
    d.parentNode.remove()
}
function editbtn(e){
    var update = prompt('Enter Updated Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = update
}
function deleteall(){
    list.innerHTML = " "
}
