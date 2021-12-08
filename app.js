var btnTranslate = document.querySelector("#Translate-button");
var textInput = document.querySelector("#Translate-input");
var outputDiv = document.querySelector("#Translate-output"); 

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(serverURL) {
    return serverURL + "?" + "text=" + textInput.value
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("something is wrong or rate limit exceeded")
}


function clickEventHandler(){
    fetch(getTranslationURL(serverURL))
         .then (response=> response.json())
         .then (json => {
             var translatedText = json.contents.translated;
             outputDiv.innerText = translatedText;
             })
         .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)