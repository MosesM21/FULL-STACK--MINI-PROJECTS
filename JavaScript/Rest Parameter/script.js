let receiverName = document.getElementById("receiver-name");
let sender = document.getElementById("sender");
let text = document.getElementById("label-text");

function showLabels(receiver, ...messages) {
  receiverName.innerText = receiver;
  text.innerText = messages.join(" ");
}
