const Color ={
    White : 0,
    Black : 1
}
var PLAYERCOLOR
var CONTAINER;
var BOARD = 
[
    ["r" ,"h" , "b" ,"q" ,"k" ,"b" ,"h" ,"r"],
    ["p" ,"p" , "p" ,"p" ,"p" ,"p" ,"p" ,"p"],
    [" " ," " , " " ," " ," " ," " ," " ," "],
    [" " ," " , " " ," " ," " ," " ," " ," "],
    [" " ," " , " " ," " ," " ," " ," " ," "],
    [" " ," " , " " ," " ," " ," " ," " ," "],
    ["P" ,"P" , "P" ,"P" ,"P" ,"P" ,"P" ,"P"],
    ["R" ,"H" , "B" ,"Q" ,"K" ,"B" ,"H" ,"R"],
] 

var SELECTEDSQUARE = null;
var PREVSELECTEDSQUARE = null;
var TURN ;
var ALLSQUARES;
var piece_info ={
    "Q" : {
        background_img_path : "./ChessPiecesPng/WhiteQueen.png",

    },
    "K" : {
        background_img_path : "./ChessPiecesPng/WhiteKing.png",
    },
    "P" : {
        background_img_path : "./ChessPiecesPng/WhitePawn.png"
    },
    "H" : {
        background_img_path : "./ChessPiecesPng/WhiteHorse.png"
    },
    "B" : {
        background_img_path : "./ChessPiecesPng/WhiteBishop.png"
    },
    "R" : {
        background_img_path : "./ChessPiecesPng/WhiteRook.png"
    },
    "q" : {
        background_img_path : "./ChessPiecesPng/BlackQueen.png"
    },
    "k" : {
        background_img_path : "./ChessPiecesPng/BlackKing.png"
    },
    "p" : {
        background_img_path : "./ChessPiecesPng/BlackPawn.png"
    },
    "h" : {
        background_img_path : "./ChessPiecesPng/BlackHorse.png"
    },
    "b" : {
        background_img_path : "./ChessPiecesPng/BlackBishop.png"
    },
    "r" : {
        background_img_path : "./ChessPiecesPng/BlackRook.png"
    },
}
const WHITEPIECELIST = ["Q","K" ,"P","R","B","H"]
const BLACKPIECELIST = ["q","k" ,"p","r","b","h"]

GAMEMODE = null;
// game modes
const gameModes = {
    singleplayer : 0,
    multiplayer : 1,
    aimode : 2,
}
var MULTIPLAYERBUTTON = null 
var SINGLEPLAYERBUTTON = null
var AIMODEBUTTON  = null

// dom elements
var CHATBUTTON;
var LEAVEBUTTON;
var SCREEN;
var INPUT

// castle
var WHITELONGCASTLE = true
var WHITESHORTCASTLE = true
var BLACKLONGCASTLE = true
var BLACKSHORTCASTLE = true
