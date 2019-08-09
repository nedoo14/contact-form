var userList = []
console.log("hi");
function addComment(){
var comments = document.getElementById('commentList');
var username = document.getElementById('commentUser').value;
var comment = document.getElementById('commentInput').value;
if (username == ""){
 alert("Username field is empty. Please fill out both text fields")
}
else{
if (comment == ""){
 alert("Comment field is empty. Please fill out both text fields")
}
else{
var contentSpot = document.createElement('li');
var usernameSpot = document.createElement('h3');
var commentSpot = document.createElement('p');
usernameSpot.innerHTML = username;
commentSpot.innerHTML = comment;
contentSpot.appendChild(usernameSpot);
contentSpot.appendChild(commentSpot);
comments.appendChild(contentSpot);
contentSpot.classList.add("card");
}}}
function removeComments(){
var comments = document.getElementById('commentList');
comments.innerHTML = "";
}
