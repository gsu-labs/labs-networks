
function create() {

    function switchColor(j) {
        switch (j) {
            case 0:
                tdstart = "<td bgcolor='yellow' height='10' width='10'>";
                break;
            case 1:
                tdstart = "<td bgcolor='#7fff00' height='10' width='10'>";
                break;
            case 2:
                tdstart = "<td bgcolor='green' height='10' width='10'>";
                break;
            case 3:
                tdstart = "<td bgcolor='aqua' height='10' width='10'>";
                break;
            case 4:
                tdstart = "<td bgcolor='blue' height='10' width='10'>";
                break;
        }
    }

    var arr = [];
    var arr2 = [];
    arr[0] = parseInt(document.getElementById("IF").value);
    arr[1] = parseInt(document.getElementById("ID").value);
    arr[2] = parseInt(document.getElementById("OR").value);
    arr[3] = parseInt(document.getElementById("EX").value);
    arr[4] = parseInt(document.getElementById("WB").value);
    for(let i=0; i<5; i++) {
        arr2[i] = [];
        arr2[i][0] = parseInt(document.getElementById("IF"+(i+1)).value);
        arr2[i][1] = parseInt(document.getElementById("ID"+(i+1)).value);
        arr2[i][2] = parseInt(document.getElementById("OR"+(i+1)).value);
        arr2[i][3] = parseInt(document.getElementById("EX"+(i+1)).value);
        arr2[i][4] = parseInt(document.getElementById("WB"+(i+1)).value);
    }

    var tablestart="<table id=myTable border=1>";
    var tableend = "</table>";
    var trstart = "<tr>";
    var trend = "</tr>";
    var tdstart = "<td>";
    var tdend = "</td>";
    var td = "<td bgcolor='white'>";
    var tde = "</td>";

    var reiting = [];
    reiting[0] = 0;
    reiting[1] = 0;
    reiting[2] = 0;

    document.write(tablestart);
    document.write(trstart);
    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            switchColor(j);
            for(let k=0;k<arr[j]*arr2[i][j];k++) {
                reiting[0]++;
                document.write(tdstart);
                document.write(tdend);
            }
        }
    }
    document.write(trend);
    document.write(tableend);

    document.write("<br><br>");

    var howLong = [], whereShouldStart = [], whereNeedToStart = [],buffer;
    for(let i=0;i<5;i++){
        howLong[i] = [];
        whereShouldStart[i] = [];
        whereNeedToStart[i] = [];
    }

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            howLong[i][j] = arr[j]*arr2[i][j];
        }
    }

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            if(j===0)
                whereShouldStart[i][j] = 1;
            else
                whereShouldStart[i][j] = whereShouldStart[i][j-1]+howLong[i][j-1];
        }
    }

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            if(i===0)
                whereNeedToStart[i][j] = whereShouldStart[i][j];
            else {
                if(whereNeedToStart[i-1][j]+howLong[i-1][j]<=whereNeedToStart[i][j-1]+howLong[i][j-1])
                    whereNeedToStart[i][j] = whereNeedToStart[i][j-1]+howLong[i][j-1];
                else
                    whereNeedToStart[i][j] = whereNeedToStart[i-1][j]+howLong[i-1][j];
            }
        }
    }

    reiting[1] = whereNeedToStart[4][4]+howLong[4][4]-1;

    document.write(tablestart);
    for(let i=0;i<5;i++) {
        document.write(trstart);
        for(let j=0;j<5;j++) {
            switchColor(j);
            if(i===0){
                for(let k=0;k<howLong[i][j];k++) {
                    document.write(tdstart);
                    document.write(tdend);
                }
            }
            else{
                if(j===0){
                    for(let k=0;k<whereNeedToStart[i][j]-1;k++){
                        document.write(td);
                        document.write(tde);
                    }
                    for(let k=0;k<howLong[i][j];k++) {
                        document.write(tdstart);
                        document.write(tdend);
                    }
                }
                else{
                    for(let k=0;k<whereNeedToStart[i][j]-(whereNeedToStart[i][j-1]+howLong[i][j-1]);k++) {
                        document.write(td);
                        document.write(tde);
                    }
                    for(let k=0;k<howLong[i][j];k++) {
                        document.write(tdstart);
                        document.write(tdend);
                    }
                }
            }
        }
    }
    document.write(tableend);

    /** **********************************************/

    document.write("<br><br>");

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            if(j===3)
                howLong[i][j] = Math.round((arr2[i][j])/(arr[j])*1.0) * arr[j];
            else
                howLong[i][j] = arr[j]*arr2[i][j];
        }
    }

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            if(j===0)
                whereShouldStart[i][j] = 1;
            else
                whereShouldStart[i][j] = whereShouldStart[i][j-1]+howLong[i][j-1];
        }
    }

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            if(i===0)
                whereNeedToStart[i][j] = whereShouldStart[i][j];
            else {
                if(whereNeedToStart[i-1][j]+howLong[i-1][j]<=whereNeedToStart[i][j-1]+howLong[i][j-1])
                    whereNeedToStart[i][j] = whereNeedToStart[i][j-1]+howLong[i][j-1];
                else
                    whereNeedToStart[i][j] = whereNeedToStart[i-1][j]+howLong[i-1][j];
            }
        }
    }

    document.write(tablestart);
    for(let i=0;i<5;i++) {
        document.write(trstart);
        for(let j=0;j<5;j++) {
            switchColor(j);
            if(i===0){
                for(let k=0;k<howLong[i][j];k++) {
                    document.write(tdstart);
                    document.write(tdend);
                }
            }
            else{
                if(j===0){
                    for(let k=0;k<whereNeedToStart[i][j]-1;k++){
                        document.write(td);
                        document.write(tde);
                    }
                    for(let k=0;k<howLong[i][j];k++) {
                        document.write(tdstart);
                        document.write(tdend);
                    }
                }
                else{
                    for(let k=0;k<whereNeedToStart[i][j]-(whereNeedToStart[i][j-1]+howLong[i][j-1]);k++) {
                        document.write(td);
                        document.write(tde);
                    }
                    for(let k=0;k<howLong[i][j];k++) {
                        document.write(tdstart);
                        document.write(tdend);
                    }
                }
            }
        }
    }
    document.write(tableend);

    reiting[2] = whereNeedToStart[4][4]+howLong[4][4]-1;

    /** *********************************** */
    /** *********************************** */

    document.write("<br><br>");

    document.write(tablestart);
    for(let i=0;i<3;i++){
        document.write(trstart);
        for(let j=0;j<reiting[i];j++){
            document.write(tdstart);
            document.write(tdend);
        }
        document.write(td + reiting[i]);
        document.write(tde);
        document.write(trend);
    }
    document.write(tableend);

    /** *********************************** */
    /** *********************************** */

    document.write("<br/>");
    var relod="<button id="+"relod"+" onclick="+"reloadPage()"+">Reload Page </button>";
    document.write(relod);
}

function reloadPage(){
    location.reload();
}