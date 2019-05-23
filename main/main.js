module.exports = function main(num) {
    console.log("Debug Info");
    var floors = LEDNums();
    var result = '';
    floors.forEach(function(floor) {
        line = GetLine(floor, num)
        result += line + '\n'
    });
    return result
};

function LEDNums() {
    // Return two-dimensional array.
    // 0 is [floors[0][0], floors[1][0], floors[2][0]].join("\n")
    var top    = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.']
    var middle = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|']
    var bottom = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']
    var floors = [top, middle, bottom]
    return floors
}

function GetLine(floor, num) {
    l = []
    for (var i of num) {
        i = Number(i);
        l.push(floor[i]);
    }
    return l.join(' ')
}