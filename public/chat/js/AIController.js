export class AIControls {
    constructor(chatControl, historyControl) {

        function showPopUp() {
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.textContent = 'Please wait a moment!';
            document.body.appendChild(popup);
          
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 2500);
        }

        document.addEventListener('getChat', async () => {
            if(chatControl.sendClientChat) {
                showPopUp();
                let getClientChat = chatControl.sendClientChat;
                let AIAnswer = null;
                try {                    
                    const response = await fetch(`/run-nlp?${new URLSearchParams({
                        input: getClientChat
                    })}`);
                    const data = await response.json();
                    AIAnswer = data;
                } catch(error) {
                    AIAnswer = 'Sorry there was an error!';
                    console.error(error);
                }
                let index = historyControl.data.findIndex(function(item) {
                    return item.id === historyControl.onChatId;
                });
                historyControl.data[index].AI.push(AIAnswer);
                historyControl.saveChat();
                document.dispatchEvent(new Event('afterSavingAIChat'));
            }
        });
    }
}