var inputText = document.getElementById("text");
var list = document.getElementById("listGroup");

inputText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        text = inputText.value;
        if (text.length > 0)
            addListItem(text);
        else
            alert("Please enter some text");
    }
})

//add item to list
function addListItem(text) {
    if (text.length === 0) {
        alert("Please enter some text");
    }
    else {
        let newListELement = document.createElement('li');
        newListELement.className = "listElement"

        let spanTag = document.createElement('span');

        // check icon
        let okImg = document.createElement('img');
        okImg.src = "https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png";
        okImg.className = "ok";
        spanTag.appendChild(okImg);

        // update icon
        let updateImg = document.createElement('img');
        updateImg.src = "https://img.icons8.com/material-outlined/24/000000/edit--v1.png";
        updateImg.className = "update";
        spanTag.appendChild(updateImg);
        // up arrow
        let upImg = document.createElement('img');
        upImg.src = "https://img.icons8.com/material-outlined/24/000000/up.png";
        upImg.className = "up";
        spanTag.appendChild(upImg);
        // down arrow
        let downImg = document.createElement('img');
        downImg.src = "https://img.icons8.com/material-outlined/24/000000/down--v1.png";
        downImg.className = "down";
        spanTag.appendChild(downImg);
        // delete icon
        let deleteImg = document.createElement('img');
        deleteImg.src = "https://img.icons8.com/material-outlined/24/000000/delete-sign.png";
        deleteImg.className = "delete";
        spanTag.appendChild(deleteImg);

        // appending elements
        newListELement.appendChild(document.createTextNode(text));
        newListELement.appendChild(spanTag);
        list.appendChild(newListELement);
    }
}

//remove particular list item
list.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target.className == 'delete') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        p2.remove();
    }
    if (e.target.className == 'ok') {

        let li = e.target;
        let p2 = p1.parentNode.parentNode;
        li.style.display = "none";

        p2.setAttribute("contenteditable", "false");
    }
    if (e.target.className == 'update') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        p2.setAttribute("contenteditable", "true");
        // p2.remove();
    }
    if (e.target.className == 'up') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        // p2.remove();
    }
    if (e.target.className == 'down') {
        let li = e.target;
        let p1 = li.parentNode;
        let p2 = p1.parentNode;
        // p2.remove();
    }
});