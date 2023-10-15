function changeLanguage() {
     browserLang = window.navigator.language;
     browserLang = browserLang.slice(0, 2).toLowerCase();
          if (browserLang == "de") {
               //german
               arrMonth=["Jan.", "Feb.", "Mär.", "Apr.", "Mai ", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."];
               arrWeekDay=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
               arrColor = ["Ja","green", "Nein", "red", "???", "yellow"];
               strBtnSend = "Speichern und Senden";
               strBtnWasSent = "Update wurde gesendet";
               strBtnCancel = "Abbrechen";
               strBtnInput = "Neue Termine vorschlagen";
               strBtnList = "Liste der Rückmeldungen";
               strHintInput = "Geben Sie die Terminvorschläge ein. Nicht benötigte Felder einfach leer lassen. Der Name des Termins muss ausgefüllt werden.";
               strHintChoice = "Klicken Sie in die Tabelle um zwischen \"Ja\", \"Nein\" und \"Vielleicht\" zu wählen.";
               strHintStart = "Geben Sie bis zu drei Termine für Ihr Event an. Alle Gruppenmitglieder können dann festlegen welcher Termin passt und welcher nicht.";
               strError = "Bitte rot umrandete Felder ausfüllen."
               strInfoMsg = "%N hat eine Terminabfrage eingestellt: \"%E\"";
               strLabelTitle = "Name des Termins";
               strLabelDate = "Datum";
               strLabelTime = "Uhrzeit";
              }
          else if (browserLang == "fr") {
               //french
               arrMonth=["Jan.", "Fev.", "Mar.", "Avr.", "Mai ", "Juin ", "Juil.", "Août.", "Sep.", "Oct.", "Nov.", "Dec."];
               arrWeekDay=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
               arrColor = ["Oui","green", "Non", "red", "???", "yellow"];
               strBtnSend = "Enregistrer et envoyer";
               strBtnWasSent = "La mise à jour a été envoyée";
               strBtnCancel = "Annuler";
               strBtnInput = "Proposer de nouvelles dates";
               strBtnList = "Liste des commentaires";
               strHintInput = "Entrez les dates proposées. Laissez simplement les champs qui ne sont pas obligatoires vides. Le nom du rendez-vous doit être renseigné.";
               strHintChoice = "Cliquez sur le tableau pour choisir entre \"Oui\", \"Non\" et \"Peut-être\".";
               strHintStart = "Entrez jusqu'à trois dates pour votre événement.  Tous les membres du groupe peuvent alors décider quelle date est appropriée ou non.";
               strError = "Veuillez remplir les champs entourés en rouge."
               strInfoMsg = "%N a défini une requête de rendez-vous : \"%E\"";
               strLabelTitle = "Nom du rendez-vous";
               strLabelDate = "Date";
               strLabelTime = "Temps";
               }
          else {
               //fallback
               arrMonth=["Jan.", "Feb.", "Mar.", "Apr.", "May ", "June ", "July ", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
               arrWeekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
               arrColor = ["Yes","green", "No", "red", "???", "yellow"];
               strBtnSend = "Save and send";
               strBtnWasSent = "Update has been sent";
               strBtnCancel = "Cancel";
               strBtnInput = "Suggest new dates";
               strBtnList = "List of feedback";
               strHintInput = "Enter the suggested dates. Simply leave fields that are not required blank. The name of the appointment must be filled out.";
               strHintChoice = "Click on the table to choose between \"Yes\", \"No\" and \"Maybe\".";
               strHintStart = "Enter up to three dates for your event.  All group members can then decide which date is suitable and which is not."
               strError = "Please fill out the fields outlined in red.";
               strInfoMsg = "%N has set an appointment query: \"%E\"";
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
     document.getElementById("btnList").value=strBtnList;
     document.getElementById("btnSendReaction").value=strBtnSend;
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
