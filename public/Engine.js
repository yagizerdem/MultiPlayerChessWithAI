
function Validate(PieceType , from , to){
    var diff = from[1] - to[1]
    if(
    (BOARD[from[0]][from[1]] == "K" && diff == 2 && WHITELONGCASTLE)
    ||
    (BOARD[from[0]][from[1]] == "K" && diff == -2 && WHITESHORTCASTLE)
    ||
    (BOARD[from[0]][from[1]] == "k" && diff == 2 && BLACKLONGCASTLE)
    ||
    (BOARD[from[0]][from[1]] == "k" && diff == -2 && BLACKSHORTCASTLE)
    ){
        return CheckCastle(diff,from)
    }
    return CheckDirection(PieceType , from , to) && CheckBlock(PieceType , from , to) && CheckKingInDanger(from , to)
}

function CheckDirection(PieceType , from , to){
    const diff_rank = from[0] - to[0]
    const diff_file = from[1] - to[1]
    if(PieceType.toLowerCase() == "h" && Math.sqrt(Math.pow(Math.abs(diff_rank) ,2 ) + Math.pow(Math.abs(diff_file) ,2)) == Math.sqrt(5)){
        return true
    }
    else if(PieceType.toLowerCase() == "b" && Math.abs(diff_rank) == Math.abs(diff_file)){
        return true;
    }
    else if(PieceType.toLowerCase() == "r" && (Math.abs(diff_rank)== 0 &&  Math.abs(diff_file) != 0 || Math.abs(diff_rank)!= 0 &&  Math.abs(diff_file) == 0)){
        return true;
    }
    else if(PieceType.toLowerCase() == "k") {
        var distance = Math.sqrt(Math.pow(Math.abs(diff_rank),2) + Math.pow(Math.abs(diff_file),2))
        if(distance == 1 || distance == Math.sqrt(2)) return true
    }
    else if(PieceType.toLowerCase() == "q"){
        if(Math.abs(diff_rank) == Math.abs(diff_file)) return true
        else if((Math.abs(diff_rank)== 0 &&  Math.abs(diff_file) != 0 || Math.abs(diff_rank)!= 0 &&  Math.abs(diff_file) == 0)) return true
    }
    // check white and black pawns different
    else if(PieceType == "P"){
        if(diff_file == 0 && (from[0] == 6 && diff_rank == 2 || diff_rank == 1)) return true
        else if((diff_file == 1 || diff_file == -1) && diff_rank == 1 && BLACKPIECELIST.includes(BOARD[to[0]][to[1]])) return true
    }
    else if(PieceType == "p"){
        if(diff_file == 0 && (from[0] == 1 && diff_rank == -2 || diff_rank == -1)) return true
        else if((diff_file == 1 || diff_file == -1) && diff_rank == -1 && WHITEPIECELIST.includes(BOARD[to[0]][to[1]])) return true
    }
    return false
}
function CheckBlock(PieceType , from , to){
    // checking piece at from and to are same if same color move is not valid
    if(WHITEPIECELIST.includes(BOARD[from[0]][from[1]]) && WHITEPIECELIST.includes(BOARD[to[0]][to[1]])
    ||
    BLACKPIECELIST.includes(BOARD[from[0]][from[1]]) && BLACKPIECELIST.includes(BOARD[to[0]][to[1]])
    ){ return false}
    if(PieceType.toLowerCase() == "h") return true

    var diff_rank = from[0] - to[0]
    var diff_file = from[1] - to[1]
    var steps = Math.abs(diff_rank) > Math.abs(diff_file) ? Math.abs(diff_rank) - 1 : Math.abs(diff_file) -1 

    var rank_counter = diff_rank >0 ? -1 : 1
    var file_counter = diff_file > 0 ? -1 : 1
    if(diff_rank == 0) rank_counter = 0
    if(diff_file == 0) file_counter =0 ;
    // check for pawn
    if(PieceType.toLowerCase() == "p"){
        if(diff_file == 0 && BOARD[to[0]][to[1]] != " ") return false;
        else if((diff_file == 1 || diff_file == -1) && 
        (WHITEPIECELIST.includes(BOARD[from[0]][from[1]]) && BLACKPIECELIST.includes(BOARD[to[0]][to[1]])
        ||
        BLACKPIECELIST.includes(BOARD[from[0]][from[1]]) && WHITEPIECELIST.includes(BOARD[to[0]][to[1]])
        )){return true}
    }
    // check for other pieces
    for(var i = 0,y = from[0] + rank_counter , x = from[1] + file_counter; i < steps ; i++ , y+=rank_counter , x+=file_counter)
    {
        try{
            if(BOARD[y][x] != " ") return false;
        }catch{
            console.log(y,x)
        }

    }
    return true    
}

function CheckKingInDanger(from , to){
    var MoveDTO = MovePiece(from , to)
    Promote()
    var king_rank_file = GetKingCoord();
    if(!CheckSquareThreat(king_rank_file)){
        UndoMovePiece(MoveDTO)
        return
    }

    UndoMovePiece(MoveDTO)
    return true;
}
// checking  square is therated by opponent pieces 
// returns true if square is safe
function CheckSquareThreat(square)
{
    for(var i = 0 ; i < 8 ; i++){
        for(var j = 0 ; j < 8 ; j++){
            if(PLAYERCOLOR == Color.White && BLACKPIECELIST.includes(BOARD[i][j]) || PLAYERCOLOR == Color.Black && WHITEPIECELIST.includes(BOARD[i][j])){
                if(CheckBlock(BOARD[i][j], [i,j] , square) && CheckDirection(BOARD[i][j], [i,j] , square))
                {
                    return false;
                }
            }
        }
    }
    return true
}
function GetKingCoord(){
    for(var i = 0  ; i < 8 ; i++){
        for(var j = 0 ; j <8 ; j++){
            if(PLAYERCOLOR == Color.White && BOARD[i][j] == "K"){
                return [i,j]
            }
            else if(PLAYERCOLOR == Color.Black && BOARD[i][j] == "k"){
                return[i,j]
            }
        }
    }
    return null
}

function MovePiece(from , to){
    var diff_file = from[1] - to[1]
    // long castle
    if(BOARD[from[0]][from[1]].toLowerCase() == "k" &&  diff_file == 2 ){
        // moving rook
        BOARD[from[0]][3] =  BOARD[from[0]][0]
        BOARD[from[0]][0] = " " 
        var LongCastle = true
    }
    // short castle
    else if(BOARD[from[0]][from[1]].toLowerCase() == "k" &&  diff_file == -2) {
        // moving rook
        BOARD[from[0]][5] =  BOARD[from[0]][7]
        BOARD[from[0]][7] = " "
        var ShortCastle = true
        console.log("girdi")
    }
    const DTO = {
        KilledPiece : BOARD[to[0]][to[1]],
        MovedPiece : BOARD[from[0]][from[1]],
        from : from,
        to : to,
        ShortCastle: ShortCastle,
        LongCastle: LongCastle,
        color : PLAYERCOLOR,
    }
    // moving piece on board matrix
    BOARD[to[0]][to[1]] = BOARD[from[0]][from[1]]
    BOARD[from[0]][from[1]] = " "

    return DTO
}
function UndoMovePiece(MoveDTO){
    BOARD[MoveDTO.to[0]][MoveDTO.to[1]] = MoveDTO.KilledPiece
    BOARD[MoveDTO.from[0]][MoveDTO.from[1]] =MoveDTO.MovedPiece
    // if move is castle adjust places of rook extra 
    if(MoveDTO.LongCastle == true){
        BOARD[MoveDTO.from[0]][3] = " "
        BOARD[MoveDTO.from[0]][0] = MoveDTO.MovedPiece =="k" ? "r" : "R"
    }
    else if(MoveDTO.ShortCastle == true){
        BOARD[MoveDTO.from[0]][7] = " "
        BOARD[MoveDTO.from[0]][5] = MoveDTO.MovedPiece =="k" ? "r" : "R"
    }
}

function MoveGenerator(){
    const list = []
    for(var i = 0 ; i <8 ; i++){
        for(var j = 0 ; j < 8 ; j++){
            if(WHITEPIECELIST.includes(BOARD[i][j]) && PLAYERCOLOR == Color.White
            ||
            BLACKPIECELIST.includes(BOARD[i][j]) && PLAYERCOLOR == Color.Black
            ){
                for(var y = 0 ; y < 8 ; y++){
                    for(var x = 0 ; x < 8 ; x++){
                        if(Validate(BOARD[i][j] ,  [i,j] , [y,x])){
                            var diff_file = j - x
                            if(BOARD[i][j].toLowerCase() == "k" &&  diff_file == 2 ) var LongCastle = true
                            else if(BOARD[i][j].toLowerCase() == "k" &&  diff_file == -2) var ShortCastle = true
                            const DTO = {
                                KilledPiece : BOARD[y][x],
                                MovedPiece : BOARD[i][j],
                                from : [i,j],
                                to : [y,x],
                                ShortCastle: ShortCastle,
                                LongCastle: LongCastle,
                            }
                            list.push(DTO)
                        }
                    }
                }
            }
        }
    }
    return list
}
function Promote(){
    for(var i = 0 ; i <8 ; i++){
        if(BOARD[0][i] == "P") BOARD[0][i]="Q"
        else if(BOARD[7][i] == "p")BOARD[7][i]="q"
    }
}
function SwitchColor(){
    PLAYERCOLOR = PLAYERCOLOR == Color.White ? Color.Black : Color.White
}

function CheckCastle(diff,from){
    const x_counter = diff < 0 ? 1 : -1  
    console.log(x_counter)
    for(var i = 0 ,x = 0; i < 3 ; i++ , x+=x_counter){
        if(!CheckSquareThreat([from[0], from[1] + x]) || (BOARD[from[0]][from[1] + x] != BOARD[from[0]][from[1]] && BOARD[from[0]][from[1] + x] !=" ")) return false 
    }
    return true
}