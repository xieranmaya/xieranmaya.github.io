var testCases = (function() {
  var testCases = {}
  var FAKE_LODASH = new Proxy({}, {
    get: function(obj, name, proxy) {
      return obj[name] = new Proxy(function() {}, {
        apply: function(initialFn, proxy, args) {
          if (testCases[name]) {
            testCases[name].push(args)
          } else {
            testCases[name] = [args]
          }
        }
      })
    },
  })
  if (true) {
    try {
      FAKE_LODASH.chunk(['a',  'b',  'c',  'd'],  2);
      // => [['a', 'b'], ['c', 'd']]
       
      FAKE_LODASH.chunk(['a',  'b',  'c',  'd'],  3);
      // => [['a', 'b', 'c'], ['d']]
    } catch (e) {}



    try {
      FAKE_LODASH.compact([0,  1,  false,  2,  '',  3]);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      var  array  =   [1];
      var  other  =  _.concat(array,  2,   [3],   [
        [4]
      ]); 
      console.log(other);
      // => [1, 2, 3, [4]]
       
      console.log(array);
      // => [1]
    } catch (e) {}



    try {
      FAKE_LODASH.difference([2,  1],   [2,  3]);
      // => [1]
    } catch (e) {}



    try {
      FAKE_LODASH.differenceBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
      // => [1.2]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.differenceBy([{ 
        'x':  2 
      },   { 
        'x':  1 
      }],   [{ 
        'x':  1 
      }],  'x');
      // => [{ 'x': 2 }]
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  2,
         'y':  1 
      }]; 
      FAKE_LODASH.differenceWith(objects,   [{ 
        'x':  1,
         'y':  2 
      }],  _.isEqual);
      // => [{ 'x': 2, 'y': 1 }]
    } catch (e) {}



    try {
      FAKE_LODASH.drop([1,  2,  3]);
      // => [2, 3]
       
      FAKE_LODASH.drop([1,  2,  3],  2);
      // => [3]
       
      FAKE_LODASH.drop([1,  2,  3],  5);
      // => []
       
      FAKE_LODASH.drop([1,  2,  3],  0);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      FAKE_LODASH.dropRight([1,  2,  3]);
      // => [1, 2]
       
      FAKE_LODASH.dropRight([1,  2,  3],  2);
      // => [1]
       
      FAKE_LODASH.dropRight([1,  2,  3],  5);
      // => []
       
      FAKE_LODASH.dropRight([1,  2,  3],  0);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  true 
      },    { 
        'user':   'fred',
            'active':  false 
      },    { 
        'user':   'pebbles',
         'active':  false 
      }]; 
      FAKE_LODASH.dropRightWhile(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['barney']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.dropRightWhile(users,   { 
        'user':   'pebbles',
         'active':  false 
      });
      // => objects for ['barney', 'fred']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.dropRightWhile(users,   ['active',  false]);
      // => objects for ['barney']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.dropRightWhile(users,  'active');
      // => objects for ['barney', 'fred', 'pebbles']
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  false 
      },    { 
        'user':   'fred',
            'active':  false 
      },    { 
        'user':   'pebbles',
         'active':  true 
      }]; 
      FAKE_LODASH.dropWhile(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['pebbles']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.dropWhile(users,   { 
        'user':   'barney',
         'active':  false 
      });
      // => objects for ['fred', 'pebbles']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.dropWhile(users,   ['active',  false]);
      // => objects for ['pebbles']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.dropWhile(users,  'active');
      // => objects for ['barney', 'fred', 'pebbles']
    } catch (e) {}



    try {
      var  array  =   [1,  2,  3]; 
      FAKE_LODASH.fill(array,  'a');
      console.log(array);
      // => ['a', 'a', 'a']
       
      FAKE_LODASH.fill(Array(3),  2);
      // => [2, 2, 2]
       
      FAKE_LODASH.fill([4,  6,  8,  10],  '*',  1,  3);
      // => [4, '*', '*', 10]
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  false 
      },    { 
        'user':   'fred',
            'active':  false 
      },    { 
        'user':   'pebbles',
         'active':  true 
      }]; 
      FAKE_LODASH.findIndex(users,  function(o)  { 
        return  o.user  ==  'barney'; 
      });
      // => 0
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.findIndex(users,   { 
        'user':   'fred',
         'active':  false 
      });
      // => 1
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.findIndex(users,   ['active',  false]);
      // => 0
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.findIndex(users,  'active');
      // => 2
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  true 
      },    { 
        'user':   'fred',
            'active':  false 
      },    { 
        'user':   'pebbles',
         'active':  false 
      }]; 
      FAKE_LODASH.findLastIndex(users,  function(o)  { 
        return  o.user  ==  'pebbles'; 
      });
      // => 2
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.findLastIndex(users,   { 
        'user':   'barney',
         'active':  true 
      });
      // => 0
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.findLastIndex(users,   ['active',  false]);
      // => 2
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.findLastIndex(users,  'active');
      // => 0
    } catch (e) {}



    try {
      FAKE_LODASH.flatten([1,   [2,   [3,   [4]],  5]]);
      // => [1, 2, [3, [4]], 5]
    } catch (e) {}



    try {
      FAKE_LODASH.flattenDeep([1,   [2,   [3,   [4]],  5]]);
      // => [1, 2, 3, 4, 5]
    } catch (e) {}



    try {
      var  array  =   [1,   [2,   [3,   [4]],  5]]; 
      FAKE_LODASH.flattenDepth(array,  1);
      // => [1, 2, [3, [4]], 5]
       
      FAKE_LODASH.flattenDepth(array,  2);
      // => [1, 2, 3, [4], 5]
    } catch (e) {}



    try {
      FAKE_LODASH.fromPairs([
        ['a',  1],  
        ['b',  2]
      ]);
      // => { 'a': 1, 'b': 2 }
    } catch (e) {}



    try {
      FAKE_LODASH.head([1,  2,  3]);
      // => 1
       
      FAKE_LODASH.head([]);
      // => undefined
    } catch (e) {}



    try {
      FAKE_LODASH.indexOf([1,  2,  1,  2],  2);
      // => 1
       
      // Search from the `fromIndex`.
      FAKE_LODASH.indexOf([1,  2,  1,  2],  2,  2);
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.initial([1,  2,  3]);
      // => [1, 2]
    } catch (e) {}



    try {
      FAKE_LODASH.intersection([2,  1],   [2,  3]);
      // => [2]
    } catch (e) {}



    try {
      FAKE_LODASH.intersectionBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
      // => [2.1]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.intersectionBy([{ 
        'x':  1 
      }],   [{ 
        'x':  2 
      },   { 
        'x':  1 
      }],  'x');
      // => [{ 'x': 1 }]
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  2,
         'y':  1 
      }];
      var  others  =   [{ 
        'x':  1,
         'y':  1 
      },   { 
        'x':  1,
         'y':  2 
      }]; 
      FAKE_LODASH.intersectionWith(objects,  others,  _.isEqual);
      // => [{ 'x': 1, 'y': 2 }]
    } catch (e) {}



    try {
      FAKE_LODASH.join(['a',  'b',  'c'],  '~');
      // => 'a~b~c'
    } catch (e) {}



    try {
      FAKE_LODASH.last([1,  2,  3]);
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.lastIndexOf([1,  2,  1,  2],  2);
      // => 3
       
      // Search from the `fromIndex`.
      FAKE_LODASH.lastIndexOf([1,  2,  1,  2],  2,  2);
      // => 1
    } catch (e) {}



    try {
      var  array  =   ['a',  'b',  'c',  'd']; 
      FAKE_LODASH.nth(array,  1);
      // => 'b'
       
      FAKE_LODASH.nth(array,  -2);
      // => 'c';
    } catch (e) {}



    try {
      var  array  =   ['a',  'b',  'c',  'a',  'b',  'c']; 
      FAKE_LODASH.pull(array,  'a',  'c');
      console.log(array);
      // => ['b', 'b']
    } catch (e) {}



    try {
      var  array  =   ['a',  'b',  'c',  'a',  'b',  'c']; 
      FAKE_LODASH.pullAll(array,   ['a',  'c']);
      console.log(array);
      // => ['b', 'b']
    } catch (e) {}



    try {
      var  array  =   [{ 
        'x':  1 
      },   { 
        'x':  2 
      },   { 
        'x':  3 
      },   { 
        'x':  1 
      }]; 
      FAKE_LODASH.pullAllBy(array,   [{ 
        'x':  1 
      },   { 
        'x':  3 
      }],  'x');
      console.log(array);
      // => [{ 'x': 2 }]
    } catch (e) {}



    try {
      var  array  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  3,
         'y':  4 
      },   { 
        'x':  5,
         'y':  6 
      }]; 
      FAKE_LODASH.pullAllWith(array,   [{ 
        'x':  3,
         'y':  4 
      }],  _.isEqual);
      console.log(array);
      // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
    } catch (e) {}



    try {
      var  array  =   ['a',  'b',  'c',  'd'];
      var  pulled  =  _.pullAt(array,   [1,  3]); 
      console.log(array);
      // => ['a', 'c']
       
      console.log(pulled);
      // => ['b', 'd']
    } catch (e) {}



    try {
      var  array  =   [1,  2,  3,  4];
      var  evens  =  _.remove(array,  function(n)  {  
        return  n  %  2  ==  0;
      }); 
      console.log(array);
      // => [1, 3]
       
      console.log(evens);
      // => [2, 4]
    } catch (e) {}



    try {
      var  array  =   [1,  2,  3]; 
      FAKE_LODASH.reverse(array);
      // => [3, 2, 1]
       
      console.log(array);
      // => [3, 2, 1]
    } catch (e) {}



    try {
      FAKE_LODASH.sortedIndex([30,  50],  40);
      // => 1
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  4 
      },   { 
        'x':  5 
      }]; 
      FAKE_LODASH.sortedIndexBy(objects,   { 
        'x':  4 
      },  function(o)  { 
        return  o.x; 
      });
      // => 0
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.sortedIndexBy(objects,   { 
        'x':  4 
      },  'x');
      // => 0
    } catch (e) {}



    try {
      FAKE_LODASH.sortedIndexOf([4,  5,  5,  5,  6],  5);
      // => 1
    } catch (e) {}



    try {
      FAKE_LODASH.sortedLastIndex([4,  5,  5,  5,  6],  5);
      // => 4
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  4 
      },   { 
        'x':  5 
      }]; 
      FAKE_LODASH.sortedLastIndexBy(objects,   { 
        'x':  4 
      },  function(o)  { 
        return  o.x; 
      });
      // => 1
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.sortedLastIndexBy(objects,   { 
        'x':  4 
      },  'x');
      // => 1
    } catch (e) {}



    try {
      FAKE_LODASH.sortedLastIndexOf([4,  5,  5,  5,  6],  5);
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.sortedUniq([1,  1,  2]);
      // => [1, 2]
    } catch (e) {}



    try {
      FAKE_LODASH.sortedUniqBy([1.1,  1.2,  2.3,  2.4],  Math.floor);
      // => [1.1, 2.3]
    } catch (e) {}



    try {
      FAKE_LODASH.tail([1,  2,  3]);
      // => [2, 3]
    } catch (e) {}



    try {
      FAKE_LODASH.take([1,  2,  3]);
      // => [1]
       
      FAKE_LODASH.take([1,  2,  3],  2);
      // => [1, 2]
       
      FAKE_LODASH.take([1,  2,  3],  5);
      // => [1, 2, 3]
       
      FAKE_LODASH.take([1,  2,  3],  0);
      // => []
    } catch (e) {}



    try {
      FAKE_LODASH.takeRight([1,  2,  3]);
      // => [3]
       
      FAKE_LODASH.takeRight([1,  2,  3],  2);
      // => [2, 3]
       
      FAKE_LODASH.takeRight([1,  2,  3],  5);
      // => [1, 2, 3]
       
      FAKE_LODASH.takeRight([1,  2,  3],  0);
      // => []
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  true 
      },    { 
        'user':   'fred',
            'active':  false 
      },    { 
        'user':   'pebbles',
         'active':  false 
      }]; 
      FAKE_LODASH.takeRightWhile(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['fred', 'pebbles']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.takeRightWhile(users,   { 
        'user':   'pebbles',
         'active':  false 
      });
      // => objects for ['pebbles']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.takeRightWhile(users,   ['active',  false]);
      // => objects for ['fred', 'pebbles']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.takeRightWhile(users,  'active');
      // => []
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'active':  false 
      },    { 
        'user':   'fred',
            'active':  false
      },    { 
        'user':   'pebbles',
         'active':  true 
      }]; 
      FAKE_LODASH.takeWhile(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['barney', 'fred']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.takeWhile(users,   { 
        'user':   'barney',
         'active':  false 
      });
      // => objects for ['barney']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.takeWhile(users,   ['active',  false]);
      // => objects for ['barney', 'fred']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.takeWhile(users,  'active');
      // => []
    } catch (e) {}



    try {
      FAKE_LODASH.union([2],   [1,  2]);
      // => [2, 1]
    } catch (e) {}



    try {
      FAKE_LODASH.unionBy([2.1],   [1.2,  2.3],  Math.floor);
      // => [2.1, 1.2]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.unionBy([{ 
        'x':  1 
      }],   [{ 
        'x':  2 
      },   { 
        'x':  1 
      }],  'x');
      // => [{ 'x': 1 }, { 'x': 2 }]
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  2,
         'y':  1 
      }];
      var  others  =   [{ 
        'x':  1,
         'y':  1 
      },   { 
        'x':  1,
         'y':  2 
      }]; 
      FAKE_LODASH.unionWith(objects,  others,  _.isEqual);
      // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
    } catch (e) {}



    try {
      FAKE_LODASH.uniq([2,  1,  2]);
      // => [2, 1]
    } catch (e) {}



    try {
      FAKE_LODASH.uniqBy([2.1,  1.2,  2.3],  Math.floor);
      // => [2.1, 1.2]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.uniqBy([{ 
        'x':  1 
      },   { 
        'x':  2 
      },   { 
        'x':  1 
      }],  'x');
      // => [{ 'x': 1 }, { 'x': 2 }]
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  2,
         'y':  1 
      },   { 
        'x':  1,
         'y':  2 
      }]; 
      FAKE_LODASH.uniqWith(objects,  _.isEqual);
      // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
    } catch (e) {}



    try {
      var  zipped  =  _.zip(['a',  'b'],   [1,  2],   [true,  false]);
      // => [['a', 1, true], ['b', 2, false]]
       
      FAKE_LODASH.unzip(zipped);
      // => [['a', 'b'], [1, 2], [true, false]]
    } catch (e) {}



    try {
      var  zipped  =  _.zip([1,  2],   [10,  20],   [100,  200]);
      // => [[1, 10, 100], [2, 20, 200]]
       
      FAKE_LODASH.unzipWith(zipped,  _.add);
      // => [3, 30, 300]
    } catch (e) {}



    try {
      FAKE_LODASH.without([2,  1,  2,  3],  1,  2);
      // => [3]
    } catch (e) {}



    try {
      FAKE_LODASH.xor([2,  1],   [2,  3]);
      // => [1, 3]
    } catch (e) {}



    try {
      FAKE_LODASH.xorBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
      // => [1.2, 3.4]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.xorBy([{ 
        'x':  1 
      }],   [{ 
        'x':  2 
      },   { 
        'x':  1 
      }],  'x');
      // => [{ 'x': 2 }]
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'x':  1,
         'y':  2 
      },   { 
        'x':  2,
         'y':  1 
      }];
      var  others  =   [{ 
        'x':  1,
         'y':  1 
      },   { 
        'x':  1,
         'y':  2 
      }]; 
      FAKE_LODASH.xorWith(objects,  others,  _.isEqual);
      // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
    } catch (e) {}



    try {
      FAKE_LODASH.zip(['a',  'b'],   [1,  2],   [true,  false]);
      // => [['a', 1, true], ['b', 2, false]]
    } catch (e) {}



    try {
      FAKE_LODASH.zipObject(['a',  'b'],   [1,  2]);
      // => { 'a': 1, 'b': 2 }
    } catch (e) {}



    try {
      FAKE_LODASH.zipObjectDeep(['a.b[0].c',  'a.b[1].d'],   [1,  2]);
      // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
    } catch (e) {}



    try {
      FAKE_LODASH.zipWith([1,  2],   [10,  20],   [100,  200],  function(a,  b,  c)  {  
        return  a  +  b  +  c;
      });
      // => [111, 222]
    } catch (e) {}



    try {
      FAKE_LODASH.countBy([6.1,  4.2,  6.3],  Math.floor);
      // => { '4': 1, '6': 2 }
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.countBy(['one',  'two',  'three'],  'length');
      // => { '3': 2, '5': 1 }
    } catch (e) {}



    try {
      FAKE_LODASH.every([true,  1,  null,  'yes'],  Boolean);
      // => false
       
      var  users  =   [  { 
        'user':   'barney',
         'age':  36,
         'active':  false 
      },    { 
        'user':   'fred',
           'age':  40,
         'active':  false 
      }]; 
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.every(users,   { 
        'user':   'barney',
         'active':  false 
      });
      // => false
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.every(users,   ['active',  false]);
      // => true
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.every(users,  'active');
      // => false
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
         'age':  36,
         'active':  true 
      },    { 
        'user':   'fred',
           'age':  40,
         'active':  false 
      }]; 
      FAKE_LODASH.filter(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['fred']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.filter(users,   { 
        'age':  36,
         'active':  true 
      });
      // => objects for ['barney']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.filter(users,   ['active',  false]);
      // => objects for ['fred']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.filter(users,  'active');
      // => objects for ['barney']
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'age':  36,
         'active':  true 
      },    { 
        'user':   'fred',
            'age':  40,
         'active':  false 
      },    { 
        'user':   'pebbles',
         'age':  1,
          'active':  true 
      }]; 
      FAKE_LODASH.find(users,  function(o)  { 
        return  o.age  <  40; 
      });
      // => object for 'barney'
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.find(users,   { 
        'age':  1,
         'active':  true 
      });
      // => object for 'pebbles'
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.find(users,   ['active',  false]);
      // => object for 'fred'
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.find(users,  'active');
      // => object for 'barney'
    } catch (e) {}



    try {
      FAKE_LODASH.findLast([1,  2,  3,  4],  function(n)  {  
        return  n  %  2  ==  1;
      });
      // => 3
    } catch (e) {}



    try {
      function  duplicate(n)  {  
        return  [n,  n];
      } 
      FAKE_LODASH.flatMap([1,  2],  duplicate);
      // => [1, 1, 2, 2]
    } catch (e) {}



    try {
      function  duplicate(n)  {  
        return  [
          [
            [n,  n]
          ]
        ];
      } 
      FAKE_LODASH.flatMapDeep([1,  2],  duplicate);
      // => [1, 1, 2, 2]
    } catch (e) {}



    try {
      function  duplicate(n)  {  
        return  [
          [
            [n,  n]
          ]
        ];
      } 
      FAKE_LODASH.flatMapDepth([1,  2],  duplicate,  2);
      // => [[1, 1], [2, 2]]
    } catch (e) {}



    try {
      FAKE_LODASH.forEach([1,  2],  function(value)  {  
        console.log(value);
      });
      // => Logs `1` then `2`.
       
      FAKE_LODASH.forEach({ 
        'a':  1,
         'b':  2 
      },  function(value,  key)  {  
        console.log(key);
      });
      // => Logs 'a' then 'b' (iteration order is not guaranteed).
    } catch (e) {}



    try {
      FAKE_LODASH.forEachRight([1,  2],  function(value)  {  
        console.log(value);
      });
      // => Logs `2` then `1`.
    } catch (e) {}



    try {
      FAKE_LODASH.groupBy([6.1,  4.2,  6.3],  Math.floor);
      // => { '4': [4.2], '6': [6.1, 6.3] }
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.groupBy(['one',  'two',  'three'],  'length');
      // => { '3': ['one', 'two'], '5': ['three'] }
    } catch (e) {}



    try {
      FAKE_LODASH.includes([1,  2,  3],  1);
      // => true
       
      FAKE_LODASH.includes([1,  2,  3],  1,  2);
      // => false
       
      FAKE_LODASH.includes({ 
        'a':  1,
         'b':  2 
      },  1);
      // => true
       
      FAKE_LODASH.includes('abcd',  'bc');
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.invokeMap([
        [5,  1,  7],  
        [3,  2,  1]
      ],  'sort');
      // => [[1, 5, 7], [1, 2, 3]]
       
      FAKE_LODASH.invokeMap([123,  456],  String.prototype.split,  '');
      // => [['1', '2', '3'], ['4', '5', '6']]
    } catch (e) {}



    try {
      var  array  =   [  { 
        'dir':   'left',
         'code':  97 
      },    { 
        'dir':   'right',
         'code':  100 
      }]; 
      FAKE_LODASH.keyBy(array,  function(o)  {  
        return  String.fromCharCode(o.code);
      });
      // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
       
      FAKE_LODASH.keyBy(array,  'dir');
      // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
    } catch (e) {}



    try {
      function  square(n)  {  
        return  n  *  n;
      } 
      FAKE_LODASH.map([4,  8],  square);
      // => [16, 64]
       
      FAKE_LODASH.map({ 
        'a':  4,
         'b':  8 
      },  square);
      // => [16, 64] (iteration order is not guaranteed)
       
      var  users  =   [  { 
        'user':   'barney' 
      },    { 
        'user':   'fred' 
      }]; 
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.map(users,  'user');
      // => ['barney', 'fred']
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'fred',
           'age':  48 
      },    { 
        'user':   'barney',
         'age':  34 
      },    { 
        'user':   'fred',
           'age':  40 
      },    { 
        'user':   'barney',
         'age':  36 
      }]; 
      // Sort by `user` in ascending order and by `age` in descending order.
      FAKE_LODASH.orderBy(users,   ['user',  'age'],   ['asc',  'desc']);
      // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'age':  36,
         'active':  false 
      },    { 
        'user':   'fred',
            'age':  40,
         'active':  true 
      },    { 
        'user':   'pebbles',
         'age':  1,
          'active':  false 
      }]; 
      FAKE_LODASH.partition(users,  function(o)  { 
        return  o.active; 
      });
      // => objects for [['fred'], ['barney', 'pebbles']]
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.partition(users,   { 
        'age':  1,
         'active':  false 
      });
      // => objects for [['pebbles'], ['barney', 'fred']]
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.partition(users,   ['active',  false]);
      // => objects for [['barney', 'pebbles'], ['fred']]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.partition(users,  'active');
      // => objects for [['fred'], ['barney', 'pebbles']]
    } catch (e) {}



    try {
      FAKE_LODASH.reduce([1,  2],  function(sum,  n)  {  
        return  sum  +  n;
      },  0);
      // => 3
       
      FAKE_LODASH.reduce({ 
        'a':  1,
         'b':  2,
         'c':  1 
      },  function(result,  value,  key)  {  
        (result[value]  ||  (result[value]  =   [])).push(key);  
        return  result;
      },   {});
      // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
    } catch (e) {}



    try {
      var  array  =   [
        [0,  1],  
        [2,  3],  
        [4,  5]
      ]; 
      FAKE_LODASH.reduceRight(array,  function(flattened,  other)  {  
        return  flattened.concat(other);
      },   []);
      // => [4, 5, 2, 3, 0, 1]
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
         'age':  36,
         'active':  false 
      },    { 
        'user':   'fred',
           'age':  40,
         'active':  true 
      }]; 
      FAKE_LODASH.reject(users,  function(o)  { 
        return  !o.active; 
      });
      // => objects for ['fred']
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.reject(users,   { 
        'age':  40,
         'active':  true 
      });
      // => objects for ['barney']
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.reject(users,   ['active',  false]);
      // => objects for ['fred']
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.reject(users,  'active');
      // => objects for ['barney']
    } catch (e) {}



    try {
      FAKE_LODASH.sample([1,  2,  3,  4]);
      // => 2
    } catch (e) {}



    try {
      FAKE_LODASH.sampleSize([1,  2,  3],  2);
      // => [3, 1]
       
      FAKE_LODASH.sampleSize([1,  2,  3],  4);
      // => [2, 3, 1]
    } catch (e) {}



    try {
      FAKE_LODASH.shuffle([1,  2,  3,  4]);
      // => [4, 1, 3, 2]
    } catch (e) {}



    try {
      FAKE_LODASH.size([1,  2,  3]);
      // => 3
       
      FAKE_LODASH.size({ 
        'a':  1,
         'b':  2 
      });
      // => 2
       
      FAKE_LODASH.size('pebbles');
      // => 7
    } catch (e) {}



    try {
      FAKE_LODASH.some([null,  0,  'yes',  false],  Boolean);
      // => true
       
      var  users  =   [  { 
        'user':   'barney',
         'active':  true 
      },    { 
        'user':   'fred',
           'active':  false 
      }]; 
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.some(users,   { 
        'user':   'barney',
         'active':  false 
      });
      // => false
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.some(users,   ['active',  false]);
      // => true
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.some(users,  'active');
      // => true
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'fred',
           'age':  48 
      },    { 
        'user':   'barney',
         'age':  36 
      },    { 
        'user':   'fred',
           'age':  40 
      },    { 
        'user':   'barney',
         'age':  34 
      }]; 
      FAKE_LODASH.sortBy(users,   [function(o)  { 
        return  o.user; 
      }]);
      // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
       
      FAKE_LODASH.sortBy(users,   ['user',  'age']);
      // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
    } catch (e) {}



    try {
      FAKE_LODASH.defer(function(stamp)  {  
        console.log(_.now()  -  stamp);
      },  _.now());
      // => Logs the number of milliseconds it took for the deferred invocation.
    } catch (e) {}



    try {
      var  saves  =   ['profile',  'settings']; 
      var  done  =  _.after(saves.length,  function()  {  
        console.log('done saving!');
      }); 
      FAKE_LODASH.forEach(saves,  function(type)  {
        //   asyncSave({ 'type': type, 'complete': done });
      });
      // => Logs 'done saving!' after the two async saves have completed.
    } catch (e) {}



    try {
      FAKE_LODASH.map(['6',  '8',  '10'],  _.ary(parseInt,  1));
      // => [6, 8, 10]
    } catch (e) {}



    try {
      jQuery(element).on('click',  _.before(5,  addContactToList));
      // => Allows adding up to 4 contacts to the list.
    } catch (e) {}



    try {
      function  greet(greeting,  punctuation)  {  
        return  greeting  +  ' '  +  this.user  +  punctuation;
      } 
      var  object  =   { 
        'user':   'fred' 
      }; 
      var  bound  =  _.bind(greet,  object,  'hi');
      bound('!');
      // => 'hi fred!'
       
      // Bound with placeholders.
      var  bound  =  _.bind(greet,  object,  _,  '!');
      bound('hi');
      // => 'hi fred!'
    } catch (e) {}



    try {
      var  object  =   {  
        'user':   'fred',
          'greet':   function(greeting,  punctuation)  {    
          return  greeting  +  ' '  +  this.user  +  punctuation;  
        }
      }; 
      var  bound  =  _.bindKey(object,  'greet',  'hi');
      bound('!');
      // => 'hi fred!'
       
      object.greet  =   function(greeting,  punctuation)  {  
        return  greeting  +  'ya '  +  this.user  +  punctuation;
      }; 
      bound('!');
      // => 'hiya fred!'
       
      // Bound with placeholders.
      var  bound  =  _.bindKey(object,  'greet',  _,  '!');
      bound('hi');
      // => 'hiya fred!'
    } catch (e) {}



    try {
      var  abc  =   function(a,  b,  c)  {  
        return  [a,  b,  c];
      }; 
      var  curried  =  _.curry(abc); 
      curried(1)(2)(3);
      // => [1, 2, 3]
       
      curried(1,  2)(3);
      // => [1, 2, 3]
       
      curried(1,  2,  3);
      // => [1, 2, 3]
       
      // Curried with placeholders.
      curried(1)(_,  3)(2);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      var  abc  =   function(a,  b,  c)  {  
        return  [a,  b,  c];
      }; 
      var  curried  =  _.curryRight(abc); 
      curried(3)(2)(1);
      // => [1, 2, 3]
       
      curried(2,  3)(1);
      // => [1, 2, 3]
       
      curried(1,  2,  3);
      // => [1, 2, 3]
       
      // Curried with placeholders.
      curried(3)(1,  _)(2);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      // Avoid costly calculations while the window size is in flux.
      jQuery(window).on('resize',  _.debounce(calculateLayout,  150)); 
      // Invoke `sendMail` when clicked, debouncing subsequent calls.
      jQuery(element).on('click',  _.debounce(sendMail,  300,   {  
        'leading':  true,
          'trailing':  false
      })); 
      // Ensure `batchLog` is invoked once after 1 second of debounced calls.
      var  debounced  =  _.debounce(batchLog,  250,   { 
        'maxWait':  1000 
      });
      var  source  =  new  EventSource('/stream');
      jQuery(source).on('message',  debounced); 
      // Cancel the trailing debounced invocation.
      jQuery(window).on('popstate',  debounced.cancel);
    } catch (e) {}



    try {
      FAKE_LODASH.defer(function(text)  {  
        console.log(text);
      },  'deferred');
      // => Logs 'deferred' after one millisecond.
    } catch (e) {}



    try {
      FAKE_LODASH.delay(function(text)  {  
        console.log(text);
      },  1000,  'later');
      // => Logs 'later' after one second.
    } catch (e) {}



    try {
      var  flipped  =  _.flip(function()  {  
        return  _.toArray(arguments);
      }); 
      flipped('a',  'b',  'c',  'd');
      // => ['d', 'c', 'b', 'a']
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':  2 
      };
      var  other  =   { 
        'c':  3,
         'd':  4 
      }; 
      var  values  =  _.memoize(_.values);
      values(object);
      // => [1, 2]
       
      values(other);
      // => [3, 4]
       
      object.a  =  2;
      values(object);
      // => [1, 2]
       
      // Modify the result cache.
      values.cache.set(object,   ['a',  'b']);
      values(object);
      // => ['a', 'b']
       
      // Replace `_.memoize.Cache`.
      FAKE_LODASH.memoize.Cache  =  WeakMap;
    } catch (e) {}



    try {
      function  isEven(n)  {  
        return  n  %  2  ==  0;
      } 
      FAKE_LODASH.filter([1,  2,  3,  4,  5,  6],  _.negate(isEven));
      // => [1, 3, 5]
    } catch (e) {}



    try {
      var  initialize  =  _.once(createApplication);
      initialize();
      initialize();
      // => `createApplication` is invoked once
    } catch (e) {}



    try {
      function  doubled(n)  {  
        return  n  *  2;
      } 
      function  square(n)  {  
        return  n  *  n;
      } 
      var  func  =  _.overArgs(function(x,  y)  {  
        return  [x,  y];
      },   [square,  doubled]); 
      func(9,  3);
      // => [81, 6]
       
      func(10,  5);
      // => [100, 10]
    } catch (e) {}



    try {
      function  greet(greeting,  name)  {  
        return  greeting  +  ' '  +  name;
      } 
      var  sayHelloTo  =  _.partial(greet,  'hello');
      sayHelloTo('fred');
      // => 'hello fred'
       
      // Partially applied with placeholders.
      var  greetFred  =  _.partial(greet,  _,  'fred');
      greetFred('hi');
      // => 'hi fred'
    } catch (e) {}



    try {
      function  greet(greeting,  name)  {  
        return  greeting  +  ' '  +  name;
      } 
      var  greetFred  =  _.partialRight(greet,  'fred');
      greetFred('hi');
      // => 'hi fred'
       
      // Partially applied with placeholders.
      var  sayHelloTo  =  _.partialRight(greet,  'hello',  _);
      sayHelloTo('fred');
      // => 'hello fred'
    } catch (e) {}



    try {
      var  rearged  =  _.rearg(function(a,  b,  c)  {  
        return  [a,  b,  c];
      },   [2,  0,  1]); 
      rearged('b',  'c',  'a')
        // => ['a', 'b', 'c']
    } catch (e) {}



    try {
      var  say  =  _.rest(function(what,  names)  {  
        return  what  +  ' '  +  _.initial(names).join(', ')  +     (_.size(names)  >  1  ?  ', & '  :  '')  +  _.last(names);
      }); 
      say('hello',  'fred',  'barney',  'pebbles');
      // => 'hello fred, barney, & pebbles'
    } catch (e) {}



    try {
      var  say  =  _.spread(function(who,  what)  {  
        return  who  +  ' says '  +  what;
      }); 
      say(['fred',  'hello']);
      // => 'fred says hello'
       
      var  numbers  =  Promise.all([  Promise.resolve(40),   Promise.resolve(36)]); 
      numbers.then(_.spread(function(x,  y)  {  
        return  x  +  y;
      }));
      // => a Promise of 76
    } catch (e) {}



    try {
      // Avoid excessively updating the position while scrolling.
      jQuery(window).on('scroll',  _.throttle(updatePosition,  100)); 
      // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
      var  throttled  =  _.throttle(renewToken,  300000,   { 
        'trailing':  false 
      });
      jQuery(element).on('click',  throttled); 
      // Cancel the trailing throttled invocation.
      jQuery(window).on('popstate',  throttled.cancel);
    } catch (e) {}



    try {
      FAKE_LODASH.map(['6',  '8',  '10'],  _.unary(parseInt));
      // => [6, 8, 10]
    } catch (e) {}



    try {
      var  p  =  _.wrap(_.escape,  function(func,  text)  {  
        return  '<p>'  +  func(text)  +  '</p>';
      }); 
      p('fred, barney, & pebbles');
      // => '<p>fred, barney, &amp; pebbles</p>'
    } catch (e) {}



    try {
      FAKE_LODASH.castArray(1);
      // => [1]
       
      FAKE_LODASH.castArray({ 
        'a':  1 
      });
      // => [{ 'a': 1 }]
       
      FAKE_LODASH.castArray('abc');
      // => ['abc']
       
      FAKE_LODASH.castArray(null);
      // => [null]
       
      FAKE_LODASH.castArray(undefined);
      // => [undefined]
       
      FAKE_LODASH.castArray();
      // => []
       
      var  array  =   [1,  2,  3];
      console.log(_.castArray(array)  ===  array);
      // => true
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'a':  1 
      },   { 
        'b':  2 
      }]; 
      var  shallow  =  _.clone(objects);
      console.log(shallow[0]  ===  objects[0]);
      // => true
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'a':  1 
      },   { 
        'b':  2 
      }]; 
      var  deep  =  _.cloneDeep(objects);
      console.log(deep[0]  ===  objects[0]);
      // => false
    } catch (e) {}



    try {
      function  customizer(value)  {  
        if  (_.isElement(value))  {    
          return  value.cloneNode(true);  
        }
      } 
      var  el  =  _.cloneDeepWith(document.body,  customizer); 
      console.log(el  ===  document.body);
      // => false
      console.log(el.nodeName);
      // => 'BODY'
      console.log(el.childNodes.length);
      // => 20
    } catch (e) {}



    try {
      function  customizer(value)  {  
        if  (_.isElement(value))  {    
          return  value.cloneNode(false);  
        }
      } 
      var  el  =  _.cloneWith(document.body,  customizer); 
      console.log(el  ===  document.body);
      // => false
      console.log(el.nodeName);
      // => 'BODY'
      console.log(el.childNodes.length);
      // => 0
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':  2 
      }; 
      FAKE_LODASH.conformsTo(object,   { 
        'b':   function(n)  { 
          return  n  >  1; 
        } 
      });
      // => true
       
      FAKE_LODASH.conformsTo(object,   { 
        'b':   function(n)  { 
          return  n  >  2; 
        } 
      });
      // => false
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1 
      };
      var  other  =   { 
        'a':  1 
      }; 
      FAKE_LODASH.eq(object,  object);
      // => true
       
      FAKE_LODASH.eq(object,  other);
      // => false
       
      FAKE_LODASH.eq('a',  'a');
      // => true
       
      FAKE_LODASH.eq('a',  Object('a'));
      // => false
       
      FAKE_LODASH.eq(NaN,  NaN);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.gt(3,  1);
      // => true
       
      FAKE_LODASH.gt(3,  3);
      // => false
       
      FAKE_LODASH.gt(1,  3);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.gte(3,  1);
      // => true
       
      FAKE_LODASH.gte(3,  3);
      // => true
       
      FAKE_LODASH.gte(1,  3);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isArguments(function()  { 
        return  arguments; 
      }());
      // => true
       
      FAKE_LODASH.isArguments([1,  2,  3]);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isArray([1,  2,  3]);
      // => true
       
      FAKE_LODASH.isArray(document.body.children);
      // => false
       
      FAKE_LODASH.isArray('abc');
      // => false
       
      FAKE_LODASH.isArray(_.noop);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isArrayBuffer(new  ArrayBuffer(2));
      // => true
       
      FAKE_LODASH.isArrayBuffer(new  Array(2));
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isArrayLike([1,  2,  3]);
      // => true
       
      FAKE_LODASH.isArrayLike(document.body.children);
      // => true
       
      FAKE_LODASH.isArrayLike('abc');
      // => true
       
      FAKE_LODASH.isArrayLike(_.noop);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isArrayLikeObject([1,  2,  3]);
      // => true
       
      FAKE_LODASH.isArrayLikeObject(document.body.children);
      // => true
       
      FAKE_LODASH.isArrayLikeObject('abc');
      // => false
       
      FAKE_LODASH.isArrayLikeObject(_.noop);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isBoolean(false);
      // => true
       
      FAKE_LODASH.isBoolean(null);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isBuffer(new  Buffer(2));
      // => true
       
      FAKE_LODASH.isBuffer(new  Uint8Array(2));
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isDate(new  Date);
      // => true
       
      FAKE_LODASH.isDate('Mon April 23 2012');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isElement(document.body);
      // => true
       
      FAKE_LODASH.isElement('<body>');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isEmpty(null);
      // => true
       
      FAKE_LODASH.isEmpty(true);
      // => true
       
      FAKE_LODASH.isEmpty(1);
      // => true
       
      FAKE_LODASH.isEmpty([1,  2,  3]);
      // => false
       
      FAKE_LODASH.isEmpty({ 
        'a':  1 
      });
      // => false
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1 
      };
      var  other  =   { 
        'a':  1 
      }; 
      FAKE_LODASH.isEqual(object,  other);
      // => true
       
      object  ===  other;
      // => false
    } catch (e) {}



    try {
      function  isGreeting(value)  {  
        return  /^h(?:i|ello)$/.test(value);
      } 
      function  customizer(objValue,  othValue)  {  
        if  (isGreeting(objValue)  &&  isGreeting(othValue))  {    
          return  true;  
        }
      } 
      var  array  =   ['hello',  'goodbye'];
      var  other  =   ['hi',  'goodbye']; 
      FAKE_LODASH.isEqualWith(array,  other,  customizer);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.isError(new  Error);
      // => true
       
      FAKE_LODASH.isError(Error);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isFinite(3);
      // => true
       
      FAKE_LODASH.isFinite(Number.MIN_VALUE);
      // => true
       
      FAKE_LODASH.isFinite(Infinity);
      // => false
       
      FAKE_LODASH.isFinite('3');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isFunction(_);
      // => true
       
      FAKE_LODASH.isFunction(/abc/);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isInteger(3);
      // => true
       
      FAKE_LODASH.isInteger(Number.MIN_VALUE);
      // => false
       
      FAKE_LODASH.isInteger(Infinity);
      // => false
       
      FAKE_LODASH.isInteger('3');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isLength(3);
      // => true
       
      FAKE_LODASH.isLength(Number.MIN_VALUE);
      // => false
       
      FAKE_LODASH.isLength(Infinity);
      // => false
       
      FAKE_LODASH.isLength('3');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isMap(new  Map);
      // => true
       
      FAKE_LODASH.isMap(new  WeakMap);
      // => false
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':  2 
      }; 
      FAKE_LODASH.isMatch(object,   { 
        'b':  2 
      });
      // => true
       
      FAKE_LODASH.isMatch(object,   { 
        'b':  1 
      });
      // => false
    } catch (e) {}



    try {
      function  isGreeting(value)  {  
        return  /^h(?:i|ello)$/.test(value);
      } 
      function  customizer(objValue,  srcValue)  {  
        if  (isGreeting(objValue)  &&  isGreeting(srcValue))  {    
          return  true;  
        }
      } 
      var  object  =   { 
        'greeting':   'hello' 
      };
      var  source  =   { 
        'greeting':   'hi' 
      }; 
      FAKE_LODASH.isMatchWith(object,  source,  customizer);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.isNaN(NaN);
      // => true
       
      FAKE_LODASH.isNaN(new  Number(NaN));
      // => true
       
      isNaN(undefined);
      // => true
       
      FAKE_LODASH.isNaN(undefined);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isNative(Array.prototype.push);
      // => true
       
      FAKE_LODASH.isNative(_);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isNil(null);
      // => true
       
      FAKE_LODASH.isNil(void  0);
      // => true
       
      FAKE_LODASH.isNil(NaN);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isNull(null);
      // => true
       
      FAKE_LODASH.isNull(void  0);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isNumber(3);
      // => true
       
      FAKE_LODASH.isNumber(Number.MIN_VALUE);
      // => true
       
      FAKE_LODASH.isNumber(Infinity);
      // => true
       
      FAKE_LODASH.isNumber('3');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isObject({});
      // => true
       
      FAKE_LODASH.isObject([1,  2,  3]);
      // => true
       
      FAKE_LODASH.isObject(_.noop);
      // => true
       
      FAKE_LODASH.isObject(null);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isObjectLike({});
      // => true
       
      FAKE_LODASH.isObjectLike([1,  2,  3]);
      // => true
       
      FAKE_LODASH.isObjectLike(_.noop);
      // => false
       
      FAKE_LODASH.isObjectLike(null);
      // => false
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;
      } 
      FAKE_LODASH.isPlainObject(new  Foo);
      // => false
       
      FAKE_LODASH.isPlainObject([1,  2,  3]);
      // => false
       
      FAKE_LODASH.isPlainObject({ 
        'x':  0,
         'y':  0 
      });
      // => true
       
      FAKE_LODASH.isPlainObject(Object.create(null));
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.isRegExp(/abc/);
      // => true
       
      FAKE_LODASH.isRegExp('/abc/');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isSafeInteger(3);
      // => true
       
      FAKE_LODASH.isSafeInteger(Number.MIN_VALUE);
      // => false
       
      FAKE_LODASH.isSafeInteger(Infinity);
      // => false
       
      FAKE_LODASH.isSafeInteger('3');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isSet(new  Set);
      // => true
       
      FAKE_LODASH.isSet(new  WeakSet);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isString('abc');
      // => true
       
      FAKE_LODASH.isString(1);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isSymbol(Symbol.iterator);
      // => true
       
      FAKE_LODASH.isSymbol('abc');
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isTypedArray(new  Uint8Array);
      // => true
       
      FAKE_LODASH.isTypedArray([]);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isUndefined(void  0);
      // => true
       
      FAKE_LODASH.isUndefined(null);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isWeakMap(new  WeakMap);
      // => true
       
      FAKE_LODASH.isWeakMap(new  Map);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.isWeakSet(new  WeakSet);
      // => true
       
      FAKE_LODASH.isWeakSet(new  Set);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.lt(1,  3);
      // => true
       
      FAKE_LODASH.lt(3,  3);
      // => false
       
      FAKE_LODASH.lt(3,  1);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.lte(1,  3);
      // => true
       
      FAKE_LODASH.lte(3,  3);
      // => true
       
      FAKE_LODASH.lte(3,  1);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.toArray({ 
        'a':  1,
         'b':  2 
      });
      // => [1, 2]
       
      FAKE_LODASH.toArray('abc');
      // => ['a', 'b', 'c']
       
      FAKE_LODASH.toArray(1);
      // => []
       
      FAKE_LODASH.toArray(null);
      // => []
    } catch (e) {}



    try {
      FAKE_LODASH.toFinite(3.2);
      // => 3.2
       
      FAKE_LODASH.toFinite(Number.MIN_VALUE);
      // => 5e-324
       
      FAKE_LODASH.toFinite(Infinity);
      // => 1.7976931348623157e+308
       
      FAKE_LODASH.toFinite('3.2');
      // => 3.2
    } catch (e) {}



    try {
      FAKE_LODASH.toInteger(3.2);
      // => 3
       
      FAKE_LODASH.toInteger(Number.MIN_VALUE);
      // => 0
       
      FAKE_LODASH.toInteger(Infinity);
      // => 1.7976931348623157e+308
       
      FAKE_LODASH.toInteger('3.2');
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.toLength(3.2);
      // => 3
       
      FAKE_LODASH.toLength(Number.MIN_VALUE);
      // => 0
       
      FAKE_LODASH.toLength(Infinity);
      // => 4294967295
       
      FAKE_LODASH.toLength('3.2');
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.toNumber(3.2);
      // => 3.2
       
      FAKE_LODASH.toNumber(Number.MIN_VALUE);
      // => 5e-324
       
      FAKE_LODASH.toNumber(Infinity);
      // => Infinity
       
      FAKE_LODASH.toNumber('3.2');
      // => 3.2
    } catch (e) {}



    try {
      function  Foo()  {  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.assign({ 
        'a':  1 
      },  new  Foo);
      // => { 'a': 1, 'b': 2 }
       
      FAKE_LODASH.assign({ 
        'a':  1 
      },  _.toPlainObject(new  Foo));
      // => { 'a': 1, 'b': 2, 'c': 3 }
    } catch (e) {}



    try {
      FAKE_LODASH.toSafeInteger(3.2);
      // => 3
       
      FAKE_LODASH.toSafeInteger(Number.MIN_VALUE);
      // => 0
       
      FAKE_LODASH.toSafeInteger(Infinity);
      // => 9007199254740991
       
      FAKE_LODASH.toSafeInteger('3.2');
      // => 3
    } catch (e) {}



    try {
      FAKE_LODASH.toString(null);
      // => ''
       
      FAKE_LODASH.toString(-0);
      // => '-0'
       
      FAKE_LODASH.toString([1,  2,  3]);
      // => '1,2,3'
    } catch (e) {}



    try {
      FAKE_LODASH.add(6,  4);
      // => 10
    } catch (e) {}



    try {
      FAKE_LODASH.ceil(4.006);
      // => 5
       
      FAKE_LODASH.ceil(6.004,  2);
      // => 6.01
       
      FAKE_LODASH.ceil(6040,  -2);
      // => 6100
    } catch (e) {}



    try {
      FAKE_LODASH.divide(6,  4);
      // => 1.5
    } catch (e) {}



    try {
      FAKE_LODASH.floor(4.006);
      // => 4
       
      FAKE_LODASH.floor(0.046,  2);
      // => 0.04
       
      FAKE_LODASH.floor(4060,  -2);
      // => 4000
    } catch (e) {}



    try {
      FAKE_LODASH.max([4,  2,  8,  6]);
      // => 8
       
      FAKE_LODASH.max([]);
      // => undefined
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'n':  1 
      },   { 
        'n':  2 
      }]; 
      FAKE_LODASH.maxBy(objects,  function(o)  { 
        return  o.n; 
      });
      // => { 'n': 2 }
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.maxBy(objects,  'n');
      // => { 'n': 2 }
    } catch (e) {}



    try {
      FAKE_LODASH.mean([4,  2,  8,  6]);
      // => 5
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'n':  4 
      },   { 
        'n':  2 
      },   { 
        'n':  8 
      },   { 
        'n':  6 
      }]; 
      FAKE_LODASH.meanBy(objects,  function(o)  { 
        return  o.n; 
      });
      // => 5
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.meanBy(objects,  'n');
      // => 5
    } catch (e) {}



    try {
      FAKE_LODASH.min([4,  2,  8,  6]);
      // => 2
       
      FAKE_LODASH.min([]);
      // => undefined
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'n':  1 
      },   { 
        'n':  2 
      }]; 
      FAKE_LODASH.minBy(objects,  function(o)  { 
        return  o.n; 
      });
      // => { 'n': 1 }
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.minBy(objects,  'n');
      // => { 'n': 1 }
    } catch (e) {}



    try {
      FAKE_LODASH.multiply(6,  4);
      // => 24
    } catch (e) {}



    try {
      FAKE_LODASH.round(4.006);
      // => 4
       
      FAKE_LODASH.round(4.006,  2);
      // => 4.01
       
      FAKE_LODASH.round(4060,  -2);
      // => 4100
    } catch (e) {}



    try {
      FAKE_LODASH.subtract(6,  4);
      // => 2
    } catch (e) {}



    try {
      FAKE_LODASH.sum([4,  2,  8,  6]);
      // => 20
    } catch (e) {}



    try {
      var  objects  =   [{ 
        'n':  4 
      },   { 
        'n':  2 
      },   { 
        'n':  8 
      },   { 
        'n':  6 
      }]; 
      FAKE_LODASH.sumBy(objects,  function(o)  { 
        return  o.n; 
      });
      // => 20
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.sumBy(objects,  'n');
      // => 20
    } catch (e) {}



    try {
      FAKE_LODASH.clamp(-10,  -5,  5);
      // => -5
       
      FAKE_LODASH.clamp(10,  -5,  5);
      // => 5
    } catch (e) {}



    try {
      FAKE_LODASH.inRange(3,  2,  4);
      // => true
       
      FAKE_LODASH.inRange(4,  8);
      // => true
       
      FAKE_LODASH.inRange(4,  2);
      // => false
       
      FAKE_LODASH.inRange(2,  2);
      // => false
       
      FAKE_LODASH.inRange(1.2,  2);
      // => true
       
      FAKE_LODASH.inRange(5.2,  4);
      // => false
       
      FAKE_LODASH.inRange(-3,  -2,  -6);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.random(0,  5);
      // => an integer between 0 and 5
       
      FAKE_LODASH.random(5);
      // => also an integer between 0 and 5
       
      FAKE_LODASH.random(5,  true);
      // => a floating-point number between 0 and 5
       
      FAKE_LODASH.random(1.2,  5.2);
      // => a floating-point number between 1.2 and 5.2
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;
      } 
      function  Bar()  {  
        this.c  =  3;
      } 
      Foo.prototype.b  =  2;
      Bar.prototype.d  =  4; 
      FAKE_LODASH.assign({ 
        'a':  0 
      },  new  Foo,  new  Bar);
      // => { 'a': 1, 'c': 3 }
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;
      } 
      function  Bar()  {  
        this.c  =  3;
      } 
      Foo.prototype.b  =  2;
      Bar.prototype.d  =  4; 
      FAKE_LODASH.assignIn({ 
        'a':  0 
      },  new  Foo,  new  Bar);
      // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
    } catch (e) {}



    try {
      function  customizer(objValue,  srcValue)  {  
        return  _.isUndefined(objValue)  ?  srcValue  :  objValue;
      } 
      var  defaults  =  _.partialRight(_.assignInWith,  customizer); 
      defaults({ 
        'a':  1 
      },   { 
        'b':  2 
      },   { 
        'a':  3 
      });
      // => { 'a': 1, 'b': 2 }
    } catch (e) {}



    try {
      function  customizer(objValue,  srcValue)  {  
        return  _.isUndefined(objValue)  ?  srcValue  :  objValue;
      } 
      var  defaults  =  _.partialRight(_.assignWith,  customizer); 
      defaults({ 
        'a':  1 
      },   { 
        'b':  2 
      },   { 
        'a':  3 
      });
      // => { 'a': 1, 'b': 2 }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  3 
          } 
        },  4] 
      }; 
      FAKE_LODASH.at(object,   ['a[0].b.c',  'a[1]']);
      // => [3, 4]
    } catch (e) {}



    try {
      function  Shape()  {  
        this.x  =  0;  
        this.y  =  0;
      } 
      function  Circle()  {  
        Shape.call(this);
      } 
      Circle.prototype  =  _.create(Shape.prototype,   {  
        'constructor':  Circle
      }); 
      var  circle  =  new  Circle;
      circle  instanceof  Circle;
      // => true
       
      circle  instanceof  Shape;
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.defaults({ 
        'a':  1 
      },   { 
        'b':  2 
      },   { 
        'a':  3 
      });
      // => { 'a': 1, 'b': 2 }
    } catch (e) {}



    try {
      FAKE_LODASH.defaultsDeep({ 
        'a':  { 
          'b':  2 
        } 
      },   { 
        'a':  { 
          'b':  1,
           'c':  3 
        } 
      });
      // => { 'a': { 'b': 2, 'c': 3 } }
    } catch (e) {}



    try {
      var  users  =   {  
        'barney':   { 
          'age':  36,
           'active':  true 
        },
          'fred':     { 
          'age':  40,
           'active':  false 
        },
          'pebbles':  { 
          'age':  1,
            'active':  true 
        }
      }; 
      FAKE_LODASH.findKey(users,  function(o)  { 
        return  o.age  <  40; 
      });
      // => 'barney' (iteration order is not guaranteed)
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.findKey(users,   { 
        'age':  1,
         'active':  true 
      });
      // => 'pebbles'
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.findKey(users,   ['active',  false]);
      // => 'fred'
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.findKey(users,  'active');
      // => 'barney'
    } catch (e) {}



    try {
      var  users  =   {  
        'barney':   { 
          'age':  36,
           'active':  true 
        },
          'fred':     { 
          'age':  40,
           'active':  false 
        },
          'pebbles':  { 
          'age':  1,
            'active':  true 
        }
      }; 
      FAKE_LODASH.findLastKey(users,  function(o)  { 
        return  o.age  <  40; 
      });
      // => returns 'pebbles' assuming `_.findKey` returns 'barney'
       
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.findLastKey(users,   { 
        'age':  36,
         'active':  true 
      });
      // => 'barney'
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.findLastKey(users,   ['active',  false]);
      // => 'fred'
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.findLastKey(users,  'active');
      // => 'pebbles'
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.forIn(new  Foo,  function(value,  key)  {  
        console.log(key);
      });
      // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.forInRight(new  Foo,  function(value,  key)  {  
        console.log(key);
      });
      // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.forOwn(new  Foo,  function(value,  key)  {  
        console.log(key);
      });
      // => Logs 'a' then 'b' (iteration order is not guaranteed).
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.forOwnRight(new  Foo,  function(value,  key)  {  
        console.log(key);
      });
      // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  _.constant('a');  
        this.b  =  _.constant('b');
      } 
      Foo.prototype.c  =  _.constant('c'); 
      FAKE_LODASH.functions(new  Foo);
      // => ['a', 'b']
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  _.constant('a');  
        this.b  =  _.constant('b');
      } 
      Foo.prototype.c  =  _.constant('c'); 
      FAKE_LODASH.functionsIn(new  Foo);
      // => ['a', 'b', 'c']
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  3 
          } 
        }] 
      }; 
      FAKE_LODASH.get(object,  'a[0].b.c');
      // => 3
       
      FAKE_LODASH.get(object,   ['a',  '0',  'b',  'c']);
      // => 3
       
      FAKE_LODASH.get(object,  'a.b.c',  'default');
      // => 'default'
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  { 
          'b':  2 
        } 
      };
      var  other  =  _.create({ 
        'a':  _.create({ 
          'b':  2 
        }) 
      }); 
      FAKE_LODASH.has(object,  'a');
      // => true
       
      FAKE_LODASH.has(object,  'a.b');
      // => true
       
      FAKE_LODASH.has(object,   ['a',  'b']);
      // => true
       
      FAKE_LODASH.has(other,  'a');
      // => false
    } catch (e) {}



    try {
      var  object  =  _.create({ 
        'a':  _.create({ 
          'b':  2 
        }) 
      }); 
      FAKE_LODASH.hasIn(object,  'a');
      // => true
       
      FAKE_LODASH.hasIn(object,  'a.b');
      // => true
       
      FAKE_LODASH.hasIn(object,   ['a',  'b']);
      // => true
       
      FAKE_LODASH.hasIn(object,  'b');
      // => false
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':  2,
         'c':  1 
      }; 
      FAKE_LODASH.invert(object);
      // => { '1': 'c', '2': 'b' }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':  2,
         'c':  1 
      }; 
      FAKE_LODASH.invertBy(object);
      // => { '1': ['a', 'c'], '2': ['b'] }
       
      FAKE_LODASH.invertBy(object,  function(value)  {  
        return  'group'  +  value;
      });
      // => { 'group1': ['a', 'c'], 'group2': ['b'] }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  [1,  2,  3,  4] 
          } 
        }] 
      }; 
      FAKE_LODASH.invoke(object,  'a[0].b.c.slice',  1,  3);
      // => [2, 3]
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.keys(new  Foo);
      // => ['a', 'b'] (iteration order is not guaranteed)
       
      FAKE_LODASH.keys('hi');
      // => ['0', '1']
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.keysIn(new  Foo);
      // => ['a', 'b', 'c'] (iteration order is not guaranteed)
    } catch (e) {}



    try {
      FAKE_LODASH.mapKeys({ 
        'a':  1,
         'b':  2 
      },  function(value,  key)  {  
        return  key  +  value;
      });
      // => { 'a1': 1, 'b2': 2 }
    } catch (e) {}



    try {
      var  users  =   {  
        'fred':     { 
          'user':   'fred',
              'age':  40 
        },
          'pebbles':  { 
          'user':   'pebbles',
           'age':  1 
        }
      }; 
      FAKE_LODASH.mapValues(users,  function(o)  { 
        return  o.age; 
      });
      // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.mapValues(users,  'age');
      // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
    } catch (e) {}



    try {
      var  object  =   {  
        'a':  [{ 
          'b':  2 
        },   { 
          'd':  4 
        }]
      }; 
      var  other  =   {  
        'a':  [{ 
          'c':  3 
        },   { 
          'e':  5 
        }]
      }; 
      FAKE_LODASH.merge(object,  other);
      // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
    } catch (e) {}



    try {
      function  customizer(objValue,  srcValue)  {  
        if  (_.isArray(objValue))  {    
          return  objValue.concat(srcValue);  
        }
      } 
      var  object  =   { 
        'a':  [1],
         'b':  [2] 
      };
      var  other  =   { 
        'a':  [3],
         'b':  [4] 
      }; 
      FAKE_LODASH.mergeWith(object,  other,  customizer);
      // => { 'a': [1, 3], 'b': [2, 4] }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':   '2',
         'c':  3 
      }; 
      FAKE_LODASH.omit(object,   ['a',  'c']);
      // => { 'b': '2' }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':   '2',
         'c':  3 
      }; 
      FAKE_LODASH.omitBy(object,  _.isNumber);
      // => { 'b': '2' }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':   '2',
         'c':  3 
      }; 
      FAKE_LODASH.pick(object,   ['a',  'c']);
      // => { 'a': 1, 'c': 3 }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1,
         'b':   '2',
         'c':  3 
      }; 
      FAKE_LODASH.pickBy(object,  _.isNumber);
      // => { 'a': 1, 'c': 3 }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c1':  3,
             'c2':  _.constant(4) 
          } 
        }] 
      }; 
      FAKE_LODASH.result(object,  'a[0].b.c1');
      // => 3
       
      FAKE_LODASH.result(object,  'a[0].b.c2');
      // => 4
       
      FAKE_LODASH.result(object,  'a[0].b.c3',  'default');
      // => 'default'
       
      FAKE_LODASH.result(object,  'a[0].b.c3',  _.constant('default'));
      // => 'default'
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  3 
          } 
        }] 
      }; 
      FAKE_LODASH.set(object,  'a[0].b.c',  4);
      console.log(object.a[0].b.c);
      // => 4
       
      FAKE_LODASH.set(object,   ['x',  '0',  'y',  'z'],  5);
      console.log(object.x[0].y.z);
      // => 5
    } catch (e) {}



    try {
      var  object  =   {}; 
      FAKE_LODASH.setWith(object,  '[0][1]',  'a',  Object);
      // => { '0': { '1': 'a' } }
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.toPairs(new  Foo);
      // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.toPairsIn(new  Foo);
      // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
    } catch (e) {}



    try {
      FAKE_LODASH.transform([2,  3,  4],  function(result,  n)  {  
        result.push(n  *=  n);  
        return  n  %  2  ==  0;
      },   []);
      // => [4, 9]
       
      FAKE_LODASH.transform({ 
        'a':  1,
         'b':  2,
         'c':  1 
      },  function(result,  value,  key)  {  
        (result[value]  ||  (result[value]  =   [])).push(key);
      },   {});
      // => { '1': ['a', 'c'], '2': ['b'] }
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  7 
          } 
        }] 
      };
      FAKE_LODASH.unset(object,  'a[0].b.c');
      // => true
       
      console.log(object);
      // => { 'a': [{ 'b': {} }] };
       
      FAKE_LODASH.unset(object,   ['a',  '0',  'b',  'c']);
      // => true
       
      console.log(object);
      // => { 'a': [{ 'b': {} }] };
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  3 
          } 
        }] 
      }; 
      FAKE_LODASH.update(object,  'a[0].b.c',  function(n)  { 
        return  n  *  n; 
      });
      console.log(object.a[0].b.c);
      // => 9
       
      FAKE_LODASH.update(object,  'x[0].y.z',  function(n)  { 
        return  n  ?  n  +  1  :  0; 
      });
      console.log(object.x[0].y.z);
      // => 0
    } catch (e) {}



    try {
      var  object  =   {}; 
      FAKE_LODASH.updateWith(object,  '[0][1]',  _.constant('a'),  Object);
      // => { '0': { '1': 'a' } }
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.values(new  Foo);
      // => [1, 2] (iteration order is not guaranteed)
       
      FAKE_LODASH.values('hi');
      // => ['h', 'i']
    } catch (e) {}



    try {
      function  Foo()  {  
        this.a  =  1;  
        this.b  =  2;
      } 
      Foo.prototype.c  =  3; 
      FAKE_LODASH.valuesIn(new  Foo);
      // => [1, 2, 3] (iteration order is not guaranteed)
    } catch (e) {}



    try {
      function  square(n)  {  
        return  n  *  n;
      } 
      var  wrapped  =  _([1,  2,  3]); 
      // Returns an unwrapped value.
      wrapped.reduce(_.add);
      // => 6
       
      // Returns a wrapped value.
      var  squares  =  wrapped.map(square); 
      FAKE_LODASH.isArray(squares);
      // => false
       
      FAKE_LODASH.isArray(squares.value());
      // => true
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
          'age':  36 
      },    { 
        'user':   'fred',
            'age':  40 
      },    { 
        'user':   'pebbles',
         'age':  1 
      }]; 
      var  youngest  =  _  .chain(users)  .sortBy('age')  .map(function(o)  {    
        return  o.user  +  ' is '  +  o.age;  
      })  .head()  .value();
      // => 'pebbles is 1'
    } catch (e) {}



    try {
      _([1,  2,  3]) .tap(function(array)  {
        // Mutate input array.
           
        array.pop(); 
      }) .reverse() .value();
      // => [2, 1]
    } catch (e) {}



    try {
      _('  abc  ') .chain() .trim() .thru(function(value)  {   
        return  [value]; 
      }) .value();
      // => ['abc']
    } catch (e) {}



    try {
      var  wrapped  =  _([1,  2]); 
      wrapped[Symbol.iterator]()  ===  wrapped;
      // => true
       
      Array.from(wrapped);
      // => [1, 2]
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  [{ 
          'b':  { 
            'c':  3 
          } 
        },  4] 
      }; 
      _(object).at(['a[0].b.c',  'a[1]']).value();
      // => [3, 4]
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
         'age':  36 
      },    { 
        'user':   'fred',
           'age':  40 
      }]; 
      // A sequence without explicit chaining.
      _(users).head();
      // => { 'user': 'barney', 'age': 36 }
       
      // A sequence with explicit chaining.
      _(users)  .chain()  .head()  .pick('user')  .value();
      // => { 'user': 'barney' }
    } catch (e) {}



    try {
      var  array  =   [1,  2];
      var  wrapped  =  _(array).push(3); 
      console.log(array);
      // => [1, 2]
       
      wrapped  =  wrapped.commit();
      console.log(array);
      // => [1, 2, 3]
       
      wrapped.last();
      // => 3
       
      console.log(array);
      // => [1, 2, 3]
    } catch (e) {}



    try {
      var  wrapped  =  _([1,  2]); 
      wrapped.next();
      // => { 'done': false, 'value': 1 }
       
      wrapped.next();
      // => { 'done': false, 'value': 2 }
       
      wrapped.next();
      // => { 'done': true, 'value': undefined }
    } catch (e) {}



    try {
      function  square(n)  {  
        return  n  *  n;
      } 
      var  wrapped  =  _([1,  2]).map(square);
      var  other  =  wrapped.plant([3,  4]); 
      other.value();
      // => [9, 16]
       
      wrapped.value();
      // => [1, 4]
    } catch (e) {}



    try {
      var  array  =   [1,  2,  3]; 
      _(array).reverse().value()
        // => [3, 2, 1]
         
      console.log(array);
      // => [3, 2, 1]
    } catch (e) {}



    try {
      _([1,  2,  3]).value();
      // => [1, 2, 3]
    } catch (e) {}



    try {
      FAKE_LODASH.camelCase('Foo Bar');
      // => 'fooBar'
       
      FAKE_LODASH.camelCase('--foo-bar--');
      // => 'fooBar'
       
      FAKE_LODASH.camelCase('__FOO_BAR__');
      // => 'fooBar'
    } catch (e) {}



    try {
      FAKE_LODASH.capitalize('FRED');
      // => 'Fred'
    } catch (e) {}



    try {
      FAKE_LODASH.deburr('déjà vu');
      // => 'deja vu'
    } catch (e) {}



    try {
      FAKE_LODASH.endsWith('abc',  'c');
      // => true
       
      FAKE_LODASH.endsWith('abc',  'b');
      // => false
       
      FAKE_LODASH.endsWith('abc',  'b',  2);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.escape('fred, barney, & pebbles');
      // => 'fred, barney, &amp; pebbles'
    } catch (e) {}



    try {
      FAKE_LODASH.escapeRegExp('[lodash](https://lodash.com/)');
      // => '\[lodash\]\(https://lodash\.com/\)'
    } catch (e) {}



    try {
      FAKE_LODASH.kebabCase('Foo Bar');
      // => 'foo-bar'
       
      FAKE_LODASH.kebabCase('fooBar');
      // => 'foo-bar'
       
      FAKE_LODASH.kebabCase('__FOO_BAR__');
      // => 'foo-bar'
    } catch (e) {}



    try {
      FAKE_LODASH.lowerCase('--Foo-Bar--');
      // => 'foo bar'
       
      FAKE_LODASH.lowerCase('fooBar');
      // => 'foo bar'
       
      FAKE_LODASH.lowerCase('__FOO_BAR__');
      // => 'foo bar'
    } catch (e) {}



    try {
      FAKE_LODASH.lowerFirst('Fred');
      // => 'fred'
       
      FAKE_LODASH.lowerFirst('FRED');
      // => 'fRED'
    } catch (e) {}



    try {
      FAKE_LODASH.pad('abc',  8);
      // => '  abc   '
       
      FAKE_LODASH.pad('abc',  8,  '_-');
      // => '_-abc_-_'
       
      FAKE_LODASH.pad('abc',  3);
      // => 'abc'
    } catch (e) {}



    try {
      FAKE_LODASH.padEnd('abc',  6);
      // => 'abc   '
       
      FAKE_LODASH.padEnd('abc',  6,  '_-');
      // => 'abc_-_'
       
      FAKE_LODASH.padEnd('abc',  3);
      // => 'abc'
    } catch (e) {}



    try {
      FAKE_LODASH.padStart('abc',  6);
      // => '   abc'
       
      FAKE_LODASH.padStart('abc',  6,  '_-');
      // => '_-_abc'
       
      FAKE_LODASH.padStart('abc',  3);
      // => 'abc'
    } catch (e) {}



    try {
      FAKE_LODASH.parseInt('08');
      // => 8
       
      FAKE_LODASH.map(['6',  '08',  '10'],  _.parseInt);
      // => [6, 8, 10]
    } catch (e) {}



    try {
      FAKE_LODASH.repeat('*',  3);
      // => '***'
       
      FAKE_LODASH.repeat('abc',  2);
      // => 'abcabc'
       
      FAKE_LODASH.repeat('abc',  0);
      // => ''
    } catch (e) {}



    try {
      FAKE_LODASH.replace('Hi Fred',  'Fred',  'Barney');
      // => 'Hi Barney'
    } catch (e) {}



    try {
      FAKE_LODASH.snakeCase('Foo Bar');
      // => 'foo_bar'
       
      FAKE_LODASH.snakeCase('fooBar');
      // => 'foo_bar'
       
      FAKE_LODASH.snakeCase('--FOO-BAR--');
      // => 'foo_bar'
    } catch (e) {}



    try {
      FAKE_LODASH.split('a-b-c',  '-',  2);
      // => ['a', 'b']
    } catch (e) {}



    try {
      FAKE_LODASH.startCase('--foo-bar--');
      // => 'Foo Bar'
       
      FAKE_LODASH.startCase('fooBar');
      // => 'Foo Bar'
       
      FAKE_LODASH.startCase('__FOO_BAR__');
      // => 'FOO BAR'
    } catch (e) {}



    try {
      FAKE_LODASH.startsWith('abc',  'a');
      // => true
       
      FAKE_LODASH.startsWith('abc',  'b');
      // => false
       
      FAKE_LODASH.startsWith('abc',  'b',  1);
      // => true
    } catch (e) {}



    try {
      // Use the "interpolate" delimiter to create a compiled template.
      var  compiled  =  _.template('hello <%= user %>!');
      compiled({ 
        'user':   'fred' 
      });
      // => 'hello fred!'
       
      // Use the HTML "escape" delimiter to escape data property values.
      var  compiled  =  _.template('<b><%- value %></b>');
      compiled({ 
        'value':   '<script>' 
      });
      // => '<b>&lt;script&gt;</b>'
       
      // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
      var  compiled  =  _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
      compiled({ 
        'users':  ['fred',  'barney'] 
      });
      // => '<li>fred</li><li>barney</li>'
       
      // Use the internal `print` function in "evaluate" delimiters.
      var  compiled  =  _.template('<% print("hello " + user); %>!');
      compiled({ 
        'user':   'barney' 
      });
      // => 'hello barney!'
       
      // Use the ES template literal delimiter as an "interpolate" delimiter.
      // Disable support by replacing the "interpolate" delimiter.
      var  compiled  =  _.template('hello ${ user }!');
      compiled({ 
        'user':   'pebbles' 
      });
      // => 'hello pebbles!'
       
      // Use backslashes to treat delimiters as plain text.
      var  compiled  =  _.template('<%= "\\<%- value %\\>" %>');
      compiled({ 
        'value':   'ignored' 
      });
      // => '<%- value %>'
       
      // Use the `imports` option to import `jQuery` as `jq`.
      var  text  =  '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
      var  compiled  =  _.template(text,   { 
        'imports':  { 
          'jq':  jQuery 
        } 
      });
      compiled({ 
        'users':  ['fred',  'barney'] 
      });
      // => '<li>fred</li><li>barney</li>'
       
      // Use the `sourceURL` option to specify a custom sourceURL for the template.
      var  compiled  =  _.template('hello <%= user %>!',   { 
        'sourceURL':   '/basic/greeting.jst' 
      });
      compiled(data);
      // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
       
      // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
      var  compiled  =  _.template('hi <%= data.user %>!',   { 
        'variable':   'data' 
      });
      compiled.source;
      // => function(data) {
      //   var __t, __p = '';
      //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
      //   return __p;
      // }
       
      // Use custom template delimiters.
      FAKE_LODASH.templateSettings.interpolate  =  /{{([\s\S]+?)}}/g;
      var  compiled  =  _.template('hello {{ user }}!');
      compiled({ 
        'user':   'mustache' 
      });
      // => 'hello mustache!'
       
      // Use the `source` property to inline compiled templates for meaningful
      // line numbers in error messages and stack traces.
      fs.writeFileSync(path.join(process.cwd(),  'jst.js'),  '\
      var JST = {\
        "main": '  +  _.template(mainText).source  +  '\
      };\
    ');
    } catch (e) {}



    try {
      FAKE_LODASH.toLower('--Foo-Bar--');
      // => '--foo-bar--'
       
      FAKE_LODASH.toLower('fooBar');
      // => 'foobar'
       
      FAKE_LODASH.toLower('__FOO_BAR__');
      // => '__foo_bar__'
    } catch (e) {}



    try {
      FAKE_LODASH.toUpper('--foo-bar--');
      // => '--FOO-BAR--'
       
      FAKE_LODASH.toUpper('fooBar');
      // => 'FOOBAR'
       
      FAKE_LODASH.toUpper('__foo_bar__');
      // => '__FOO_BAR__'
    } catch (e) {}



    try {
      FAKE_LODASH.trim('  abc  ');
      // => 'abc'
       
      FAKE_LODASH.trim('-_-abc-_-',  '_-');
      // => 'abc'
       
      FAKE_LODASH.map(['  foo  ',  '  bar  '],  _.trim);
      // => ['foo', 'bar']
    } catch (e) {}



    try {
      FAKE_LODASH.trimEnd('  abc  ');
      // => '  abc'
       
      FAKE_LODASH.trimEnd('-_-abc-_-',  '_-');
      // => '-_-abc'
    } catch (e) {}



    try {
      FAKE_LODASH.trimStart('  abc  ');
      // => 'abc  '
       
      FAKE_LODASH.trimStart('-_-abc-_-',  '_-');
      // => 'abc-_-'
    } catch (e) {}



    try {
      FAKE_LODASH.truncate('hi-diddly-ho there, neighborino');
      // => 'hi-diddly-ho there, neighbo...'
       
      FAKE_LODASH.truncate('hi-diddly-ho there, neighborino',   {  
        'length':  24,
          'separator':   ' '
      });
      // => 'hi-diddly-ho there,...'
       
      FAKE_LODASH.truncate('hi-diddly-ho there, neighborino',   {  
        'length':  24,
          'separator':   /,? +/
      });
      // => 'hi-diddly-ho there...'
       
      FAKE_LODASH.truncate('hi-diddly-ho there, neighborino',   {  
        'omission':   ' [...]'
      });
      // => 'hi-diddly-ho there, neig [...]'
    } catch (e) {}



    try {
      FAKE_LODASH.unescape('fred, barney, &amp; pebbles');
      // => 'fred, barney, & pebbles'
    } catch (e) {}



    try {
      FAKE_LODASH.upperCase('--foo-bar');
      // => 'FOO BAR'
       
      FAKE_LODASH.upperCase('fooBar');
      // => 'FOO BAR'
       
      FAKE_LODASH.upperCase('__foo_bar__');
      // => 'FOO BAR'
    } catch (e) {}



    try {
      FAKE_LODASH.upperFirst('fred');
      // => 'Fred'
       
      FAKE_LODASH.upperFirst('FRED');
      // => 'FRED'
    } catch (e) {}



    try {
      FAKE_LODASH.words('fred, barney, & pebbles');
      // => ['fred', 'barney', 'pebbles']
       
      FAKE_LODASH.words('fred, barney, & pebbles',  /[^, ]+/g);
      // => ['fred', 'barney', '&', 'pebbles']
    } catch (e) {}



    try {
      // Avoid throwing errors for invalid selectors.
      var  elements  =  _.attempt(function(selector)  {  
        return  document.querySelectorAll(selector);
      },  '>_>'); 
      if  (_.isError(elements))  {  
        elements  =   [];
      }
    } catch (e) {}



    try {
      var  view  =   {  
        'label':   'docs',
          'click':   function()  {    
          console.log('clicked '  +  this.label);  
        }
      }; 
      FAKE_LODASH.bindAll(view,   ['click']);
      jQuery(element).on('click',  view.click);
      // => Logs 'clicked docs' when clicked.
    } catch (e) {}



    try {
      var  func  =  _.cond([  
        [_.matches({ 
          'a':  1 
        }),            _.constant('matches A')],   
        [_.conforms({ 
          'b':  _.isNumber 
        }),  _.constant('matches B')],   
        [_.stubTrue,                       _.constant('no match')]
      ]); 
      func({ 
        'a':  1,
         'b':  2 
      });
      // => 'matches A'
       
      func({ 
        'a':  0,
         'b':  1 
      });
      // => 'matches B'
       
      func({ 
        'a':   '1',
         'b':   '2' 
      });
      // => 'no match'
    } catch (e) {}



    try {
      var  objects  =   [  { 
        'a':  2,
         'b':  1 
      },    { 
        'a':  1,
         'b':  2 
      }]; 
      FAKE_LODASH.filter(objects,  _.conforms({ 
        'b':   function(n)  { 
          return  n  >  1; 
        } 
      }));
      // => [{ 'a': 1, 'b': 2 }]
    } catch (e) {}



    try {
      var  objects  =  _.times(2,  _.constant({ 
        'a':  1 
      })); 
      console.log(objects);
      // => [{ 'a': 1 }, { 'a': 1 }]
       
      console.log(objects[0]  ===  objects[1]);
      // => true
    } catch (e) {}



    try {
      FAKE_LODASH.defaultTo(1,  10);
      // => 1
       
      FAKE_LODASH.defaultTo(undefined,  10);
      // => 10
    } catch (e) {}



    try {
      function  square(n)  {  
        return  n  *  n;
      } 
      var  addSquare  =  _.flow([_.add,  square]);
      addSquare(1,  2);
      // => 9
    } catch (e) {}



    try {
      function  square(n)  {  
        return  n  *  n;
      } 
      var  addSquare  =  _.flowRight([square,  _.add]);
      addSquare(1,  2);
      // => 9
    } catch (e) {}



    try {
      var  object  =   { 
        'a':  1 
      }; 
      console.log(_.identity(object)  ===  object);
      // => true
    } catch (e) {}



    try {
      var  users  =   [  { 
        'user':   'barney',
         'age':  36,
         'active':  true 
      },    { 
        'user':   'fred',
           'age':  40,
         'active':  false 
      }]; 
      // The `_.matches` iteratee shorthand.
      FAKE_LODASH.filter(users,  _.iteratee({ 
        'user':   'barney',
         'active':  true 
      }));
      // => [{ 'user': 'barney', 'age': 36, 'active': true }]
       
      // The `_.matchesProperty` iteratee shorthand.
      FAKE_LODASH.filter(users,  _.iteratee(['user',  'fred']));
      // => [{ 'user': 'fred', 'age': 40 }]
       
      // The `_.property` iteratee shorthand.
      FAKE_LODASH.map(users,  _.iteratee('user'));
      // => ['barney', 'fred']
       
      // Create custom iteratee shorthands.
      FAKE_LODASH.iteratee  =  _.wrap(_.iteratee,  function(iteratee,  func)  {  
        return  !_.isRegExp(func)  ?  iteratee(func)  :   function(string)  {    
          return  func.test(string);  
        };
      }); 
      FAKE_LODASH.filter(['abc',  'def'],  /ef/);
      // => ['def']
    } catch (e) {}



    try {
      var  objects  =   [  { 
        'a':  1,
         'b':  2,
         'c':  3 
      },    { 
        'a':  4,
         'b':  5,
         'c':  6 
      }]; 
      FAKE_LODASH.filter(objects,  _.matches({ 
        'a':  4,
         'c':  6 
      }));
      // => [{ 'a': 4, 'b': 5, 'c': 6 }]
    } catch (e) {}



    try {
      var  objects  =   [  { 
        'a':  1,
         'b':  2,
         'c':  3 
      },    { 
        'a':  4,
         'b':  5,
         'c':  6 
      }]; 
      FAKE_LODASH.find(objects,  _.matchesProperty('a',  4));
      // => { 'a': 4, 'b': 5, 'c': 6 }
    } catch (e) {}



    try {
      var  objects  =   [  { 
        'a':  { 
          'b':  _.constant(2) 
        } 
      },    { 
        'a':  { 
          'b':  _.constant(1) 
        } 
      }]; 
      FAKE_LODASH.map(objects,  _.method('a.b'));
      // => [2, 1]
       
      FAKE_LODASH.map(objects,  _.method(['a',  'b']));
      // => [2, 1]
    } catch (e) {}



    try {
      var  array  =  _.times(3,  _.constant),
            object  =   { 
          'a':  array,
           'b':  array,
           'c':  array 
        }; 
      FAKE_LODASH.map(['a[2]',  'c[0]'],  _.methodOf(object));
      // => [2, 0]
       
      FAKE_LODASH.map([
        ['a',  '2'],  
        ['c',  '0']
      ],  _.methodOf(object));
      // => [2, 0]
    } catch (e) {}



    // try {
    // function vowels(string) {
    //   return _.filter(string, function(v) {
    //     return /[aeiou]/i.test(v);
    //   });
    // }
    //  
    // FAKE_LODASH.mixin({ 'vowels': vowels });
    // FAKE_LODASH.vowels('fred');
    // // => ['e']
    //  
    // _('fred').vowels().value();
    // // => ['e']
    //  
    // FAKE_LODASH.mixin({ 'vowels': vowels }, { 'chain': false });
    // _('fred').vowels();
    // // => ['e']
    // } catch(e) {}



    // try {
    // var lodash = _.noConflict();


    // FAKE_LODASH.times(2, _.noop);
    // // => [undefined, undefined]
    // } catch(e) {}



    try {
      var  func  =  _.nthArg(1);
      func('a',  'b',  'c',  'd');
      // => 'b'
       
      var  func  =  _.nthArg(-2);
      func('a',  'b',  'c',  'd');
      // => 'c'
    } catch (e) {}



    try {
      var  func  =  _.over([Math.max,  Math.min]); 
      func(1,  2,  3,  4);
      // => [4, 1]
    } catch (e) {}



    try {
      var  func  =  _.overEvery([Boolean,  isFinite]); 
      func('1');
      // => true
       
      func(null);
      // => false
       
      func(NaN);
      // => false
    } catch (e) {}



    try {
      var  func  =  _.overSome([Boolean,  isFinite]); 
      func('1');
      // => true
       
      func(null);
      // => true
       
      func(NaN);
      // => false
    } catch (e) {}



    try {
      var  objects  =   [  { 
        'a':  { 
          'b':  2 
        } 
      },    { 
        'a':  { 
          'b':  1 
        } 
      }]; 
      FAKE_LODASH.map(objects,  _.property('a.b'));
      // => [2, 1]
       
      FAKE_LODASH.map(_.sortBy(objects,  _.property(['a',  'b'])),  'a.b');
      // => [1, 2]
    } catch (e) {}



    try {
      var  array  =   [0,  1,  2],
            object  =   { 
          'a':  array,
           'b':  array,
           'c':  array 
        }; 
      FAKE_LODASH.map(['a[2]',  'c[0]'],  _.propertyOf(object));
      // => [2, 0]
       
      FAKE_LODASH.map([
        ['a',  '2'],  
        ['c',  '0']
      ],  _.propertyOf(object));
      // => [2, 0]
    } catch (e) {}



    try {
      FAKE_LODASH.range(4);
      // => [0, 1, 2, 3]
       
      FAKE_LODASH.range(-4);
      // => [0, -1, -2, -3]
       
      FAKE_LODASH.range(1,  5);
      // => [1, 2, 3, 4]
       
      FAKE_LODASH.range(0,  20,  5);
      // => [0, 5, 10, 15]
       
      FAKE_LODASH.range(0,  -4,  -1);
      // => [0, -1, -2, -3]
       
      FAKE_LODASH.range(1,  4,  0);
      // => [1, 1, 1]
       
      FAKE_LODASH.range(0);
      // => []
    } catch (e) {}



    try {
      FAKE_LODASH.rangeRight(4);
      // => [3, 2, 1, 0]
       
      FAKE_LODASH.rangeRight(-4);
      // => [-3, -2, -1, 0]
       
      FAKE_LODASH.rangeRight(1,  5);
      // => [4, 3, 2, 1]
       
      FAKE_LODASH.rangeRight(0,  20,  5);
      // => [15, 10, 5, 0]
       
      FAKE_LODASH.rangeRight(0,  -4,  -1);
      // => [-3, -2, -1, 0]
       
      FAKE_LODASH.rangeRight(1,  4,  0);
      // => [1, 1, 1]
       
      FAKE_LODASH.rangeRight(0);
      // => []
    } catch (e) {}



    try {
      FAKE_LODASH.mixin({ 
        'foo':  _.constant('foo') 
      }); 
      var  lodash  =  _.runInContext();
      lodash.mixin({ 
        'bar':  lodash.constant('bar') 
      }); 
      FAKE_LODASH.isFunction(_.foo);
      // => true
      FAKE_LODASH.isFunction(_.bar);
      // => false
       
      lodash.isFunction(lodash.foo);
      // => false
      lodash.isFunction(lodash.bar);
      // => true
       
      // Create a suped-up `defer` in Node.js.
      var  defer  =  _.runInContext({ 
        'setTimeout':  setImmediate 
      }).defer;
    } catch (e) {}



    try {
      var  arrays  =  _.times(2,  _.stubArray); 
      console.log(arrays);
      // => [[], []]
       
      console.log(arrays[0]  ===  arrays[1]);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.times(2,  _.stubFalse);
      // => [false, false]
    } catch (e) {}



    try {
      var  objects  =  _.times(2,  _.stubObject); 
      console.log(objects);
      // => [{}, {}]
       
      console.log(objects[0]  ===  objects[1]);
      // => false
    } catch (e) {}



    try {
      FAKE_LODASH.times(2,  _.stubString);
      // => ['', '']
    } catch (e) {}



    try {
      FAKE_LODASH.times(2,  _.stubTrue);
      // => [true, true]
    } catch (e) {}



    try {
      FAKE_LODASH.times(3,  String);
      // => ['0', '1', '2']
        
      _.times(4,  _.constant(0));
      // => [0, 0, 0, 0]
    } catch (e) {}



    try {
      FAKE_LODASH.toPath('a.b.c');
      // => ['a', 'b', 'c']
       
      FAKE_LODASH.toPath('a[0].b.c');
      // => ['a', '0', 'b', 'c']
    } catch (e) {}



    try {
      FAKE_LODASH.uniqueId('contact_');
      // => 'contact_104'
       
      FAKE_LODASH.uniqueId();
      // => '105'
    } catch (e) {}
  }
  return testCases
}())
