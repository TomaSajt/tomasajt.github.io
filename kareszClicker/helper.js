function pow(base, exp) {
    var flag = exp < 0;
    if (flag) exp = -exp
    var res = 1
    for (var i = 1; i <= exp; i++) {
        res *= base
    }
    if (flag) res = 1 / res
    return res
}