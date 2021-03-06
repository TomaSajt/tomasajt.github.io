
for (var key in colorMap) {
    if (colorMap.hasOwnProperty(key)) {
        setCSSVariable(`${key}-color`, colorMap[key]);
    }
}
var selector = document.getElementById("selector")
if (selector instanceof HTMLInputElement) {
    var selectors = selector.value.split(' ');
}




var wrapper = document.getElementById("wrapper");
if (wrapper.childElementCount == 1) {
    wrapper.removeChild(wrapper.firstChild)
}
var table = document.createElement('table');
wrapper.appendChild(table);
table.id = "outer";
var tbody = document.createElement('tbody');
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
        var tdTable = createLessonsCell(nyf[i][j]);
        tr.appendChild(tdTable)
    }
}
function createLessonsCell(lessonArr) {
    var td = document.createElement('td');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    if (lessonArr && lessonArr instanceof Array) {
        var num = 0;
        lessonArr.forEach(lesson => {
            if (lesson && (!lesson.group || selectors.includes(lesson.group))) {
                var toBeContent = "";
                if (lesson && lesson.subject) {
                    toBeContent = lesson.name + " " + lesson.subject + " [" + lesson.room + "]";
                    if (lesson.group) {
                        toBeContent = "(" + lesson.group + ") " + toBeContent
                    }
                }
                var tr = createTrTdWithContent(toBeContent);
                if (lesson && lesson.subject) {
                    tr.style.backgroundColor = `var(--${lesson.subject}-color)`
                }
                else {
                    tr.style.backgroundColor = 'pink'
                }
                tbody.appendChild(tr);
                num++;
            }

        })
        if (num == 0) {
            var tr = createTrTdWithContent("");
            tr.style.backgroundColor = 'pink'
            tbody.appendChild(tr);
        }
    }

    table.appendChild(tbody);
    td.appendChild(table);
    return td;

}

function createMiscCell(content) {
    var tr = document.createElement('td');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    tbody.appendChild(createTrTdWithContent(content));
    table.appendChild(tbody);
    tr.appendChild(table);
    return tr;

}

function createTrTdWithContent(content) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = content;
    tr.appendChild(td);
    return tr;
}

function setCSSVariable(variable, value) {
    var root = document.documentElement;
    root.style.setProperty(`--${variable}`, value);
}


