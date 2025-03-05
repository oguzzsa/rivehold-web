function addMessage(content, type) {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('li');
  messageElement.className = 'message ' + type;
  messageElement.textContent = content;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const userQuestion = userInput.value.trim();

  if (userQuestion !== '') {
    // Add outgoing message
    addMessage(userQuestion, 'outgoing');

    // Kullanıcının sorusunu askQuestionToAI fonksiyonu aracılığıyla Flask uygulamasına gönder
    askQuestionToAI(userQuestion).then(data => {
      // Flask uygulamasından gelen cevabı göster
      addMessage(data, 'incoming');
    });

    userInput.value = '';
  }
}

const userInput = document.getElementById('userInput');
userInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function startVideo() {
  var video = document.getElementById("video-background");
  video.play();
}

