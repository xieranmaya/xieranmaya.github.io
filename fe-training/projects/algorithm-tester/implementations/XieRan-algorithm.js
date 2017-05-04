(function() {
  window.XieRan = {
    monkeyKing: function() {
      return 8
    },
    dellTo3355: function() {
      return '3355'
    },
    isPrime: function(n) {
      if (n < 2) {
        return false
      }

      for (var i = 2; i < n; i++) {
        if (n % i == 0) {
          return false
        }
      }

      return true
    },
    skip7: function() {
      var result = []
      for (var i = 7; i < 100; i++) {
        if ((i % 7 == 0) || (i % 10 == 7) || (parseInt(i / 10) == 7)) {
          result.push(i)
        }
      }
      return result
    },
    /**
     * 计算year这一年month这个月的第一天是星期几
     * @params Number year 年份，输入2016就是2016年
     * @params Number month 月份，一月就以1表示
     * @returns Number 返回这个月第一天是星期几，0表示星期天，6表示星期六
     */
    firstWeekdayOfMonthYear: function firstWeekdayOfMonthYear(year, month) {
      var daysOfYear = (year * 365 + parseInt(year / 4) - parseInt(year / 100) + parseInt(year / 400))

      var allDays = daysOfYear + daysUntillMonth(year, month)

      var weekDay = (allDays + 6) % 7

      return weekDay
    },
  }

  /**
   * 计算某一年1月到（month-1）月的天数之和
   */
  function daysUntillMonth(year, month) {
    var daySum = 0
    for (var i = 1; i < month; i++) {
      daySum += daysOfMonth(year, i)
    }
    return daySum
  }

  /**
   * 计算某年某月有多少天
   * 例：daysOfMonth(2000,2) -> 29
   */
  function daysOfMonth(year, month) {
    if (month == 2) {
      if (isLeapYear(year)) {
        return 29
      } else {
        return 28
      }
    }
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31
      default:
        return 30
    }
  }

  /**
   * 把小于100的数字n变成两位宽度的字符串
   */
  function padNumber(n) {
    if (n < 10) {
      return "0" + n
    } else {
      return "" + n
    }
  }

  // sum=0;
  // for(var i = 1;i<=2000;i++){ 
  //   if(isLeapYear(i)) {
  //     sum+=366
  //   } else {
  //     sum+=365
  //   }
  // }

  /**
   * 计算一个年份是否为闰年
   */
  function isLeapYear(y) {
    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)
  }

}())
