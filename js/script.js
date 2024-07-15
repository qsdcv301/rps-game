var mechar, comchar;
let coordx = [0, 158, 316, 474];
let coordy = [0, 208, 416];

function char(n) {
    mechar = n;
    document.getElementById('char').style.display = "none";
    document.getElementById('char2').style.display = "block";
    let arryCoord = coor(n);
    //console.log(arryCoord);
    document.getElementById("me").style.backgroundPosition = `-${arryCoord[0]}px -${arryCoord[1]}px`;
}

function char2(n) {
    comchar = n;
    document.getElementById('char').style.display = "none";
    document.getElementById('char2').style.display = "none";
    let arryCoord = coor(n);
    //console.log(arryCoord);
    document.getElementById("com").style.backgroundPosition = `-${arryCoord[0]}px -${arryCoord[1]}px`;

}

function coor(n) {
    let coordx, coordy;
    switch (n) {
        case 0:
            coordx = 0;
            coordy = 0;
            break;
        case 1:
            coordx = 158;
            coordy = 0;
            break;
        case 2:
            coordx = 318;
            coordy = 0;
            break;
        case 3:
            coordx = 478;
            coordy = 0;
            break;
        case 4:
            coordx = 0;
            coordy = 210;
            break;
        case 5:
            coordx = 158;
            coordy = 210;
            break;
        case 6:
            coordx = 318;
            coordy = 210;
            break;
        case 7:
            coordx = 478;
            coordy = 210;
            break;
        case 8:
            coordx = 0;
            coordy = 424;
            break;
        case 9:
            coordx = 158;
            coordy = 424;
            break;
        case 10:
            coordx = 316;
            coordy = 424;
            break;
        case 11:
            coordx = 478;
            coordy = 424;
            break;
    }
    return [coordx, coordy];
}

function game(n) {
    let rsp = ["가위", "바위", "보"];

    let com = Math.floor(Math.random() * 3);
    document.write("나" + rsp[n] + " : 컴퓨터" + rsp[com]);


    // switch(n){
    //     case 0: 
    //        document.write("가위");
    //     break;
    //     case 1: 
    //        document.write("바위");
    //     break;
    //     case 2: 
    //        document.write("보");
    //     break;
    // }
}
