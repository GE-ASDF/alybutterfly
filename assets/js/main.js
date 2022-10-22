const formLanguage = $("#form-language");
    const resultado = $("#resultado span");
    
    

    function $(selector){
        return document.querySelector(selector);
    }

    function printLanguages(){
        languages.forEach(({id, language, vocabulary}) =>{
            formLanguage.innerHTML += `
                <div class="lang">
                    <label for="${id}">${language}</label>
                    <input type="radio" data-lang="${id}" name="lang" id="${id}">
                </div>
            `
        })
    }     

    function selectLanguageFromLanguages(clickedLanguage){
        const langSelected = clickedLanguage.target.dataset.lang
        languages.forEach(language =>{
            if(language.id === langSelected){
                const vocabulary = language.vocabulary.join(" ");
                resultado.innerHTML = vocabulary;
            }
        })
    }

    
    
    formLanguage.addEventListener("change", (e)=>{
        selectLanguageFromLanguages(e)
    })

    window.addEventListener("load", ()=>{
        printLanguages();
    })