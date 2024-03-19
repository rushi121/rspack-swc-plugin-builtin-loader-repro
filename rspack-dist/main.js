(function() {
var __webpack_modules__ = {
"./src/index.js": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expression expected\n\u001b[31m      \u001b[0m   ╭─[1:1]\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ console.error(\"this is error\");\n\u001b[31m      \u001b[0m \u001b[2m2\u001b[0m │ var a = 1;\n\u001b[31m      \u001b[0m \u001b[2m3\u001b[0m │  = this; // this throws an error if we use buildin swc-loader\n\u001b[31m      \u001b[0m   · \u001b[35;1m ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        File was processed with these loaders:\n         * builtin:swc-loader??ruleSet[1].rules[0].use[0]\n        You may need an additional loader to handle the result of these loaders.\n");
}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__("./src/index.js");
})()
