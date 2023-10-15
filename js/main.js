function storeReactions(userExist) {
    arrAllReactions = JSON.parse(localStorage.getItem("arrAllReactions"));
    if (arrAllReactions==null) {
       arrAllReactions=[];
   }
   //If selfAddress already exist delete it.
    for (i=0;i<arrAllReactions.length;i++) {
        if (arrReaction[1]==arrAllReactions[i]) {
            arrAllReactions.splice(arrReaction[1], arrReaction.length-1);
        }
     }
            for (i=1;i<arrReaction.length;i++) {
                arrAllReactions.push(arrReaction[i]);
                localStorage.setItem("arrAllReactions", JSON.stringify(arrAllReactions));
                //clear arrReaction if its safed in arrAllReactions
                arrReaction=[];
    
    }
};

function hideTable() {
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("hintChoiceDiv").style.display = "none";
    document.getElementById("btnListDiv").style.display = "none";
    document.getElementById("btnSendReactionDiv").style.display = "none";
    document.getElementById("btnSendReaction").disabled = true;
};

function showTable () {
    document.getElementById("inputTable").style.display = "";
    document.getElementById("hintChoiceDiv").style.display = "";
    document.getElementById("btnListDiv").style.display = ""; document.getElementById("btnInputDiv").style.display = "none";
    document.getElementById("hintStartDiv").style.display = "none";
    document.getElementById("btnSendReactionDiv").style.display = "";
};

function activateBtn() {
    document.getElementById("btnSendReaction").disabled = false;
    document.getElementById("btnSendReaction").value=strBtnSend;
};

function fillTable() {
    for (i=2;i<arrHistory.length;i=i+2) {
        dateShow=arrHistory[i];
        tempDay=new Date(dateShow)
        weekDayShow=arrWeekDay[tempDay.getDay()];
        timeShow=arrHistory[i+1];
        if (timeShow=="?") {
            timeShow="";
        }
        createDateStr();
       document.getElementById("titleChoice").innerHTML=arrHistory [1]; fullDate=weekDayShow+"\n"+dateShow+"\n"+timeShow;
        document.getElementById("inputCell"+(i/2)).innerHTML=fullDate;
    }
    //set color of my own choice
    if (arrReaction.length>0) {
        for (i=3;i<arrReaction.length;i++) {
        }
    }
    //TODO gespeichertes array auslesen und selfAddres vergleichen. Treffe ich meinen Eintrag, dann die Farbe setzen
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
    tempActivate=0;
    answer=(localStorage.getItem("answer"+tempClickedID));
    if (answer==null) {
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
        document.getElementById("inptToggl"+tempClickedID.toString()).innerHTML=arrColor[answer];
        document.getElementById("inptToggl"+tempClickedID.toString()).style.background=arrColor[answer+1];
        localStorage.setItem("answer"+tempClickedID, answer);
        
    }
    //Check if all dates are choosed and activate Send button
    for (i=1;i<(arrHistory.length-1)/2;i++) {
            if (localStorage.getItem("answer"+i)!=null) {
                tempActivate=tempActivate+1
            }
        }
        if (tempActivate==(arrHistory.length-2)/2) {
           activateBtn();
        }
};
