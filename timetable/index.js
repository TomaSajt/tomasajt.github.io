window.onload = function () {
    var wrapper = document.getElementById("wrapper");
    var table = document.createElement('table');
    table.id = "outer";
    var tbody = document.createElement('tbody');
    wrapper.appendChild(table);
    table.appendChild(tbody);
    {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.appendChild(createMiscCell("Órarend"));
    }
    for (var i = 0; i < 9; i++) {
        tr.appendChild(createMiscCell(i));
    }
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.appendChild(createMiscCell(days[i]));
        for (var j = 0; j < 9; j++) {
            var tdTable = createLessons(nyf[i][j]);
            tr.appendChild(tdTable)
        }
    }
    function createLessons(lessonArr) {
        var td = document.createElement('td');
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');

        if (lessonArr && lessonArr instanceof Array) {
            lessonArr.forEach(lesson => {
                var tr = createLesson(lesson);
                if (lesson) {
                    tr.bgColor = (lesson.subject in colorMap) ? colorMap[lesson.subject] : "white";
                }
                else {
                    tr.bgColor = "pink"
                }
                tbody.appendChild(tr);
            })
        }
        table.appendChild(tbody);
        td.appendChild(table);
        return td;

    }

    function createMiscCell(content) {
        var tr = document.createElement('td');
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var inTr = document.createElement('tr');
        var inTd = document.createElement('td');
        inTr.appendChild(inTd);
        inTd.innerHTML = content;
        tbody.appendChild(inTr);
        table.appendChild(tbody);
        tr.appendChild(table);
        return tr;

    }

    function createInnerCellWithContent(content) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = content;
        tr.appendChild(td);
        return tr;
    }
    function createLesson(lesson) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        tr.appendChild(td);
        if (lesson) {
            td.innerHTML = lesson.name + " " + lesson.subject + " [" + lesson.room + "]";
            if (lesson.group) {
                td.innerHTML = "(" + lesson.group + ") " + td.innerHTML
            }
        }
        return tr;
    }
}



