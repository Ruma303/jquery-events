//% Eventi

//, on()
/* $(document).on("click", ".article", function (event) {
    $(this).css('color', 'red');
}); */


//# Assegnare i gestori di eventi utilizzando .on()
/* $("h1").on("click", { message: "Messaggio dell'alert" },
    (e) => alert(e.data.message)
);*/


//# Eventi multipli
/* $("h1").on({
    click: function (event) {
        $('article').css('color', 'lime');
    },
    mouseenter: function (event) {
        $('#paragraph').css('background-color', 'blue');
    }
}); */


//? Definire i gestori di eventi come funzioni nominati
/* function handleArticleClick(event) {
    $('article').css('color', 'lime');
}

function handleParagraphMouseEnter(event) {
    $('#paragraph').css('background-color', 'blue');
}

//? Assegnare i gestori di eventi utilizzando .on()
$("h1").on({
    click: handleArticleClick,
    mouseenter: handleParagraphMouseEnter
}); */



//, Rimozione eventi
//? Rimozione dei gestori di eventi utilizzando .off()
/* $("h1").off("click", handleArticleClick);
$("h1").off("mouseenter", handleParagraphMouseEnter);

//? Rimozione di tutti i gestori di eventi 'click' per elementi 'h1'
$("h1").off("click"); */



//, bind() e unbind()
/* $("h1").bind("click", { message: "Messaggio dell'alert" },
    (e) => console.log(e.data.message)
);
$("h1").unbind("click"); */



//, Event Object
/* $('input[type="text"]').on('keyup', function(event) {
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.value);
}); */


//, Eventi personalizzati

/* //? Definizione di un evento personalizzato 'customEvent'
$(window).on("customEvent", function (event, param1, param2) {
    console.log("Evento personalizzato attivato", param1, param2);
});

//? Attivazione dell'evento personalizzato con parametri
$(window).trigger("customEvent", [ "valore1", "valore2" ]); */


//# Esempio completo
/* $(document).ready(function () {

    //? Definizione del gestore per l'evento personalizzato 'showDate'
    $("[type=\"button\"]").on("showDate", function () {
        var currentDate = new Date();
        console.log("Data attuale: ", currentDate.toString());
    });

    //? Attivazione dell'evento personalizzato al click del bottone
    $("[type=\"button\"]").click( function () {
        $(this).trigger("showDate"); //* Trigger dell'evento 'showDate'
    });

}); */



//, Altri Eventi

//# one()
/* $("[type=\"button\"]").one("click", function () {
    alert("Questo verrà mostrato solo una volta!");
}); */


//# hover()
/* $("article").hover(
    function () {
        //? Callback eseguita quando il mouse entra nell'elemento
        $(this).addClass("hover");
    }, function () {
        //? Callback eseguita quando il mouse lascia l'elemento
        $(this).removeClass("hover");
    }
); */



//# triggerHandler()
/* //? Definizione di un evento personalizzato 'submitEvent'
$("input[type='text']").on("submitEvent", function (e, param1, param2) {
    console.log(`Evento ${e.type} attivato: `, param1, param2);
    console.log("Acquisizione input: ", e.target.value);
});

//? Attivazione dell'evento personalizzato con parametri quando il tasto Enter è premuto
$("input[type='text']").keydown(function (e) {
    if (e.which === 13) { //? Il keyCode per il tasto Enter è 13
        $(this).triggerHandler("submitEvent", ['Value1', 'Value2']);
    }
}); */