function DropdownClick(val) {
    var y = document.getElementsByClassName('btn dropdown-toggle');
    var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}

function AddElementToDropdown(el, region) {
    var parentEl = document.getElementById(el);

    var li = document.createElement('li');
    li.onclick = function () {
        DropdownClick(this.innerHTML)
    };

    var a = document.createElement('a');
    a.innerHTML = region;
    a.href = "#";
    parentEl.appendChild(li);
    li.appendChild(a);
}

// buttons for navigation Next
$('#btnNext').click(function () {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    Calculate3Tab();
});
// buttons for navigation Previous
$('#btnPrev').click(function () {
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});

document.getElementById('a1').onclick = function () {
    Calculate3Tab();
};
document.getElementById('b1').onclick = function () {
    Calculate3Tab();
};
document.getElementById('c1').onclick = function () {
    Calculate3Tab();
};
document.getElementById('chbHotWater').onclick = function () {
    ShowOrHideElementById('HotWaterGroup');
};

document.getElementById('chbHotWater').onclick = function () {
    ShowOrHideElementById('HotWaterGroup');
};
document.getElementById('chbColdWater').onclick = function () {
    ShowOrHideElementById('ColdWaterGroup');
};
document.getElementById('chbPowerSupply').onclick = function () {
    ShowOrHideElementById('PowerSupplyGroup');
};
document.getElementById('chbGasSupply').onclick = function () {
    ShowOrHideElementById('GasSupplyGroup');
};

function ShowOrHideElementById(el) {
    if (document.getElementById(el).style.display == 'none')
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

// add new row to table
document.getElementById('btnAddRow').onclick = function () {
    var rowsCounter = document.getElementById("tableMembers").rows.length;

    var index = 0;

    var parent = document.getElementById('tableBody');
    var tr = document.createElement('tr');
    parent.appendChild(tr);

    function AddElToTd(el) {
        index++;
        var td = document.createElement('td');

        if (index % 4 == 0) {
            td.appendChild(document.createTextNode('Сукупний дохід: '));

        }

        td.appendChild(el);

        if (index % 4 == 0) {
            td.appendChild(document.createTextNode(' грн.'));
        }

        tr.appendChild(td);
    }

    var num = document.createElement('p');
    num.innerHTML = rowsCounter;
    AddElToTd(num);

    var inputName = document.createElement('input');
    inputName.type = 'text';
    AddElToTd(inputName);

    var chbIsWork = document.createElement('input');
    chbIsWork.type = 'checkbox';
    chbIsWork.setAttribute('id', 'chbMemIsWork' + rowsCounter);
    AddElToTd(chbIsWork);

    var inputSalary = document.createElement('input');
    inputSalary.type = 'text';
    inputSalary.setAttribute('id', 'inpMemSalary' + rowsCounter);
    AddElToTd(inputSalary);
};

window.onload = function () {
    // add regions to dropdown menu
    var arr = ["Івано-Франківська", "АР Крим", "Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська",
        "Закарпатська", "Запорізька", "Кіровоградська", "Київська", "Курорт Буковель", "Луганська", "Львівська",
        "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська",
        "Хмельницька", "Черкаська", "Чернівецька", "Чернігівська"];

    arr.forEach(function (item) {
        AddElementToDropdown('DropDownRegion', item);
    });

    // add type of settlement to dropdown menu
    var settlement = ["Село", "Селище", "Селище міського типу", "Місто"];

    settlement.forEach(function (item) {
        AddElementToDropdown('DropDownTypeSettlement', item);
    });

    (function () {
        // set date to header
        var date = new Date();
        var str =
            (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' +
            (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '.' +
            date.getFullYear();

        document.getElementById('h3SubsidiesProtocol').innerHTML += str;
    })();
};

function Calculate3Tab() {
    ViewSpecifications();
    function ViewSpecifications() {

        var rowsCounter = document.getElementById("tableMembers").rows.length;

        var count = rowsCounter;
        var homeArea = document.getElementById('inpTotalArea').innerHTML;
        var homeHeatingArea = document.getElementById('inpHeatArea').innerHTML;
        var region = document.getElementById('dropRegion').innerHTML;
        var typeOfSettlement = document.getElementById('dropSettlement').innerHTML;

        document.getElementById('countOfMembers').innerHTML = count;
        document.getElementById('areaOfHome').innerHTML = homeArea;
        document.getElementById('areaOfHeating').innerHTML = homeHeatingArea;
        document.getElementById('nameOfRegion').innerHTML = region;
        document.getElementById('typeOfSettlement').innerHTML = typeOfSettlement;
    }
}

