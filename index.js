function shout(word){

return word.toUpperCase();

}

function whisper(word){

    return word.toLowerCase();
    
    }

    function logShout(word){
        console.log(shout(word));
    }

    function logWhisper(word){
        console.log(whisper(word));
    }

    function sayHiToHeadphonedRoommate(word){
    if(word === "hello"){
        return "I can't hear you!";
    }else if (word === "HELLO"){
        return "YES INDEED!";
    }else if (word === "Let's have dinner together!"){

        return  "I would love to!";
    }
    else

        return "I dont understand";
    
    }