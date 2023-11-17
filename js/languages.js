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
               strBtnHelp = "Hilfe";
               strBtnBack = "Zurück";
               strBtnOk = "Danke für den Hinweis";
               strHintInput = "Geben Sie die Terminvorschläge ein. Nicht benötigte Felder einfach leer lassen. Der Name des Termins muss ausgefüllt werden.";
               strHintChoice = "Klicken Sie in die Tabelle um zwischen \"Ja\", \"Nein\" und \"Vielleicht\" zu wählen.";
               strHintStart = "Geben Sie bis zu drei Termine für Ihr Event an. Alle Gruppenmitglieder können dann festlegen welcher Termin passt und welcher nicht.";
               strHintSummery = "Für Details unten stehende Tabelle anklicken.";
               strHintHelp = "Wie geht man vor um eine neue Anfrage zu stellen?\n\nBenutzen Sie dazu die \"Teilen\"-Funktion des Messengers um die App erneut zu versenden.";
               strHintHelp1 = "\n\nWie funktioniert das Rating?\n\n\"Ja\" bekommt 3 Punkte, \"Vielleicht\" bekommt 1 Punkt und \"Nein\" bekommt 0 Punkte.\nDer Termin mit den meisten Punkten bekommt 👍\nDer zweite bekommt 🤔\nDer letzte bekommt 👎";
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
               strBtnHelp = "Aide";
               strBtnBack = "Dos";
               strBtnOk = "Merci pour le conseil";
               strHintInput = "Entrez les dates proposées. Laissez simplement les champs qui ne sont pas obligatoires vides. Le nom du rendez-vous doit être renseigné.";
               strHintChoice = "Cliquez sur le tableau pour choisir entre \"Oui\", \"Non\" et \"Peut-être\".";
               strHintStart = "Entrez jusqu'à trois dates pour votre événement.  Tous les membres du groupe peuvent alors décider quelle date est appropriée ou non.";
               strHintSummery = "Cliquez sur le tableau ci-dessous pour plus de détails."
               strHintHelp = "Comment procéder pour faire une nouvelle demande?\n\nUtilisez la fonction \"Partager\" de Messenger pour renvoyer l'application.";
               strHintHelp1 = "\n\nComment fonctionne la notation?\n\n\"Oui\" obtient 3 points, \"Peut-être\" obtient 1 point et \"Non\" obtient 0 point.\nLe rendez-vous avec le plus de points obtient 👍\nLe deuxième obtient 🤔\nLe dernier obtient 👎";
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
               strBtnHelp = "Help";
               strBtnBack = "Back";
               strBtnOk = "Thanks for the tip";
               strHintInput = "Enter the suggested dates. Simply leave fields that are not required blank. The name of the appointment must be filled out.";
               strHintChoice = "Click on the table to choose between \"Yes\", \"No\" and \"Maybe\".";
               strHintStart = "Enter up to three dates for your event.  All group members can then decide which date is suitable and which is not."
               strHintSummery = "Click on the table below for details.";
               strHintHelp = "How do you proceed to make a new request?\n\nUse the messenger's \"Share\" function to send the app again.";
               strHintHelp1 = "\n\nHow does the rating work?\n\n\"Yes\" gets 3 points, \"Maybe\" gets 1 point and \"No\" gets 0 points.\nThe appointment with the most points gets 👍\nThe second one gets 🤔\nThe one last one gets 👎";
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
     document.getElementById("btnHelp").value=strBtnHelp;
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

function setLngHelp() {
     changeLanguage();
     document.getElementById("hintHelp").innerText=strHintHelp;
     document.getElementById("hintHelp1").innerText=strHintHelp1;
     document.getElementById("btnOkHelp").value=strBtnOk;
};
