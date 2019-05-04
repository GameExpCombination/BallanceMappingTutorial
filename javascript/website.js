window.addEventListener("load", remove_url);
//document.addEventListener("DOMSubtreeModified", remove_url);

function remove_url() {
    var divCollection=document.getElementsByTagName("div");
    for(var i=0;i<divCollection.length;i++){
        if(divCollection[i].classList.contains("md-footer-nav")){
            divCollection[i].parentNode.removeChild(divCollection[i]);
        }
        /*
        if(divCollection[i].classList.contains("md-footer-copyright")){
            divCollection[i].innerHTML="Powered by <a href=\"https://www.mkdocs.org\">MkDocs</a> and <a href=\"https://squidfunk.github.io/mkdocs-material/\">Material for MkDocs</a>. Text is available under the <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC-BY-NC-SA 4.0</a>.";
        }
        */
    }
}