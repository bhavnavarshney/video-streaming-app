const websocket = new WebSocket("wss://localhost:8000") // URL of the server

let username 
let localVideoStream

function sendUsername() {
    username = document.getElementById("username-id")
    sendData({
        type: "store_user"
    })
}

function sendData(data) {
    data.username = username
    websocket.send(JSON.stringify(data))
}

function startCall() {
    document.getElementById("videoWindow").style.display = "inline"

    navigator.getUserMedia({
        video: {
            frameRate: 24,
            width: {
                min: 480,
                ideal: 720,
                max: 1280
            },
            aspectRatio: 1.333
        },
        audio: true
    }, (stream)=>{
        localVideoStream = stream
        document.getElementById("local").src = localVideoStream
    }, (error)=> {
        console.log(err)
    })
}