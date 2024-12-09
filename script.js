function rejectCookies(){
    if(location.href.includes("ok.ru") == true){
        document.getElementsByClassName("button-pro __solid-white cb_setup js-cb_setup")[0].click()
        document.getElementsByName("button_save_choice")[0].click()
    }
    else if(location.href.includes("10minutemail.net") == true){
        document.getElementsByClassName("fc-button-label")[1].click()
        for (let i = 0; i<document.getElementsByClassName("fc-slider-el").length; i++){
            document.getElementsByClassName("fc-slider-el")[i].click()
        }
    }
    else{
        function cookieBannarManualSelect(){
            document.getElementById("onetrust-pc-btn-handler").click()
            for(let i = 0; i< document.getElementsByClassName("category-switch-handler").length; i++){
                document.getElementsByClassName("category-switch-handler")[i].click()
            }
            document.getElementsByClassName("save-preference-btn-handler onetrust-close-btn-handler")[0].click()
        }
        try{
            document.getElementsByClassName("ot-pc-refuse-all-handler")[0].click()
        }
        catch(err){
            try{
                document.getElementById("onetrust-reject-all-handler").click()
            }
            catch(err){
                cookieBannarManualSelect()
            }
        }
    }
}
setTimeout(rejectCookies, 5000);


//TODO: optimize program by using lists to save IDs