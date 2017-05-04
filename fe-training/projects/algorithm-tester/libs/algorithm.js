(function() {
  window.Algorithm = {
    dellTo3355: strToNumber,
    monkeyKing: function monkey(n, m) {
      var mkStatus = new Array(n)

      for (var i = 0; i < mkStatus.length; i++) {
        mkStatus[i] = true
      }


      var baoshu = 0
      var currentRemaining = n

      for (i = 0;; i++) {
        var current = i % n
        if (mkStatus[current] == true) {
          baoshu++
        }

        if (baoshu == m) {
          mkStatus[current] = false
          baoshu = 0
          currentRemaining--
          if (currentRemaining == 1) {
            break
          }
        }
      }

      for (i = 0; i < mkStatus.length; i++) {
        if (mkStatus[i] == true) {
          return i + 1
        }
      }
    },
  }

  function strToNumber(str) {
    var result = ''

    for (var i = 0; i < str.length; i++) {
      result += charToDigit(str[i])
    }

    return result
  }

  function strToNumbers(str) {
    var chars = str.split('')

    for (var i = 0; i < str.length; i++) {
      chars[i] = charToDigit(i)
    }

    return chars.join('')
  }

  function charToDigit(char) {
    var lowerChar = char.toLowerCase()

    if (lowerChar <= 'c') {
      return 2
    }

    if (lowerChar <= 'f') {
      return 3
    }

    if (lowerChar <= 'i') {
      return 4
    }

    if (lowerChar <= 'l') {
      return 5
    }

    if (lowerChar <= 'o') {
      return 6
    }

    if (lowerChar <= 's') {
      return 7
    }

    if (lowerChar <= 'v') {
      return 8
    }

    if (lowerChar <= 'z') {
      return 9
    }
  }
}())
