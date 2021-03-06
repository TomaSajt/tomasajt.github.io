(function () {
    class Item {
        constructor(id, itemText, price, multiplier, kps, kpc, criteria) {
            this.id = id;
            this.itemText = itemText
            this.price = price;
            this.multiplier = multiplier;
            this.kps = kps;
            this.kpc = kpc;
            this.criteria = criteria;
        }
        unlocked = false;
        count = 0;
    }

    function defaultItems() {
        return [
            new Item("strongClick", "Strong Click", 100, 3, 0, 1, function () { return true }),
            new Item("kareszGenerator", "Karesz Generator", 50, 1.5, 1, 0, function () { return true }),
            new Item("kareszFactory", "Karesz Factory", 600, 1.6, 10, 0, function () { return items[1].count >= 3 }),
            new Item("kareszTown", "Karesz Town", 3000, 1.62, 69, 0, function () { return items[2].count >= 3 })
        ]
    }

    var items = defaultItems();
    var kareszCount = 0;
    var sidebar;
    var kareszCountText;
    var kareszPerSecText;
    var kpc = 1;
    var kps = 0;

    kareszCountText = document.getElementById("kareszCountText")
    sidebar = document.getElementById("sidebar");
    kareszPerSecText = document.getElementById("kareszPerSecText")
    document.getElementById('saveButton').addEventListener("click", function () { saveGame() });
    document.getElementById('loadButton').addEventListener("click", function () { loadGame(true) });
    document.getElementById('resetButton').addEventListener("click", function () { resetGame() });
    document.getElementById("kareszImage").addEventListener("click", function () { kareszClicked() });
    if (localStorage.getItem('version') != '1.1.1') {
        localStorage.setItem("saved", "false")
    }
    localStorage.setItem("version", "1.1.1")
    if (localStorage.getItem("saved") != "true") {
        saveGame();
    }
    loadGame(false);
    setInterval(tick, 1000)

    function tick() {
        kareszCount += kps
        update()
    }
    function buyItem(id, num) {
        var item = items[id];
        for (var i = 0; i < num && item.price <= kareszCount; i++) {
            kareszCount -= item.price
            item.count++;
            kps += item.kps
            kpc += item.kpc
            item.price = Math.floor(item.price * item.multiplier);
            update();
        }
    }
    function earn(amount) {
        kareszCount += amount
        update();
    }

    function saveGame() {
        localStorage.setItem("saved", "true");
        localStorage.setItem("kareszCount", kareszCount);
        localStorage.setItem("kps", kps);
        localStorage.setItem("kpc", kpc);
        localStorage.setItem("items", JSON.stringify(items))
    }
    function kareszClicked() {
        earn(kpc);
    }

    function resetGame() {
        if (confirm(`Are you sure you want to reset?\nYou will lose all ${kareszCount} of you Karesz'`)) {
            localStorage.clear();
            kareszCount = 0;
            kps = 0;
            items = defaultItems();
            saveGame();
            loadGame(false);
        }
    }

    function loadGame(shouldAsk) {
        if (shouldAsk) {
            if (!confirm(`Are you sure you want to load your save with ${parseInt(localStorage.getItem("kareszCount"))} Karesz'`)) {
                return;
            }
        }
        kareszCount = parseInt(localStorage.getItem("kareszCount"));
        kps = parseInt(localStorage.getItem("kps"));
        kpc = parseInt(localStorage.getItem("kpc"));
        var temp = JSON.parse(localStorage.getItem("items"))
        for (var i = 0; i < Math.min(items.length, temp.length); i++) {
            items[i].price = temp[i].price
            items[i].count = temp[i].count
            items[i].unlocked = temp[i].unlocked
        }
        for (var i = 0; i < items.length; i++) {
            removeItemFromSidebar(i);
        }
        for (var i = 0; i < items.length; i++) {
            if (items[i].unlocked) {
                addItemToSidebar(i)
            }
        }
        update();
    }

    function update() {
        kareszCountText.innerHTML = `Karesz count: ${kareszCount}`
        kareszPerSecText.innerHTML = `${kps} Karesz/sec`
        if (sidebar instanceof Element) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i]
                if (item.unlocked) {
                    var itemH = sidebar.querySelector(`#${item.id}`)
                    var itemPriceText = itemH.querySelector(".itemPriceText")
                    itemPriceText.innerHTML = `Price: ${item.price}`
                } else if (item.criteria()) {
                    addItemToSidebar(i)
                    update() //recursion, recursion go away, come again another day //// recursion should not happen
                }
            }
        }

    }

    function addItemToSidebar(id) {
        var item = items[id]
        item.unlocked = true;
        var sidebar = document.getElementById("sidebar");

        var itemH = document.createElement("div");
        itemH.className = "item";
        itemH.id = item.id;

        var itemText = document.createElement("div");
        itemText.className = "itemText"
        itemText.innerHTML = item.itemText;

        var itemButton = document.createElement("button")
        itemButton.className = "itemButton"
        itemButton.innerHTML = "Buy 1"
        itemButton.addEventListener("click", function () { buyItem(id, 1) });

        var itemPriceText = document.createElement("div")
        itemPriceText.className = "itemPriceText"
        itemPriceText.innerHTML = "Price: "

        itemH.appendChild(itemText);
        itemH.appendChild(itemButton);
        itemH.appendChild(itemPriceText);
        sidebar.appendChild(itemH);
    }
    function removeItemFromSidebar(id) {
        var item = items[id]
        var sidebar = document.querySelector("#sidebar");
        var itemH = sidebar.querySelector(`#${item.id}`);
        if (itemH != null) {
            itemH.remove();
        }
    }
})()