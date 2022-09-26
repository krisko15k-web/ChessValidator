var move = prompt("Choose a move:");

function pawn(move){
    if(move == "a2-a3" || move == "a2-a4" || move == "b2-b3" || move == "b2-b4" || move == "c2-c3" || move == "c2-c4" 
    || move == "d2-d3" || move == "d2-d4" || move == "e2-e3" || move == "e2-e4" || move == "f2-f3" || move == "f2-f4" 
    || move == "g2-g3" || move == "g2-g4" || move == "h2-h3" || move == "h2-h4" || move == "a7-a6" || move == "a7-a5" 
    || move == "b7-b6" || move == "b7-b5" || move == "c7-c6" || move == "c7-c5" || move == "d7-d6" || move == "d7-d5" 
    || move == "e7-e6" || move == "e7-e5" || move == "f7-f6" || move == "f7-f5" || move == "g7-g6" || move == "g7-g5" 
    || move == "h7-h6" || move == "h7-h5")
    {
        alert("All pawn moves are valid");
    }
    else {
        alert("Wrong pawn move: " + move);
    }
}

pawn(move);

function knight(move){
    if(move == "b1-a3" || move == "b1-c3" || move == "g1-f3" || move == "g1-h3" 
    || move == "b8-a6" || move == "b8-c6" || move == "g8-f6" || move == "g8-h6")
    {
        alert("All knight moves are valid");
    }
    else {
        alert("Wrong knight move: " + move);
    }
}

knight(move);
