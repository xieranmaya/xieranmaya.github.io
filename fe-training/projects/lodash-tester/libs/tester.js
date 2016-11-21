var test = (function() {
  return test

  function test(fn, fnContext, testCases, base, baseContext) {
    if (!fn) { //如果传过来的函数为空，则为未实现
      return null
      return [{
        pass: false,
        type: 'NotImplemented',
      }]
    }
    return testCases.map(function(testCase) {
      if (Array.isArray(testCase)) {
        return compareTest(fn, fnContext, testCase, base, baseContext)
      }
      if (typeof testCase == 'object') {
        return outputTest(fn, fnContext, testCase)
      }
      if (typeof testCase == 'function') {
        return customTest(fn, fnContext, testCase)
      }
    })
  }

  /**
   * 以数据case分别测试fn和base两个函数，两个context分别为其前一个参数的context
   * 
   *
   *
   */
  function compareTest(fn, fnContext, testCase, base, baseContext) {
    var expectedOutput = base.apply(baseContext, _.cloneDeep(testCase))
    var output
    try {
      output = fn.apply(fnContext, _.cloneDeep(testCase))
      if (_.isEqual(expectedOutput, output)) {
        return {
          pass: true,
          input: `${fn.name}(${_.escape(JSON.stringify(testCase, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
          output: _.escape(JSON.stringify(output)),
          expect: _.escape(JSON.stringify(expectedOutput)),
          source: _.escape(js_beautify(fn.toString())),
        }
      } else {
        return {
          pass: false,
          type: 'WrongAnswer',
          input: `${fn.name}(${_.escape(JSON.stringify(testCase, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
          output: _.escape(JSON.stringify(output)),
          expect: _.escape(JSON.stringify(expectedOutput)),
          source: _.escape(js_beautify(fn.toString())),
        }
      }
    } catch (e) {
      return {
        pass: false,
        type: 'RuntimeError',
        error: e,
        input: `${fn.name}(${_.escape(JSON.stringify(testCase, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
        expect: _.escape(JSON.stringify(expectedOutput)),
        source: _.escape(js_beautify(fn.toString())),
      }
    }
  }

  function stringifyFunction(key, value) {
    return typeof value == 'function' ? value.toString() : value
  }

  /**
   * 自定义测试函数
   * 使用场景一般是输出不固定的情况比如输出随机数或者小数
   * 此时testCase实际上是一个写好的函数，运行这个函数返回true/false得到是否通过测试
   */
  function customTest(fn, fnContext, testCase) {
    var pass = false
    try {
      pass = testCase(fn, fnContext)
    } catch (e) {
      return {
        pass: false,
        type: 'RuntimeError',
        error: e,
        source: _.escape(js_beautify(fn.toString())),
      }
    }
    if (pass) {
      return {
        pass: true,
        source: _.escape(js_beautify(fn.toString())),
      }
    } else {
      return {
        pass: false,
        type: 'WrongAnswer',
        source: _.escape(js_beautify(fn.toString())),
      }
    }
  }

  /**
   * 算法的输入出输出已经确定的情况
   * 此时testCase是一个Object，包含input与output字段
   */
  function outputTest(fn, fnContext, testCase) {
    try {
      var output = fn.apply(fnContext, _.cloneDeep(testCase.input))
    } catch (e) {
      return {
        pass: false,
        type: 'RuntimeError',
        error: e,
        input: `${fn.name}(${_.escape(JSON.stringify(testCase.input, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
        source: _.escape(js_beautify(fn.toString())),
      }
    }
    if (_.isEqual(output, testCase.output)) {
      return {
        pass: true,
        input: `${fn.name}(${_.escape(JSON.stringify(testCase.input, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
        output: _.escape(JSON.stringify(output)),
        expect: _.escape(JSON.stringify(testCase.output)),
        source: _.escape(js_beautify(fn.toString())),
      }
    } else {
      return {
        pass: false,
        type: 'WrongAnswer',
        input: `${fn.name}(${_.escape(JSON.stringify(testCase.input, stringifyFunction).match(/^\[(.*)\]$/)[1])})`,
        output: _.escape(JSON.stringify(output)),
        expect: _.escape(JSON.stringify(testCase.output)),
        source: _.escape(js_beautify(fn.toString())),
      }
    }
  }
}())
