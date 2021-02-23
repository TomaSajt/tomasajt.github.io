window.onload = function () {
    var wrapper = document.getElementById("wrapper");
    var table = document.createElement('table');
    table.id = "outer";
    var tbody = document.createElement('tbody');
    wrapper.appendChild(table);
    table.appendChild(tbody);
    {
        {
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            td.appendChild(createCell("Órarend"))
        }
        for (var i = 0; i < 9; i++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            td.appendChild(createCell(i))
        }
    }
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        {
            var td = document.createElement('td');
            tr.appendChild(td);
            td.appendChild(createCell(days[i]))
        }
        for (var j = 0; j < 9; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            var entry = nyf[i][j];
            var items = [];
            switch (entry.type) {

                case 0:
                    items.push("");
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
            td.appendChild(cell)
        }
    }
    tbody.appendChild(tr);
    tr.appendChild(td);

    function lessonToString(lesson) {
        return lesson.name + " " + lesson.subject + " [" + lesson.room + "]"
    }

    function createCell(items) {
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        if (items instanceof Array) {
            items.forEach(item => {
                tbody.appendChild(createTrTd(item));
            })
        } else {
            tbody.appendChild(createTrTd(items));
        }
        table.appendChild(tbody);
        return table;

    }

    function createTrTd(content) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = content;
        return tr;
    }
}



