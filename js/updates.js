function update() {
    resetApp=localStorage.getItem("resetApp");
    if (resetApp=="true") {
        localStorage.setItem("resetApp", "false");
        return;
    }

    let promise = window.webxdc.setUpdateListener((update) => {
        //value of arrHistory=Unix-Time as identifier, title, date, time, date...
        //value of arrReaction=Unix-Time of incominc arrHistory, selfAdress, selfName, codes for yes=0, no=2, ???=4
        arrReaction = update.payload.arrReaction;
        arrHistory = update.payload.arrHistory;
        tmpStartSerial = update.serial;
        //store array to have it aviable in all pages
        localStorage.setItem("arrHistory", JSON.stringify(arrHistory));
        currentHistory=localStorage.getItem("currentHistory");
        if (currentHistory<parseInt(arrHistory[0])) {
            newRequest();
        }
        else {
            storeReactions();
            fillTable();
            showTable();
        }
    }, startSerial-1);
};

function sendUpdate() {
        window.webxdc.sendUpdate({
         payload: {
           arrReaction, arrHistory, 
        },
        info,
    }, info);
};

function sendReaction() {
//0=Yes, 2=No, 4=???
    document.getElementById("btnSendReaction").disabled = true;
    document.getElementById("btnSendReaction").value=strBtnWasSent;
    arrReaction.splice(0, 3, arrHistory[0], webxdc.selfAddr, webxdc.selfName);
    info = webxdc.selfName+ " responded to the appointment request.";
     sendUpdate();
};

function newRequest() {
    arrAllReactions=[];
    localStorage.setItem("currentHistory", arrHistory[0]);
    localStorage.setItem("startSerial", tmpStartSerial);
    arrAllReactions=[];
    arrReaction=[];
    localStorage.setItem("arrHistory", JSON.stringify(arrHistory));
    localStorage.setItem("arrAllReactions", JSON.stringify(arrAllReactions));
    location.assign('./alert.html');
};
