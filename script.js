try{
    document.getElementsByClassName("ot-pc-refuse-all-handler")[0].click()
    document.getElementById("onetrust-reject-all-handler").click()
}
catch(err){
    console.log("No cookies to reject")
}



