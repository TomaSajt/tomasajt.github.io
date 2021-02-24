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
            var entry = nyf[i][j];
            var items = [];
            
            var trTable = createLessons(nyf[i][j]);
            tr.appendChild(trTable)
        }
    }

    function lessonToString(lesson) {
        return lesson.group + " " + lesson.name + " " + lesson.subject + " [" + lesson.room + "]"
    }

    function createLessons(lessonArr) {
        var tr = document.createElement('td');
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        
        if (lessonArr && lessonArr instanceof Array) {
            lessonArr.forEach(lesson => {
                tbody.appendChild(createLesson(lesson));
            })
        } else {
            tbody.appendChild(createMiscCell(""));
        }
        table.appendChild(tbody);
        tr.appendChild(table);
        return tr;

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
    function createLesson(lesson) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        tr.appendChild(td);
        if (lesson) {
            td.innerHTML = lesson.name + " " + lesson.subject + " [" + lesson.room + "]";
            if (lesson.group) {
                td.innerHTML = "("+lesson.group + ") " +  td.innerHTML
            }
        td.bgColor = (lesson.subject in colorMap) ? colorMap[lesson.subject] : "white";
        } else {
            td.bgColor = "pink"
        }
        return tr;
    }
}



