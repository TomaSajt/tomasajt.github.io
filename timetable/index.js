window.onload = function () {
    var container = document.getElementById("container");
    {
        container.appendChild(createCell("Órarend", null, "title"))
    }
    for (var i = 0; i <= 8; i++) {
        container.appendChild(createCell(i, "header"));
    }
    for (var i = 0; i < 5; i++) {
        container.appendChild(createCell(days[i], "sidebar"))
        for (var j = 0; j <= 8; j++) {
            var entry = nyf[i][j];
            var items = [];
            switch (entry.type) {

                case 0:
                    break;
                case 1:
                    if (entry.data.lesson != null) items.push(lessonToString(entry.data.lesson))
                    else items.push("")
                    break;
                case 2:
                    if (entry.data.szt != null) items.push("(szt) " + lessonToString(entry.data.szt))
                    else items.push("")
                    if (entry.data.tk != null) items.push("(tk) " + lessonToString(entry.data.tk))
                    else items.push("")
                    break;
                case 3:
                    if (entry.data.an1 != null) items.push("(an1) " + lessonToString(entry.data.an1))
                    else items.push("")
                    if (entry.data.an2 != null) items.push("(an2) " + lessonToString(entry.data.an2))
                    else items.push("")
                    if (entry.data.an3 != null) items.push("(an3) " + lessonToString(entry.data.an3))
                    else items.push("")
                    if (entry.data.an4 != null) items.push("(an4) " + lessonToString(entry.data.an4))
                    else items.push("")
                    break;
                case 4:
                    if (entry.data.sp != null) items.push("(sp) " + lessonToString(entry.data.sp))
                    else items.push("")
                    if (entry.data.ol != null) items.push("(ol) " + lessonToString(entry.data.ol))
                    else items.push("")
                    if (entry.data.ne1 != null) items.push("(né1) " + lessonToString(entry.data.ne1))
                    else items.push("")
                    if (entry.data.ne2 != null) items.push("(né2) " + lessonToString(entry.data.ne2))
                    else items.push("")
                    if (entry.data.fr != null) items.push("(fr) " + lessonToString(entry.data.fr))
                    else items.push("")
                    break;
            }

            var cell = createCell(items);
            cell.style.backgroundColor = colorMap[entry.type]
            container.appendChild(cell);
        }
    }







    function lessonToString(lesson) {
        return lesson.name + " " + lesson.subject + " [" + lesson.room + "]"
    }
    function createCell(items, clazz, id) {
        var cell = document.createElement('div');
        if (clazz) cell.className = clazz;
        if (id) cell.id = id;
        if (items instanceof Array) {
            items.forEach(item => {
                cell.appendChild(createDoubleDiv(item));
            })
        } else {
            cell.appendChild(createDoubleDiv(items));
        }
        return cell;
    }
    function createDoubleDiv(content) {
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        div1.appendChild(div2);
        div2.innerHTML = content;
        return div1;
    }
}



