function fillListHeader() {
    arrHistory = JSON.parse(localStorage.getItem("arrHistory"));
    for (i=2;i<arrHistory.length;i=i+2) {
        dateShow=arrHistory[i];
        tempDay=new Date(dateShow)
        weekDayShow=arrWeekDay[tempDay.getDay()];
        timeShow=arrHistory[i+1];
        if (timeShow=="?") {
            timeShow="";
        }
        createDateStr();
        fullDate=weekDayShow+"\n"+dateShow+"\n"+timeShow;
        document.getElementById("listHeader"+(i/2)).innerHTML=fullDate;
    }
 };

function extendTable() {
arrAllReactions = JSON.parse(localStorage.getItem("arrAllReactions"));
newTr = document.createElement("tr");
 // create rows
for (a=0;a<arrAllReactions.length;a=a+6) {
    window["newTr"+a] = document.createElement("tr");
    document.getElementById("listTable").appendChild(window["newTr"+a]);
  //create columns
    for(i=a;i<a+4;i++) {
        window["newTd"+i] = document.createElement("td");
    }
    for(i=a;i<a+4;i++) {
        window["newTd"+i].className="cell";
            if (i>a) {
                window["newTd"+i].innerHTML=arrColor[(arrAllReactions[i+2])];
                if (arrColor[(arrAllReactions[i+2])]==undefined) {
                    window["newTd"+i].innerHTML="------";
                }
                window["newTd"+i].style.background=(arrColor[(arrAllReactions[(i+2)])+1]);
                window["newTd"+i].className="cell";
            }
            else if (i==a) {
                window["newTd"+i].innerHTML=(arrAllReactions[i+2]);
            }
            document.getElementById("listTable").appendChild(window["newTd"+i]);
    }
}
};
