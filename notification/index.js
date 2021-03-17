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
            var a = new ServiceWorkerRegistration();
            a.showNotification("Attention!!!!", {
                body: "There are 25 hot karesz near your area.",
                image: "../assets/Karesz2.png",
                actions: [
                    { title: "Join into the fun", action: "join" },
                    { title: "Dismiss", action: "dismiss" },
                ]
            });
        }
    });
}
