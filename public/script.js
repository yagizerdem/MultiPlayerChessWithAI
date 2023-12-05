window.onload = ()=>{
    CONTAINER = document.getElementById("container")
    ALLSQUARES = document.getElementsByClassName("square")
    AIMODEBUTTON = document.getElementById("aimodebutton")
    SINGLEPLAYERBUTTON = document.getElementById("singleplayermodebutton")
    MULTIPLAYERBUTTON = document.getElementById("multiplayermodebutton")
    MULTIPLAYERBUTTON.addEventListener("click" , ActiveteMultiplayer)
    SINGLEPLAYERBUTTON.addEventListener("click" , ActiveteSinglePlayer)
    AIMODEBUTTON.addEventListener("click" , ActivateAImode)

}
function Inint(color){
    PLAYERCOLOR = color 
    TURN = color == Color.White ? true : false
    PrintBoard()
    RenderBoard()
    addSelectHandler()
}
function addSelectHandler(){
    for(var square of ALLSQUARES){
        square.addEventListener("click" ,Select)
    }
}
function Select(){
    if(TURN == false) return
    PREVSELECTEDSQUARE = SELECTEDSQUARE;
    SELECTEDSQUARE = this;
    var rank = parseInt(SELECTEDSQUARE.getAttribute("y"))
    var file = parseInt(SELECTEDSQUARE.getAttribute("x"))

    if(TURN && PREVSELECTEDSQUARE == null &&
        !(PLAYERCOLOR == Color.White && WHITEPIECELIST.includes(BOARD[rank][file]) || (PLAYERCOLOR == Color.Black && BLACKPIECELIST.includes(BOARD[rank][file]))))
        {
            SELECTEDSQUARE = PREVSELECTEDSQUARE = null
            return
        }
            
        else if(TURN && PREVSELECTEDSQUARE != null &&
            !(PLAYERCOLOR == Color.White && WHITEPIECELIST.includes(BOARD[rank][file]) || (PLAYERCOLOR == Color.Black && BLACKPIECELIST.includes(BOARD[rank][file])))
            )
            {
                PREVSELECTEDSQUARE.classList.remove("active")
                Main();
                return;
            }
            if(PREVSELECTEDSQUARE != null) {
                PREVSELECTEDSQUARE.classList.toggle("active")
            }
            SELECTEDSQUARE.classList.toggle("active")

}
function Main(){
    const to = [parseInt(SELECTEDSQUARE.getAttribute("y")) , parseInt(SELECTEDSQUARE.getAttribute("x"))]
    const from = [parseInt(PREVSELECTEDSQUARE.getAttribute("y")) , parseInt(PREVSELECTEDSQUARE.getAttribute("x"))]
    SELECTEDSQUARE = PREVSELECTEDSQUARE = null
    var flag = Validate(BOARD[from[0]][from[1]] , from , to)
    if(flag){
        ControlCheckMate()
        const dto = MovePiece(from ,to)
        RenderBoard()
        if(GAMEMODE == gameModes.multiplayer){
            TURN = !TURN
            SwitchColor() // temporay swiht color
            ControlCheckMate()
            SwitchColor()
            socket.emit("pieceMoved",dto
            )
            RenderBoard()
        }

        if(GAMEMODE == gameModes.singleplayer){
            SwitchColor()
            ControlCheckMate()
            ShiftBoard()
            RenderBoard()
        }

        if(GAMEMODE == gameModes.aimode){
            SwitchColor()
            ControlCheckMate()
            var DTO = FindBestMove()
            console.log(DTO)
            MovePiece(DTO.from ,DTO.to)
            Promote()
            RenderBoard()
            SwitchColor()
    
            var count = MoveGenerator().length
            if(count == 0) alert("AI win")
        }

    }
}
// play randomly test function 
function PlayRandom(){
    const list_move_dto = MoveGenerator()
    const move_dto = list_move_dto[Math.floor(Math.random() * list_move_dto.length)]
    console.log(list_move_dto)
    MovePiece(move_dto.from , move_dto.to)
}

// modes
function ActiveteMultiplayer(){
    socket.emit("matchrequest")
    ShowSpinner()
}
function ActiveteSinglePlayer(){
    Inint(Color.White)
    PrepareScreen()
    DOMOperaitions()
    GAMEMODE = gameModes.singleplayer
}
function ActivateAImode(){
    Inint(Color.White)
    PrepareScreen()
    DOMOperaitions()
    GAMEMODE = gameModes.aimode
}
// socket io 
socket.on("matchfound" , (color)=>{
    Inint(color)
    PrepareScreen()
    DOMOperaitions()
    GAMEMODE = gameModes.multiplayer
})
socket.on("opponentMove",(DTO) =>{
    MovePiece(DTO.from , DTO.to)
    TURN = !TURN
    RenderBoard()
})
socket.on("chat" , (text)=>{
    PrintChatToScreen(text , "purple")
})
socket.on("opponentleave", ()=>{
    PrintChatToScreen("Opponent left game " , "red")
})
socket.on("oppoenntwin" , ()=>{
    PrintChatToScreen("Check mate ", "red")
})
function SendChat(){
    var text = INPUT.value
    PrintChatToScreen(text)
    if(GAMEMODE == gameModes.multiplayer){
        socket.emit("chat" , text)
    }

}
function Leave(){
    location.reload()
}

function DOMOperaitions(){
        // dom related operations 
        CHATBUTTON = document.getElementById("chat")
        LEAVEBUTTON = document.getElementById("leave")
        CHATBUTTON.addEventListener("click" , SendChat)
        LEAVEBUTTON.addEventListener("click" , Leave)
        SCREEN = document.getElementById("screen")
        INPUT = document.getElementById("input")
}
function ControlCheckMate(){
    var count = MoveGenerator().length
    if(count == 0){
        if(GAMEMODE == gameModes.multiplayer){
            socket.emit("chechmate")
        }
        PrintChatToScreen("Check mate ", "blue")
    }
}