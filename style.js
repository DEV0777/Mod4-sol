function myFunct() {
    var names = ["honey", "monty", "john cena", "Jessi", "Dev", "jaspreet", "Jumbo"]


    for (var i = 0; i < names.length; i++) {
        var element = names[i];

        var firstLetter = element.charAt(0);
        if (firstLetter == 'j' || firstLetter=="J") {
            console.log("bye " + element) 

        }
        else{
            console.log("hello "+element)
        }

    }
}

myFunct();


