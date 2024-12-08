function rejectCookies(){
    try{
        document.getElementsByClassName("ot-pc-refuse-all-handler")[0].click()
    }
    catch(err){
        try{
            document.getElementById("onetrust-reject-all-handler").click()
        }
        catch(err){
            document.getElementById("onetrust-pc-btn-handler").click()
            for(let i = 0; i< document.getElementsByClassName("category-switch-handler").length; i++){
                document.getElementsByClassName("category-switch-handler")[i].click()
            }
            document.getElementsByClassName("save-preference-btn-handler onetrust-close-btn-handler")[0].click()
        }
    }
}
setTimeout(rejectCookies, 5000);


//TODO: optimize program by using lists to save IDs