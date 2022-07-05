let mic = document.getElementById("mic");
let Chatareamain = document.querySelector('.chatarea-main');
let Chatareaouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition ;
const recognition = new SpeechRecognition();
let intro = ["Hello , I am Chitti","Hi,I am a Robo","Hello,My Name is Chitti"];
let help = ["How may i assist you ?","how can I help you?","What can i do for you ?"];
let greetings =["I am good you little piece of love","i am fine","what about you","don't want to talk","i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let love = ["Love you too","Love you millions","You are my Darling","Kiss me","we are only friends"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
function showusermsg(usermsg){
    let output ='';
    output += `<div class="chatarea-inner user">${usermsg}</div>`
    Chatareaouter.innerHTML += output;
    return Chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output ='';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`
    Chatareaouter.innerHTML += output;
    return Chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is text message ";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('I love you' || ' I love you so much')){
        let finalresult = love[Math.floor(Math.random() * love.length)];
        speech.text = finalresult;
    }
   if(message.includes('talk to you ' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    Chatareamain.appendChild(showchatbotmsg(speech.text));

}

recognition.onresult=function(event){
    let resultIndex = event.resultIndex;
    let transcript = event.results[resultIndex][0].transcript;
    Chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function(){
    mic.style.backgroundColor = " #ff3b3b";
}

mic.addEventListener("click" , ()=>{
    mic.style.backgroundColor="green";
    recognition.start();
    console.log("activated");
})
