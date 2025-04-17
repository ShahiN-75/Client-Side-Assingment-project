function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (message !== "") {
      const chatBody = document.getElementById("chat-body");
  
      // User message
      const userMsg = document.createElement("div");
      userMsg.className = "chat-message user";
      userMsg.textContent = message;
      chatBody.appendChild(userMsg);
  
      // Simulated bot reply
      const botReply = document.createElement("div");
      botReply.className = "chat-message bot";
      botReply.textContent = "Thanks for your message! We'll get back to you soon.";
      setTimeout(() => {
        chatBody.appendChild(botReply);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 800);
  
      input.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
  
  // Close chat
  document.getElementById("close-chat").addEventListener("click", () => {
    document.querySelector(".chat-box").style.display = "none";
  });
  
  // Hit enter to send
  document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
  