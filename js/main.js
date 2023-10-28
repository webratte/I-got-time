function start() {
    let arrMonth=[];
    let arrWeekDay=[];
    let arrColor=[];
    let arrReaction=[];
    let arrAllReactions=[];
    arrRating=[];
    arrRatingVar=[];
    startSerial=(localStorage.getItem("startSerial"));
    if (startSerial==null) {
        startSerial=1;
    }
    startSerial=parseInt(startSerial); currentHistory=localStorage.getItem("currentHistory");
    if (currentHistory==null) {
        currentHistory=0;
    }
    currentHistory=parseInt(currentHistory);
    setLngIndex();
    hideTable();
    update();
};

function storeReactions() {
    arrAllReactions = JSON.parse(localStorage.getItem("arrAllReactions"));
    if (arrAllReactions==null) {
       arrAllReactions=[];
    }
   //If selfAddress already exist delete it.
    for (i=0;i<arrAllReactions.length;i++) {
        if (arrReaction[1]==arrAllReactions[i]) {
            arrAllReactions.splice(i-1, arrReaction.length);
        }
     }
    if (arrReaction[3]!="empty") {
        for (i=0;i<6;i++) {
            arrAllReactions.push(arrReaction[i]);
        }
    }
    localStorage.setItem("arrAllReactions", JSON.stringify(arrAllReactions));
//import own choice from received array to a arrReaction
arrReaction=["empty", "empty", "empty","empty","empty","empty"];
for (i=0;i<arrAllReactions.length;i=i+6) {
    if (arrAllReactions[i+1]==webxdc.selfAddr) {
        arrReaction[0]=arrHistory[0];
        for (a=0;a<6;a++) {
            arrReaction[a]=arrAllReactions[(i+a)];
        }
    }
}
if (arrAllReactions.length>0) {
    showSummeryTable();
}
};
function hideTable() {
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("hintChoiceDiv").style.display = "none";
    document.getElementById("summaryTable").style.display = "none";
    document.getElementById("hintSummeryDiv").style.display = "none";
    document.getElementById("btnNewDiv").style.display = "none";
    document.getElementById("btnSendReactionDiv").style.display = "none";
    document.getElementById("btnSendReaction").disabled = true;
};

function showTable () {
    document.getElementById("inputTable").style.display = "";
    document.getElementById("hintChoiceDiv").style.display = "";
    document.getElementById("btnNewDiv").style.display = "";
    document.getElementById("btnInputDiv").style.display = "none";
    document.getElementById("hintStartDiv").style.display = "none";
    document.getElementById("btnSendReactionDiv").style.display = "";
};

function activateBtn() {
    document.getElementById("btnSendReaction").disabled = false;
    document.getElementById("btnSendReaction").value=strBtnSend;
};

function showSummeryTable() {
    document.getElementById("summaryTable").style.display = "";
    document.getElementById("hintSummeryDiv").style.display = "";
    calculateSummary();
};

function calculateSummary() {
    let yes=0;
    let no=0;
    let maybe=0;
    let cellID=0;
    let thumbGreen="👍";
    let thumbYellow="🤔";
    let thumbRed="👎";
    for (a=3;a<6;a++) {
        if (arrAllReactions[a]!="empty") {
            for (i=a;i<arrAllReactions.length;i=i+6) {
                if (arrAllReactions[i]==0) {yes=yes+1};
                if (arrAllReactions[i]==2) {no=no+1};
                if (arrAllReactions[i]==4) {maybe=maybe+1};
                window["rating"+i]=(yes*3)+(maybe);
                arrRating[a-3]=(window["rating"+i]);
                arrRatingVar[a-3]=("summaryThumb"+(a-2).toString());
                yesStr=((Math.round(100/(yes+no+maybe)*yes*10)/10).toString())+"%";
                noStr=((Math.round(100/(yes+no+maybe)*no*10)/10).toString())+"%";
                maybeStr=((Math.round(100/(yes+no+maybe)*maybe*10)/10).toString())+"%";
                document.getElementById("summaryCell"+(cellID+1).toString()).innerHTML=yesStr;
                document.getElementById("summaryCell"+(cellID+2).toString()).innerHTML=maybeStr;
                document.getElementById("summaryCell"+(cellID+3).toString()).innerHTML=noStr;
            }
            cellID=cellID+3;
            yes=0;
            no=0;
            maybe=0;
        }
    }
    sortEntries();
    thumb1=thumbRed;
    thumb2=thumbRed;
    thumb3=thumbRed;
    if (arrRating[0]>0) {
        thumb1=thumbGreen;
        setRating();
        if (arrRating.length==2) {
            if (arrRating[0]==arrRating[1]) {
                thumb1=thumbGreen;
                thumb2=thumbGreen;
                setRating();
            }
            else {
                thumb1=thumbGreen;
                thumb2=thumbRed;
                setRating();
            }
        }
        if (arrRating.length==3) {
            if (arrRating[0]==arrRating[1]) {
            thumb2=thumbGreen;
            setRating();
            }
        
            if (arrRating[0]==arrRating[1] && arrRating[1]==arrRating[2]) {
                thumb1=thumbGreen;
                thumb2=thumbGreen;
                thumb3=thumbGreen;
                setRating();
            }
            if (arrRating[1]>arrRating[2] && arrRating[1]<arrRating[0]) {
                thumb2=thumbYellow;
                thumb3=thumbRed;
                setRating();
            }
            if (arrRating[1]==0) {
                thumb2=thumbRed;
                thumb3=thumbRed;
                setRating();
            }
        }
   }   else {
       setRating();
    }
};

function sortEntries() {
    sorted = false;
        while (sorted == false) {
            sorted = true;
            for (i=0;i<arrRating.length;i++) {
                if (arrRating[i]<arrRating[i+1]) {
                    sorted = false;
                    tempRating=arrRating[i+1];
                    arrRating[i+1]=arrRating[i];
                    arrRating[i]=tempRating;
                    tempRatingVar=arrRatingVar[i+1];
                    arrRatingVar[i+1]=arrRatingVar[i];
                    arrRatingVar[i]=tempRatingVar;
                }                    
            }
        }
    }; 

function setRating() {
    for (i=0;i<arrRating.length;i++) {
        document.getElementById(arrRatingVar[i]).innerHTML=window["thumb"+(i+1).toString()];
    }
};

function fillTable() {
    for (i=2;i<arrHistory.length;i=i+2) {
        dateShow=arrHistory[i];
        tempDay=new Date(dateShow);
        weekDayShow=arrWeekDay[tempDay.getDay()];
        timeShow=arrHistory[i+1];
        if (timeShow=="?") {
            timeShow="";
        }
        createDateStr();
        document.getElementById("titleChoice").innerHTML=arrHistory [1];
        fullDate=weekDayShow+"\n"+dateShow+"\n"+timeShow;
        document.getElementById("inputCell"+(i/2)).innerHTML=fullDate;
        document.getElementById("inptToggl"+(i/2)).innerHTML="Click";
    }
    
//set color of my own choice
if (arrReaction[3]!="empty" && arrReaction[1]==webxdc.selfAddr) {
    for (i=1;i<(arrHistory.length)/2;i++) {
        answer=arrReaction[(i+2)];
        document.getElementById("inptToggl"+i.toString()).innerHTML=arrColor[answer];
        document.getElementById("inptToggl"+i.toString()).style.background=arrColor[answer+1];
    }
}
};

function createDateStr() {
    const arrDate = dateShow.split("-");
    Y=arrDate[0];
    M=arrMonth[parseInt(arrDate[1]-1)];
    D=arrDate[2];
    dateShow=D+"."+M+Y;
};

function toggle(clickedID) {
//0=Yes, 2=No, 4=???
    tempClickedID=parseInt(clickedID.substr(9 ,1));
    //leave function if empty cell is clicked 
    if (tempClickedID>(arrHistory.length-2)/2) {
    return;
}
    tempActivate=0;
    answer=arrReaction[tempClickedID+2];
    if (answer=="empty") {
        answer=parseInt(answer);
        answer=-2;
    }
    else {
        answer=parseInt(answer);
    }
    if ((arrHistory.length/2)>tempClickedID) {
        answer=answer+2;
        if (answer==6) {
            answer=0;
        }    
    arrReaction[tempClickedID+2]=answer; document.getElementById("inptToggl"+tempClickedID.toString()).innerHTML=arrColor[answer];
        document.getElementById("inptToggl"+tempClickedID.toString()).style.background=arrColor[answer+1];
    }
    //Check if all dates are choosed and activate Send button
    for (i=1;i<(arrHistory.length)/2;i++) {
        if (arrReaction[i+2]!="empty") {
            tempActivate=tempActivate+1;
        }
    }
        if (tempActivate==(arrHistory.length-2)/2) {
           activateBtn();
        }
};
