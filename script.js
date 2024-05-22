const Buttons = document.querySelectorAll(".example_query");
const ChatInput = document.querySelector(".chat_input");
const SendButton = document.querySelector(".send_btn");

for (const button of Buttons){
    button.addEventListener("click", async (event) =>{
        const targetElement= event.target;
        if (targetElement.classList.contains("example_query")){
            event.stopPropagation();
            const ButtonText = targetElement.textContent.trim();
            ChatInput.value = "";
            ChatInput.value = ButtonText;
        }
    });

}

SendButton.addEventListener("click",()=>{
    ChatInput.value = "";
    alert("Message Send");
});



