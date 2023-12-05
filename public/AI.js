const white_king_evaluation =[
    [-3.0 , -4.0 , -4.0 , -5.0 , -5.0 , -4.0 , -4.0 , -3.0],
    [-3.0 , -4.0 , -4.0 , -5.0 , -5.0 , -4.0 , -4.0 , -3.0],
    [-3.0 , -4.0 , -4.0 , -5.0 , -5.0 , -4.0 , -4.0 , -3.0],
    [-3.0 , -4.0 , -4.0 , -5.0 , -5.0 , -4.0 , -4.0 , -3.0],
    [-2.0 , -3.0 , -3.0 , -4.0 , -4.0 , -3.0 , -3.0 , -2.0],
    [-1.0 , -2.0 , -2.0 , -3.0 , -3.0 , -2.0 , -2.0 , -1.0],
    [2.0 , 2.0 , 0.0 , 0.0 , 0.0 , 0.0 , 2.0 , 2.0],
    [2.0 , 3.0 , 1.0 , 0.0 , 0.0 , 1.0 , 3.0 , 2.0]
]
const white_queen_evaluation = [
    [-2.0 , -1.0 , -1.0 , -0.5 , -0.5 , -1.0 , -1.0 ,-2.0],
    [-1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ,-1.0],
    [-1.0 , 0.0 , 0.5 , 0.5 , 0.5 , 0.5 , 0.0 ,-1.0],
    [-0.5 , 0.0 , 0.5 , 0.5 , 0.5 , 0.5 , 0.0 ,-0.5],
    [0.0 , 0.0 , 0.5 , 0.5 , 0.5 , 0.5 , 0.0 ,-0.5],
    [-1.0 , 0.5 , 0.5 , 0.5 , 0.5 , 0.5 , 0.0 ,-1.0],
    [-1.0 , 0.0 , 0.5 , 0.0 , 0.0 , 0.0 , 0.0 ,-1.0],
    [-2.0 , -1.0 , -1.0 , -0.5 , -0.5 , -1.0 , -1.0 ,-2.0]
]
const white_rook_evaluation =[
    [0.0 , 0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,0.0],
    [0.5 , 1.0 ,1.0 , 1.0 ,1.0 ,1.0 ,1.0 ,0.5],
    [-0.5,0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,-0.5],
    [-0.5,0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,-0.5],
    [-0.5,0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,-0.5],
    [-0.5,0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,-0.5],
    [-0.5,0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,-0.5],
    [0.0 , 0.0 ,0.0 , 0.5 ,0.5  ,0.0 ,0.0 ,0.0],
]
const white_bishop_evaluation =[
    [-2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0],
    [-1.0,0.0,0.0,0.0,0.0,0.0,0.0,-1.0],
    [-1.0,0.0,0.5,1.0,1.0,0.5,0.0,-1.0],
    [-1.0,0.5,0.5,1.0,1.0,0.5,0.5,-1.0],
    [-1.0,0.0,1.0,1.0,1.0,1.0,0.0,-1.0],
    [-1.0,1.0,1.0,1.0,1.0,1.0,1.0,-1.0],
    [-1.0,0.5,0.0,0.0,0.0,0.0,0.5,-1.0],
    [-2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0]
]
const white_horse_evaluation =[
    [-5.0 , -4.0 , -3.0 ,-3.0 ,-3.0 ,-3.0 , -4.0 , -5.0],
    [-4.0 , -2.0 , 0.0 ,0.0 ,0.0 ,0.0 , 0.0 , -4.0],
    [-3.0 , 0.0 , 1.0 , 1.5 ,1.5 ,1.0 , 0.0 , -3.0],
    [-3.0 , 0.5 , 1.5 , 2.0 ,2.0 ,1.5 , 0.5 , -3.0],
    [-3.0 , 0.0 , 1.5 , 2.0 ,2.0 ,1.5 , 0.0 , -3.0],
    [-3.0 , 0.5 , 1.0 , 1.5 ,1.5 ,1.0 , 0.5 , -3.0],
    [-4.0 , -2.0 , 0.0 ,0.5 ,0.5 ,0.0 , -2.0 , -4.0],
    [-5.0 , -4.0 , -3.0 ,-3.0 ,-3.0 ,-3.0 , -4.0 , -5.0],
]
const white_pawn_evaluation = [
    [0.0 , 0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,0.0],
    [5.0 , 5.0 ,5.0 , 5.0 ,5.0 ,5.0 ,5.0 ,5.0],
    [1.0 , 1.0 ,2.0 , 3.0 ,3.0 ,2.0 ,1.0 ,1.0],
    [0.5 , 0.5 ,1.0 , 2.5 , 2.5 ,1.0 ,0.5 , 0.5],
    [0.0 , 0.0 ,0.0 , 2.0 ,2.0 ,0.0 ,0.0 ,0.0],
    [0.5 , -0.5 , -1.0 , 0.0, 0.0 , -1.0 , -0.5 , 0.5],
    [0.5 , 1.0 , 1.0 , -2.0, -2.0 , 1.0 , 1.0 , 0.5],
    [0.0 , 0.0 ,0.0 , 0.0 ,0.0 ,0.0 ,0.0 ,0.0],
]
const black_king_evaluation = [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
] ;
const black_queen_evaluation= [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
] 
const black_rook_evaluation = [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
] ;
const black_bishop_evaluation= [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
]  ;
const black_horse_evaluation = [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
] ;
const black_pawn_evaluation= [
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "],
    [" " ," "," " ," "," " ," "," " ," "]
]  ;

const piece_points_table = {
    "Q" : 90,
    "K" : 900,
    "P" : 10,
    "H" : 30,
    "B" : 30,
    "R" : 50,
    "q" : -90,
    "k" : -900,
    "p" : -10,
    "h" : -30,
    "b" : -30,
    "r" : -50,
 }
const piece_poition_table = {
    "Q" : white_queen_evaluation,
    "K" : white_king_evaluation,
    "P" : white_pawn_evaluation,
    "H" : white_horse_evaluation,
    "B" : white_bishop_evaluation,
    "R" : white_rook_evaluation,
    "q" : black_queen_evaluation,
    "k" : black_king_evaluation,
    "p" : black_pawn_evaluation,
    "h" : black_horse_evaluation,
    "b" : black_bishop_evaluation,
    "r" : black_rook_evaluation,
}
function CreteBlackBoardEvaluationMatrix(){
    const white_list = [white_king_evaluation , white_queen_evaluation , white_bishop_evaluation ,white_rook_evaluation , white_horse_evaluation , white_pawn_evaluation] 
    const black_list = [black_king_evaluation , black_queen_evaluation , black_bishop_evaluation ,black_rook_evaluation , black_horse_evaluation , black_pawn_evaluation]  
    for(var i = 0 ; i < 6  ; i++){
        for(var y = 0 ; y < 8 ; y++){
            for(var x = 0 ; x < 8 ; x++){
                black_list[i][y][x] =  -1 * white_list[i][7-y][7-x] 
            }
        }
    }
}
CreteBlackBoardEvaluationMatrix()

function EvaluateBoard(){
    const piece_points_table = {
        "Q" : 90,
        "K" : 900,
        "P" : 10,
        "H" : 30,
        "B" : 30,
        "R" : 50,
        "q" : -90,
        "k" : -900,
        "p" : -10,
        "h" : -30,
        "b" : -30,
        "r" : -50,
     }
    const piece_poition_table = {
        "Q" : white_queen_evaluation,
        "K" : white_king_evaluation,
        "P" : white_pawn_evaluation,
        "H" : white_horse_evaluation,
        "B" : white_bishop_evaluation,
        "R" : white_rook_evaluation,
        "q" : black_queen_evaluation,
        "k" : black_king_evaluation,
        "p" : black_pawn_evaluation,
        "h" : black_horse_evaluation,
        "b" : black_bishop_evaluation,
        "r" : black_rook_evaluation,
    }
    var points = 0;
    for(var i = 0 ; i < 8 ; i ++){
        for(var j = 0  ; j <8 ; j++){
            if(BOARD[i][j] == " ") continue
            points += (piece_points_table[BOARD[i][j]] + piece_poition_table[BOARD[i][j]][i][j])
        }
    }
    return points
}

function MiniMax(depth){
    if(depth == 2){
        return EvaluateBoard()
    }
    var bestScore =  -99999
    var moveDTO_list = MoveGenerator()
    if(moveDTO_list.length == 0) MiniMax(depth + 1)
    for(var move of moveDTO_list){
        var DTO = MovePiece(move.from , move.to)
        if(DTO.ShortCastle != null || DTO.LongCastle != null){
            var a = 0
        }
        CheckMoveForCastle(DTO)
        Promote()
        SwitchColor()
        var score = MiniMax(depth + 1)
        UndoMovePiece(DTO)
        SwitchColor()
        if(score > bestScore){
            bestScore = score
        }
    }
    return bestScore
}

// for blacks minimazing player
function FindBestMove()
{
    var BestScore = 99999
    var BestMoveDTO = null;
    var moveDTO_list = MoveGenerator()
    for(var move of moveDTO_list){
        var DTO = MovePiece(move.from , move.to)
        CheckMoveForCastle(DTO)
        Promote()
        SwitchColor()
        var score = MiniMax(0)
        UndoMovePiece(DTO)
        SwitchColor()
        if(score < BestScore){
            BestScore = score
            BestMoveDTO = DTO
        }
    }
    return BestMoveDTO
}