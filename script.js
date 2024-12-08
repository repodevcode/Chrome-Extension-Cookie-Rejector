function rejectCookies(){
    try{
        document.getElementsByClassName("ot-pc-refuse-all-handler")[0].click()
    }
    catch(err){
        document.getElementById("onetrust-reject-all-handler").click()
    }
}
setTimeout(rejectCookies, 5000);
setTimeout(rejectCookies, 10000);
setTimeout(rejectCookies, 15000);


