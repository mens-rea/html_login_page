let conversation = "";
let previous = "";

let sendMessage = function(){
    let message = document.getElementById("field").value;
    if(previous == message){
        alert("do not spam");
    }
    else{
        if(message!=""){
            conversation = conversation + "</br>" + "you: " + message;
            document.getElementById("chatbox").innerHTML = conversation;
    
            previous = message;
        }
        else{
            alert("you can't send empty messages");
        }
    }
};