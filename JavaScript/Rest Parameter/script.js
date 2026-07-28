function getLabelsHtml(text, sender, ...namesObj) {
  const labels = namesObj.map((namesObj) => {
    return `<div class="label">
      <p>${text}</p>
      <p>From: ${sender}</p>
      <p>To: ${namesObj.name}</p>
    </div>`;
  });

  return labels.join("");
}

const text = "Thank you";
const sender = "Tom Cat";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Jerry Mouse" },
  { name: "Spike Bulldog" },
);
