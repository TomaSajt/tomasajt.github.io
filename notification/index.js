function clicked() {
    Notification.requestPermission().then(function (permission) {
        if (permission == "default") {
            alert("You tried to escape, didn't you?");
            clicked();
        }
        else if (permission == "denied") {
            alert("You made karesz sad");
        }
        else {
            console.log("granted pog");
            var notif = new Notification("Attention!!!!", {
                body: "There are 25 hot karesz near your area.",
                image: "karesz xd.png"
            });
            notif.onclick = function (ev) {
                console.log(ev);
            };
        }
    });
}
