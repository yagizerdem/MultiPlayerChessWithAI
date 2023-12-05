var board_white_perspective = ""
var board_black_perspective =""

function CreteBoards(){
    var white ="";
    var black ="";
    for(var i = 0 ; i < 8 ; i++){
        for(var j = 0 ; j <8 ; j++){
            white += `<div  y=${i} x=${j} class=" square ${(i+j) % 2 == 0 ? 'white' : 'black'}"></div>`
            black += `<div  y=${7-i} x=${7-j} class="square ${(i+j) % 2 == 0 ? 'white' : 'black'}"></div>`
        }
    }
    board_white_perspective = `<div class="board">${white}</div>`
    board_black_perspective = `<div class="board">${black}</div>`
};
CreteBoards()

function PrintBoard(){
    CONTAINER.innerHTML += PLAYERCOLOR == Color.White ? board_white_perspective : board_black_perspective;
}

function RenderBoard()
{
    for(var i = 0 ; i < 8 ; i++){
        for(var j = 0 ; j < 8 ; j++){
            var square = getSquareByrank_file(i,j)
            if(BOARD[i][j] != " "){
                square.style.backgroundImage = `url(${piece_info[BOARD[i][j]].background_img_path})`
            }
            else{
                square.style.backgroundImage = `url()`
            }
        }
    }
}
function getSquareByrank_file(rank , file){
    for(var square of ALLSQUARES){
        var y = square.getAttribute("y")
        var x = square.getAttribute("x")
        if(y == rank && x == file) return square
    }
    return null
}

function PrepareScreen(){
    $("#page").remove()
    CONTAINER.style.display = "block"
}

function ShiftBoard(){
    for(var square of ALLSQUARES)
    {
        const y = square.getAttribute("y")
        const x = square.getAttribute("x")

        square.setAttribute('y', 7 - y);
        square.setAttribute('x', 7 - x);
    }

}
function ShowSpinner(){
    const card = document.getElementById("card")
    card.innerHTML = `<h3>Looking for match</h3><br/><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}

function PrintChatToScreen(message , messagecolor = "green"){
    const templatestring = `<div class="message" style="background-color:${messagecolor}">${message}</div>`
    SCREEN.innerHTML = templatestring + SCREEN.innerHTML
}
