function changeLanguage() {
     browserLang = window.navigator.language;
     browserLang = browserLang.slice(0, 2).toLowerCase();
          if (browserLang == "de") {
               //german
               arrMonth=["Jan.", "Feb.", "Mär.", "Apr.", "Mai ", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."];
               arrWeekDay=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
               arrColor = ["Ja","#afe35ff3", "Nein", "#ff7e40", "???", "#e3c44cf3"];
               strBtnSend = "Speichern und Senden";
               strBtnWasSent = "Update wurde gesendet";
               strBtnCancel = "Abbrechen";
               strBtnInput = "Neue Termine vorschlagen";
               strBtnNew = "Neue Anfrage starten";
               strBtnBack = "Zurück";
               strBtnContinue = "Trotzdem weiter";
               strBtnOk = "Danke für den Hinweis";
               strHintInput = "Geben Sie die Terminvorschläge ein. Nicht benötigte Felder einfach leer lassen. Der Name des Termins muss ausgefüllt werden.";
               strHintChoice = "Klicken Sie in die Tabelle um zwischen \"Ja\", \"Nein\" und \"Vielleicht\" zu wählen.";
               strHintStart = "Geben Sie bis zu drei Termine für Ihr Event an. Alle Gruppenmitglieder können dann festlegen welcher Termin passt und welcher nicht.";
               strHintSummery = "Für Details unten stehende Tabelle anklicken.";
               strHintNew = "Wenn Sie fortfahren, dann wird die Aktuelle Anfrage überschrieben und durch die neue Anfrage ersetzt. Es wird keine Benachrichtigung ausgelöst.";
               strHintNew1 = "Wenn eine Benachrichtigung ausgelöst werden oder die frühere Anfrage bestehen bleiben soll, dann klicken Sie jetzt \"Abbrechen\" und nutzen die Teilen-Funktion des Messengers um die App erneut zu senden.";
               strAlertNewRequest = "Es wurde eine neue Terminabfrage eingestellt.";
               strError = "Bitte rot umrandete Felder ausfüllen."
               strLabelTitle = "Name des Termins";
               strLabelDate = "Datum";
               strLabelTime = "Uhrzeit";
              }
          else if (browserLang == "fr") {
               //french
               arrMonth=["Jan.", "Fev.", "Mar.", "Avr.", "Mai ", "Juin ", "Juil.", "Août.", "Sep.", "Oct.", "Nov.", "Dec."];
               arrWeekDay=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
               arrColor = ["Oui","#afe35ff3", "Non", "#ff7e40", "???", "#e3c44cf3"];
               strBtnSend = "Enregistrer et envoyer";
               strBtnWasSent = "La mise à jour a été envoyée";
               strBtnCancel = "Annuler";
               strBtnInput = "Proposer de nouvelles dates";
               strBtnNew = "Démarrer une nouvelle demande";
               strBtnBack = "Dos";
               strBtnContinue = "Toujours plus loin";
               strBtnOk = "Merci pour le conseil";
               strHintInput = "Entrez les dates proposées. Laissez simplement les champs qui ne sont pas obligatoires vides. Le nom du rendez-vous doit être renseigné.";
               strHintChoice = "Cliquez sur le tableau pour choisir entre \"Oui\", \"Non\" et \"Peut-être\".";
               strHintStart = "Entrez jusqu'à trois dates pour votre événement.  Tous les membres du groupe peuvent alors décider quelle date est appropriée ou non.";
               strHintSummery = "Cliquez sur le tableau ci-dessous pour plus de détails."
               strHintNew = "Si vous continuez, la demande actuelle sera écrasée et remplacée par la nouvelle demande. Aucune notification n'est déclenchée.";
               strHintNew1 = "Si vous souhaitez qu'une notification soit déclenchée ou que la demande précédente soit conservée, cliquez maintenant sur \"Annuler\" et utilisez la fonction de partage de Messenger pour renvoyer l'application.";
               strAlertNewRequest = "Une nouvelle requête de rendez-vous a été définie.";
               strError = "Veuillez remplir les champs entourés en rouge."
               strLabelTitle = "Nom du rendez-vous";
               strLabelDate = "Date";
               strLabelTime = "Temps";
               }
          else {
               //fallback
               arrMonth=["Jan.", "Feb.", "Mar.", "Apr.", "May ", "June ", "July ", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
               arrWeekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
               arrColor = ["Yes","#afe35ff3", "No", "#ff7e40", "???", "#e3c44cf3"];
               strBtnSend = "Save and send";
               strBtnWasSent = "Update has been sent";
               strBtnCancel = "Cancel";
               strBtnInput = "Suggest new dates";
               strBtnNew = "Start new request";
               strBtnBack = "Back";
               strBtnContinue = "Still further";
               strBtnOk = "Thanks for the tip";
               strHintInput = "Enter the suggested dates. Simply leave fields that are not required blank. The name of the appointment must be filled out.";
               strHintChoice = "Click on the table to choose between \"Yes\", \"No\" and \"Maybe\".";
               strHintStart = "Enter up to three dates for your event.  All group members can then decide which date is suitable and which is not."
               strHintSummery = "Click on the table below for details.";
               strHintNew = "If you continue, the current request will be overwritten and replaced with the new request. No notification is triggered.";
               strHintNew1 = "If you want a notification to be triggered or the previous request to remain, then click \"Cancel\" now and use the messenger's share function to resend the app.";
               strAlertNewRequest = "A new appointment query has been set.";
               strError = "Please fill out the fields outlined in red.";
               strLabelTitle = "Name of the appointment";
               strLabelDate = "Date";
               strLabelTime = "Time";
          }
};

function setLngIndex() {
     changeLanguage();
     document.getElementById("btnInput").value=strBtnInput;
     document.getElementById("hintChoice").innerHTML=strHintChoice;
     document.getElementById("hintStart").innerHTML=strHintStart;
     document.getElementById("btnNew").value=strBtnNew;
     document.getElementById("btnSendReaction").value=strBtnSend;
     document.getElementById("hintSummery").innerHTML=strHintSummery;
};

function setLngInput() {
     changeLanguage();
     document.getElementById("labelTitle").innerHTML=strLabelTitle;
     document.getElementById("hintInput").innerHTML=strHintInput;
     document.getElementById("labelDate").innerHTML=strLabelDate;
     document.getElementById("labelTime").innerHTML=strLabelTime;
     document.getElementById("btnSend").value=strBtnSend;
     document.getElementById("btnCancel").value=strBtnCancel;
     document.getElementById("errorMsg").innerHTML=strError;
};

function setLngList() {
    changeLanguage();
    document.getElementById("btnBack").value=strBtnBack;
};

function setLngNew() {
     changeLanguage();
     document.getElementById("hintNew").innerHTML=strHintNew;
     document.getElementById("hintNew1").innerHTML=strHintNew1;
     document.getElementById("btnCancelNew").value=strBtnCancel;
     document.getElementById("btnContinue").value=strBtnContinue;
};

function setLngAlert() {
     changeLanguage();
     arrHistory=JSON.parse(localStorage.getItem("arrHistory"));
     document.getElementById("alertNewRequest").innerHTML=strAlertNewRequest;
     document.getElementById("btnOk").value=strBtnOk;
}
