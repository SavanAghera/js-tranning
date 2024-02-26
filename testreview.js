n = 9;
s = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i  > j && n-i - 1 < j) {
            s += '*'
        }else {
            s +=' '
        }
    }
    s += '\n'
}
console.log(s);