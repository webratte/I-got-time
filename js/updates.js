function update() {
    let promise = window.webxdc.setUpdateListener((update) => {
        //value of arrHistory=Unix-Time as identifier,  title, date, time, date...
        //value of arrReaction=Unix-Time of incominc arrHistory, selfAdress, selfName, codes for yes=0, no=2, ???=4
        arrHistory = update.payload.arrHistory;
        arrReaction = update.payload.arrReaction;
        storeReactions();
        fillTable();
        showTable();
    }, );
};

function sendUpdate() {
    //info = "Temporary Infomessage"
        storeReactions();
        window.webxdc.sendUpdate({
         payload: {
            arrHistory, arrReaction,
        },
        info,
    }, info);
};

function sendReaction() {
//0=Yes, 2=No, 4=???
    arrReaction=[];
    document.getElementById("btnSendReaction").disabled = true;
    document.getElementById("btnSendReaction").value=strBtnWasSent;
    arrReaction.push(arrHistory[0], webxdc.selfAddr, webxdc.selfName);
    for (i=1;i<(arrHistory.length-1)/2;i++) {
            arrReaction.push(localStorage.getItem("answer"+i))
     }
     sendUpdate();
};
