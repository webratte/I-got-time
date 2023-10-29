function save() {
    CurrentTime = Date.now();
    arrHistory=[webxdc.selfName];
    window.error=false;
    document.getElementById("errorMsgDiv").style.display="none";
    readValues ();
    if (window.error==true) {
        eraseValues ();
    }
    else {
        //input is finished. Ready for send
        arrReaction=["empty", "empty", "empty","empty","empty","empty"];
        info = webxdc.selfName+" has posted a new appointment request: "+title;
        whoAsked = webxdc.selfName+" asked"
        sendUpdate();
        location.assign("./index.html");
    }
};

function readValues() {
    title = document.getElementById("inputTitle").value;
    if (title == "") {
        window.tempID="inputTitle";
        setErrorColor ();
    }
    else {
        arrHistory.push(title);
    }
    let dateSet = 3;
    for (let i=1;i<4;i++) {
        date = document.getElementById("inputDate"+i.toString()).value;
        time = document.getElementById("inputTime"+i.toString()).value;
        if (date!="") {
            dateSet=dateSet-1;
            storeValues ();
        }
        if (date=="" && time!="") {
            dateSet=dateSet-1;
            window.tempID="inputDate"+i.toString();
            setErrorColor ();
        }
        else {
            window.tempID="inputDate"+i.toString();
            revertRedBorder(window.tempID);
        }
        
     }
     if (dateSet==3) {
            window.tempID="inputDate1";
            setErrorColor ();
        }
};

function storeValues() {
    if (time=="") {
        time="?";
    }
    arrHistory.push(window.date, window.time);
    time="";
};

function eraseValues() {
    localStorage.setItem("title", "");
    arrHistory=[];
};

//set red border if some needed field is empty
function setErrorColor () {
    window.error=true;
    document.getElementById("errorMsgDiv").style.display="";
    document.getElementById(window.tempID).style.borderColor="#ff1554";
};

function revertRedBorder(tempID) {
    document.getElementById(tempID).style.borderColor="grey";
};
