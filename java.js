let form = document.querySelector("form");
let chatarea = document.querySelector("#chat-area");
let inputmessage = document.querySelector("#message");

async function getbotanswer() {
  const response = await fetch("bot_answer.json");
  const data = await response.json();

  form.onsubmit = (e) => {
    e.preventDefault();
    let message = inputmessage.value.trim().toLowerCase();

    if (message === "") {
      alert("please enter message");
    } else {
      data.forEach((answer) => {
        if (message === answer.my_msg) {
          chatarea.innerHTML += `<p class="msg">${answer.my_msg}</p>`;
          setTimeout(() => {
            chatarea.innerHTML += `<p class="answer">${answer.bot_answer}</p>`;
          }, Math.floor(Math.random() * 10000));
        }
      });
    }   

    inputmessage.value = "";
  };
}
getbotanswer();
// convert
