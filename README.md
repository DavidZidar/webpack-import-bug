To reproduce bug:
```
yarn install
yarn build
yarn test
```

Expected output:
```
4
```

Actual output:
```
webpack://webpack-import-bug/./node_modules/memoizee/normalizers/get-1.js?:9
                        var index = indexOf.call(argsMap, args[0]);
                                            ^

TypeError: indexOf.call is not a function
    at get (webpack://webpack-import-bug/./node_modules/memoizee/normalizers/get-1.js?:9:24)
    at eval (webpack://webpack-import-bug/./node_modules/memoizee/lib/configure-map.js?:53:9)
    at eval (webpack://webpack-import-bug/./src/index.js?:8:13)
    at Object../src/index.js (C:\code\test\webpack-import-bug\dist\main.js:1360:1)
    at __webpack_require__ (C:\code\test\webpack-import-bug\dist\main.js:1383:41)
    at C:\code\test\webpack-import-bug\dist\main.js:1433:11
    at Object.<anonymous> (C:\code\test\webpack-import-bug\dist\main.js:1435:12)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
```
