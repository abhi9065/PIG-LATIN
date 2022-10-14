var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){

    return serverURL + "?" + "text=" + text

}


function errorHandler(error){
    console.log("error occured",error)
    alert("something went wrong the server please after some time ")

}



function clickhandler(){


    
    var inputText = txtInput.value;
    
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => { 
     var translatedText =  json.contents.translated;
    outputDiv.innerText =  translatedText
 })

    .catch(errorHandler)
    
    }

 

btnTranslate.addEventListener("click", clickhandler);



