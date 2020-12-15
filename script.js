    var InputText= document.querySelector("#inputText")
    var OutputText= document.querySelector("#outputText")

    var btnConvert= document.querySelector("#btn_Trans")

    var ServerURL = "https://api.funtranslations.com/translate/german-accent.json"

    function getTranslationURL(input){
        return ServerURL + "?"+"text="+ input;
    }

    function ClickEventHandler(){

        var UserInput= InputText.value ;
        fetch(getTranslationURL(UserInput))
        .then(Response => Response.json())
        .then(json => {
            OutputText.innerText= json.contents.translated;
        })
    }

    btnConvert.addEventListener("click", ClickEventHandler);