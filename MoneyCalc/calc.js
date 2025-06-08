document.getElementById('calc').addEventListener('click', calc);

function getIntValue(id) {
    return parseInt(document.getElementById(id).value, 10) || 0;
}

function calc() { 
    //multiplying by incase price change numbers can be swapped
    let iron = getIntValue('iron') * 1;
    let glass = getIntValue('glass') * 1;
    let copper = getIntValue('copper') * 1;
    let rubber = getIntValue('glass')*1;
    let scrap = getIntValue('scrap') *1;
    let plastic = getIntValue('plastic')*1;
    let steel = getIntValue('steel')*1;
    let can = getIntValue('can')*2;
    let alu = getIntValue('alu')*1;
    let bottle = getIntValue('bottle')*2;
    let time = getIntValue('min') + getIntValue('sec')/60;


    let itemTotal = getIntValue('iron') + getIntValue('glass') + getIntValue('copper') + getIntValue('scrap') + getIntValue('plastic') + getIntValue('steel') + getIntValue('can')  + getIntValue('alu') + getIntValue('bottle');


    let total = iron + glass + copper + rubber + scrap + plastic + steel + can + alu + bottle;

    let rate = total/time;

    document.getElementById('TotalValue').innerText = total.toLocaleString();

    
    document.getElementById('rate').innerText = rate.toLocaleString();
    document.getElementById('hourRate').innerText = rate.toLocaleString()*60;

 


    let ironPer = iron/itemTotal*100;
    let glassPer = glass/itemTotal*100;
    let copperPer = copper/itemTotal*100;
    let rubberPer = rubber/itemTotal*100;
    let scrapPer = scrap/itemTotal*100;
    let plasticPer = plastic/itemTotal*100;
    let steelPer = steel/itemTotal*100;
    let canPer = (can/2)/itemTotal*100;
    let aluPer = alu/itemTotal*100;
    let bottlePer = (bottle/2)/itemTotal*100;


    document.getElementById('totalItems').innerText = "Total Items: " + itemTotal.toLocaleString();
    document.getElementById('ironPer').innerText = "Percentage of Iron: " + ironPer.toLocaleString() + '%';  
    document.getElementById('glassPer').innerText = "Percentage of Glass: " + glassPer.toLocaleString() + '%';
    document.getElementById('copperPer').innerText = "Percentage of Copper: " + copperPer.toLocaleString() + '%';
    document.getElementById('rubberPer').innerText = "Percentage of Rubber: " + rubberPer.toLocaleString() + '%';
    document.getElementById('scrapPer').innerText = "Percentage of Scrap: " + scrapPer.toLocaleString() + '%';
    document.getElementById('plasticPer').innerText = "Percentage of Plastic: " + plasticPer.toLocaleString() + '%';
    document.getElementById('steelPer').innerText = "Percentage of Steel: " + steelPer.toLocaleString() + '%';
    document.getElementById('canPer').innerText = "Percentage of Cans: " + canPer.toLocaleString() + '%';
    document.getElementById('aluPer').innerText = "Percentage of Aluminum: " + aluPer.toLocaleString() + '%';
    document.getElementById('bottlePer').innerText = "Percentage of Bottles: " + bottlePer.toLocaleString() + '%';
    
}