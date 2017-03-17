/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "var/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 462);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (undefined !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(29);

var ReactCurrentOwner = __webpack_require__(17);

var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  undefined !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? undefined !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? undefined !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? undefined !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? undefined !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? undefined !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? undefined !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

module.exports = ReactComponentTreeHook;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(15);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (undefined !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(17);
var ReactComponentTreeHook = __webpack_require__(11);
var ReactElement = __webpack_require__(28);

var checkReactTypeSpec = __webpack_require__(432);

var canDefineProperty = __webpack_require__(80);
var getIteratorFn = __webpack_require__(81);
var warning = __webpack_require__(2);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  undefined !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    undefined !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }
        info += getDeclarationErrorAddendum();
        undefined !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (undefined !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            undefined !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

module.exports = ReactElementValidator;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(347));
	else if(typeof define === 'function' && define.amd)
		define("laxar", ["page"], factory);
	else if(typeof exports === 'object')
		exports["laxar"] = factory(require("page"));
	else
		root["laxar"] = factory(root["page"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_33__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export codeIsUnreachable */
/* unused harmony export state */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * The *assert* module provides some simple assertion methods for type checks, truthyness tests and guards
 * invalid code paths.
 * When importing the module as `default` module, it is the {@link assert} function itself.
 *
 * When requiring `laxar`, it is available as `laxar.assert`.
 *
 * @module assert
 */

/**
 * Constructor for an Assertion.
 *
 * @param {*} subject
 *    the object assertions are made for
 * @param {String} [optionalDetails]
 *    details that should be printed in case no specific details are given for an assertion method
 *
 * @constructor
 * @private
 */
function Assertion(subject, optionalDetails) {
   this.subject_ = subject;
   this.details_ = optionalDetails || null;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Throws an error if the subject is `null` or `undefined`.
 *
 * @param {String} [optionalDetails]
 *    details to append to the error message
 *
 * @return {Assertion}
 *    this instance
 */
Assertion.prototype.isNotNull = function isNotNull(optionalDetails) {
   if (this.subject_ == null) {
      fail('Expected value to be defined and not null.', optionalDetails || this.details_);
   }

   return this;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Throws an error if the subject is not of the given type. No error is thrown for `null` or `undefined`.
 *
 * @param {Function} type
 *    the expected type of the subject
 * @param {String} [optionalDetails]
 *    details to append to the error message
 *
 * @return {Assertion}
 *    this instance
 */
Assertion.prototype.hasType = function hasType(type, optionalDetails) {
   if (typeof this.subject_ === 'undefined' || this.subject_ === null) {
      return this;
   }

   if (typeof type !== 'function') {
      fail('type must be a constructor function. Got ' + (typeof type === 'undefined' ? 'undefined' : _typeof(type)) + '.');
   }

   if (!checkType(this.subject_, type)) {
      var actualString = functionName(this.subject_.constructor);
      var expectedString = functionName(type);

      fail('Expected value to be an instance of "' + expectedString + '" but was "' + actualString + '".', optionalDetails || this.details_);
   }

   return this;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Throws an error if the subject is no object or the given property is not defined on it.
 *
 * @param {String} property
 *    the property that is expected for the subject
 * @param {String} [optionalDetails]
 *    details to append to the error message
 *
 * @return {Assertion}
 *    this instance
 */
Assertion.prototype.hasProperty = function hasProperty(property, optionalDetails) {
   if (_typeof(this.subject_) !== 'object') {
      fail('value must be an object. Got ' + _typeof(this.subject_) + '.');
   }

   if (!(property in this.subject_)) {
      fail('value is missing mandatory property "' + property + '".', optionalDetails || this.details_);
   }

   return this;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fail(message, optionalDetails) {
   var details = '';
   if (optionalDetails) {
      var detailString = (typeof optionalDetails === 'undefined' ? 'undefined' : _typeof(optionalDetails)) === 'object' ? JSON.stringify(optionalDetails) : optionalDetails;
      details = ' Details: ' + detailString;
   }
   throw new Error('Assertion error: ' + message + details);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var TYPE_TO_CONSTRUCTOR = {
   'string': String,
   'number': Number,
   'boolean': Boolean,
   'function': Function
};
function checkType(subject, type) {
   if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) === 'object') {
      return subject instanceof type;
   }

   var actualType = TYPE_TO_CONSTRUCTOR[typeof subject === 'undefined' ? 'undefined' : _typeof(subject)];
   return actualType === type;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var FUNCTION_NAME_MATCHER = /^function ([^(]*)\(/i;
function functionName(func) {
   var match = FUNCTION_NAME_MATCHER.exec(func.toString().trim());
   return match[1].length ? match[1] : 'n/a';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates and returns a new `Assertion` instance for the given `subject`.
 *
 * **Note**: this function is no member of the module, but the module itself. Thus when using `assert` via
 * laxar, `assert` is will be no simple object, but this function having the other functions as
 * properties.
 *
 * Example:
 * ```js
 * define( [ 'laxar' ], function( ax ) {
 *    ax.assert( ax.assert ).hasType( Function );
 *    ax.assert.state( typeof ax.assert.codeIsUnreachable === 'function' );
 * } );
 * ```
 *
 * @param {*} subject
 *    the object assertions are made for
 * @param {String} [optionalDetails]
 *    details that should be printed in case no specific details are given when calling an assertion method
 *
 * @return {Assertion}
 *    the assertion instance
 */
function assert(subject, optionalDetails) {
   return new Assertion(subject, optionalDetails);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Marks a code path as erroneous by throwing an error when reached.
 *
 * @param {String} [optionalDetails]
 *    details to append to the error message
 */
assert.codeIsUnreachable = function codeIsUnreachable(optionalDetails) {
   fail('Code should be unreachable!', optionalDetails);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Throws an error if the given expression is falsy.
 *
 * @param {*} expression
 *    the expression to test for truthyness
 * @param {String} [optionalDetails]
 *    details to append to the error message
 */
assert.state = function state(expression, optionalDetails) {
   if (!expression) {
      fail('State does not hold.', optionalDetails);
   }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* harmony default export */ __webpack_exports__["a"] = assert;
var codeIsUnreachable = assert.codeIsUnreachable;
var state = assert.state;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["options"] = options;
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["path"] = path;
/* harmony export (immutable) */ __webpack_exports__["setPath"] = setPath;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["tabulate"] = tabulate;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Utilities for dealing with objects.
 *
 * When requiring `laxar`, it is available as `laxar.object`.
 *
 * @module object
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Returns all properties from `obj` with missing properties completed from `defaults`. If `obj` is `null`
 * or `undefined`, an empty object is automatically created. `obj` and `defaults` are not modified by this
 * function. This is very useful for optional map arguments, resembling some kind of configuration.
 *
 * Example:
 * ```js
 * object.options( { validate: true }, {
 *    validate: false,
 *    highlight: true
 * } );
 * // =>
 * // {
 * //    validate: true,
 * //    highlight: true
 * // }
 * ```
 *
 * @param {Object} obj
 *    the options object to use as source, may be `null` or `undefined`
 * @param {Object} defaults
 *    the defaults to take missing properties from
 *
 * @return {Object}
 *    the completed options object
 */
function options(obj, defaults) {
   return Object.assign({}, defaults, obj);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Iterates over the keys of an object and calls the given iterator function for each entry.
 * On each iteration the iterator function is passed the `value`, the `key` and the complete `object` as
 * arguments.
 * If `object` is an array, the native `Array.prototype.forEach` function is called.
 * In this case the keys are the indices of the array.
 *
 * Example:
 * ```
 * object.forEach( { name: Peter, age: 12 }, ( value, key ) => {
 *    console.log( `${key} = ${value}\n` );
 * });
 * // =>
 * // name = Peter
 * // age = 12
 * ```
 *
 * @param {Object} object
 *    the object to run the iterator function on
 * @param {Function} iteratorFunction
 *    the iterator function to run on each key-value pair
 */
function forEach(object, iteratorFunction) {
   if (Array.isArray(object)) {
      object.forEach(iteratorFunction);
      return;
   }

   for (var key in object) {
      if (hasOwnProperty(object, key)) {
         iteratorFunction(object[key], key, object);
      }
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Finds a property in a nested object structure by a given path. A path is a string of keys, separated
 * by a dot from each other, used to traverse that object and find the value of interest. An additional
 * default is returned, if otherwise the value would yield `undefined`.
 *
 * Note that `path()` must only be used in situations where all path segments are also valid
 * JavaScript identifiers, and should never be used with user-specified paths:
 *
 *  - there is no mechanism to escape '.' in path segments; a dot always separates keys,
 *  - an empty string as a path segment will abort processing and return the entire sub-object under the
 *    respective position. For historical reasons, the path interpretation differs from that performed by
 *    {@link #setPath()}.
 *
 *
 * Example:
 *
 * ```js
 * object.path( { one: { two: 3 } }, 'one.two' ); // => 3
 * object.path( { one: { two: 3 } }, 'one.three' ); // => undefined
 * object.path( { one: { two: 3 } }, 'one.three', 42 ); // => 42
 * object.path( { one: { two: 3 } }, 'one.' ); // => { two: 3 }
 * object.path( { one: { two: 3 } }, '' ); // => { one: { two: 3 } }
 * object.path( { one: { two: 3 } }, '.' ); // => { one: { two: 3 } }
 * ```
 *
 * @param {Object} obj
 *    the object to traverse
 * @param {String} thePath
 *    the path to search for
 * @param {*} [optionalDefault]
 *    the value to return instead of `undefined` if nothing is found
 *
 * @return {*}
 *    the value at the given path
 */
function path(obj, thePath) {
   var optionalDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

   var pathArr = thePath.split('.');
   var node = obj;
   var key = pathArr.shift();

   while (key) {
      if (node && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && hasOwnProperty(node, key)) {
         node = node[key];
         key = pathArr.shift();
      } else {
         return optionalDefault;
      }
   }

   return node;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Sets a property in a nested object structure at a given path to a given value. A path is a string of
 * keys, separated by a dot from each other, used to traverse that object and find the place where the
 * value should be set. Any missing subtrees along the path are created.
 *
 * Note that `setPath()` must only be used in situations where all path segments are also valid
 * JavaScript identifiers, and should never be used with user-specified paths:
 *
 *  - there is no mechanism to escape '.' in path segments; a dot will always create separate keys,
 *  - an empty string as a path segment will create an empty string key in the object graph where missing.
 *    For historical reasons, this path interpretation differs from that performed by #path (see there).
 *
 *
 * Example:
 *
 * ```js
 * object.setPath( {}, 'name.first', 'Peter' ); // => { name: { first: 'Peter' } }
 * object.setPath( {}, 'pets.1', 'Hamster' ); // => { pets: [ null, 'Hamster' ] }
 * object.setPath( {}, '', 'Hamster' ); // => { '': 'Hamster' } }
 * object.setPath( {}, '.', 'Hamster' ); // => { '': { '': 'Hamster' } } }
 * ```
 *
 * @param {Object} obj
 *    the object to modify
 * @param {String} path
 *    the path to set a value at
 * @param {*} value
 *    the value to set at the given path
 *
 * @return {*}
 *    the full object (for chaining)
 */
function setPath(obj, path, value) {
   var node = obj;
   var pathArr = path.split('.');
   var last = pathArr.pop();

   pathArr.forEach(function (pathFragment, index) {
      if (!node[pathFragment] || _typeof(node[pathFragment]) !== 'object') {
         var lookAheadFragment = pathArr[index + 1] || last;
         if (lookAheadFragment.match(/^[0-9]+$/)) {
            node[pathFragment] = [];
            fillArrayWithNull(node[pathFragment], parseInt(lookAheadFragment, 10));
         } else {
            node[pathFragment] = {};
         }
      }

      node = node[pathFragment];
   });

   if (Array.isArray(node) && last > node.length) {
      fillArrayWithNull(node, last);
   }

   node[last] = value;

   return obj;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Returns a deep clone of the given object. Note that the current implementation is intended to be used
 * for simple object literals only. There is no guarantee that cloning objects instantiated via
 * constructor function works and cyclic references will lead to endless recursion.
 *
 * @param {*} object
 *    the object to clone
 *
 * @return {*}
 *    the clone
 */
function deepClone(object) {
   if (!object || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
      return object;
   }

   // Using plain for-loops here for performance-reasons.
   var result = void 0;
   if (Array.isArray(object)) {
      result = [];
      for (var i = 0, length = object.length; i < length; ++i) {
         result[i] = deepClone(object[i]);
      }
   } else {
      result = {};
      for (var key in object) {
         if (hasOwnProperty(object, key)) {
            result[key] = deepClone(object[key]);
         }
      }
   }

   return result;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates a lookup table from a function and a list of inputs to the function.
 *
 * @param {Function} fn
 *    The callback to apply to all inputs
 * @param {String[]|Number[]|Boolean[]} keys
 *    The keys for the lookup table, and inputs to the function.
 *
 * @return {Object}
 *    An object mapping the given keys to their values under `fn`.
 */
function tabulate(fn, keys) {
   return keys.reduce(function (table, k) {
      table[k] = fn(k);return table;
   }, {});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line valid-jsdoc
/**
 * Sets all entries of the given array to `null`.
 *
 * @private
 */
function fillArrayWithNull(arr, toIndex) {
   for (var i = arr.length; i < toIndex; ++i) {
      arr[i] = null;
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hasOwnProp = Object.prototype.hasOwnProperty;
// eslint-disable-next-line valid-jsdoc
/**
 * @private
 */
function hasOwnProperty(object, property) {
   return hasOwnProp.call(object, property);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FORMATTERS", function() { return DEFAULT_FORMATTERS; });
/* harmony export (immutable) */ __webpack_exports__["format"] = format;
/* harmony export (immutable) */ __webpack_exports__["createFormatter"] = createFormatter;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Utilities for dealing with strings.
 *
 * When requiring `laxar`, it is available as `laxar.string`.
 *
 * @module string
 */

//
var BACKSLASH = '\\';
var OPENING_BRACKET = '[';
var CLOSING_BRACKET = ']';
var INTEGER_MATCHER = /^[0-9]+$/;

/**
 * A map of all available default format specifiers to their respective formatter function.
 * The following specifiers are available:
 *
 * - `%d` / `%i`: Format the given numeric value as integer. Decimal places are removed
 * - `%f`: Format the given numeric value as floating point value. This specifier supports precision as
 *   sub-specifier (e.g. `%.2f` for 2 decimal places)
 * - `%s`: use simple string serialization using `toString`
 * - `%o`: Format complex objects using `JSON.stringify`
 *
 * @type {Object}
 * @name DEFAULT_FORMATTERS
 */
var DEFAULT_FORMATTERS = Object.freeze({
   's': function s(input) {
      return '' + input;
   },
   'd': function d(input) {
      return input.toFixed(0);
   },
   'i': function i(input, subSpecifierString) {
      return DEFAULT_FORMATTERS.d(input, subSpecifierString);
   },
   'f': function f(input, subSpecifierString) {
      var precision = subSpecifierString.match(/^\.(\d)$/);
      if (precision) {
         return input.toFixed(precision[1]);
      }

      return '' + input;
   },
   'o': function o(input) {
      return JSON.stringify(input);
   },
   'default': function _default(input, subSpecifierString) {
      return DEFAULT_FORMATTERS.s(input, subSpecifierString);
   }
});

var DEFAULT_FORMATTER = createFormatter(DEFAULT_FORMATTERS);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Substitutes all unescaped placeholders in the given string for a given indexed or named value.
 * A placeholder is written as a pair of brackets around the key of the placeholder. An example of an
 * indexed placeholder is `[0]` and a named placeholder would look like this `[replaceMe]`. If no
 * replacement for a key exists, the placeholder will simply not be substituted.
 *
 * Some examples:
 * ```javascript
 * string.format( 'Hello [0], how do you like [1]?', [ 'Peter', 'Cheeseburgers' ] );
 * // => 'Hello Peter, how do you like Cheeseburgers?'
 * ```
 * ```javascript
 * string.format( 'Hello [name] and [partner], how do you like [0]?', [ 'Pizza' ], {
 *    name: 'Hans',
 *    partner: 'Roswita'
 * } );
 * // => 'Hello Hans and Roswita, how do you like Pizza?'
 * ```
 * If a pair of brackets should not be treated as a placeholder, the opening bracket can simply be escaped
 * by backslashes (thus to get an actual backslash in a JavaScript string literal, which is then treated as
 * an escape symbol, it needs to be written as double backslash):
 * ```javascript
 * string.format( 'A [something] should eventually only have \\[x].', {
 *    something: 'checklist'
 * } );
 * // => 'A checklist should eventually only have [x].'
 * ```
 * A placeholder key can be any character string besides `[`, `]` and `:` to keep parsing simple and fast.
 * By using `:` as separator it is possible to provide a type specifier for string serialization or other
 * additional mapping functions for the value to insert. Type specifiers always begin with an `%` and end
 * with the specifier type. Builtin specifiers and their according formatter functions are defined
 * as {@link DEFAULT_FORMATTERS}.
 *
 * When no specifier is provided, by default `%s` is assumed.
 *
 * Example:
 * ```javascript
 * string.format( 'Hello [0:%s], you owe me [1:%.2f] euros.', [ 'Peter', 12.1243 ] );
 * // => 'Hello Peter, you owe me 12.12 euros.'
 * ```
 *
 * Mapping functions should instead consist of simple strings and may not begin with a `%` character. It is
 * advised to use the same naming rules as for simple JavaScript functions. Type specifiers and mapping
 * functions are applied in the order they appear within the placeholder.
 *
 * An example, where we assume that the mapping functions `flip` and `double` where defined by the user
 * when creating the `formatString` function using {@link #createFormatter()}:
 * ```javascript
 * formatString( 'Hello [0:%s:flip], you owe me [1:double:%.2f] euros.', [ 'Peter', 12 ] );
 * // => 'Hello reteP, you owe me 24.00 euros.'
 * ```
 *
 * Note that there currently exist no builtin mapping functions.
 *
 * If a type specifier is used that doesn't exist, an exception is thrown. In contrast to that the use of
 * an unknown mapping function results in a no-op. This is on purpose to be able to use filter-like
 * functions that, in case they are defined for a formatter, transform a value as needed and in all other
 * cases simply are ignored and don't alter the value.
 *
 * @param {String} string
 *    the string to replace placeholders in
 * @param {Array} [optionalIndexedReplacements]
 *    an optional array of indexed replacements
 * @param {Object} [optionalNamedReplacements]
 *    an optional map of named replacements
 *
 * @return {String}
 *    the string with placeholders substituted for their according replacements
 */
function format(string, optionalIndexedReplacements, optionalNamedReplacements) {
   return DEFAULT_FORMATTER(string, optionalIndexedReplacements, optionalNamedReplacements);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates a new format function having the same api as {@link #format()}. If the first argument is
 * omitted or `null`, the default formatters for type specifiers are used. Otherwise only the provided map
 * of specifiers is available to the returned format function. Each key of the map is a specifier character
 * where the `%` is omitted and the value is the formatting function. A formatting function receives the
 * value to format (i.e. serialize) and the sub-specifier (if any) as arguments. For example for the format
 * specifier `%.2f` the sub-specifier would be `.2` where for `%s` it would simply be the empty string.
 *
 * Example:
 * ```js
 * const format = string.createFormatter( {
 *    'm': function( value ) {
 *       return value.amount + ' ' + value.currency;
 *    },
 *    'p': function( value, subSpecifier ) {
 *       return Math.pow( value, parseInt( subSpecifier, 10 ) );
 *    }
 * } );
 *
 * format( 'You owe me [0:%m].', [ { amount: 12, currency: 'EUR' } ] );
 * // => 'You owe me 12 EUR.'
 *
 * format( '[0]^3 = [0:%3p]', [ 2 ] );
 * // => '2^3 = 8'
 * ```
 *
 * The second argument is completely additional to the behavior of the default {@link #format()}
 * function. Here a map from mapping function id to actual mapping function can be passed in. Whenever the
 * id of a mapping function is found within the placeholder, that mapping function is called with the
 * current value and its return value is either passed to the next mapping function or rendered
 * instead of the placeholder if there are no more mapping function ids or type specifiers within the
 * placeholder string.
 *
 * ```javascript
 * const format = string.createFormatter( null, {
 *    flip: function( value ) {
 *       return ( '' + s ).split( '' ).reverse().join( '' );
 *    },
 *    double: function( value ) {
 *       return value * 2;
 *    }
 * } );
 *
 * format( 'Hello [0:%s:flip], you owe me [1:double:%.2f] euros.', [ 'Peter', 12 ] );
 * // => 'Hello reteP, you owe me 24.00 euros.'
 * ```
 *
 * @param {Object} typeFormatters
 *    map from format specifier (single letter without leading `%`) to formatting function
 * @param {Object} [optionalValueMappers]
 *    map from mapping identifier to mapping function
 *
 * @return {Function}
 *    a function having the same api as {@link #format()}
 */
function createFormatter() {
   var typeFormatters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_FORMATTERS;
   var optionalValueMappers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


   function format(string, optionalIndexedReplacements, optionalNamedReplacements) {
      if (typeof string !== 'string') {
         return defaultTypeFormatter(typeFormatters)(string);
      }

      var indexed = Array.isArray(optionalIndexedReplacements) ? optionalIndexedReplacements : [];
      var named = {};
      if (optionalNamedReplacements) {
         named = optionalNamedReplacements || {};
      } else if (!Array.isArray(optionalIndexedReplacements)) {
         named = optionalIndexedReplacements || {};
      }

      var chars = string.split('');
      var output = '';
      for (var i = 0, len = chars.length; i < len; ++i) {
         if (chars[i] === BACKSLASH) {
            if (i + 1 === len) {
               throw new Error('Unterminated escaping sequence at index ' + i + ' of string: "' + string + '".');
            }

            output += chars[++i];
         } else if (chars[i] === OPENING_BRACKET) {
            var closingIndex = string.indexOf(CLOSING_BRACKET, i + 1);
            if (closingIndex === -1) {
               throw new Error('Unterminated placeholder at index ' + i + ' of string: "' + string + '".');
            }

            var key = string.substring(i + 1, closingIndex);

            output += replacePlaceholder(key, named, indexed, { string: string, index: i });

            i = closingIndex;
         } else {
            output += chars[i];
         }
      }
      return output;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function replacePlaceholder(placeholder, named, indexed, context) {
      var specifier = '';
      var subSpecifierString = '';
      var placeholderParts = placeholder.split(':');
      var key = placeholderParts[0];

      var value = void 0;
      if (INTEGER_MATCHER.test(key) && key < indexed.length) {
         value = indexed[key];
      } else if (key in named) {
         value = named[key];
      } else {
         return OPENING_BRACKET + placeholder + CLOSING_BRACKET;
      }

      if (placeholderParts.length > 1) {

         if (placeholderParts[1].charAt(0) !== '%') {
            value = defaultTypeFormatter(typeFormatters)(value);
         }

         return placeholderParts.slice(1).reduce(function (value, part) {
            if (part.indexOf('%') === 0) {
               var specifierMatch = part.match(/^%(.*)(\w)$/);
               specifier = specifierMatch ? specifierMatch[2] : '';
               subSpecifierString = specifierMatch ? specifierMatch[1] : '';
               if (specifier in typeFormatters) {
                  return typeFormatters[specifier](value, subSpecifierString);
               }
               var knownSpecifiers = Object.keys(typeFormatters).filter(function (_) {
                  return _ !== 'default';
               }).map(function (_) {
                  return '%' + _;
               }).join(', ');

               throw new Error('Unknown format specifier "%' + specifier + '" for placeholder' + (' at index ' + context.index + ' of string: "' + context.string + '"') + (' (Known specifiers are: ' + knownSpecifiers + ').'));
            }
            if (part in optionalValueMappers) {
               return optionalValueMappers[part](value);
            }

            return value;
         }, value);
      }

      return defaultTypeFormatter(typeFormatters)(value);
   }

   ////////////////////////////////////////////////////////////////////////////////////////////////////////

   return format;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function defaultTypeFormatter(typeFormatters) {
   if ('default' in typeFormatters) {
      return typeFormatters['default'];
   }

   return DEFAULT_FORMATTERS['default'];
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = findWidgetAreas;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


/**
 * The area helper manages widget areas, their DOM representation and their nesting structure.
 *
 * It tracks widget area visibility in order to compile widgets and to attach them to their areas when
 * these become visible.
 * It does not interact with the event bus directly, but is consulted by the visibility event manager to
 * determine area nesting for visibility events.
 */

function create(page, log) {

   var exports = {
      isVisible: isVisible,
      setVisibility: setVisibility,
      areasInArea: areasInArea,
      areasInWidget: areasInWidget,
      register: register,
      exists: exists,
      attachWidgets: attachWidgets
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // all initially visible widgets should be attached together, to reduce jitter and unnecessary DOM ops
   var freeToAttach = false;

   // keep the dom element for each area, to attach widgets to
   var areaToElement = {};

   // track widget adapters waiting for their area to become available so that they may attach to its DOM
   var areaToWaitingAdapters = {};

   // track the visibility status of all areas
   var knownVisibilityState = {};

   // the containing area name for each widget
   var widgetIdToArea = {};
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(page.areas, function (widgets, areaName) {
      widgets.forEach(function (widget) {
         widgetIdToArea[widget.id] = areaName;
      });
   });

   // for each widget with children, and each widget area with nested areas, store a list of child names
   var areasInAreaMap = {};
   var areasInWidgetMap = {};
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(page.areas, function (widgetEntries, areaName) {
      var containerName = '';
      if (areaName.indexOf('.') !== -1) {
         var widgetId = areaName.split('.')[0];
         areasInWidgetMap[widgetId] = areasInWidgetMap[widgetId] || [];
         areasInWidgetMap[widgetId].push(areaName);
         containerName = widgetIdToArea[widgetId];
      }
      areasInAreaMap[containerName] = areasInAreaMap[containerName] || [];
      areasInAreaMap[containerName].push(areaName);
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function isVisible(areaName) {
      return knownVisibilityState[areaName] || false;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function setVisibility(areaName, visible) {
      if (visible && freeToAttach) {
         attachWaitingAdapters(areaName);
      }
      knownVisibilityState[areaName] = visible;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function areasInArea(containerName) {
      return areasInAreaMap[containerName];
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function areasInWidget(widgetId) {
      return areasInWidgetMap[widgetId];
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Register a widget area
    *
    * @param {String} name
    *    the area name as used in the page definition
    * @param {HTMLElement} element
    *    an HTML element representing the widget area
    *
    * @return {Function}
    *    removes the according area from the registry again
    */
   function register(name, element) {
      if (name in areaToElement) {
         throw new Error('The area "' + name + '" is defined twice in the current layout.');
      }

      areaToElement[name] = element;
      if (freeToAttach && isVisible(name)) {
         attachWaitingAdapters(name);
      }

      return function () {
         delete areaToElement[name];
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function exists(name) {
      return name in areaToElement;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function attachWidgets(widgetAdapters) {
      freeToAttach = true;
      widgetAdapters.forEach(function (adapterRef) {
         var areaName = widgetIdToArea[adapterRef.id];
         areaToWaitingAdapters[areaName] = areaToWaitingAdapters[areaName] || [];
         areaToWaitingAdapters[areaName].push(adapterRef);
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(page.areas, function (widgets, areaName) {
         if (isVisible(areaName)) {
            attachWaitingAdapters(areaName);
         }
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // eslint-disable-next-line valid-jsdoc
   /** @private */
   function attachWaitingAdapters(areaName) {
      var waitingAdapters = areaToWaitingAdapters[areaName];
      if (!waitingAdapters || !waitingAdapters.length) {
         return;
      }

      var element = areaToElement[areaName];
      if (!element) {
         return;
      }

      // Only to have the context for error logging
      var currentAdapterRef = null;
      // Make sure that all assets are available before proceeding, so that DOM update happens en bloc.
      Promise.all(waitingAdapters.map(function (adapterRef) {
         return adapterRef.templatePromise;
      })).then(function (htmlTemplates) {
         waitingAdapters.forEach(function (adapterRef, i) {
            currentAdapterRef = adapterRef;
            adapterRef.adapter.domAttachTo(element, htmlTemplates[i]);
         });
      }).catch(function (err) {
         log.error('An error occured while attaching some widgets to the DOM:');
         log.error('  - Widget ID: ' + currentAdapterRef.id);
         log.error('  - Widget Area: ' + areaName);
         log.error('  - Original error: [0]', err);
      });

      delete areaToWaitingAdapters[areaName];
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return exports;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findWidgetAreas(rootElement) {
   var areas = {};
   Array.from(rootElement.querySelectorAll('[ax-widget-area],[data-ax-widget-area]')).forEach(function (elem) {
      var name = elem.getAttribute('ax-widget-area') || elem.getAttribute('data-ax-widget-area');

      areas[name] = elem;
   });
   return areas;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* unused harmony export levels */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLACKBOX; });
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export createConsoleChannel */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the Logger factory.
 *
 * To use the Log service in a widget, request the {@link widget_services#axLog axLog} injection.
 *
 * @module log
 */



/**
 * Log levels that are available by default, sorted by increasing severity:
 *
 * - TRACE (level 100)
 * - DEBUG (level 200)
 * - INFO (level 300)
 * - WARN (level 400)
 * - ERROR (level 500)
 * - FATAL (level 600)
 *
 * @type {Object}
 * @name levels
 */
var levels = {
   TRACE: 100,
   DEBUG: 200,
   INFO: 300,
   WARN: 400,
   ERROR: 500,
   FATAL: 600
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Pass this as an additional replacement parameter to a log-method, in order to blackbox your logging call.
 * Blackboxed callers are ignored when logging the source information (file, line).
 *
 * @type {Object}
 * @name BLACKBOX
 */
var BLACKBOX = {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function create(configuration, optionalBrowser) {
   var startChannels = optionalBrowser ? [createConsoleChannel(optionalBrowser)] : [];
   return new Logger(configuration, startChannels);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line valid-jsdoc
/**
 * A flexible logger.
 *
 * It is recommended to prefer this logger over `console.log` and friends, at least for any log messages that
 * might make their way into production code. For once, this logger is safe to use across browsers and allows
 * to attach additional channels for routing messages to (i.e. to send them to a server process for
 * persistence). If a browser console is available, messages will be logged to that console using the builtin
 * console channel.
 * For testing, a silent mock for this logger is used, making it simple to test the logging behavior of
 * widgets and activities, while avoiding noisy log messages in the test runner output.
 *
 * All messages produced
 *
 * @constructor
 * @private
 */
function Logger(configuration) {
   var _this = this;

   var channels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

   this.levels = Object.assign({}, levels, configuration.get('logging.levels'));

   this.queueSize_ = 100;
   this.channels_ = channels;
   this.counter_ = 0;
   this.messageQueue_ = [];
   this.threshold_ = 0;
   this.tags_ = {};

   this.levelToName_ = function (levels) {
      var result = {};
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["forEach"])(levels, function (level, levelName) {
         _this[levelName.toLowerCase()] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
               args[_key] = arguments[_key];
            }

            _this.log.apply(_this, [level].concat(args, [BLACKBOX]));
         };
         result[level] = levelName;
      });
      return result;
   }(this.levels);

   this.setLogThreshold(configuration.ensure('logging.threshold'));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message. A message may contain placeholders in the form `[#]` where `#` resembles the index
 * within the list of `replacements`. `replacements` are incrementally counted starting at `0`. If the
 * log level is below the configured log threshold, the message is simply discarded.
 *
 * It is recommended not to use this method directly, but instead one of the short cut methods for the
 * according log level.
 *
 * @param {Number} level
 *    the level for this message
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.log = function (level, message) {
   for (var _len2 = arguments.length, replacements = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      replacements[_key2 - 2] = arguments[_key2];
   }

   if (level < this.threshold_) {
      return;
   }

   var blackboxDepth = 0;
   while (replacements[replacements.length - 1] === BLACKBOX) {
      ++blackboxDepth;
      replacements.pop();
   }

   var messageObject = {
      id: this.counter_++,
      level: this.levelToName_[level],
      text: message,
      replacements: replacements,
      time: new Date(),
      tags: this.gatherTags(),
      sourceInfo: gatherSourceInformation(blackboxDepth + 1) // add 1 depth to exclude this function
   };

   this.channels_.forEach(function (channel) {
      channel(messageObject);
   });

   if (this.messageQueue_.length === this.queueSize_) {
      this.messageQueue_.shift();
   }
   this.messageQueue_.push(messageObject);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `TRACE`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.trace = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `DEBUG`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.debug = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `INFO`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.info = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `WARN`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.warn = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `ERROR`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.error = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Logs a message in log level `FATAL`. See {@link Logger#log} for further information.
 *
 * *Important note*: This method is only available, if no custom log levels were defined via
 * configuration or custom log levels include this method as well.
 *
 * @param {String} message
 *    the message to log
 * @param {...*} replacements
 *    objects that should replace placeholders within the message
 */
Logger.prototype.fatal = function () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Adds a new channel to forward log messages to. A channel is called synchronously for every log message
 * and can do whatever necessary to handle the message according to its task. Note that blocking or
 * performance critical actions within a channel should always take place asynchronously to prevent from
 * blocking the application. Ideally a web worker is used for heavier background tasks.
 *
 * Each message is an object having the following properties:
 * - `id`: the unique, ascending id of the log message
 * - `level`: the log level of the message in string representation
 * - `text`: the actual message that was logged
 * - `replacements`: the raw list of replacements passed along the message
 * - `time`: JavaScript Date instance when the message was logged
 * - `tags`: A map of all log tags currently set for the logger
 * - `sourceInfo`: if supported, a map containing `file`, `line` and `char` where the logging took place
 *
 * @param {Function} channel
 *    the log channel to add
 */
Logger.prototype.addLogChannel = function (channel) {
   this.channels_.push(channel);
   this.messageQueue_.forEach(function (entry) {
      channel(entry);
   });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Removes a log channel and thus stops sending further messages to it.
 *
 * @param {Function} channel
 *    the log channel to remove
 */
Logger.prototype.removeLogChannel = function (channel) {
   var channelIndex = this.channels_.indexOf(channel);
   if (channelIndex > -1) {
      this.channels_.splice(channelIndex, 1);
   }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Adds a value for a log tag. If a tag is already known, the value is appended to the existing one using a
 * `;` as separator. Note that no formatting of the value takes place and a non-string value will just have
 * its appropriate `toString` method called.
 *
 * Log tags can be used to mark a set of log messages with a value giving further information on the
 * current logging context. For example laxar sets a tag `'INST'` with a unique-like identifier for the
 * current browser client. If then for example log messages are persisted on a server, messages belonging
 * to the same client can be accumulated.
 *
 * @param {String} tag
 *    the id of the tag to add a value for
 * @param {String} value
 *    the value to add
 */
Logger.prototype.addTag = function (tag, value) {
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(tag).hasType(String).isNotNull();

   if (!this.tags_[tag]) {
      this.tags_[tag] = [value];
   } else {
      this.tags_[tag].push(value);
   }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Sets a value for a log tag. If a tag is already known, the value is overwritten by the given one. Note
 * that no formatting of the value takes place and a non-string value will just have its appropriate
 * `toString` method called. For further information on log tags, see {@link Logger#addTag}.
 *
 * @param {String} tag
 *    the id of the tag to set a value for
 * @param {String} value
 *    the value to set
 */
Logger.prototype.setTag = function (tag, value) {
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(tag).hasType(String).isNotNull();

   this.tags_[tag] = [value];
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Removes a log tag. For further information on log tags, see {@link Logger#addTag}.
 *
 * @param {String} tag
 *    the id of the tag to set a value for
 */
Logger.prototype.removeTag = function (tag) {
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(tag).hasType(String).isNotNull();

   delete this.tags_[tag];
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Returns a map of all tags. If there are multiple values for the same tag, their values are concatenated
 * using a `;` as separator. For further information on log tags, see {@link Logger#addTag}.
 *
 * @return {Object}
 *    a mapping from tag to its value(s)
 */
Logger.prototype.gatherTags = function () {
   var tags = {};
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["forEach"])(this.tags_, function (values, tag) {
      tags[tag] = values.join(';');
   });
   return tags;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Sets the threshold for log messages. Log messages with a lower level will be discarded upon logging.
 *
 * @param {String|Number} threshold
 *    the numeric or the string value of the log level to use as threshold
 */
Logger.prototype.setLogThreshold = function (threshold) {
   if (typeof threshold === 'string') {
      __WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */].state(threshold.toUpperCase() in this.levels, 'Unsupported log threshold "' + threshold + '".');
      this.threshold_ = this.levels[threshold.toUpperCase()];
   } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(threshold).hasType(Number);
      this.threshold_ = threshold;
   }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var EMPTY_CALL_INFORMATION = { file: '?', line: -1, char: -1 };

function gatherSourceInformation(blackboxDepth) {
   var e = new Error();

   if (!e.stack) {
      try {
         // IE >= 10 only generates a stack if the error object is really thrown
         throw new Error();
      } catch (err) {
         e = err;
      }
      if (!e.stack) {
         return EMPTY_CALL_INFORMATION;
      }
   }

   var rows = e.stack.split(/[\n]/);
   var interpret = void 0;
   if (rows[0] === 'Error') {
      rows.shift();
      interpret = chromeStackInterpreter;
   } else if (rows[0].indexOf('@') !== -1) {
      interpret = firefoxStackInterpreter;
   } else {
      return EMPTY_CALL_INFORMATION;
   }

   var row = rows[blackboxDepth + 1]; // add 1 depth to exclude this function
   return row ? interpret(row) : EMPTY_CALL_INFORMATION;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var CHROME_AND_IE_STACK_MATCHER = /\(?([^( ]+):(\d+):(\d+)\)?$/;

function chromeStackInterpreter(row) {
   var match = CHROME_AND_IE_STACK_MATCHER.exec(row);
   return {
      file: match ? match[1] : '?',
      line: match ? match[2] : -1,
      char: match ? match[3] : -1
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var FIREFOX_STACK_MATCHER = /@(.+):(\d+)$/;

function firefoxStackInterpreter(row) {
   var match = FIREFOX_STACK_MATCHER.exec(row);
   return {
      file: match ? match[1] : '?',
      line: match ? match[2] : -1,
      char: -1
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createConsoleChannel(browser) {

   return function log(messageObject) {
      var browserConsole = browser.console();
      if (!browserConsole) {
         return;
      }

      var level = messageObject.level,
          text = messageObject.text,
          replacements = messageObject.replacements,
          _messageObject$source = messageObject.sourceInfo,
          file = _messageObject$source.file,
          line = _messageObject$source.line;


      var logMethod = level.toLowerCase();
      if (!(logMethod in browserConsole) || logMethod === 'trace') {
         // In console objects trace doesn't define a valid log level but is used to print stack traces. We
         // thus need to change it something different.
         logMethod = 'log';
      }

      if (!(logMethod in browserConsole)) {
         return;
      }

      var callArgs = [level + ': '].concat(mergeTextAndReplacements(text, replacements)).concat(['(@ ' + file + ':' + line + ')']);

      browserConsole[logMethod].apply(browserConsole, _toConsumableArray(callArgs));
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mergeTextAndReplacements(text, replacements) {
   var parts = [];
   var pos = 0;
   var buffer = '';

   while (pos < text.length) {
      var character = text.charAt(pos);

      switch (character) {
         case '\\':
            {
               ++pos;
               if (pos === text.length) {
                  throw new Error('Unterminated string: "' + text + '"');
               }

               buffer += text.charAt(pos);
               break;
            }
         case '[':
            {
               parts.push(buffer);
               buffer = '';

               var end = text.indexOf(']', pos);
               if (end === -1) {
                  throw new Error('Unterminated replacement at character ' + pos + ': "' + text + '"');
               }

               var replacementIndex = parseInt(text.substring(pos + 1, end), 10);

               parts.push(replacements[replacementIndex]);
               pos = end;

               break;
            }
         default:
            {
               buffer += character;
               break;
            }
      }

      ++pos;
   }

   if (buffer.length > 0) {
      parts.push(buffer);
   }

   return parts;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_object__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FLAT; });
/* unused harmony export COMPACT */
/* harmony export (immutable) */ __webpack_exports__["b"] = createProvider;
/* harmony export (immutable) */ __webpack_exports__["a"] = createCollector;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


/** Use to access the flattened page model, where compositions have been expanded. */
var FLAT = 'FLAT';
/** Use to access the compact page/composition model, where compositions have not been expanded. */
var COMPACT = 'COMPACT';

function createProvider(collector) {

   return {

      /** Start collecting page/composition data. */
      enable: function enable() {
         collector.enable();
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /** Stop collecting page/composition data and clean up. */
      disable: function disable() {
         collector.disable();
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Access the current page information.
       * Everything is returned as a copy, sothis object cannot be used to modify the host application.
       *
       * @return {Object}
       *   the current page information, with the following properties:
       *    - `pageDefinitions` {Object}
       *       both the original as well as the expanded/flattened page model for each available page
       *    - `compositionDefinitions` {Object}
       *       both the original as well as the expanded/flattened composition model for each composition of
       *       any available page
       *    - `widgetDescriptors` {Object}
       *       the widget descriptor for each widget that was referenced
       *    - `pageReference` {String}
       *       the reference for the current page, to lookup page/composition definitions
       */
      current: function current() {
         return collector.current();
      },


      /**
       * Add a listener function to be notified whenever the page information changes.
       * As a side-effect, this also automatically enables collecting page/composition data.
       * Each listener will be delivered its own copy of the page information.
       *
       * @param {Function} _
       *    The listener to add. Will be called with the current page information whenever that changes.
       */
      addListener: function addListener(_) {
         collector.addListener(_);
      },


      /**
       * Remove a page information listener function.
       *
       * @param {Function} _
       *    The listener to remove
       */
      removeListener: function removeListener(_) {
         collector.removeListener(_);
      }
   };
}

function createCollector(configuration, log) {

   var enabled = configuration.get('tooling.enabled');

   var listeners = [];

   var currentPageInfo = {
      pageReference: null,
      pageDefinitions: {},
      compositionDefinitions: {},
      widgetDescriptors: {}
   };

   return {

      // eslint-disable-next-line valid-jsdoc
      /** Collect a widget descriptor. */
      collectWidgetDescriptor: function collectWidgetDescriptor(ref, descriptor) {
         if (!enabled) {
            return;
         }
         currentPageInfo.widgetDescriptors[ref] = descriptor;
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      // eslint-disable-next-line valid-jsdoc
      /**
       * Collect a page definition.
       * The page is deep-copied right away, and may safely be modified by the caller.
       */
      collectPageDefinition: function collectPageDefinition(ref, page, type) {
         if (!enabled) {
            return;
         }
         var definitions = currentPageInfo.pageDefinitions;
         definitions[ref] = definitions[ref] || {
            FLAT: null,
            COMPACT: null
         };
         definitions[ref][type] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(page);
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      // eslint-disable-next-line valid-jsdoc
      /**
       * Collect a composition definition.
       * The composition is deep-copied right away, and may safely be modified by the caller.
       */
      collectCompositionDefinition: function collectCompositionDefinition(pageRef, compositionInstanceId, composition, type) {
         if (!enabled) {
            return;
         }
         var definitions = currentPageInfo.compositionDefinitions;
         var definitionsByInstance = definitions[pageRef] = definitions[pageRef] || {};
         definitionsByInstance[compositionInstanceId] = definitionsByInstance[compositionInstanceId] || {
            FLAT: null,
            COMPACT: null
         };
         definitionsByInstance[compositionInstanceId][type] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(composition);
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      // eslint-disable-next-line valid-jsdoc
      /**
       * Collect information about the current page, and inform all listeners.
       * Each listener will receive its own copy of the page information.
       */
      collectCurrentPage: function collectCurrentPage(ref) {
         if (!enabled) {
            return;
         }
         currentPageInfo.pageReference = ref;
         listeners.forEach(function (listener) {
            listener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(currentPageInfo));
         });
         cleanup();
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      enable: function enable() {
         enabled = true;
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      disable: function disable() {
         enabled = false;
         currentPageInfo.pageReference = null;
         currentPageInfo.widgetDescriptors = {};
         cleanup();
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      addListener: function addListener(listener) {
         enabled = true;
         listeners.push(listener);
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      removeListener: function removeListener(listener) {
         listeners = listeners.filter(function (_) {
            return _ !== listener;
         });
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      current: function current() {
         if (!enabled) {
            log.warn('laxar page tooling: trying to access data, but collecting it was never enabled');
         }
         return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(currentPageInfo);
      }
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function cleanup() {
      var currentRef = currentPageInfo.pageReference;
      ['pageDefinitions', 'compositionDefinitions'].forEach(function (collection) {
         Object.keys(currentPageInfo[collection]).filter(function (ref) {
            return ref !== currentRef;
         }).forEach(function (ref) {
            delete currentPageInfo[collection][ref];
         });
      });
   }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technology", function() { return technology; });
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module for the plain widget adapter factory.
 * In LaxarJS _plain_ widgets are defined as widgets without dependency to a specific view library or
 * framwork, and instead would be implemented using simple DOM access and manipulation.
 *
 * A developer will never call any of the API of this module.
 * The documentation solely exists as a blueprint for custom widget adapters and to explain certain concepts.
 *
 * @module plain_adapter
 */

var technology = 'plain';

var noOp = function noOp() {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Initializes the adapter module and returns a factory for plain widgets.
 * Note that the plain adapter doesn't need all the provided arguments, but they are listed here for
 * documentation purposes.
 *
 * @param {Object} artifacts
 *    the artifacts available to this adapter factory
 * @param {Object} artifacts.widgets
 *    all widgets, that are implemented in the adapter's technology
 * @param {Object} artifacts.controls
 *    all controls, that are implemented in the adapter's technology
 * @param {Object} services
 *    a selection of services adapter implementations may need to fulfill their task
 * @param {AdapterUtilities} services.adapterUtilities
 *    common utilities, that may be useful to a widget adapter
 * @param {ArtifactProvider} services.artifactProvider
 *    the artifact provider instance
 * @param {Configuration} services.configuration
 *    access to the application configuration
 * @param {EventBus} services.globalEventBus
 *    the global event bus.
 *    Note that an adapter should not sent any events by itself.
 *    It may instead be necessary that the adapter makes the event bus globally available to its widgets (for
 *    example like the AngularJS 1.x adapter), or that it registers an inspector
 * @param {Heartbeat} services.heartbeat
 *    the heartbeat instance.
 *    Depending on the underlying view technology (like AngularJS 1.x) it may be important to get notified
 *    when to re-render the user interface.
 *    For that reason an adapter can register a callback at the heartbeat, that gets called after all events
 *    of the current cycle were processed
 * @param {Log} services.log
 *    the global log instance
 * @param {StorageFactory} services.storage
 *    the global storage factory api
 * @param {Tooling} services.tooling
 *    access to the tooling api
 * @param {HTMLElement} anchorElement
 *    the DOM node the laxar application is bootstrapped on.
 *    An adapter should never try to access DOM nodes that are not the `anchorElement` or any of its children,
 *    since they are not under control of this LaxarJS application.
 *
 * @return {PlainAdapterFactory}
 *    the factory for plain widget adapters
 */
function bootstrap(artifacts, _ref) {
   var artifactProvider = _ref.artifactProvider,
       adapterUtilities = _ref.adapterUtilities;


   /**
    * A factory for plain widget adapters.
    *
    * @constructor
    * @name PlainAdapterFactory
    */
   return {
      create: create
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Creates a new adapter instance for the given widget environment.
    *
    * @param {Object} environment
    *    the environment for the widget to create and manage
    * @param {HTMLElement} environment.anchorElement
    *    the DOM node that the widget's DOM fragment should be inserted into
    * @param {String} environment.name
    *    the name of the widget to load, exactly as specified by the widget descriptor
    * @param {widget_services} environment.services
    *    the services for this widget instance
    * @param {Function} environment.provideServices
    *    a function that the adapter must call with a map of all to-be-injected services, just before
    *    creating the controller
    *
    * @return {Object}
    *    the adapter instance
    *
    * @memberof PlainAdapterFactory
    */
   function create(_ref2) {
      var widgetName = _ref2.widgetName,
          anchorElement = _ref2.anchorElement,
          services = _ref2.services,
          provideServices = _ref2.provideServices;


      var onDomAvailable = null;
      var domAttached = false;

      var provider = artifactProvider.forWidget(widgetName);

      return Promise.all([provider.descriptor(), provider.module()]).then(createController, function () {
         return adapterUtilities.unknownWidget({ technology: technology, widgetName: widgetName });
      }).then(function () {
         return {
            domAttachTo: domAttachTo,
            domDetach: domDetach
         };
      });

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function createController(_ref3) {
         var _ref4 = _slicedToArray(_ref3, 2),
             descriptor = _ref4[0],
             module = _ref4[1];

         services.axWithDom = function (callback) {
            if (domAttached) {
               callback(anchorElement);
            }
         };
         var injections = (module.injections || []).map(function (injection) {
            if (!(injection in services)) {
               throw adapterUtilities.unknownInjection({ technology: technology, injection: injection, widgetName: widgetName });
            }
            if (injection === 'axWithDom' && descriptor.integration.type === 'activity') {
               throw adapterUtilities.activityAccessingDom({ technology: technology, injection: injection, widgetName: widgetName });
            }
            return services[injection];
         });

         provideServices(services);

         var _ref5 = module.create.apply(module, _toConsumableArray(injections)) || {};

         var _ref5$onDomAvailable = _ref5.onDomAvailable;
         onDomAvailable = _ref5$onDomAvailable === undefined ? noOp : _ref5$onDomAvailable;
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function domAttachTo(areaElement, htmlTemplate) {
         if (htmlTemplate === null) {
            return;
         }
         anchorElement.innerHTML = htmlTemplate;
         areaElement.appendChild(anchorElement);
         domAttached = true;
         onDomAvailable(anchorElement);
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function domDetach() {
         var parent = anchorElement.parentNode;
         if (parent) {
            parent.removeChild(anchorElement);
         }
         domAttached = false;
      }
   }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_page__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runtime_event_bus__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adapter_utilities__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artifact_provider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loaders_control_loader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loaders_css_loader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loaders_layout_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loaders_page_loader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loaders_theme_loader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loaders_widget_loader__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__timer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__flow_controller__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__flow_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__heartbeat__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pagejs_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__locale_event_manager__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__visibility_event_manager__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__widget_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tooling_tooling__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


























function create(configurationSource, assets) {

   var configurationDefaults = {
      baseHref: undefined,
      eventBusTimeoutMs: 120 * 1000,
      router: {
         query: {
            enabled: false
         }
         // 'pagejs' is not configured here:
         // any deviation from the page.js library defaults must be set by the application
      },
      flow: {
         entryPoint: {
            target: 'default',
            parameters: {}
         }
      },
      i18n: {
         fallback: 'en',
         strict: false,
         locales: {
            'default': 'en'
         }
      },
      logging: {
         levels: {},
         threshold: 'INFO'
      },
      name: 'unnamed',
      theme: 'default',
      storagePrefix: undefined,
      tooling: {
         enabled: false
      }
   };

   var adapterUtilities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__adapter_utilities__["a" /* create */])();

   var configuration = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* create */])(configurationSource, configurationDefaults);

   var browser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__browser__["a" /* create */])();
   var log = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__log__["a" /* create */])(configuration, browser);
   var collectors = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__tooling_tooling__["a" /* createCollectors */])(configuration, log);

   var storage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__storage__["a" /* create */])(configuration, browser);
   var timer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__timer__["a" /* create */])(log, storage);

   var artifactProvider = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__artifact_provider__["a" /* create */])(assets, browser, configuration, log);

   var heartbeat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__heartbeat__["a" /* create */])();

   // MSIE Bug we have to wrap setTimeout to pass assertion
   var timeoutFn = function timeoutFn(f, t) {
      return setTimeout(f, t);
   };
   var globalEventBus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__runtime_event_bus__["a" /* create */])(configuration, log, heartbeat.onNext, timeoutFn);

   var cssLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__loaders_css_loader__["a" /* create */])();
   var themeLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__loaders_theme_loader__["a" /* create */])(artifactProvider, cssLoader);
   var layoutLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__loaders_layout_loader__["a" /* create */])(artifactProvider, cssLoader);
   var pageLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__loaders_page_loader__["a" /* create */])(artifactProvider, collectors.pages);
   var controlLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__loaders_control_loader__["a" /* create */])(artifactProvider, cssLoader);
   var widgetServices = {
      forWidget: function forWidget() {
         __WEBPACK_IMPORTED_MODULE_1__utilities_assert__["a" /* default */].codeIsUnreachable('Using widget services before they are available');
      }
   };
   var widgetLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__loaders_widget_loader__["a" /* create */])(log, artifactProvider, controlLoader, cssLoader, collectors.pages, function () {
      var _widgetServices;

      return (_widgetServices = widgetServices).forWidget.apply(_widgetServices, arguments);
   });

   var localeManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__locale_event_manager__["a" /* create */])(globalEventBus, configuration);
   var visibilityManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__visibility_event_manager__["a" /* create */])(globalEventBus);
   var pageService = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__page_service__["a" /* create */])(globalEventBus, pageLoader, layoutLoader, widgetLoader, localeManager, visibilityManager, collectors.pages, log);

   var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__pagejs_router__["a" /* create */])(__WEBPACK_IMPORTED_MODULE_0_page___default.a, browser, configuration);

   var flowController = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__flow_controller__["a" /* create */])(artifactProvider, configuration, globalEventBus, log, pageService, router, timer);
   var flowService = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__flow_service__["a" /* create */])(flowController);

   var toolingProviders = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__tooling_tooling__["b" /* createProviders */])(collectors);

   widgetServices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__widget_services__["a" /* create */])(artifactProvider, configuration, controlLoader, globalEventBus, flowService, log, heartbeat, pageService, storage, toolingProviders);

   return {
      adapterUtilities: adapterUtilities,
      artifactProvider: artifactProvider,
      configuration: configuration,
      cssLoader: cssLoader,
      flowController: flowController,
      flowService: flowService,
      globalEventBus: globalEventBus,
      heartbeat: heartbeat,
      layoutLoader: layoutLoader,
      log: log,
      pageService: pageService,
      storage: storage,
      themeLoader: themeLoader,
      timer: timer,
      toolingProviders: toolingProviders,
      widgetLoader: widgetLoader
   };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_string__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * The control loader helps to load control assets and implementations.
 *
 * @module control_loader
 */


function create(artifactProvider, cssLoader) {

   var notDeclaredMessage = 'Tried to load control reference [0] without declaration in widget.json.\nDetails: [1]';
   var errorInfoLink = 'https://github.com/LaxarJS/laxar/blob/master/docs/manuals/providing_controls.md#compatibility';

   var aliases = {};
   var modules = {};

   /**
    * @constructor
    * @name ControlLoader
    */
   return {
      load: load,
      provide: provide
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Provides the implementation module of the given control, for manual instantiation by a widget.
    *
    * Because the method must return synchronously, it may only be called for controls that have been
    * loaded before (using {@link #load()})!
    * For controls that are correctly listed in the `controls` section of the `widget.json`, this is ensured
    * by the widget loader.
    *
    * @param {String} controlRef
    *   a valid control reference as used in the `widget.json`
    *
    * @return {*}
    *   the module for the requested control reference
    *
    * @memberof ControlLoader
    */
   function provide(controlRef) {
      var module = modules[aliases[controlRef]];
      if (!module) {
         var message = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_string__["format"])('axControls: ' + notDeclaredMessage, [controlRef, errorInfoLink]);
         throw new Error(message);
      }
      return module;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Fetches the descriptor for a given control reference, and saves it as a side-effect.
    * This is part of the internal API used by the widget loader.
    *
    * This process must be completed before the descriptor or the module for a control can be provided.
    * For this reason, `load` is called by the widget-loader, using information from the `widget.json` file.
    *
    * @param {String} controlRef
    *   a valid control reference as used in the `widget.json`
    *
    * @return {Promise}
    *   a promise for the (fetched or synthesized) control descriptor
    *
    * @memberof ControlLoader
    */
   function load(controlRef) {
      var _artifactProvider$for = artifactProvider.forControl(controlRef),
          assetUrlForTheme = _artifactProvider$for.assetUrlForTheme,
          descriptor = _artifactProvider$for.descriptor,
          module = _artifactProvider$for.module;

      return Promise.all([descriptor(), module()]).then(function (_ref) {
         var _ref2 = _slicedToArray(_ref, 2),
             descriptor = _ref2[0],
             module = _ref2[1];

         var name = descriptor.name;

         aliases[controlRef] = name;
         modules[name] = module;
         return assetUrlForTheme(descriptor.styleSource || 'css/' + name + '.css').then(function (url) {
            if (url) {
               cssLoader.load(url);
            }
         }).then(function () {
            return descriptor;
         });
      });
   }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

function create() {
   var mergedCssFileLoaded = Array.from(document.getElementsByTagName('link')).some(function (link) {
      return link.hasAttribute('data-ax-merged-css');
   });

   if (mergedCssFileLoaded) {
      return {
         load: function load() {}
      };
   }

   var loadedFiles = [];
   return {
      /**
       * If not already loaded, loads the given file into the current page by appending a `link` element to
       * the document's `head` element.
       *
       * @param {String} url
       *    the url of the css file to load. If `null`, loading is skipped
       */
      load: function load(url) {
         if (!loadedFiles.includes(url)) {
            var element = document.createElement('link');
            element.type = 'text/css';
            element.id = 'cssLoaderStyleSheet' + loadedFiles.length;
            element.rel = 'stylesheet';
            element.href = url;
            document.getElementsByTagName('head')[0].appendChild(element);

            loadedFiles.push(url);
         }
      }
   };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

function create(artifactProvider, cssLoader) {
   return {
      load: function load(layoutRef) {
         var _artifactProvider$for = artifactProvider.forLayout(layoutRef),
             descriptor = _artifactProvider$for.descriptor,
             assetForTheme = _artifactProvider$for.assetForTheme,
             assetUrlForTheme = _artifactProvider$for.assetUrlForTheme;

         return descriptor().then(function (_ref) {
            var name = _ref.name,
                templateSource = _ref.templateSource,
                styleSource = _ref.styleSource;
            return Promise.all([assetForTheme(templateSource || name + ".html"), assetUrlForTheme(styleSource || "css/" + name + ".css"), Promise.resolve(name)]);
         }).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                html = _ref3[0],
                cssUrl = _ref3[1],
                name = _ref3[2];

            if (cssUrl) {
               cssLoader.load(cssUrl);
            }
            return { name: name, className: name + "-layout", html: html };
         });
      }
   };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooling_pages__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates and returns a new page loader instance.
 *
 * @param {ArtifactProvider} artifactProvider
 *    an ArtifactProvider to load application assets
 * @param {PagesCollector} pagesCollector
 *    a tooling collector to consume page and composition information
 *
 * @return {PageLoader}
 *    a page loader instance
 *
 * @private
 */
function create(artifactProvider, pagesCollector) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(artifactProvider).isNotNull();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(pagesCollector).isNotNull();

  return { load: load };

  /**
   * Loads a pre-assembled page definition. References to compositions, widgets and layouts have been
   * resolved at build-time. Schema-validation for the page itself and for the contained feature
   * configurations has also already been performed.
   *
   * @param {String} pageRef
   *    the page to load. Usually a path relative to the page base path, with the `.json` suffix omitted
   *
   * @return {Promise}
   *    the result promise
   *
   * @private
   */
  function load(pageRef) {
    var _artifactProvider$for = artifactProvider.forPage(pageRef),
        definition = _artifactProvider$for.definition;

    return definition().then(function (pageDefinition) {
      pagesCollector.collectPageDefinition(pageRef, pageDefinition, __WEBPACK_IMPORTED_MODULE_1__tooling_pages__["c" /* FLAT */]);
      return pageDefinition;
    });
  }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

function create(artifactProvider, cssLoader) {
   return {
      load: function load() {
         var themeProvider = artifactProvider.forTheme();
         themeProvider.descriptor(function (descriptor) {
            return themeProvider.assetUrl(descriptor.styleSource || 'css/theme.css').then(cssLoader.load);
         });
      }
   };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_string__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */



var TYPE_WIDGET = 'widget';
var TYPE_ACTIVITY = 'activity';

var ID_SEPARATOR = '-';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var noOp = function noOp() {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Create a generic widget loader that can load widgets and activities implemented in various technologies
 * by using appropriate adapters.
 *
 * @param {Log} log
 *    log instance to use for technology compatibility warnings
 * @param {ArtifactProvider} artifactProvider
 *    an artifact provider for looking up widget descriptors and assets
 * @param {ControlLoader} controlLoader
 *    helps loading controls and their assets
 * @param {CssLoader} cssLoader
 *    helps loading widget- and control-stylesheets during development
 * @param {PagesCollector} pagesCollector
 *    used for inspection tools
 * @param {Function} servicesForWidget
 *    a factory method to create widget-specific services
 *
 * @return {WidgetLoader}
 *    a new widget loader
 */
function create(log, artifactProvider, controlLoader, cssLoader, pagesCollector, servicesForWidget) {

   var widgetAdapters = {};

   /**
    * @name WidgetLoader
    * @constructor
    */
   return {
      load: load,

      /**
       * Register support for integration technologies.
       *
       * @param {Object} adapters
       *    a map of widget adapters by technology to be registered with this loader
       *
       * @memberof WidgetLoader
       */
      registerWidgetAdapters: function registerWidgetAdapters(adapters) {
         Object.assign(widgetAdapters, adapters);
      }
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Load a widget using an appropriate adapter
    *
    * First, get the given widget's descriptor to validate and instantiate the widget features.
    * Then, instantiate a widget adapter matching the widget's technology. Using the adapter, create the
    * widget controller. The adapter is returned and can be used to attach the widget to the DOM, or to
    * destroy it.
    *
    * @param {Object} widgetConfiguration
    *    a widget instance configuration (as used in page definitions) to instantiate the widget from
    * @param {Object} [optionalOptions]
    *    map of additonal options
    * @param {Function} [optionalOptions.whenServicesAvailable]
    *    a callback that will be invoked just before the controller is set up. It receives an object of named,
    *    widget-specific injections as arguments allowing clients and tools such as laxar-mocks to tap into
    *   the provided services
    *
    * @return {Promise} a promise for a widget adapter, with an already instantiated controller
    *
    * @memberof WidgetLoader
    */
   function load(widgetConfiguration) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$whenServicesAvai = _ref.whenServicesAvailable,
          whenServicesAvailable = _ref$whenServicesAvai === undefined ? noOp : _ref$whenServicesAvai;

      var widgetArtifactProvider = artifactProvider.forWidget(widgetConfiguration.widget);

      return widgetArtifactProvider.descriptor().then(function (descriptor) {
         // The control-descriptors must be loaded prior to controller creation.
         // This allows the widget controller to synchronously instantiate controls.
         return Promise.all((descriptor.controls || []).map(controlLoader.load)).then(function (controlDescriptors) {
            controlDescriptors.forEach(checkTechnologyCompatibility(descriptor));
            return descriptor;
         });
      }).then(function (descriptor) {

         pagesCollector.collectWidgetDescriptor(widgetConfiguration.widget, descriptor);

         var _descriptor$integrati = descriptor.integration,
             type = _descriptor$integrati.type,
             technology = _descriptor$integrati.technology;

         var widgetName = descriptor.name;
         if (type !== TYPE_WIDGET && type !== TYPE_ACTIVITY) {
            throwError(widgetConfiguration, 'Unknown integration type "' + type + '"');
         }

         var features = widgetConfiguration.features || {};
         var anchorElement = document.createElement('DIV');
         anchorElement.className = widgetName;
         anchorElement.id = 'ax' + ID_SEPARATOR + widgetConfiguration.id;

         var adapterFactory = widgetAdapters[technology];
         var _adapterFactory$servi = adapterFactory.serviceDecorators,
             serviceDecorators = _adapterFactory$servi === undefined ? function () {
            return {};
         } : _adapterFactory$servi;

         var _servicesForWidget = servicesForWidget(descriptor, widgetConfiguration, features, serviceDecorators(descriptor, widgetConfiguration)),
             services = _servicesForWidget.services,
             releaseServices = _servicesForWidget.releaseServices;

         var environment = {
            anchorElement: anchorElement,
            services: services,
            widgetName: widgetName,
            provideServices: whenServicesAvailable
         };

         return Promise.resolve(adapterFactory.create(environment)).then(function (adapter) {
            return Object.assign({ destroy: noOp }, adapter);
         }).then(function (adapter) {
            return {
               id: widgetConfiguration.id,
               adapter: adapter,
               destroy: function destroy() {
                  releaseServices();
                  adapter.destroy();
               },

               templatePromise: loadAssets(descriptor, widgetArtifactProvider)
            };
         });
      }, function (err) {
         var message = 'Could not load widget "' + widgetConfiguration.widget + '": ' + err.message;
         log.error(message);
         throw err;
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Locates and loads the widget HTML template for this widget (if any) as well as any CSS stylesheets
    * used by this widget or its controls.
    *
    * @param {Object} widgetDescriptor
    *    a descriptor identifying the widget to load assets for
    * @param {ArtifactProvider} artifactProviderForWidget
    *    the provider with which to lookup or fetch artifact HTML and CSS
    *
    * @return {Promise}
    *    A promise that will be resolved with the contents of any HTML template for this widget, or with
    *    `null` if there is no template (for example, if this is an activity).
    *
    * @private
    */
   function loadAssets(widgetDescriptor, _ref2) {
      var assetForTheme = _ref2.assetForTheme,
          assetUrlForTheme = _ref2.assetUrlForTheme;
      var type = widgetDescriptor.integration.type,
          name = widgetDescriptor.name;

      if (type === TYPE_ACTIVITY) {
         return Promise.resolve(null);
      }

      return Promise.all([assetForTheme(widgetDescriptor.templateSource || name + '.html'), assetUrlForTheme(widgetDescriptor.styleSource || 'css/' + name + '.css')]).then(function (_ref3) {
         var _ref4 = _slicedToArray(_ref3, 2),
             html = _ref4[0],
             cssUrl = _ref4[1];

         if (cssUrl) {
            cssLoader.load(cssUrl);
         }
         return html;
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function checkTechnologyCompatibility(widgetDescriptor) {
      var name = widgetDescriptor.name,
          technology = widgetDescriptor.integration.technology;

      return function (controlDescriptor) {
         var controlTechnology = (controlDescriptor.integration || {}).technology;
         if (controlTechnology === 'plain') {
            // plain is always compatible
            return;
         }

         if (technology !== controlTechnology) {
            log.warn('Incompatible integration technologies: widget [0] ([1]) cannot use control [2] ([3])', name, technology, controlDescriptor.name, controlTechnology);
         }
      };
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function throwError(widgetConfiguration, message) {
   throw new Error(__WEBPACK_IMPORTED_MODULE_0__utilities_string__["format"]('Error loading widget "[widget]" (id: "[id]"): [0]', [message], widgetConfiguration));
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Several factory methods for creating error objects that are useful for almost any adapter.
 *
 * @module adapter_utilities
 */

/**
 * Creates an instance of the adapter utilities.
 *
 * @return {AdapterUtilities}
 *   a collection of methods to create error messages commonly generated by widget adapters
 *
 * @private
 */
function create() {

  /**
   * Provides access to the configuration that was passed during application bootstrapping.
   *
   * A *Configuration* instance provides convenient readonly access to the underlying LaxarJS
   * application bootstrapping configuration. The configuration values are passed to
   * {@link laxar#bootstrap()} on startup (before LaxarJS v2.x, these configuration values were read from
   * `window.laxar`). When using the LaxarJS application template, the configuration values are set in the
   * file `application/application.js` under your project's root directory.
   *
   * @name AdapterUtilities
   * @constructor
   */
  return {

    /**
     * Creates (but does not throw) an error indicating that an activity tried accessing the DOM.
     *
     * @param {String} details.technology
     *    the complaining adapter's technology
     * @param {String} details.widgetName
     *    the canonical name of the activity causing the problem
     *
     * @return {Error}
     *    the error, ready to throw
     */
    activityAccessingDom: function activityAccessingDom(_ref) {
      var technology = _ref.technology,
          widgetName = _ref.widgetName;

      return new Error(technology + " adapter: Trying to access DOM in activity " + widgetName);
    },


    /**
     * Creates (but does not throw) an error indicating that a widget requested an injection that cannot be
     * provided by the adapter.
     *
     * @param {String} details.technology
     *    the complaining adapter's technology
     * @param {String} details.injection
     *    the failing injection
     * @param {String} details.widgetName
     *    the canonical name of the widget causing the problem
     *
     * @return {Error}
     *    the error, ready to throw
     */
    unknownInjection: function unknownInjection(_ref2) {
      var technology = _ref2.technology,
          injection = _ref2.injection,
          widgetName = _ref2.widgetName;

      return new Error(technology + " adapter: " + ("Trying to inject unknown service \"" + injection + " into widget \"" + widgetName + "\""));
    },


    /**
     * Creates (but does not throw) an error indicating that a widget was not registered with the current
     * adapter.
     *
     * @param {String} details.technology
     *    the complaining adapter's technology
     * @param {String} details.widgetName
     *    the canonical name of the missing widget
     *
     * @return {Error}
     *    the error, ready to throw
     */
    unknownWidget: function unknownWidget(_ref3) {
      var technology = _ref3.technology,
          widgetName = _ref3.widgetName;

      return new Error(technology + " adapter: Unknown widget: " + widgetName);
    }
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
* Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */



var NOT_FOUND = { content: null };

function create(artifacts, browser, configuration, log) {

   var baseHref = configuration.get('baseHref');

   var resolve = baseHref ? function (_) {
      return browser.resolve(_, baseHref);
   } : function (_) {
      return _;
   };

   var _ref = function (themeRef) {
      var themeIndex = artifacts.aliases.themes[themeRef];
      var theme = artifacts.themes[themeIndex];
      if (!theme) {
         log.error('The configured theme ' + themeRef + ' is not available.');
         return ['default', 'default.theme'];
      }
      return [themeRef, theme.descriptor.name];
   }(configuration.ensure('theme')),
       _ref2 = _slicedToArray(_ref, 2),
       themeRef = _ref2[0],
       themeName = _ref2[1];

   return {
      forFlow: makeProvider('flows', ['descriptor'], ['definition']),
      forTheme: makeProvider('themes', ['descriptor', 'assets']).bind(null, themeRef),
      forPage: makeProvider('pages', ['descriptor'], ['definition']),
      forLayout: makeProvider('layouts', ['descriptor', 'assets']),
      forWidget: makeProvider('widgets', ['descriptor', 'assets', 'module']),
      forControl: makeProvider('controls', ['descriptor', 'assets', 'module'])
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function makeProvider(bucket) {
      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cloneKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      return function (ref) {
         var api = {};
         var index = artifacts.aliases[bucket][ref];
         var artifactPromise = index === undefined ? Promise.reject(new Error('Artifact ' + ref + ' not found in ' + bucket)) : Promise.resolve(artifacts[bucket][index]);

         ['definition', 'module', 'descriptor'].forEach(function (key) {
            if (cloneKeys.includes(key)) {
               api[key] = function () {
                  return artifactPromise.then(function (_) {
                     return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["deepClone"])(_[key]);
                  });
               };
            } else if (keys.includes(key)) {
               api[key] = function () {
                  return artifactPromise.then(function (_) {
                     return _[key];
                  });
               };
            }
         });

         if (keys.includes('assets')) {
            (function () {
               var lookup = function lookup(name) {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(name).hasType(String).isNotNull();
                  return function (_ref3) {
                     var _ref3$assets = _ref3.assets,
                         assets = _ref3$assets === undefined ? {} : _ref3$assets;

                     return assets[name] || NOT_FOUND;
                  };
               };

               var lookupForTheme = function lookupForTheme(name) {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(name).hasType(String).isNotNull();
                  return function (_ref4) {
                     var _ref4$assets = _ref4.assets,
                         assets = _ref4$assets === undefined ? {} : _ref4$assets;

                     var themedAssets = assets[themeName];
                     if (themedAssets && themedAssets[name]) {
                        return themedAssets[name];
                     }
                     var defaultAssets = assets['default.theme'];
                     if (defaultAssets && defaultAssets[name]) {
                        return defaultAssets[name];
                     }
                     return NOT_FOUND;
                  };
               };

               var provide = function provide(_ref5) {
                  var url = _ref5.url,
                      content = _ref5.content;

                  if (content == null && url) {
                     return browser.fetch(resolve(url)).then(function (_) {
                        return _.text();
                     });
                  }
                  return content || null;
               };

               var provideUrl = function provideUrl(_ref6) {
                  var url = _ref6.url;
                  return url ? resolve(url) : null;
               };

               api.asset = function (name) {
                  return artifactPromise.then(lookup(name)).then(provide);
               };

               api.assetUrl = function (name) {
                  return artifactPromise.then(lookup(name)).then(provideUrl);
               };

               api.assetForTheme = function (name) {
                  return artifactPromise.then(lookupForTheme(name)).then(provide);
               };

               api.assetUrlForTheme = function (name) {
                  return artifactPromise.then(lookupForTheme(name)).then(provideUrl);
               };
            })();
         }

         return api;
      };
   }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the Browser factory.
 *
 * Provides abstractions for browser APIs used internally by LaxarJS, which might need a different
 * implementation in a server-side environment, or for testing.
 * This service is internal to LaxarJS and not available to widgets and activities.
 *
 * @module browser
 */

/**
 * Create a browser abstraction environment.
 *
 * @return {Browser}
 *    a fresh browser instance
 *
 * @private
 */
function create() {

   // for the MSIE `resolve`-workaround, cache the temporary HTML document
   var resolveDoc = void 0;
   var resolveDocBase = void 0;

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * A brower mostly abstracts over the location-related DOM window APIs, and provides a console wrapper.
    * Since it is internal to LaxarJS, only relevant APIs are included.
    *
    * @name Browser
    * @constructor
    */
   return {
      /**
      * Calculates an absolute URL from a (relative) URL, and an optional base URL.
      *
      * If no base URL is given, the `document.baseURI` is used instead. The given base URL may also be
      * relative, in which case it is resolved against the `document.baseURI` before resolving the first URL.
      *
      * For browser environments that do not support the `new URL( url, baseUrl )` constructor for resolving
      * URLs or that do not support `document.baseURI`, fallback mechanisms are used.
      *
      * @param {String} url
      *    the URL to resolve
      * @param {String} baseUrl
      *    the base to resolve from
      *
      * @return {String}
      *    an absolute URL based on the given URL
      *
      * @type {Function}
      * @memberof Browser
      */
      resolve: selectResolver(),

      /**
       * Provides easily mocked access to `window.location`
       *
       * @return {Location}
       *    the current (window's) DOM location
       *
       * @type {Function}
       * @memberof Browser
       */
      location: function location() {
         return window.location;
      },

      /**
       * Provides easily mocked access to `window.fetch` or a suitable polyfill:
       *
       * @param {String|Request} input
       *    the URL to fetch or the request to perform
       * @param {Object} [init]
       *    additional options, described here in more detail:
       *    https://developer.mozilla.org/en-US/docs/Web/API/Globalfetch/fetch#Parameters
       *
       * @return {Promise<Response>}
       *    the resulting promise
       *
       * @type {Function}
       * @memberof Browser
       */
      fetch: function fetch(input, init) {
         return window.fetch(input, init);
      },

      /**
       * Provides easily mocked access to `window.console`:
       *
       * @return {Console}
       *    the browser console promise
       *
       * @type {Function}
       * @memberof Browser
       */
      console: function console() {
         return window.console;
      }
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // perform the exception-based feature-detect only once (for performance, and to be nice to debugger users)
   function selectResolver() {
      try {
         var href = window.location.href;

         return new URL('', href).href === href ? resolveUsingUrl : resolveUsingLink;
      } catch (e) {
         return resolveUsingLink;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // Resolve using the DOM URL API (Chrome, Firefox, Safari, MS Edge)
   function resolveUsingUrl(url, baseUrl) {
      var absoluteBaseUrl = baseUrl ? abs(baseUrl) : document.baseURI || abs('.');
      return new URL(url, absoluteBaseUrl).href;

      function abs(url) {
         return new URL(url, document.baseURI || resolveUsingLink('.'));
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // Resolve using the a-tag fallback (MSIE)
   function resolveUsingLink(url, baseUrl) {
      var absoluteBaseUrl = abs(baseUrl);
      if (!resolveDoc) {
         resolveDoc = document.implementation.createHTMLDocument('');
         resolveDocBase = resolveDoc.createElement('base');
         resolveDoc.head.appendChild(resolveDocBase);
      }
      resolveDocBase.href = absoluteBaseUrl;
      return abs(url, resolveDoc);

      function abs(url) {
         var baseDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

         var a = baseDocument.createElement('a');
         // MSIE does not process empty URLs correctly (http://stackoverflow.com/a/7966835)
         a.href = url || '#';
         return url ? a.href : a.href.slice(0, -1);
      }
   }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the Configuration factory.
 *
 * To use the Configuration in a widget, request the {@link widget_services#axConfiguration axConfiguration}
 * injection. In compatibility mode with LaxarJS v1.x, it is also available under `laxar.configuration`.
 *
 * @module configuration
 */



function create(source, defaults) {

  /**
   * Provides access to the configuration that was passed during application bootstrapping.
   *
   * A *Configuration* instance provides convenient readonly access to the underlying LaxarJS
   * application bootstrapping configuration. The configuration values are passed to
   * {@link laxar#bootstrap()} on startup (before LaxarJS v2.x, these configuration values were read from
   * `window.laxar`). When using the LaxarJS application template, the configuration values are set in the
   * file `application/application.js` under your project's root directory.
   *
   * @name Configuration
   * @constructor
   */
  return { get: get, ensure: ensure };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the configured value for the specified attribute path or `undefined` in case it wasn't
   * configured. If a default value was passed as second argument this is returned instead of `undefined`.
   *
   * Services should use this to get configuration values for which there are universal fallback behaviors.
   *
   * Examples:
   * ```js
   * // ... inject `axConfiguration` as parameter `config` ...
   * config.get( 'logging.threshold' ); // -> 'INFO'
   * config.get( 'iDontExist' ); // -> undefined
   * config.get( 'iDontExist', 42 ); // -> 42
   * ```
   *
   * @param {String} key
   *    a  path (using `.` as separator) to the property in the configuration object
   * @param {*} [optionalDefault]
   *    the value to return if no value was set for `key`
   *
   * @return {*}
   *    either the configured value, `undefined` or `optionalDefault`
   *
   * @memberof Configuration
   */
  function get(key, optionalDefault) {
    var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["path"])(source, key);
    return value !== undefined ? value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["path"])(defaults, key, optionalDefault);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Retrieves a configuration value by key, failing if it is `undefined` or `null`.
   *
   * Services should use this to get configuration values for which no universal default or fallback exists.
   *
   * Examples:
   * ```js
   * // ... inject `axConfiguration` as parameter `config` ...
   * config.ensure( 'logging.threshold' ); // -> 'INFO'
   * config.ensure( 'iDontExist' ); // -> throws
   * ```
   *
   * @param {String} key
   *    a  path (using `.` as separator) to the property in the configuration object
   *
   * @return {*}
   *    the configured value (if `undefined` or `null`, an exception is thrown instead)
   *
   * @memberof Configuration
   */
  function ensure(key) {
    var value = get(key);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(value).isNotNull('Configuration is missing mandatory entry: ' + key);
    return value;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the EventBus factory.
 *
 * To use the EventBus in a widget, request the {@link widget_services#axEventBus axEventBus} injection, or
 * use the `eventBus` property on the {@link widget_services#axContext axContext} injection.
 * In some cases, it may be useful to inject the global EventBus instance backing all widget instances of the
 * same bootstrapping context, by requesting the {@link widget_services#axGlobalEventBus axGlobalEventBus}
 * injection.
 *
 * @module event_bus
 */



var WILDCARD = '*';
var SUBSCRIBER_FIELD = '.';

var TOPIC_SEPARATOR = '.';
var SUB_TOPIC_SEPARATOR = '-';
var REQUEST_MATCHER = /^([^.])([^.]*)Request(\..+)?$/;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Object} configuration
 *    configuration for the event bus instance.
 *    The key `eventBusTimeoutMs` is used to determine the will/did timeout.
 * @param {Object} log
 *    a logger instance for error reporting
 * @param {Function} nextTick
 *    a next tick function like `process.nextTick`, `setImmediate` or AngularJS' `$timeout`
 * @param {Function} timeoutFunction
 *    a timeout function like `window.setTimeout` or AngularJS' `$timeout`
 * @param {Function} [errorHandler]
 *    a custom handler for thrown exceptions. By default exceptions are logged using the global logger.
 *
 * @constructor
 * @private
 */
function EventBus(configuration, log, nextTick, timeoutFunction) {
   var errorHandler = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : createLogErrorHandler(log);

   this.nextTick_ = function (f) {
      return nextTick(f);
   };
   this.timeoutFunction_ = function (f, ms) {
      return timeoutFunction(f, ms);
   };
   this.timeoutMs_ = configuration.ensure('eventBusTimeoutMs');
   this.errorHandler_ = errorHandler;

   this.cycleCounter_ = 0;
   this.eventQueue_ = [];
   this.subscriberTree_ = {};

   this.waitingPromiseResolves_ = [];
   this.currentCycle_ = -1;
   this.inspectors_ = [];
   this.log_ = log;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Adds an inspector, that gets notified when certain actions within the event bus take place. Currently
 * these actions may occur:
 *
 * - `subscribe`: a new subscriber registered for an event
 * - `publish`: an event is published but not yet delivered
 * - `deliver`: an event is actually delivered to a subscriber
 *
 * An inspector receives a map with the following properties:
 *
 * - `action`: one of the actions from above
 * - `source`: the origin of the `action`
 * - `target`: the name of the event subscriber (`deliver` action only)
 * - `event`: the full name of the event or the subscribed event (`subscribe` action only)
 * - `eventObject`: the published event item (`publish` action only)
 * - `subscribedTo`: the event, possibly with omissions, the subscriber subscribed to (`deliver` action only)
 * - `cycleId`: the id of the event cycle
 *
 * The function returned by this method can be called to remove the inspector again and prevent it from
 * being called for future event bus actions.
 *
 * @param {Function} inspector
 *    the inspector function to add
 *
 * @return {Function}
 *    a function to remove the inspector
 */
EventBus.prototype.addInspector = function (inspector) {
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(inspector).hasType(Function).isNotNull();

   this.inspectors_.push(inspector);
   return function () {
      var index = this.inspectors_.indexOf(inspector);
      if (index !== -1) {
         this.inspectors_.splice(index, 1);
      }
   }.bind(this);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Subscribes to an event by name. An event name consists of so called *topics*, where each topic is
 * separated from another by dots (`.`). If a topic is omitted, this is treated as a wildcard. Note that
 * two dots in the middle or one dot at the beginning of an event name must remain, whereas a dot at the
 * end may be omitted. As such every event name has an intrinsic wildcard at its end. For example these are
 * all valid event names:
 *
 * - `some.event`: matches `some.event`, `some.event.again`
 * - `.event`: matches `some.event`, `any.event`, `any.event.again`
 * - `some..event`: matches `some.fancy.event`, `some.special.event`
 *
 * Additionally *subtopics* are supported. Subtopics are fragments of a topic, separated from another by
 * simple dashes (`-`). Here only suffixes of subtopics may be omitted when subscribing. Thus subscribing
 * to `some.event` would match an event published with name `some.event-again` or even
 * `some.event-another.again`.
 *
 * **The subscriber function**
 *
 * When an event is delivered, the subscriber function receives two arguments:
 * The first one is the event object as it was published. If `optionalOptions.clone` yields `true` this is a
 * simple deep copy of the object (note that only properties passing a JSON-(de)serialization remain). If
 * `false` the object is frozen using `Object.freeze` recursively.
 *
 * The second one is a meta object with these properties:
 *
 * - `name`: The name of the event as it actually was published (i.e. without wildcards).
 * - `cycleId`: The id of the cycle the event was published (and delivered) in
 * - `sender`: The id of the event sender, may be `null`.
 * - `initiator`: The id of the initiator of the cycle. Currently not implemented, thus always `null`.
 * - `options`: The options that were passed to `publish` or `publishAndGatherReplies` respectively.
 *
 * @param {String} eventName
 *    the name of the event to subscribe to
 * @param {Function} subscriber
 *    a function to call whenever an event matching `eventName` is published
 * @param {Object} [optionalOptions]
 *    additional options for the subscribe action
 * @param {String} [optionalOptions.subscriber=null]
 *    the id of the subscriber. Default is `null`
 * @param {Boolean} [optionalOptions.clone=true]
 *    if `false` the event will be send frozen to the subscriber, otherwise it will receive a deep copy.
 *    Default is `true`
 *
 * @return {Function}
 *    a function that when called unsubscribes from this subscription again
 */
EventBus.prototype.subscribe = function (eventName, subscriber, optionalOptions) {
   var _this = this;

   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(eventName).hasType(String).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(subscriber).hasType(Function).isNotNull();

   var options = __WEBPACK_IMPORTED_MODULE_1__utilities_object__["options"](optionalOptions, {
      subscriber: null,
      clone: true
   });
   var subscriberItem = {
      name: eventName,
      subscriber: subscriber,
      subscriberName: options.subscriber,
      subscriptionWeight: calculateSubscriptionWeight(eventName),
      options: options
   };

   var eventNameParts = eventName.split(TOPIC_SEPARATOR);
   var node = eventNameParts.reduce(function (node, eventNamePart) {
      var bucketName = eventNamePart || WILDCARD;
      if (!(bucketName in node)) {
         node[bucketName] = {};
      }
      return node[bucketName];
   }, this.subscriberTree_);

   if (!(SUBSCRIBER_FIELD in node)) {
      node[SUBSCRIBER_FIELD] = [];
   }
   node[SUBSCRIBER_FIELD].push(subscriberItem);

   notifyInspectors(this, {
      action: 'subscribe',
      source: options.subscriber,
      target: '-',
      event: eventName,
      cycleId: this.currentCycle_
   });

   return function () {
      unsubscribeRecursively(_this, _this.subscriberTree_, eventNameParts, subscriber);
   };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Asynchronously publishes an event on the event bus. The returned promise will be enqueued as soon as this
 * event is delivered and, if during delivery a new event was enqueued, resolved after that new event was
 * delivered. If no new event is published during delivery of this event, the promise is instantly resolved.
 * To make this a bit clearer, lets assume we publish and thus enqueue an event at time `t`. It then will
 * be delivered at time `t+1`. At that precise moment the promise is enqueued to be resolved soon. We then
 * distinguish between two cases:
 *
 * - At time `t+1` no subscriber publishes (i.e. enqueues) an event: Thus there is no event in the same
 *   cycle and the promise is also resolved at time `t+1`.
 * - At least one subscriber publishes an event at time `t+1`: The promise is then scheduled to be resolved
 *   as soon as this event is delivered at time `t+2`.
 *
 * The implication of this is the following:
 *
 * We have two collaborators, A and B. A listens to event b and B listens to event a.
 * Whenever A publishes a and B than instantly (i.e. in the same event cycle of the JavaScript runtime
 * where its subscriber function was called) *responds* by publishing b, b arrives at the subscriber
 * function of A, before the promise of A's publish action is resolved.
 * It is hence possible to observe possible effects of an event sent by oneself, under the conditions
 * mentioned above. Practically this is used internally for the implementation of
 * {@link #EventBus.publishAndGatherReplies()}.
 *
 * @param {String} eventName
 *    the name of the event to publish
 * @param {Object} [optionalEvent]
 *    the event to publish
 * @param {Object} [optionalOptions]
 *    additional options for the publish action
 * @param {String} [optionalOptions.sender=null]
 *    the id of the event sender. Default is `null`
 * @param {Boolean} [optionalOptions.deliverToSender=true]
 *    if `false` the event will not be send to subscribers whose subscriber name matches
 *    `optionalOptions.sender`, else all subscribers will receive the event. Default is `true`
 *
 * @return {Promise}
  *   the delivery promise
 */
EventBus.prototype.publish = function (eventName) {
   var _this2 = this;

   var optionalEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   var optionalOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(eventName).hasType(String).isNotNull();

   var event = JSON.parse(JSON.stringify(optionalEvent));
   var options = Object.assign({ deliverToSender: true, sender: null }, optionalOptions);

   return new Promise(function (resolve) {
      var eventItem = {
         meta: {
            name: eventName,
            cycleId: _this2.currentCycle_ > -1 ? _this2.currentCycle_ : _this2.cycleCounter_++,
            sender: options.sender,
            initiator: null,
            options: options
         },
         event: event,
         resolvePublish: resolve
      };
      enqueueEvent(_this2, eventItem);

      notifyInspectors(_this2, {
         action: 'publish',
         source: options.sender,
         target: '-',
         event: eventName,
         eventObject: event,
         cycleId: eventItem.meta.cycleId
      });
   });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Publishes an event that follows the *request-will-did pattern* and awaits all replies. This pattern has
 * evolved over time and is of great use when handling the asynchronous nature of event bus events.
 *
 * Certain rules need to be fulfilled: First the initiator needs to call this method with an event whose
 * name has the suffix `Request`, e.g. `takeActionRequest`. All collaborators that want to react to this
 * event then either do so in the same event cycle by sending a `didTakeAction` event or announce that they
 * will do something asynchronously by publishing a `willTakeAction` event. In the latter case they need to
 * broadcast the fulfillment of their action some time later by sending a `didTakeAction` event. Note that for
 * both events the same sender name needs to be given. Otherwise they cannot be mapped and the event bus
 * doesn't know if all asynchronous replies were already received.
 *
 * Additionally a timer is started using either the globally configured `pendingDidTimeout` ms value or the
 * value provided as option to this method. If that timer expires before all `did*` events to all given
 * `will*` events were received, the error handler is called to handle the incident and the promise is
 * rejected with all responses received up to now.
 *
 * @param {String} eventName
 *    the name of the event to publish
 * @param {Object} [optionalEvent]
 *    the event to publish
 * @param {Object} [optionalOptions]
 *    additional options for the publish action
 * @param {String} [optionalOptions.sender=null]
 *    the id of the event sender. Default is `null`
 * @param {Number} [optionalOptions.pendingDidTimeout]
 *    the timeout in milliseconds for pending did* events. Default is the timeout option used when the
 *    event bus instance was created
 *
 * @return {Promise}
 *   the delivery promise. It receives a list of all collected `did*` events and according meta information
 */
EventBus.prototype.publishAndGatherReplies = function (eventName, optionalEvent, optionalOptions) {
   var _this3 = this;

   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(eventName).hasType(String).isNotNull();

   var matches = REQUEST_MATCHER.exec(eventName);
   __WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */].state(!!matches, 'Expected eventName to end with "Request" but got ' + eventName);

   var options = Object.assign({ pendingDidTimeout: this.timeoutMs_ }, optionalOptions);

   var eventNameSuffix = matches[1].toUpperCase() + matches[2];
   if (matches[3]) {
      eventNameSuffix += matches[3];
   }
   var deferred = {};
   deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
   });
   var willWaitingForDid = [];
   var givenDidResponses = [];
   var cycleFinished = false;

   var unsubscribeWillCollector = this.subscribe('will' + eventNameSuffix, function (event, meta) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(meta.sender).hasType(String).isNotNull('A response with will to a request-event must contain a sender.');

      willWaitingForDid.push(meta.sender);
   }, { subscriber: options.sender });

   var unsubscribeDidCollector = this.subscribe('did' + eventNameSuffix, function (event, meta) {
      givenDidResponses.push({ event: event, meta: meta });
      var senderIndex = void 0;
      do {
         senderIndex = willWaitingForDid.indexOf(meta.sender);
         if (senderIndex !== -1) {
            willWaitingForDid.splice(senderIndex, 1);
         }
      } while (senderIndex !== -1);

      if (willWaitingForDid.length === 0 && cycleFinished) {
         finish();
      }
   }, { subscriber: options.sender });

   var timeoutRef = this.timeoutFunction_(function () {
      if (willWaitingForDid.length > 0) {
         var message = 'Timeout while waiting for pending did' + eventNameSuffix + ' on ' + eventName + '.';
         _this3.errorHandler_(message, {
            'Sender': options.sender,
            'After ms timeout': options.pendingDidTimeout,
            'Responses missing from': willWaitingForDid.join(', ')
         });
         finish(true);
      }
   }, options.pendingDidTimeout);

   this.publish(eventName, optionalEvent, options).then(function () {
      unsubscribeWillCollector();
      if (willWaitingForDid.length === 0) {
         // either there was no will or all did responses were already given in the same cycle as the will
         finish();
         return;
      }
      cycleFinished = true;
   });

   function finish(wasCanceled) {
      clearTimeout(timeoutRef);
      unsubscribeDidCollector();
      (wasCanceled ? deferred.reject : deferred.resolve)(givenDidResponses);
   }

   return deferred.promise;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function enqueueEvent(self, eventItem) {
   if (self.eventQueue_.length === 0) {
      self.nextTick_(function () {
         var queuedEvents = self.eventQueue_;

         self.eventQueue_ = [];

         processWaitingPublishPromises(self, processQueue(self, queuedEvents));
      });
   }
   self.eventQueue_.push(eventItem);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function processQueue(self, queuedEvents) {
   return queuedEvents.map(function (eventItem) {
      var meta = eventItem.meta;
      self.currentCycle_ = meta.cycleId;

      var subscribers = findSubscribers(self, meta.name);
      if (subscribers.length === 0) {
         self.currentCycle_ = -1;
         return eventItem.resolvePublish;
      }

      var serializedEvent = null;
      if (subscribers.length > 1) {
         serializedEvent = JSON.stringify(eventItem.event);
      }

      var senderName = meta.sender;
      var options = meta.options;

      subscribers.forEach(function (subscriberItem) {
         var subscriberName = subscriberItem.subscriberName;
         if (!options.deliverToSender && senderName && senderName === subscriberName) {
            return;
         }

         try {
            var event = void 0;
            if (subscriberItem.options.clone) {
               event = serializedEvent ? JSON.parse(serializedEvent) : eventItem.event;
            } else {
               event = eventItem.event;
            }
            subscriberItem.subscriber(event, meta);
         } catch (e) {
            var message = 'error while calling subscriber "' + subscriberName + '"' + (' for event ' + meta.name) + (' published by "' + senderName + '" (subscribed to: ' + subscriberItem.name + ')');
            self.errorHandler_(message, {
               'Exception': e,
               'Published event': eventItem.event,
               'Event meta information': meta,
               'Caused by Subscriber': subscriberItem
            });
         }

         notifyInspectors(self, {
            action: 'deliver',
            source: senderName,
            target: subscriberName,
            event: meta.name,
            eventObject: eventItem.event,
            subscribedTo: subscriberItem.name,
            cycleId: meta.cycleId
         });
      });

      self.currentCycle_ = -1;

      return eventItem.resolvePublish;
   });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function processWaitingPublishPromises(self, newPromiseResolves) {
   var waitingResolves = self.waitingPromiseResolves_;
   self.waitingPromiseResolves_ = newPromiseResolves;

   waitingResolves.forEach(function (resolve) {
      return resolve();
   });

   if (self.eventQueue_.length === 0) {
      // nothing was queued by any subscriber. The publishers can instantly be notified of delivery.
      newPromiseResolves.forEach(function (resolve) {
         return resolve();
      });
      self.waitingPromiseResolves_ = [];
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function unsubscribeRecursively(self, node, parts, subscriber) {
   if (parts.length === 0 && Array.isArray(node[SUBSCRIBER_FIELD])) {
      var subscribers = node[SUBSCRIBER_FIELD];
      for (var i = subscribers.length - 1; i >= 0; --i) {
         if (subscribers[i].subscriber === subscriber) {
            notifyInspectors(self, {
               action: 'unsubscribe',
               source: subscribers[i].subscriberName,
               target: '-',
               event: subscribers[i].name,
               cycleId: self.currentCycle_
            });
            subscribers.splice(i, 1);
         }
      }
   }

   var _parts = _toArray(parts),
       part = _parts[0],
       rest = _parts.slice(1);

   var searchPart = part || WILDCARD;
   if (searchPart in node) {
      unsubscribeRecursively(self, node[searchPart], rest, subscriber);
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findSubscribers(self, eventName) {
   var subscribers = [];
   var parts = eventName.split(TOPIC_SEPARATOR);
   var node = self.subscriberTree_;

   findSubscribersRecursively(node, parts, subscribers);
   subscribers.sort(function (a, b) {
      var aWeight = a.subscriptionWeight;
      var bWeight = b.subscriptionWeight;
      if (aWeight[0] === bWeight[0]) {
         return bWeight[1] - aWeight[1];
      }

      return bWeight[0] - aWeight[0];
   });

   return subscribers;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findSubscribersRecursively(node, parts, subscribers) {
   if (Array.isArray(node[SUBSCRIBER_FIELD])) {
      subscribers.push.apply(subscribers, _toConsumableArray(node[SUBSCRIBER_FIELD]));
   }

   if (parts.length === 0) {
      return;
   }

   var _parts2 = _toArray(parts),
       part = _parts2[0],
       remainder = _parts2.slice(1);

   if (part.indexOf(SUB_TOPIC_SEPARATOR) !== -1) {
      var index = part.length;
      var currentPart = part;
      do {
         currentPart = currentPart.substring(0, index);
         if (currentPart in node) {
            findSubscribersRecursively(node[currentPart], remainder, subscribers);
         }
         index = currentPart.lastIndexOf(SUB_TOPIC_SEPARATOR);
      } while (index !== -1);
   } else if (part in node) {
      findSubscribersRecursively(node[part], remainder, subscribers);
   }

   if (WILDCARD in node) {
      findSubscribersRecursively(node[WILDCARD], remainder, subscribers);
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateSubscriptionWeight(eventName) {
   var parts = eventName.split(TOPIC_SEPARATOR);
   var weight = [0, 0];
   parts.forEach(function (part) {
      if (part.length > 0) {
         weight[0]++;
         weight[1] += part.split(SUB_TOPIC_SEPARATOR).length - 1;
      }
   });
   return weight;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function notifyInspectors(self, infoObject) {
   self.inspectors_.forEach(function (inspector) {
      inspector(infoObject);
   });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createLogErrorHandler(log) {
   return function (message, optionalErrorInformation) {
      var sensitiveData = ['Published event'];

      log.error('EventBus: ' + message);

      if (optionalErrorInformation) {
         __WEBPACK_IMPORTED_MODULE_1__utilities_object__["forEach"](optionalErrorInformation, function (info, title) {
            var formatString = '   - [0]: [1:%o]';
            if (sensitiveData.indexOf(title) !== -1) {
               formatString = '   - [0]: [1:%o:anonymize]';
            }

            log.error(formatString, title, info);

            if (info instanceof Error && info.stack) {
               log.error('   - Stacktrace: ' + info.stack);
            }
         });
      }
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates and returns a new event bus instance using the given configuration.
 *
 * @param {Object} configuration
 *    configuration for the event bus instance.
 *    The key `eventBusTimeoutMs` is used to determine the will/did timeout.
 * @param {Object} log
 *    a logger to use for error reporting
 * @param {Function} nextTick
 *    a next tick function like `process.nextTick` or AngularJS' `$timeout`
 * @param {Function} timeoutFunction
 *    a timeout function like `window.setTimeout` or AngularJS' `$timeout`
 * @param {Function} [errorHandler]
 *    a custom handler for thrown exceptions. By default exceptions are logged using the global logger.
 *
 * @return {EventBus}
 *    an event bus instance
 *
 * @private
 */
function create(configuration, log, nextTick, timeoutFunction, errorHandler) {
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(configuration.ensure).hasType(Function).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(log.error).hasType(Function).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(nextTick).hasType(Function).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(timeoutFunction).hasType(Function).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(errorHandler).hasType(Function);

   return new EventBus(configuration, log, nextTick, timeoutFunction, errorHandler);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* unused harmony export TARGET_SELF */
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the FlowController factory.
 *
 * This service is internal to LaxarJS and not available to widgets and activities.
 *
 * @module flow_controller
 * @private
 */




var SESSION_KEY_TIMER = 'navigationTimer';
var DEFAULT_PLACE = '';

var TARGET_SELF = '_self';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates and returns a new flow controller from its dependencies.
 *
 * @param {ArtifactProvider} artifactProvider
 *    an artifact provider, needed to fetch the flow definition
 * @param {Configuration} configuration
 *    a configuration instance, to determine the name of the flow to load
 * @param {EventBus} eventBus
 *    an event bus instance, used to subscribe to navigateRequest events, and to publish will/did-responses
 * @param {Logger} log
 *    a logger that is used for reporting flow validation and navigation problems
 * @param {PageService} pageService
 *    the page service to use for actual page transitions (setup, teardown) during navigation
 * @param {Router} router
 *    router to register places with, and to use for URL construction
 * @param {Timer} timer
 *    timer to use for measuring page transitions
 *
 * @return {FlowController}
 *    a flow controller instance
 */
function create(artifactProvider, configuration, eventBus, log, pageService, router, timer) {

   var COLLABORATOR_ID = 'AxFlowController';
   var availablePlaces = {};

   var activeParameters = {};
   var activePlace = void 0;
   var navigationInProgress = false;
   var requestedTarget = null;

   eventBus.subscribe('navigateRequest', function (_ref) {
      var target = _ref.target,
          data = _ref.data;

      if (navigationInProgress) {
         return;
      }
      requestedTarget = target;
      navigateToTarget(target, Object.assign({}, activeParameters, data));
   }, { subscriber: COLLABORATOR_ID });

   /**
    * A flow controller can load a flow definition, setup routes, and allows to navigate between places. The
    * flow controller handles router-initiated navigation as well as `navigateRequest` events and triggers
    * instantiation/destruction of the associated pages.
    *
    * @name FlowController
    * @constructor
    */
   return {
      constructAbsoluteUrl: constructAbsoluteUrl,
      loadFlow: loadFlow
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Starts loading the configured flow definition and configures the router.
    *
    * @return {Promise}
    *    a promise that is resolved when all routes have been registered
    */
   function loadFlow() {
      var flowName = configuration.ensure('flow.name');
      return artifactProvider.forFlow(flowName).definition().then(function (flow) {
         return router.registerRoutes(assembleRoutes(flow), createFallbackHandler(flow));
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Get the place definition for a given target or place. If the provided identifier is a target of the
    * current place, the definition of the referenced place is returned. Otherwise, the current place is
    * returned.
    *
    * @param {String} targetOrPlaceId
    *    a string identifying the target or place to obtain a definition for
    * @param {Object} place
    *    the corresponding place definition
    *
    * @return {Object}
    *    a place definition with `targets` and `patterns` as specified in the flow definition, plus `id`
    */
   function placeForTarget(targetOrPlaceId) {
      var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activePlace;

      var placeId = place ? place.targets[targetOrPlaceId] : null;
      if (placeId == null) {
         placeId = targetOrPlaceId;
      }
      __WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */].state(placeId in availablePlaces, 'Unknown target or place "' + targetOrPlaceId + '". Current place: "' + place.id + '"');
      return availablePlaces[placeId];
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Constructs an absolute URL to the given target or place using the given parameters. If a target is
    * given as first argument, it is resolved using the currently active place.
    *
    * @param {String} targetOrPlace
    *    the target or place ID to construct a URL for
    * @param {Object} [optionalParameters]
    *    optional map of place parameters. Missing parameters are filled base on the parameters that were
    *    passed to the currently active place
    *
    * @return {String}
    *    the generated absolute URL
    *
    * @memberof FlowService
    */
   function constructAbsoluteUrl(targetOrPlace, optionalParameters) {
      var place = placeForTarget(targetOrPlace);
      return router.constructAbsoluteUrl(place.patterns, withoutRedundantParameters(place, optionalParameters));
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function navigateToTarget(targetOrPlaceId, parameters, redirectFrom) {
      var place = placeForTarget(targetOrPlaceId, redirectFrom);
      router.navigateTo(place.patterns, withoutRedundantParameters(place, parameters), !!redirectFrom);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function navigateToPath(path, redirectFrom) {
      router.navigateToPath(path, !!redirectFrom);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function handleRouteChange(place, routerParameters) {
      var parameters = Object.assign({}, place.defaultParameters, routerParameters);
      if (activePlace && place.id === activePlace.id && equals(parameters, activeParameters)) {
         navigationInProgress = false;
         log.trace('Canceling navigation to "' + place.id + '". Already there with same parameters.');
         return Promise.resolve();
      }
      if (navigationInProgress) {
         log.trace('Canceling navigation to "' + place.id + '". Navigation already in progress.');
         return Promise.resolve();
      }
      navigationInProgress = true;

      var fromPlace = activePlace ? activePlace.targets[TARGET_SELF] : '';
      var navigationTimer = timer.started({
         label: 'navigation (' + fromPlace + ' -> ' + place.targets[TARGET_SELF] + ')',
         persistenceKey: SESSION_KEY_TIMER
      });

      var event = {
         target: requestedTarget || place.id,
         place: place.id,
         data: parameters
      };
      requestedTarget = null;

      var options = { sender: COLLABORATOR_ID };
      return eventBus.publish('willNavigate.' + event.target, event, options).then(function () {
         if (activePlace && place.id === activePlace.id) {
            activeParameters = parameters;
            return Promise.resolve();
         }

         return pageService.controller().tearDownPage().then(function () {
            log.setTag('PLCE', place.id);
            activeParameters = parameters;
            activePlace = place;
            return pageService.controller().setupPage(place.page);
         });
      }).then(function () {
         navigationInProgress = false;
         navigationTimer.stopAndLog('didNavigate');
         return eventBus.publish('didNavigate.' + event.target, event, options);
      }).catch(function (err) {
         log.error('Failed to navigate to place "' + place.id + '". Error: [0]\n', err.stack);
         return Promise.reject(err);
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createFallbackHandler(flow) {
      var redirectOn = flow.redirectOn,
          places = flow.places;

      return function (path) {
         log.warn('Received request for unknown route "' + path + '".');
         if (redirectOn.unknownPlace in places) {
            log.trace('- Redirecting to error place ("' + redirectOn.unknownPlace + '").');
            handleRouteChange(places[redirectOn.unknownPlace], {});
         } else if (DEFAULT_PLACE in places) {
            log.trace('- Redirecting to default place ("' + DEFAULT_PLACE + '").');
            handleRouteChange(places[DEFAULT_PLACE], {});
         } else {
            log.trace('- Got no unknownPlace redirect and no default place. Doing nothing.');
         }
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function assembleRoutes(_ref2) {
      var places = _ref2.places;

      var routeMap = {};
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["forEach"])(places, function (place, placeId) {
         place.id = placeId;
         place.patterns = place.patterns || ['/' + placeId];
         __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["setPath"])(place, 'targets.' + TARGET_SELF, place.id);

         var id = place.id,
             patterns = place.patterns,
             page = place.page,
             redirectTo = place.redirectTo,
             redirectToPath = place.redirectToPath;

         availablePlaces[id] = place;

         if (redirectTo) {
            patterns.forEach(function (pattern) {
               routeMap[pattern] = function (parameters) {
                  navigateToTarget(redirectTo, parameters, place);
               };
            });
            return;
         }

         if (redirectToPath) {
            patterns.forEach(function (pattern) {
               routeMap[pattern] = function () {
                  navigateToPath(redirectToPath, place);
               };
            });
            return;
         }

         if (!page) {
            log.error('flow: invalid empty place: ' + id);
            return;
         }

         patterns.forEach(function (pattern) {
            routeMap[pattern] = function (parameters) {
               handleRouteChange(place, parameters);
            };
         });
      });
      return routeMap;
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function withoutRedundantParameters(place, parameters) {
   var _place$defaultParamet = place.defaultParameters,
       defaultParameters = _place$defaultParamet === undefined ? {} : _place$defaultParamet;

   var remainingParameters = {};
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["forEach"])(parameters, function (value, key) {
      if (!(key in defaultParameters) || defaultParameters[key] !== value) {
         remainingParameters[key] = value;
      }
   });
   return remainingParameters;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function equals(a, b) {
   var aKeys = Object.keys(a);
   var bKeys = Object.keys(b);
   return aKeys.length === bKeys.length && aKeys.every(function (key) {
      return key in b && a[key] === b[key];
   });
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the FlowService factory.
 *
 * To access the FlowService in a widget, request the {@link widget_services#axFlowService axFlowService}
 * injection.
 *
 * @module flow_service
 */

/**
 * Creates a flow service  backed by the given flow controller.
 *
 * @param {FlowController} flowController
 *    a flow controller, needed to respect default parameter values when generating URLs
 *
 * @return {FlowService}
 *    a flow service instance
 *
 * @private
 */
function create(flowController) {

  /**
   * Allows widgets to create valid URLs without knowledge about the current place, its routing patterns, or
   * about the actual routing implementation.
   *
   * @name FlowService
   * @constructor
   */
  return {
    constructAbsoluteUrl: constructAbsoluteUrl
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Constructs an absolute URL to the given target or place using the given parameters. If a target is
   * given as first argument, it is resolved using the currently active place.
   *
   * @param {String} targetOrPlace
   *    the target or place ID to construct a URL for
   * @param {Object} [optionalParameters]
   *    optional map of place parameters. Missing parameters are filled base on the parameters that were
   *    passed to the currently active place
   *
   * @return {String}
   *    the generated absolute URL
   *
   * @memberof FlowService
   */
  function constructAbsoluteUrl(targetOrPlace) {
    var optionalParameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return flowController.constructAbsoluteUrl(targetOrPlace, optionalParameters);
  }
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Module providing the Heartbeat factory.
 *
 * To use the Heartbeat service in a widget, request the {@link widget_services#axHeartbeat axHeartbeat}
 * injection.
 *
 * @module heartbeat
 */

// Workaround: The angular adapter ties Promise resolution to $rootScope.$digest.
// However, for application performance and ease of testing, we avoid this coupling here.
// We just want to asynchronously execute a callback as quickly as possible.
var NativePromise = window.Promise;

/**
 * Creates a heartbeat backed by the given scheduler.
 *
 * @param {Function} [customNextTick]
 *    a function that takes a callback, and will asynchronously execute that callback as soon as possible,
 *    but asynchronously (that is, after the calling execution stack has finished running).
 *    If omitted, the callback is scheduled using `Promise.resolve().then( ... )`.
 * @param {Function} [customTimeout]
 *    an optional replacement for `window.setTimeout`, used to run coalesced callbacks in a second stage
 *    after the immediately scheduled operation.
 *    This is intended for callbacks that rely on render state (e.g. the angular visibility service).
 *
 * @return {Heartbeat}
 *    a heartbeat instance
 *
 * @private
 */
function create(customNextTick, customTimeout) {

   // "as-soon-as-possible", preferably before rendering
   var nextTick = customNextTick || function (f) {
      NativePromise.resolve().then(f);
   };
   // "as-soon-as-possible", but after rendering of any previous nextTick changes
   var timeout = customTimeout || function (f) {
      setTimeout(f, 0);
   };

   var heartbeatListeners = [];
   var nextQueue = [];
   var beforeQueue = [];
   var afterQueue = [];

   var beatRequested = false;

   /**
    * Scheduler for tasks that possibly synchronously trigger creation of new tasks, that need some common
    * work to be done before or after all of these tasks (and all tasks scheduled in the meantime) are
    * finished.
    *
    * An example would be model-manipulating operations in an application using AngularJS, that need to run
    * `$rootScope.$apply` after all operations are done, but only *once*.
    *
    * @name Heartbeat
    * @constructor
    */
   return {
      registerHeartbeatListener: registerHeartbeatListener,
      onBeforeNext: onBeforeNext,
      onNext: onNext,
      onAfterNext: onAfterNext
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Registers a listener, that is called whenever a heartbeat occurs.
    * It is called after the before and next queues were processed, but before working off the after queue has
    * started.
    * In contrast to the `on*` methods, listeners are not removed after a tick, but will be called again each
    * time a heartbeat occurs.
    * Instead this method returns a function to manually remove the listener again.
    *
    * @param  {Function} listener
    *    the listener to register
    *
    * @return {Function}
    *    a function to remove the listener again
    *
    * @memberof Heartbeat
    */
   function registerHeartbeatListener(listener) {
      heartbeatListeners.push(listener);

      return function () {
         var index = void 0;
         while ((index = heartbeatListeners.indexOf(listener)) !== -1) {
            heartbeatListeners.splice(index, 1);
         }
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Schedules a function for the next heartbeat.
    * If no heartbeat was triggered yet, it will be requested now.
    *
    * @param {Function} func
    *    a function to schedule for the next tick
    *
    * @memberof Heartbeat
    */
   function onNext(func) {
      if (!beatRequested) {
         beatRequested = true;
         nextTick(function () {
            while (beforeQueue.length) {
               beforeQueue.shift()();
            }
            while (nextQueue.length) {
               nextQueue.shift()();
            }
            heartbeatListeners.forEach(function (listener) {
               return listener();
            });
            if (afterQueue.length) {
               // run after-queue once all directly resolvable promises are through.
               timeout(function () {
                  // Ensure that no further event bus deliveries were scheduled
                  if (!beatRequested) {
                     while (afterQueue.length) {
                        afterQueue.shift()();
                     }
                  }
               });
            }
            beatRequested = false;
         });
      }
      nextQueue.push(func);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Schedules a function to be called before the next heartbeat occurs.
    * Note that `func` may never be called, if there is no next heartbeat since calling this function won't
    * trigger a new heartbeat.
    *
    * @param {Function} func
    *    a function to call before the next heartbeat
    *
    * @memberof Heartbeat
    */
   function onBeforeNext(func) {
      beforeQueue.push(func);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Schedules a function to be called after the next heartbeat occured.
    * Note that `func` may never be called, if there is no next heartbeat since calling this function won't
    * trigger a new heartbeat.
    *
    * @param {Function} func
    *    a function to call after the next heartbeat
    *
    * @memberof Heartbeat
    */
   function onAfterNext(func) {
      afterQueue.push(func);
   }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_helper__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


function create(areaHelper, className, widget) {

   var exports = {
      createController: createController,
      domAttachTo: domAttachTo,
      domDetach: domDetach,
      destroy: destroy
   };
   var layoutNode = void 0;
   var deregister = function deregister() {};

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createController() {}
   // noop


   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function domAttachTo(areaElement, htmlTemplate) {
      if (layoutNode) {
         areaElement.appendChild(layoutNode);
         return;
      }

      layoutNode = document.createElement('div');
      layoutNode.id = widget.id;
      layoutNode.className = className;
      layoutNode.innerHTML = htmlTemplate;

      var areas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__area_helper__["b" /* findWidgetAreas */])(layoutNode);
      var deregisterFuncs = Object.keys(areas).map(function (areaName) {
         return areaHelper.register(widget.id + '.' + areaName, areas[areaName]);
      });
      deregister = function deregister() {
         return deregisterFuncs.forEach(function (func) {
            return func();
         });
      };

      areaElement.appendChild(layoutNode);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function domDetach() {
      if (layoutNode.parentNode) {
         layoutNode.parentNode.removeChild(layoutNode);
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function destroy() {
      deregister();
      layoutNode = null;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return exports;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


var senderOptions = { sender: 'AxPageController' };
var subscriberOptions = { subscriber: 'AxPageController' };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * The LocaleManager initializes the locale(s) and implements changes to them.
 *
 * Before publishing the state of all configured locales, it listens to change requests, allowing
 * widgets and activities (such as a LocaleSwitcherWidget) to influence the state of locales before
 * the navigation is complete.
 */

function create(eventBus, configuration) {

   var exports = {
      initialize: initialize,
      subscribe: subscribe,
      unsubscribe: unsubscribe
   };

   var configLocales = configuration.ensure('i18n.locales');
   var i18n = void 0;
   var initialized = void 0;
   var unsubscribeFromEventBus = function unsubscribeFromEventBus() {};

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function publish(locale) {
      var event = { locale: locale, languageTag: i18n[locale] };
      return eventBus.publish('didChangeLocale.' + locale, event, senderOptions);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function initialize() {
      initialized = true;
      return Promise.all(Object.keys(configLocales).map(publish));
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function unsubscribe() {
      unsubscribeFromEventBus();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function subscribe() {
      i18n = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(configLocales);
      initialized = false;

      unsubscribeFromEventBus = eventBus.subscribe('changeLocaleRequest', function (event) {
         i18n[event.locale] = event.languageTag;
         if (initialized) {
            publish(event.locale);
         }
      }, subscriberOptions);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return exports;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_helper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_widget_adapter__ = __webpack_require__(22);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */




function create(eventBus, pageLoader, layoutLoader, widgetLoader, localeManager, visibilityManager, pagesCollector, log) {

   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(eventBus).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(pageLoader).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(layoutLoader).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(widgetLoader).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(localeManager).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(visibilityManager).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(pagesCollector).isNotNull();

   var pageController = void 0;

   var pageServiceApi = {
      createControllerFor: function createControllerFor(pageElement) {
         __WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */].state(!pageController, 'Cannot create a page controller more than once.');
         __WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */].state(pageElement instanceof HTMLElement, 'A page controller can only be created for a valid DOM element.');

         pageController = createPageController(pageElement);
         return pageController;
      },
      controller: function controller() {
         return pageController;
      }
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createPageController(pageElement) {

      var _areaHelper = null;
      var api = {
         setupPage: setupPage,
         tearDownPage: tearDownPage,
         areaHelper: function areaHelper() {
            return _areaHelper;
         }
      };

      /** Delay between sending didLifeCycle and attaching widget templates. */
      var WIDGET_ATTACH_DELAY_MS = 5;
      var COLLABORATOR_ID = 'AxPageController';
      var LIFECYCLE_EVENT = { lifecycleId: 'default' };
      var EVENT_OPTIONS = { sender: COLLABORATOR_ID };
      var DEFAULT_AREAS = [{ name: 'activities', hidden: true }, { name: 'popups' }, { name: 'popovers' }];

      var activeWidgetAdapterWrappers = [];
      var cleanUpLayout = function cleanUpLayout() {};

      pageElement.innerHTML = '';

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function setupPage(pageName) {
         __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(pageName).hasType(String).isNotNull();

         return pageLoader.load(pageName).then(function (page) {
            _areaHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__area_helper__["a" /* create */])(page, log);
            visibilityManager.setAreaHelper(_areaHelper);

            var layoutPromise = layoutLoader.load(page.layout).then(function (layoutInfo) {
               cleanUpLayout = renderLayout(pageElement, _areaHelper, layoutInfo);
            });

            localeManager.subscribe();
            var layoutWidget = function layoutWidget(widget) {
               return layoutWidgetAdapterFor(_areaHelper, widget);
            };

            // instantiate controllers wrapped by widget adapters
            var widgetPromises = widgetsForPage(page).map(function (widget) {
               return 'layout' in widget ? layoutWidget(widget) : widgetLoader.load(widget);
            });

            return Promise.all([].concat(_toConsumableArray(widgetPromises), [layoutPromise])).then(function (results) {
               return results.slice(0, -1);
            });
         }).then(function (widgetAdapterWrappers) {
            pagesCollector.collectCurrentPage(pageName);
            activeWidgetAdapterWrappers = widgetAdapterWrappers;
         }).then(localeManager.initialize).then(function () {
            return eventBus.publishAndGatherReplies('beginLifecycleRequest.default', LIFECYCLE_EVENT, EVENT_OPTIONS);
         }).then(visibilityManager.initialize)
         // Give the widgets (a little) time to settle on the event bus before $digesting and painting:
         .then(function () {
            return delay(WIDGET_ATTACH_DELAY_MS);
         }).then(function () {
            return _areaHelper.attachWidgets(activeWidgetAdapterWrappers);
         });
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function tearDownPage() {
         visibilityManager.unsubscribe();
         localeManager.unsubscribe();

         return eventBus.publishAndGatherReplies('endLifecycleRequest.default', LIFECYCLE_EVENT, EVENT_OPTIONS).then(function () {
            activeWidgetAdapterWrappers.forEach(function (wrapper) {
               return wrapper.destroy();
            });
            activeWidgetAdapterWrappers = [];
            cleanUpLayout();
            cleanUpLayout = function cleanUpLayout() {};
         });
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function widgetsForPage(page) {
         return Object.keys(page.areas).reduce(function (widgets, areaName) {
            var areaWidgets = page.areas[areaName];
            return areaWidgets.reduce(function (widgets, widget) {
               widget.area = areaName;
               return [].concat(_toConsumableArray(widgets), [widget]);
            }, widgets);
         }, []);
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function layoutWidgetAdapterFor(areaHelper, widget) {
         return layoutLoader.load(widget.layout).then(function (_ref) {
            var className = _ref.className,
                html = _ref.html;

            var adapter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__layout_widget_adapter__["a" /* create */])(areaHelper, className, {
               area: widget.area,
               id: widget.id,
               path: widget.layout
            });

            return {
               id: widget.id,
               adapter: adapter,
               destroy: adapter.destroy,
               templatePromise: Promise.resolve(html)
            };
         });
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function renderLayout(pageElement, areaHelper, layoutInfo) {
         addClass(pageElement, layoutInfo.className);
         pageElement.innerHTML = layoutInfo.html;

         var areas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__area_helper__["b" /* findWidgetAreas */])(pageElement);
         var deregisterFuncs = Object.keys(areas).map(function (areaName) {
            return areaHelper.register(areaName, areas[areaName]);
         });

         DEFAULT_AREAS.forEach(function (area) {
            if (areaHelper.exists(area.name)) {
               return;
            }

            var node = document.createElement('div');
            // We only set the attribute here for debugging purposes
            node.setAttribute('ax-widget-area', area.name);
            if (area.hidden) {
               node.style.display = 'none';
            }
            deregisterFuncs.push(areaHelper.register(area.name, node));
            pageElement.appendChild(node);
         });

         return function () {
            deregisterFuncs.forEach(function (func) {
               return func();
            });
            removeClass(pageElement, layoutInfo.className);
         };
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return pageServiceApi;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addClass(element, cssClass) {
   if (element.classList) {
      element.classList.add(cssClass);
      return;
   }
   element.className += ' ' + cssClass;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removeClass(element, cssClass) {
   if (element.classList) {
      element.classList.remove(cssClass);
      return;
   }
   element.className = element.className.split(' ').map(function (c) {
      return c.trim();
   }).filter(function (c) {
      return c !== cssClass;
   }).join(' ');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function delay(ms) {
   return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
   });
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


/**
 * Module providing the page.js router factory.
 *
 * @module pagejs_router
 */

var ROUTE_PARAM_MATCHER = /\/:([^/?(]+)(\(\.\*\)|\?)?/g;
var TRAILING_SEGMENTS_MATCHER = /\/(_\/)*_?$/;

/**
 * Creates and returns a new page.js router instance from its dependencies.
 *
 * @param {Object} pagejs
 *    the pagejs router module (or a compatible mock)
 * @param {Browser} browser
 *    the browser, used to determine the document base href
 * @param {Configuration} configuration
 *    the configuration instance, used to lookup router configuration as described above
 *
 * @return {PagejsRouter}
 *    a router instance that will route as soon as `registerRoutes` is invoked
 *
 * @private
 */
function create(pagejs, browser, configuration) {

   var hashbang = configuration.get('router.pagejs.hashbang', false);
   var queryEnabled = configuration.ensure('router.query.enabled');

   var base = configuration.get('router.base') || fallbackBase(hashbang);
   var origin = originFromLocation(browser.location());
   var absoluteBase = browser.resolve(base, origin);

   /**
    * Router implementation based on [page.js](https://visionmedia.github.io/page.js/).
    *
    * This router allows to register flow patterns in page.js syntax so that their handler is activated when
    * the corresponding URL is entered in the browser. While that alone does not add much to the
    * functionality built into page.js, this router also allows to construct URLs based on a pattern and
    * corresponding substitution parameters. Finally, users can trigger navigation directly.
    *
    * Note that the router supports various configuration options:
    *
    *  - `router.pagejs`: configuration object that is directly passed to page.js (such as `click`,
    *    `popstate`, `dispatch`, `hashbang`). The application is responsible for specifying the required
    *    options, as LaxarJS does not touch the page.js defaults otherwise. Consult the page.js documentation
    *    for more information
    *  - `router.query.enabled`: if `true`, query parameters are automatically transformed into additional
    *    place parameters and vice versa. The default is `false`
    *  - `router.base`: The base path under which to perform routing. If omitted, the document base href is
    *    used
    *
    * Note that this router encodes/decodes certain parameters in a way that is different from page.js:
    *
    *  - when the value `null` is encoded into a URL path segment, it is encoded as `_`
    *  - the value `/` is double-encoded
    *
    * @name PagejsRouter
    * @constructor
    */
   return {
      registerRoutes: registerRoutes,
      navigateTo: navigateTo,
      navigateToPath: navigateToPath,
      constructAbsoluteUrl: constructAbsoluteUrl
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Register all routes defined in the given route map, as well as a fallback route that should be used
    * when none of the other routes match. Also causes the initial route to be triggered.
    *
    * @param {Object.<String, Function>} routeMap
    *    a map of routing patterns in page.js syntax to the corresponding handler functions. When invoked,
    *    the handler functions will receive the decoded parameter values for their pattern and (if configured)
    *    from the query string, as a map from string parameter name to string value
    * @param {Function} fallbackHandler
    *    a handler that is invoked when none of the configured routes match. It receives the failed path as
    *    a string argument
    *
    * @memberof PagejsRouter
    */
   function registerRoutes(routeMap, fallbackHandler) {
      pagejs.base(base);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(routeMap, function (handler, pattern) {
         pagejs(pattern, function (context) {
            handler(collectParameters(pattern, context));
         });
      });
      pagejs('*', function (context) {
         fallbackHandler(context.path);
      });
      pagejs.start(configuration.get('router.pagejs', {}));
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Change the browser location to a different routable URL, from pattern and parameters. This is also
    * called reverse-routing.
    *
    * @param {String[]} patterns
    *    a list of patterns to choose from. This allows the router to pick the "best" pattern, such as the
    *    pattern containing the largest number of given parameters. This router always picks the first pattern
    *    for now.
    * @param {Object} parameters
    *    parameter values to substitute into the pattern to generate a URL
    * @param {Boolean} [replaceHistory=true]
    *    if `true`, the current history entry is replaced with the new one, otherwise a new entry is pushed.
    *    Useful to express redirects
    *
    * @memberof PagejsRouter
    */
   function navigateTo(patterns, parameters) {
      var replaceHistory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      navigateToPath(constructPath(patterns, parameters), replaceHistory);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
   * Change the browser location to a different routable URL, from a complete path. This is also
   * called reverse-routing.
   *
   * @param {String} path
   *    the complete path to navigate to. This includes values for all relevant parameters
   * @param {Boolean} [replaceHistory=true]
   *    if `true`, the current history entry is replaced with the new one, otherwise a new entry is pushed.
   *    Useful to express redirects
   *
   * @memberof PagejsRouter
   */
   function navigateToPath(path) {
      var replaceHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      (replaceHistory ? pagejs.redirect : pagejs.show)((hashbang ? base + '#!' : '') + path);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Create a routable URL, from pattern and parameters. This allows to create link-hrefs without repeating
    * URL patterns throughout the code base.
    *
    * @param {Array<String>} patterns
    *    a list of patterns to choose from. This allows the router to pick the "best" pattern, such as the
    *    pattern containing the largest number of given parameters. This router always picks the first pattern
    *    for now.
    * @param {Object} parameters
    *    parameter values to substitute into the pattern to generate a URL
    * @param {Object} parameterDefaults
    *    only applicable if query strings are enabled by configuration: before a parameter is encoded into the
    *    query string, it is checked against the default. Only values that are different from their default
    *    are kept
    *
    * @return {String} the resulting URL, including schema and host
    *
    * @memberof PagejsRouter
    */
   function constructAbsoluteUrl(patterns, parameters, parameterDefaults) {
      var routingPath = constructPath(patterns, parameters, parameterDefaults);
      return hashbang ? absoluteBase + '#!' + routingPath : '' + absoluteBase + routingPath;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function constructPath(patterns, parameters) {
      var bestPattern = patterns[0];
      var path = bestPattern.replace(ROUTE_PARAM_MATCHER, function ($0, $param, $modifier) {
         var replacement = encodeSegment(parameters[$param], $modifier === '(.*)');
         delete parameters[$param];
         return '/' + replacement;
      }).replace(TRAILING_SEGMENTS_MATCHER, '/');

      if (queryEnabled) {
         var _ret = function () {
            var query = [];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(parameters, function (value, parameterName) {
               var encodedKey = encodeURIComponent(parameterName);
               if (value === true) {
                  query.push(encodedKey);
                  return;
               }
               if (value === false || value == null) {
                  return;
               }
               query.push(encodedKey + '=' + encodeURIComponent(value));
            });

            if (query.length) {
               return {
                  v: path + '?' + query.join('&')
               };
            }
         }();

         if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }

      return path;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function collectParameters(pattern, context) {
      var _context$querystring = context.querystring,
          querystring = _context$querystring === undefined ? '' : _context$querystring,
          _context$params = context.params,
          params = _context$params === undefined ? {} : _context$params;

      var parameters = {};
      if (queryEnabled && querystring.length) {
         querystring.split('&').map(function (_) {
            return _.split('=').map(decodeURIComponent);
         }).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            parameters[key] = value !== undefined ? value : true;
         });
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["forEach"])(params, function (value, key) {
         var isMultiSegment = pattern.indexOf('/:' + key + '(.*)') !== -1;
         parameters[key] = decodeSegment(value, isMultiSegment);
      });
      return parameters;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Encode a parameter value for use as path segment(s) in routing.
    *
    * Usually, values are simply URL-encoded, but there are special cases:
    *
    *  - `null` and `undefined` are encoded as '_',
    *  - other non-string values are converted to strings before URL encoding,
    *  - slashes ('/') are double-encoded to '%252F', so that page.js ignores them during route matching,
    *  - underscore ('_') is double-encoded to '%255F', to avoid confusion with '_' (null).
    *
    * When decoded, for use in didNavigate events, the original values will be restored, except for:
    *  - non-string input values, which will always be decoded into strings,
    *  - `undefined` values which will be decoded to `null`.
    *
    * @param {*} value
    *   the parameter to encode
    * @param {Boolean} [isMultiSegment=false]
    *   determines if encoded value may contain slashes (true) or if slashes are double-encoded so that the
    *   parameter can always be matched by a single path segment (false)
    * @return {String}
    *   the encoded value, for use as a path segment in URLs
    *
    * @private
    */
   function encodeSegment(value, isMultiSegment) {
      if (value == null) {
         return '_';
      }
      var urlSegments = encodeURIComponent(value).replace(/_/g, '%255F');
      return isMultiSegment ? urlSegments : urlSegments.replace(/%2F/g, '%252F');
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Decodes a place parameter value from a path segment, to restore it for use in will/didNavigate events.
    *
    * Usually, this reverses the application of {#encodeSegment} after the browser has decoded a URL, except:
    *  - path-segments based on non-string input values, which will always be decoded into strings,
    *  - path-segments based on `undefined` values which will be decoded to `null`.
    *
    * Note that while the browser has already performed URL-decoding, this function replaces `%2F` into `/`
    * and `%5F` to `_`, to be compatible with the double-encoding performaed by {#encodeSegment}.
    *
    * @param {String} value
    *   the encoded parameter segment to decode
    * @param {Boolean} [isMultiSegment=false]
    *   determines if url-encoded slashes in the value were part of the original input (true) or if slashes
    *   in the given value were double-encoded by {#encodeSegment} and need additional decoding (false)
    * @return {String}
    *   the decoded value, for use as a path segment in URLs
    *
    * @private
    */
   function decodeSegment(value, isMultiSegment) {
      if (value === '_' || value == null) {
         return null;
      }
      var segments = value.replace(/%5F/g, '_');
      return isMultiSegment ? segments : segments.replace(/%2F/g, '/');
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function fallbackBase(hashbang) {
      if (hashbang) {
         return browser.location().pathname;
      }
      // relies on the HTML `base` element being present
      var documentBase = browser.resolve('.').replace(/\/$/, '');
      return documentBase;
   }
}

function originFromLocation(_ref3) {
   var protocol = _ref3.protocol,
       hostname = _ref3.hostname,
       port = _ref3.port;

   return protocol + '://' + hostname + (port ? ':' + port : '');
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Module providing the StorageApi factory.
 *
 * Widgets and activities can access their StorageApi instance by requesting the injection
 * {@link widget_services#axStorage axStorage}, or use
 * {@link widget_services#axGlobalStorage axGlobalStorage} for shared items.
 *
 * As such, in most cases only the {@link StorageApi} documentation is relevant.
 *
 * @module storage
 */


var SESSION = 'sessionStorage';
var LOCAL = 'localStorage';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Object} backend
 *    the K/V store, probably only accepting string values
 * @param {String} namespace
 *    prefix for all keys for namespacing purposes
 *
 * @return {StorageApi}
 *    a storage wrapper to the given backend with `getItem`, `setItem` and `removeItem` methods
 *
 * @private
 */
function createStorage(backend, namespace) {

   /**
    * Provides a convenient API over the browser's `window.localStorage` and `window.sessionStorage` objects.
    * If a browser doesn't support [web storage](http://www.w3.org/TR/webstorage/), a warning is logged to the
    * `console` (if available) and a non-persistent in-memory store will be used instead. Note that this can
    * for example also happen when using Mozilla Firefox with cookies disabled and as such isn't limited to
    * older browsers.
    *
    * Additionally, in contrast to plain *web storage* access, non-string values will be automatically passed
    * through JSON (de-) serialization on storage or retrieval. All keys will be prepended with a combination
    * of a fixed (`ax.`) and an application-specific namespace (configured using `storagePrefix` with fallback
    * to `name`) to avoid naming clashes with other (LaxarJS) web applications running on the same host and
    * port. All {@link StorageApi} accessor methods should be called without any namespace as it is
    * prepended automatically.
    *
    * @name StorageApi
    * @constructor
    */
   return {
      getItem: getItem,
      setItem: setItem,
      removeItem: removeItem
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Retrieves a `value` by `key` from the store. JSON deserialization will automatically be applied.
    *
    * @param {String} key
    *    the key of the item to retrieve (without namespace prefix)
    *
    * @return {*}
    *    the value or `null` if it doesn't exist in the store
    *
    * @memberof StorageApi
    */
   function getItem(key) {
      var item = backend.getItem(namespace + '.' + key);
      return item && JSON.parse(item);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Sets a `value` for a `key`. The value must be JSON serializable. An existing value will be overwritten.
    *
    * @param {String} key
    *    the key of the item to set (without namespace prefix)
    * @param {*} value
    *    the new value to set
    *
    * @memberof StorageApi
    */
   function setItem(key, value) {
      var nsKey = namespace + '.' + key;
      if (value === undefined) {
         backend.removeItem(nsKey);
      } else {
         backend.setItem(nsKey, JSON.stringify(value));
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Removes the value associated with `key` from the store.
    *
    * @param {String} key
    *    the key of the item to remove (without namespace prefix)
    *
    * @memberof StorageApi
    */
   function removeItem(key) {
      backend.removeItem(namespace + '.' + key);
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getOrFakeBackend(browser, webStorageName) {
   var browserConsole = browser.console();
   var store = window[webStorageName];
   if (store.setItem && store.getItem && store.removeItem) {
      try {
         var testKey = 'ax_.storage.test';
         // In iOS Safari Private Browsing, this will fail:
         store.setItem(testKey, 1);
         store.removeItem(testKey);
         return store;
      } catch (e) {
         // setItem failed: must use fake storage
      }
   }

   if (browserConsole) {
      var method = 'warn' in browserConsole ? 'warn' : 'log';
      browserConsole[method]('window.' + webStorageName + ' not available: Using non-persistent polyfill. \n' + 'Try disabling private browsing or enabling cookies.');
   }

   var backend = {};
   return {
      getItem: function getItem(key) {
         return backend[key] || null;
      },
      setItem: function setItem(key, val) {
         backend[key] = val;
      },
      removeItem: function removeItem(key) {
         if (key in backend) {
            delete backend[key];
         }
      }
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function applicationPrefix(configuration) {
   return configuration.get('storagePrefix', configuration.ensure('name'));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates a new storage factory. In most cases this module will be called without arguments,
 * but having the ability to provide them is useful e.g. for mocking purposes within tests.
 * If the arguments are omitted, an attempt is made to access the native browser WebStorage api.
 * If that fails, storage is only mocked by an in memory map (thus actually unavailable).
 *
 * Developers are free to use polyfills to support cases where local- or session-storage may not be
 * available. Just make sure to initialize the polyfills before this module.
 *
 * @param {Object} configuration
 *    a configuration service instance, to determine a storage prefix based on the configured name
 * @param {Object} browser
 *    the browser api adapter
 * @param {Object} [localStorageBackend]
 *    the backend for local storage. Default is `window.localStorage`
 * @param {Object} [sessionStorageBackend]
 *    the backend for session storage. Default is `window.sessionStorage`
 *
 * @return {StorageFactory}
 *    a new storage factory
 *
 * @private
 */
function create(configuration, browser, localStorageBackend, sessionStorageBackend) {

   var localBackend = localStorageBackend || getOrFakeBackend(browser, LOCAL);
   var sessionBackend = sessionStorageBackend || getOrFakeBackend(browser, SESSION);
   var prefix = 'ax.' + applicationPrefix(configuration) + '.';

   /**
    * The API returned by the module's `create` function.
    *
    * @name StorageFactory
    * @constructor
    */
   return {

      /**
       * Returns a local storage object for a specific local namespace.
       *
       * @param {String} namespace
       *    the namespace to prepend to keys
       *
       * @return {StorageApi}
       *    the local storage object
       *
       * @memberof StorageFactory
       */
      getLocalStorage: function getLocalStorage(namespace) {
         __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(namespace).hasType(String).isNotNull();

         return createStorage(localBackend, prefix + namespace);
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Returns a session storage object for a specific local namespace.
       *
       * @param {String} namespace
       *    the namespace to prepend to keys
       *
       * @return {StorageApi}
       *    the session storage object
       *
       * @memberof StorageFactory
       */
      getSessionStorage: function getSessionStorage(namespace) {
         __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(namespace).hasType(String).isNotNull();

         return createStorage(sessionBackend, prefix + namespace);
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Returns the local storage object for application scoped keys. This is equivalent to
       * `storage.getLocalStorage( 'app' )`.
       *
       * @return {StorageApi}
       *    the application local storage object
       *
       * @memberof StorageFactory
       */
      getApplicationLocalStorage: function getApplicationLocalStorage() {
         return createStorage(localBackend, prefix + 'app');
      },


      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Returns the session storage object for application scoped keys. This is equivalent to
       * `storage.getSessionStorage( 'app' )`.
       *
       * @return {StorageApi}
       *    the application session storage object
       *
       * @memberof StorageFactory
       */
      getApplicationSessionStorage: function getApplicationSessionStorage() {
         return createStorage(sessionBackend, prefix + 'app');
      }
   };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_object__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */


function create(log) {

   var api = {
      started: started
   };

   var idCounter = 0;

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function started(optionalOptions) {
      var timer = new Timer(optionalOptions);
      timer.start();
      return timer;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function Timer(optionalOptions) {
      this.options_ = Object.assign({
         label: 'timer' + idCounter++
      }, optionalOptions);
      this.startTime_ = null;
      this.stopTime_ = null;
      this.splitTimes_ = [];
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Timer.prototype.getData = function () {
      return {
         label: this.options_.label,
         startTime: this.startTime_,
         stopTime: this.stopTime_,
         splitTimes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_object__["deepClone"])(this.splitTimes_)
      };
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Timer.prototype.start = function () {
      this.startTime_ = Date.now();
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Timer.prototype.splitTime = function (optionalLabel) {
      this.splitTimes_.push({
         time: Date.now(),
         label: optionalLabel || 'split' + this.splitTimes_.length
      });
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Timer.prototype.stop = function () {
      this.stopTime_ = Date.now();
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Timer.prototype.stopAndLog = function (optionalLabel) {
      this.stop();

      var startTime = this.startTime_;
      var endTime = Date.now();
      var label = optionalLabel || 'Timer Stopped';
      this.splitTimes_.push({ label: label, time: endTime });

      var message = [];
      message.push('Timer "', this.options_.label, '": ');
      message.push('start at ', new Date(startTime).toISOString(), ' (client), ');
      message.push(label, ' after ', (endTime - startTime).toFixed(0), 'ms ');
      message.push('(checkpoints: ');
      var intervals = [];
      this.splitTimes_.reduce(function (from, data) {
         intervals.push('"' + data.label + '"=' + (data.time - from).toFixed(0) + 'ms');
         return data.time;
      }, startTime);
      message.push(intervals.join(', '), ')');
      log.info(message.join(''));
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return api;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
var senderOptions = { sender: 'AxPageController', deliverToSender: false };
var subscriberOptions = { subscriber: 'AxPageController' };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * The visibility event manager initializes and coordinates events for widget area visibility.
 *
 * It subscribes to all visibility changes and propagates them to nested widget areas
 * (if applicable). It is not concerned with the resulting DOM-visibility of individual controls:
 * the `axVisibilityService` takes care of that.
 *
 * @param {EventBus} eventBus
 *    an event bus instance
 * @return {Object}
 *    a function to trigger initialization of the manager and initial widget visibility
 */
function create(eventBus) {

   var exports = {
      initialize: initialize,
      setAreaHelper: setAreaHelper,
      unsubscribe: unsubscribe
   };

   var areaHelper = void 0;
   var unsubscribeFromAreaVisibilityRequest = function unsubscribeFromAreaVisibilityRequest() {};
   var unsubscribeFromWidgetVisibilityRequest = function unsubscribeFromWidgetVisibilityRequest() {};
   var ROOT = '';

   function setAreaHelper(_) {
      areaHelper = _;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function initialize() {
      // broadcast visibility changes in individual widgets to their nested areas
      unsubscribeFromWidgetVisibilityRequest = eventBus.subscribe('changeWidgetVisibilityRequest', function (event) {
         var affectedAreas = areaHelper.areasInWidget(event.widget);
         var will = ['willChangeWidgetVisibility', event.widget, event.visible].join('.');
         var did = ['didChangeWidgetVisibility', event.widget, event.visible].join('.');

         eventBus.publish(will, event, senderOptions);

         Promise.all((affectedAreas || []).map(event.visible ? show : hide)).then(function () {
            return eventBus.publish(did, event, senderOptions);
         });
      }, subscriberOptions);

      // broadcast visibility changes in widget areas to their nested areas
      unsubscribeFromAreaVisibilityRequest = eventBus.subscribe('changeAreaVisibilityRequest', function (event) {
         return initiateAreaChange(event.area, event.visible);
      }, subscriberOptions);

      return implementAreaChange(ROOT, true);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function show(area) {
      return requestAreaChange(area, true);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function hide(area) {
      return requestAreaChange(area, false);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * First, publish a `changeAreaVisibilityRequest` to ask if some widget would like to manage the
    * given area's visibility.
    * If no widget responds, self-issue a will/did-response to notify interested widgets in the area
    * of their new visibility status.
    * In either case, manage the propagation to nested areas and inform the area helper so that it
    * may compile and attach the templates of any newly visible widgets.
    *
    * @param {String} area
    *    the area whose visibility to update
    * @param {Boolean} visible
    *    the new visibility state of the given area, to the best knowledge of the client
    * @return {Promise}
    *    promise that is resolved after the change request is completed
    */
   function requestAreaChange(area, visible) {
      var request = ['changeAreaVisibilityRequest', area].join('.');
      var event = { area: area, visible: visible };
      return eventBus.publishAndGatherReplies(request, event, senderOptions).then(function (responses) {
         if (responses.length === 0) {
            // no one took responsibility, so the event manager determines visibility by area nesting
            return initiateAreaChange(area, visible);
         }
         // assume the first 'did'-response to be authoritative:
         var response = responses[0];
         return implementAreaChange(area, response.event.visible);
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // eslint-disable-next-line valid-jsdoc
   /**
    * Set the new visibility state for the given area, then issue requests for the child areas.
    * Inform the area helper so that it may compile and attach the templates of any newly visible
    * widgets.
    */
   function initiateAreaChange(area, visible) {
      var will = ['willChangeAreaVisibility', area, visible].join('.');
      var event = { area: area, visible: visible };
      return eventBus.publish(will, event, senderOptions).then(function () {
         return implementAreaChange(area, visible);
      }).then(function () {
         var did = ['didChangeAreaVisibility', area, visible].join('.');
         return eventBus.publish(did, event, senderOptions);
      });
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function implementAreaChange(ofArea, areaVisible) {
      areaHelper.setVisibility(ofArea, areaVisible);
      var children = areaHelper.areasInArea(ofArea);
      if (!children) {
         return Promise.resolve();
      }

      return Promise.all(children.map(areaVisible ? show : hide));
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function unsubscribe() {
      unsubscribeFromWidgetVisibilityRequest();
      unsubscribeFromAreaVisibilityRequest();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return exports;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_log__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_services_i18n__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_services_visibility__ = __webpack_require__(31);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Factory for the services that are available to the controller of a widget, regardless of the underlying
 * view framework.
 *
 * @module widget_services
 */






var INVALID_ID_MATCHER = /[^A-Za-z0-9_.-]/g;
var ID_SEPARATOR = '-';

function create(artifactProvider, configuration, controlLoader, globalEventBus, flowService, log, heartbeat, pageService, storage, toolingProviders) {

   var i18nOptions = configuration.ensure('i18n');

   return {
      forWidget: function forWidget(specification, widgetConfiguration, features) {
         var decorators = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
         var widgetId = widgetConfiguration.id;
         var widgetName = specification.name;


         var instances = {
            /**
             * Area helper service instance.
             *
             * @type {AxAreaHelper}
             */
            axAreaHelper: null,

            /**
             * widget asset accessor instance.
             *
             * @type {AxAssets}
             */
            axAssets: null,

            /**
             * Interface to the configuration the application was bootstrapped with.
             *
             * @type {Configuration}
             */
            axConfiguration: null,

            /**
             * Context information and tiny service collection.
             *
             * @type {AxContext}
             */
            axContext: null,

            /**
             * The control loader api to provide access to control modules used by a widget.
             *
             * @type {ControlLoader}
             */
            axControls: null,

            /**
             * Event bus instance specifically enriched for a widget instance.
             *
             * @type {AxEventBus}
             */
            axEventBus: null,

            /**
             * The features the widget was configured with.
             * Its structure depends solely on the schema defined in the widget's descriptor file
             * (`widget.json`)
             *
             * @type {Object}
             */
            axFeatures: null,

            /**
             * Injection for the flow service.
             *
             * @type {FlowService}
             */
            axFlowService: null,

            /**
             * The global event bus instance of the application.
             * {@link axEventBus} should always be prefered over this, since for example unsubscribing from
             * event subscriptions on widget destruction needs be done manually and can lead to severe memory
             * leaks if omitted.
             * One valid use case could be an activity, that has permanent knowledge about the application's
             * state and lifetime, and for example adds an inspector to the event bus.
             *
             * @type {EventBus}
             */
            axGlobalEventBus: null,

            /**
             * The global logger instance.
             *
             * @type {Logger}
             */
            axGlobalLog: null,

            /**
             * The global storage factory.
             *
             * @type {StorageFactory}
             */
            axGlobalStorage: null,

            /**
             * The heartbeat instance.
             *
             * @type {Heartbeat}
             */
            axHeartbeat: null,

            /**
             * I18n api specifically for the widget instance.
             *
             * @type {AxI18n}
             */
            axI18n: null,

            /**
             * A function that generates page wide unique ids based on ids that are unique within the scope
             * of a widget.
             *
             * A common use case is the connection of a `label` HTML element and an `input` element via `for`
             * and `id` attributes.
             * For such cases ids should **always** be generated using this service.
             *
             * Example:
             * ```js
             * widgetDom.querySelector( 'label' ).setAttribute( 'for', axId( 'myField' ) );
             * widgetDom.querySelector( 'input' ).setAttribute( 'id', axId( 'myField' ) );
             * ```
             *
             * @param {String} localUniqueId
             *    an identifier that is unique within a widget
             *
             * @return {String}
             *    an identifier that is unique for the current page
             *
             * @type {Function}
             */
            axId: null,

            /**
             * The widget logger instance.
             * This is basically the same as the {@link #axGlobalLog}, but adds the name of the widget as
             * prefix and its id as suffix to every log message.
             *
             * @type {Logger}
             */
            axLog: null,

            /**
             * Ready to use storage apis for a widget.
             * All keys are namespaced by the widget id to limit visibility to this specific instance.
             *
             * @type {AxStorage}
             */
            axStorage: null,

            /**
             * Access to the tooling provider API.
             * TODO Fix the type (and document toolingProviders)
             *
             * @type {*}
             */
            axTooling: null,

            /**
             * Visibility services for a widget instance.
             * @type {AxVisibility}
             */
            axVisibility: null
         };

         var services = Object.assign({}, instances);
         var releaseHandlers = [];

         registerServiceFactory('axAreaHelper', function () {
            return createAreaHelperForWidget(widgetId);
         }, function () {
            instances.axAreaHelper.release();
         });
         registerServiceFactory('axAssets', function () {
            return createAssetsServiceForWidget(widgetName);
         });
         registerService('axConfiguration', configuration);
         registerServiceFactory('axContext', function () {
            return createContextForWidget(widgetConfiguration, widgetId, services);
         });
         registerService('axControls', controlLoader);
         registerServiceFactory('axEventBus', function () {
            return createEventBusForWidget(services.axGlobalEventBus, widgetName, widgetId);
         }, function () {
            instances.axEventBus.release();
         });
         registerService('axFeatures', features);
         registerService('axFlowService', flowService);
         registerService('axGlobalEventBus', globalEventBus);
         registerService('axGlobalLog', log);
         registerService('axGlobalStorage', storage);
         registerService('axHeartbeat', heartbeat);

         registerServiceFactory('axI18n', function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__widget_services_i18n__["a" /* create */])(services.axContext, services.axConfiguration, i18nOptions);
         });
         registerServiceFactory('axId', function () {
            return createIdGeneratorForWidget(widgetId);
         });
         registerServiceFactory('axLog', function () {
            return createLoggerForWidget(log, widgetName, widgetId);
         });
         registerServiceFactory('axStorage', function () {
            return createStorageForWidget(storage, widgetId);
         });
         registerServiceFactory('axVisibility', function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__widget_services_visibility__["a" /* create */])(services.axContext, services.axAreaHelper);
         });
         registerService('axTooling', toolingProviders);

         return {
            services: services,
            releaseServices: function releaseServices() {
               releaseHandlers.forEach(function (f) {
                  f();
               });
            }
         };

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         function registerService(name, instance) {
            var decorate = decorators[name];
            instances[name] = services[name] = decorate ? decorate(instance) : instance;
         }

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         function registerServiceFactory(name, factory, optionalRelease) {
            Object.defineProperty(services, name, {
               get: function get() {
                  if (!instances[name]) {
                     var decorate = decorators[name];
                     var instance = factory();
                     instances[name] = decorate ? decorate(instance) : instance;
                     if (optionalRelease) {
                        releaseHandlers.push(optionalRelease);
                     }
                  }
                  return instances[name];
               },
               set: function set(value) {
                  instances[name] = value;
               }
            });
         }
      }
   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createContextForWidget(widgetConfiguration, widgetId, services) {

      /**
       * This object encapsulates widget context information and provides access to the most important widget
       * specific service instances.
       * Most commonly this is used when working with
       * [LaxarJS Patterns](https://github.com/LaxarJS/laxar-patterns).
       *
       * @name AxContext
       * @constructor
       */
      return {

         /**
          * The event bus instance of the widget. This is the same as {@link #axEventBus}.
          *
          * @type {AxEventBus}
          * @memberof AxContext
          */
         eventBus: services.axEventBus,

         /**
          * The configured features of the widget. This is the same as {@link #axFeatures}.
          *
          * @type {Object}
          * @memberof AxContext
          */
         features: services.axFeatures,

         /**
          * The unique id generator function. This is the same as {@link #axId}.
          *
          * @type {Function}
          * @memberof AxContext
          */
         id: services.axId,

         /**
          * The widget local log instance. This is the same as {@link #axLog}.
          *
          * @type {AxLog}
          * @memberof AxContext
          */
         log: services.axLog,

         /**
          * Some information regarding the widget instance.
          *
          * The following fields are available:
          * - `area`: full name of the area the widget is located in
          * - `id`: the unique id of the widget on the page
          * - `path`: path of the widget that was used to reference it in the according page or composition.
          *    This is not the actual path on the file system, but most probably an alias known by the used
          *    module loader.
          *
          * @type {Object}
          * @memberof AxContext
          */
         widget: {
            area: widgetConfiguration.area,
            id: widgetId,
            path: widgetConfiguration.widget
         }
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createAreaHelperForWidget(widgetId) {
      var deregisterFuncs = [];

      /**
       * @name AxAreaHelper
       * @constructor
       */
      return {

         /**
          * Query if a given widget area is currently visible by accessing the underlying area status through
          * the page controller. Can be used to determine the current visibility state of an area without
          * having to constantly observe visibility events.
          *
          * @param {String} fullAreaName
          *    the global name of the area
          *
          * @return {Boolean}
          *    the current visibility state of the given area
          */
         isVisible: function isVisible(fullAreaName) {
            return pageService.controller().areaHelper().isVisible(fullAreaName);
         },


         /**
          * Looks up the global name of a widget area within a widget, as generated by LaxarJS.
          * This is the reverse of {@link #AxAreaHelper.localName()}.
          *
          * @param {String} localAreaName
          *    the widget-local name of the area
          *
          * @return {String}
          *    the globally valid name of the area
          *
          * @memberof AxAreaHelper
          */
         fullName: function fullName(localAreaName) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(localAreaName || null).hasType(String).isNotNull();
            return qualify(localAreaName);
         },


         /**
          * Returns the local part of a global area name.
          * This is the reverse of {@link #AxAreaHelper.fullName()}.
          *
          * @param {String} fullAreaName
          *    the global name of the area
          *
          * @return {String}
          *    the name of the area as it is known to the widget
          *
          * @memberof AxAreaHelper
          */
         localName: function localName(fullAreaName) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(fullAreaName).hasType(String).isNotNull();
            return unqualify(fullAreaName);
         },


         /**
          * Registers a DOM element as area of a widget with the area helper.
          *
          * @param {String} localAreaName
          *    the widget-local name of the area
          * @param {HTMLElement} element
          *    the element to register as widget area
          *
          * @memberof AxAreaHelper
          */
         register: function register(localAreaName, element) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(localAreaName).hasType(String).isNotNull();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(element).hasType(Object).isNotNull();
            var areaHelper = pageService.controller().areaHelper();
            deregisterFuncs.push(areaHelper.register(qualify(localAreaName), element));
         },
         release: function release() {
            deregisterFuncs.forEach(function (_) {
               _();
            });
         }
      };

      function qualify(localAreaName) {
         return widgetId + '.' + localAreaName;
      }

      function unqualify(fullAreaName) {
         return fullAreaName.slice(widgetId.length + 1);
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createAssetsServiceForWidget(widgetName) {
      var widgetArtifacts = artifactProvider.forWidget(widgetName);

      /**
       * _Note:_ This service is a function with the {@link #AxAssets.url()}, {@link #AxAssets.forTheme()} and
       * {@link #AxAssets.urlForTheme()} functions as properties.
       *
       * Resolves an asset located directly in the widget folder or a subfolder of it.
       * Valid assets are all non-binary files like JSON or text files.
       * For binary files there exists the {@link #AxAssets.url} function.
       *
       * Example:
       * ```
       * function Controller( axAssets ) {
       *    axAssets( 'data.json' ).then( fileContent => { ... } );
       * }
       * ```
       *
       * @param {String} name
       *    name of the asset to resolve
       *
       * @return {Promise}
       *    promise for the asset
       *
       * @name AxAssets
       */
      var assetService = function assetService(name) {
         return widgetArtifacts.asset(name);
      };

      /**
       * Resolves the absolute url to the given asset located directly in the widget folder or a subfolder of
       * it.
       * This can then be safely used in e.g. `video` or `img` tags.
       *
       * Example:
       * ```
       * function Controller( axAssets ) {
       *    axAssets.url( 'tux.jpg' ).then( url => { img.src = url; } );
       * }
       * ```
       *
       * @param  {String} name
       *    name of the asset the url should be returned of
       *
       * @return {Promise}
       *    promise for the url
       *
       * @memberof AxAssets
       */
      assetService.url = function (name) {
         return widgetArtifacts.assetUrl(name);
      };

      /**
       * Resolves an asset from one of the `*.theme` subfolders of the widget.
       * The folder from which the asset is taken, depends on the selected theme and the availability of the
       * file within that theme (See
       * [here](http://laxarjs.org/docs/laxar-latest/manuals/creating_themes/#how-the-runtime-finds-css) for
       * further information on theme asset lookup).
       * Valid assets are all non-binary files like JSON or text files.
       * For binary files there exists the {@link #AxAssets.urlForTheme} function.
       *
       * Example:
       * ```
       * function Controller( axAssets ) {
       *    axAssets.forTheme( 'some-template.html' ).then( template => { ... } );
       * }
       * ```
       *
       * @param {String} name
       *    name of the asset to resolve
       *
       * @return {Promise}
       *    promise for the asset
       *
       * @memberof AxAssets
       */
      assetService.forTheme = function (name) {
         return widgetArtifacts.assetForTheme(name);
      };

      /**
       * Resolves the absolute url to the given asset from one of the `*.theme` subfolders of the widget.
       * This can then be safely used in e.g. `video` or `img` tags.
       * The folder from which the asset is taken, depends on the selected theme and the availability of the
       * file within that theme (See
       * [here](http://laxarjs.org/docs/laxar-latest/manuals/creating_themes/#how-the-runtime-finds-css) for
       * further information on theme asset lookup).
       *
       * Example:
       * ```
       * function Controller( axAssets ) {
       *    axAssets.urlForTheme( 'icon.jpg' ).then( url => { img.src = url; } );
       * }
       * ```
       *
       * @param  {String} name
       *    name of the asset the url should be returned of
       *
       * @return {Promise}
       *    promise for the url
       *
       * @memberof AxAssets
       */
      assetService.urlForTheme = function (name) {
         return widgetArtifacts.assetUrlForTheme(name);
      };
      return assetService;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createLoggerForWidget(logger, widgetName, widgetId) {
      var newLogger = Object.create(logger);
      newLogger.log = function (level, message) {
         for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            rest[_key - 2] = arguments[_key];
         }

         return logger.log.apply(logger, [level, enrich(message)].concat(rest, [__WEBPACK_IMPORTED_MODULE_1__runtime_log__["b" /* BLACKBOX */]]));
      };
      Object.keys(logger.levels).map(function (_) {
         return _.toLowerCase();
      }).forEach(function (method) {
         newLogger[method] = function (message) {
            for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
               rest[_key2 - 1] = arguments[_key2];
            }

            return logger[method].apply(logger, [enrich(message)].concat(rest, [__WEBPACK_IMPORTED_MODULE_1__runtime_log__["b" /* BLACKBOX */]]));
         };
      });
      return newLogger;

      function enrich(message) {
         return widgetName + ': ' + message + ' (widget-id: ' + widgetId + ')';
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createStorageForWidget(storage, widgetId) {
      var namespace = 'widget-' + widgetId;

      /**
       * Ready to use storage API for a single widget instance.
       * All keys are namespaced by the widget id to limit visibility to this specific instance.
       *
       * @name AxStorage
       * @constructor
       */
      return {
         /**
          * An instance of the storage api using the persistent `window.localStorage`.
          *
          * @type {StorageApi}
          * @memberof AxStorage
          */
         local: storage.getLocalStorage(namespace),

         /**
          * An instance of the storage api using the non-persistent `window.sessionStorage`.
          *
          * @type {StorageApi}
          * @memberof AxStorage
          */
         session: storage.getSessionStorage(namespace)
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createIdGeneratorForWidget(widgetId) {
      var charCodeOfA = 'a'.charCodeAt(0);
      function fixLetter(l) {
         // We map invalid characters deterministically to valid lower case letters. Thereby a collision of
         // two IDs with different invalid characters at the same positions is less likely to occur.
         return String.fromCharCode(charCodeOfA + l.charCodeAt(0) % 26);
      }

      var prefix = 'ax' + ID_SEPARATOR + widgetId.replace(INVALID_ID_MATCHER, fixLetter) + ID_SEPARATOR;
      return function (localId) {
         return prefix + ('' + localId).replace(INVALID_ID_MATCHER, fixLetter);
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createEventBusForWidget(eventBus, widgetName, widgetId) {

      var collaboratorId = 'widget.' + widgetName + '#' + widgetId;
      var inspectorRemoveFunctions = [];
      var unsubscribeFunctions = [];

      /**
       * This is an extension of the global {@link event_bus#EventBus EventBus} by widget specific information
       * and tasks.
       * For example a combination of the widget's name and its id is always used as subscriber and sender
       * id.
       * Hence for example {@link event_bus#EventBus.publishAndGatherReplies EventBus.publishAndGatherReplies}
       * works without passing in any options.
       *
       * Additionally all subscriptions of a widget are removed as soon as the widget itself is destroyed.
       * So in practice a widget will receive no further events after the `endLifecycleRequest` event
       * processing has finished.
       *
       * The documentation for the events bus api can be found {@linkplain event_bus here}.
       *
       * @name AxEventBus
       * @constructor
       */
      return {
         addInspector: function addInspector(inspector) {
            return makeAutoRemovable(inspectorRemoveFunctions, eventBus.addInspector(inspector));
         },
         unsubscribe: function unsubscribe(subscriber) {
            return eventBus.unsubscribe(subscriber);
         },
         subscribe: function subscribe(eventName, subscriber, optionalOptions) {
            var options = Object.assign({}, optionalOptions, { subscriber: collaboratorId });
            var unsubscribe = eventBus.subscribe(eventName, subscriber, options);

            return makeAutoRemovable(unsubscribeFunctions, unsubscribe);
         },
         publish: function publish(eventName, optionalEvent, optionalOptions) {
            var options = Object.assign({}, optionalOptions, { sender: collaboratorId });
            return eventBus.publish(eventName, optionalEvent, options);
         },
         publishAndGatherReplies: function publishAndGatherReplies(eventName, optionalEvent, optionalOptions) {
            var options = Object.assign({}, optionalOptions, { sender: collaboratorId });
            return eventBus.publishAndGatherReplies(eventName, optionalEvent, options);
         },
         release: function release() {
            purgeAutoRemoveRegistries(inspectorRemoveFunctions, unsubscribeFunctions);
         }
      };

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function makeAutoRemovable(registry, removeFunction) {
         registry.push(removeFunction);
         return function () {
            removeFunction();
            var index = registry.indexOf(removeFunction);
            if (index !== -1) {
               registry.splice(index, 1);
            }
         };
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function purgeAutoRemoveRegistries() {
         for (var _len3 = arguments.length, registries = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            registries[_key3] = arguments[_key3];
         }

         registries.forEach(function (registry) {
            registry.forEach(function (_) {
               _();
            });
            registry.length = 0;
         });
      }
   }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_string__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Factory for i18n widget service instances.
 *
 * @module widget_services_i18n
 */




var noDeliveryToSender = { deliverToSender: false };

var primitives = {
   string: true,
   number: true,
   boolean: true
};

var normalize = memoize(function (languageTag) {
   return languageTag.toLowerCase().replace(/[_]/g, '-');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates a widget-specific helper for `didChangeLocale` events.
 *
 * The helper automatically observes the any changes to the locale that was configured under the `i18n`
 * feature, and can be asked for localization based on that locale. It also allows to `track` the current
 * language tag for all observed locale topics under the object `i18n.tags`. This object can be used to set
 * up value bindings and/or watchers so that other components may react to locale-changes in a data-driven
 * way.
 *
 * The i18n helper is an {@link AxI18nHandler} for the feauture "i18n" by default, but allows to create
 * handlers for other feature-paths using the `forFeature` method.
 * Using `release`, it is possible to free the eventBus subscription held by an i18n helper instance and by
 * all feature-handlers created by it.
 *
 * @param {AxContext} context
 *    the widget context/scope that the handler should work with. It uses the `eventBus` property there
 *    with which it can do the event handling
 * @param {AxConfiguration} configuration
 *    the (global) configuration to use for supplying a default locale if the widget does not have an 'i18n'
 *    feature
 * @param {Object} [optionalOptions]
 *    the fallback language tag to use when no localization is available for a locale's current language tag
 * @param {String} [optionalOptions.fallback]
 *    the fallback language tag to use when no localization is available for a locale's current language tag
 * @param {Boolean} [optionalOptions.strict]
 *    if `true`, localizations are only used if the language tags exactly match the current locale's tag
 *    (after normalizing case and dash/underscore). If `false` (default), specific requests can be satisfied
 *    by general localizations (e.g. a translation for 'en' may be used when missing 'en_GB' was requested).
 *
 * @return {AxI18n}
 *    an i18n instance
 */
function create(context, configuration) {
   var optionalOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
   var features = context.features,
       eventBus = context.eventBus;
   var _optionalOptions$fall = optionalOptions.fallback,
       fallback = _optionalOptions$fall === undefined ? 'en' : _optionalOptions$fall,
       _optionalOptions$stri = optionalOptions.strict,
       strict = _optionalOptions$stri === undefined ? false : _optionalOptions$stri;

   var handlers = {};
   var tags = {};
   var callbacks = {};

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   var release = eventBus.subscribe('didChangeLocale', handleLocaleChange);

   var fallbackLocale = configuration.get('i18n.locales.default', fallback);
   var defaultLocale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["path"])(features, 'i18n.locale', fallbackLocale);

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * An i18n instance allows to create {@link #AxI18nHandler} instances for any feature, but is itself also
    * an i18n handler for the feature `i18n`.
    * So if the widget using the {@link widget_services#axI18n axI18n} injection uses the recommended
    * name `i18n` for the localization feature, use this directly with the i18n handler API.
    *
    * @constructor
    * @name AxI18n
    */
   return Object.assign({
      forFeature: forFeature,
      release: release
   }, forLocale(defaultLocale, 'i18n'));

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Creates and returns an i18n handler for the loclization configuration under the given
    * [feature path](../glossary#feature-path).
    * The configuration value is expected to be an object with the key `locale` that is configured with the
    * locale to use in the widget instance.
    *
    * @param {String} featurePath
    *    the feature path localization configuration can be found at
    *
    * @return {AxI18nHandler}
    *    the i18n handler for the given feature path
    *
    * @memberof AxI18n
    */
   function forFeature(featurePath) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(featurePath).hasType(String).isNotNull();
      if (handlers[featurePath]) {
         return handlers[featurePath];
      }

      var locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["path"])(features, featurePath + '.locale');
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(locale).hasType(String).isNotNull('axI18n: missing feature-configuration \'' + featurePath + '.locale\' (widget: ' + context.widget.id + ')');

      var api = forLocale(locale, featurePath);
      handlers[featurePath] = api;
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function forLocale(locale, trackingProperty) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_assert__["a" /* default */])(trackingProperty).hasType(String).isNotNull();
      var localize = strict ? localizeStrict : localizeRelaxed;

      /**
       * @constructor
       * @name AxI18nHandler
       */
      return {
         format: format,
         languageTag: languageTag,

         /**
          * Localize the given internationalized object using the given languageTag.
          *
          * If i18n is configured to be _strict_, the currently active language tag is used to lookup a
          * translation.
          * If nothing is found, the `languageTag` argument is tried.
          * If still nothing is found, `undefined` is returned.
          *
          * In the case _strict_ is set to `false`, the behavior is the same as in _strict_ mode if an exact
          * localization is available.
          * If not, the language tag is successively generalized by stripping off the rightmost sub-tags
          * until a localization is found.
          * Eventually, a fallback (default: 'en') is used.
          * This behavior is especially useful for controls (such as a datepicker), where we cannot
          * anticipate all required language tags, as they may be app-specific.
          *
          * @param {*} i18nValue
          *    a possibly internationalized value:
          *    - when passing a primitive value, it is returned as-is
          *    - when passing an object, the languageTag is used as a key within that object
          * @param {*} [optionalFallbackValue]
          *    a value to use if no localization is available for the given language tag
          * @param {String} [languageTag]
          *    a language tag to override the current locale tag. Only available in _strict_ mode
          *
          * @return {*}
          *    the localized value if found, the fallback (or `undefined`) otherwise
          *
          * @memberof AxI18nHandler
          * @name localize
          */
         localize: localize,
         track: track,
         update: update,
         whenLocaleChanged: whenLocaleChanged
      };

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Updates the language tag for the configured locale by emitting the according `changeLocaleRequest`
       * event.
       *
       * @param {String} languageTag
       *    the language tag to propagate
       *
       * @return {Promise}
       *    the promise of the event cycle
       *
       * @memberof AxI18nHandler
       */
      function update(languageTag) {
         return eventBus.publishAndGatherReplies('changeLocaleRequest.' + locale, {
            locale: locale,
            languageTag: languageTag
         }, noDeliveryToSender).then(function () {
            tags[locale] = languageTag;
         });
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Returns the language tag set for the configured locale.
       * If no tag is available, `undefined` is returned.
       *
       * @return {String}
       *    the active language tag or `undefined`
       *
       * @memberof AxI18nHandler
       */
      function languageTag() {
         return tags[locale];
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * References the current i18n state as an object under the given property of the context.
       *
       * If this method is not used, changes to the locale are still observed by the handler, but not
       * tracked on the context object. Use this to react to locale-changes in a data-driven fashion, for
       * example by using an AngularJS watcher.
       *
       * By default, the i18n state is stored under the feature path used to create this i18n handler ("i18n"
       * for the default handler provided by the "axI18n" widget service injection).
       *
       * The tracking structure stored under the property is an object that has two properties:
       *
       *   - `locale` is the constant locale topic that was configured for the tracked feature
       *   - `tags` is an object mapping all locale names to their normalized current language tag
       *
       * Note that tracked language tags are *normalized*, i.e. converted to lowercase with underscores (`_`)
       * replaced by dashes (`-`).
       *
       * @param {String} [property=trackingProperty]
       *    name of the context property to store the state under, defaults to the feature path
       *
       * @memberof AxI18nHandler
       */
      function track() {
         var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : trackingProperty;

         __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_object__["setPath"])(context, property, { locale: locale, tags: tags });
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Format an i18n value, by first localizing it and then applying substitutions.
       *
       * These are equivalent:
       * - `string.format( axI18n.localize( i18nValue ), numericArgs, namedArgs )`
       * - `axI18n.format( i18nValue, numericArgs, namedArgs )`.
       *
       * @param {String} i18nValue
       *    the value to localize and then format
       * @param {Array} [optionalIndexedReplacements]
       *    replacements for any numeric placeholders in the localized value
       * @param {Object} [optionalNamedReplacements]
       *    replacements for any named placeholders in the localized value
       *
       * @return {String}
       *    the formatted string after localization
       *
       * @memberof AxI18nHandler
       */
      function format(i18nValue, optionalIndexedReplacements, optionalNamedReplacements) {
         var formatString = localize(i18nValue);
         return formatString && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utilities_string__["format"])(formatString, optionalIndexedReplacements, optionalNamedReplacements);
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      /**
       * Registers a callback that is called whenever the new valid locale was received via event.
       *
       * @param {Function} callback
       *    the function to call on locale change
       *
       * @memberof AxI18nHandler
       */
      function whenLocaleChanged(callback) {
         callbacks[locale] = callbacks[locale] || [];
         callbacks[locale].push(callback);
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function localizeRelaxed(i18nValue, optionalFallbackValue) {
         if (!i18nValue || primitives[typeof i18nValue === 'undefined' ? 'undefined' : _typeof(i18nValue)]) {
            // value is not internationalized
            return i18nValue;
         }

         var tag = tags[locale];
         var tagParts = tag ? tag.replace(/-/g, '_').split('_') : [];
         while (tagParts.length > 0) {
            var currentLocaleTag = tagParts.join('-');
            var value = localizeStrict(i18nValue, undefined, currentLocaleTag);
            if (value !== undefined) {
               return value;
            }
            tagParts.pop();
         }

         return fallback ? localizeStrict(i18nValue, optionalFallbackValue, fallback) : optionalFallbackValue;
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function localizeStrict(i18nValue, optionalFallbackValue) {
         var languageTag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : tags[locale];

         if (!i18nValue || primitives[typeof i18nValue === 'undefined' ? 'undefined' : _typeof(i18nValue)]) {
            // Value is not i18n
            return i18nValue;
         }
         if (!languageTag) {
            return optionalFallbackValue;
         }

         // Try one direct lookup before scanning the input keys,
         // assuming that language-tags are written in consistent style.
         var value = i18nValue[languageTag];
         if (value !== undefined) {
            return value;
         }

         var lookupKey = normalize(languageTag);
         var availableTags = Object.keys(i18nValue);
         var n = availableTags.length;
         for (var i = 0; i < n; ++i) {
            var t = availableTags[i];
            if (normalize(t) === lookupKey) {
               return i18nValue[t];
            }
         }

         return optionalFallbackValue;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function handleLocaleChange(_ref) {
      var locale = _ref.locale,
          languageTag = _ref.languageTag;

      var newTag = normalize(languageTag);
      if (newTag === tags[locale]) {
         return;
      }
      tags[locale] = newTag;
      callbacks[locale] = callbacks[locale] || [];
      callbacks[locale].forEach(function (f) {
         f(languageTag);
      });
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function memoize(f) {
   var cache = {};
   return function (key) {
      var value = cache[key];
      if (value === undefined) {
         value = f(key);
         cache[key] = value;
      }
      return value;
   };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Factory for i18n widget service instances.
 *
 * @module widget_services_visibility
 */

// <-- temporary guard until https://github.com/LaxarJS/laxar-dox/issues/21 is fixed
var noDeliveryToSender = { deliverToSender: false };
var noOp = function noOp() {};

/**
 * Creates a widget-specific helper for `didChangeAreaVisibility` events.
 *
 * @param {AxContext} context
 *    the widget context/scope that the handler should work with. It uses the `eventBus` property there
 *    with which it can do the event handling. The visibility handler will set the boolean context property
 *    `isVisible` which can be used to determine the visibility state of the entire widget, e.g. for use in
 *    templates.
 *
 * @param {AxAreaHelper} areaHelper
 *    an area helper to qualify/unqualify names for this widget's areas
 *
 * @return {AxVisibility}
 *    a visibility handler instance
 */
function create(context, areaHelper) {

   /**
    * @constructor
    * @name AxVisibility
    */
   var api = {
      /**
       * Query the current visibility state.
       *
       * @return {Boolean}
       *    this current visibility status as determined through eventBus events
       *
       * @memberof AxVisibility
       */
      isVisible: function isVisible() {
         return areaHelper.isVisible(context.widget.area);
      },
      onChange: onChange,
      onHide: onHide,
      onShow: onShow,
      release: release,
      track: track,
      unsubscribe: unsubscribe,
      updateAreaVisibility: updateAreaVisibility,
      updateWidgetVisibility: updateWidgetVisibility
   };

   var isVisible = api.isVisible();

   var eventBus = context.eventBus;

   // state used for tracking the widget visibility

   var trackingProperty = void 0;
   var showListeners = [];
   var hideListeners = [];
   var unsubscribeToChanges = noOp;

   // state used for setting the visibility of the widget and its areas
   var visibilityByArea = {};
   var overrideByArea = {};
   var unsubscribeToAreaRequests = noOp;

   return api;

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Registers a callback to be run when this widget becomes hidden.
    *
    * @param {Function} callback
    *    a callback to be invoked whenever the widget becomes visible, with a boolean argument indicating
    *    the new visibility state (`false`). The callback will *not* be invoked for the start value (`false`).
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function onHide(callback) {
      hideListeners.push(callback);
      updateChangeSubscription();
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Registers a callback to be run when this widget becomes visbile.
    *
    * @param {Function} callback
    *    a callback to be invoked whenever the widget becomes visible, with a boolean argument indicating
    *    the new visibility state (`true`).
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function onShow(callback) {
      showListeners.push(callback);
      updateChangeSubscription();
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Registers a callback for changes to this widget's visibility.
    *
    * @param {Function} callback
    *    a callback to be invoked whenever the widget visibility changes, with a boolean argument indicating
    *    the new visibility state. The callback will *not* be invoked for the start value (`false`).
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function onChange(callback) {
      showListeners.push(callback);
      hideListeners.push(callback);
      updateChangeSubscription();
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Starts tracking visibility as a property on the context.
    *
    * Calling this repeatedly with different property names will stop previous properties from receiving
    * further updates, but will not remove previously set tracking properties from the context object.
    *
    * @param {String} property
    *    the name of the context property to maintain
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function track() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'isVisible';

      trackingProperty = property;
      if (property !== null) {
         context[property] = isVisible;
      }
      updateChangeSubscription();
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Triggers a visibility change to the given area. The visibility of the area and its nested areas is
    * re-evaluated over the event bus. Use this to implement e.g. tabbing/accordion/expander widgets.
    *
    * @param {Object} visibilityByLocalArea
    *   A mapping of local area names (without the widget ID) to their new visibility state (Boolean).
    *   Areas that are omitted here are left as is. Areas that have not been set at all just assume the
    *   visibility state of the containing area.
    * @param {Object} [optionalOptions]
    *   Additional options
    * @param {Object} [optionalOptions.overrideContainer]
    *   Allows the specified areas to become visible even if the widget's container area is not visible.
    *
    * @return {Promise}
    *    a promise that is resolved (without a value) when the visibility change was applied
    *
    * @memberof AxVisibility
    */
   function updateAreaVisibility(visibilityByLocalArea) {
      var optionalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _optionalOptions$over = optionalOptions.overrideContainer,
          overrideContainer = _optionalOptions$over === undefined ? false : _optionalOptions$over;


      if (unsubscribeToAreaRequests === noOp) {
         var requestEvent = 'changeAreaVisibilityRequest.' + context.widget.id;
         unsubscribeToAreaRequests = eventBus.subscribe(requestEvent, responder(isAreaVisible));
      }

      var promises = Object.keys(visibilityByLocalArea).map(function (name) {
         var oldVisible = visibilityByArea[name];
         var oldOverride = overrideByArea[name];
         var visible = visibilityByArea[name] = visibilityByLocalArea[name];
         if (overrideContainer) {
            overrideByArea[name] = overrideContainer;
         } else if (oldOverride) {
            delete overrideByArea[name];
         }
         if (oldVisible !== visible || oldOverride !== overrideByArea[name]) {
            var area = areaHelper.fullName(name);
            var eventName = 'changeAreaVisibilityRequest.' + area + '.' + visible;
            return eventBus.publishAndGatherReplies(eventName, { area: area, visible: visible }, noDeliveryToSender);
         }
         return Promise.resolve();
      });

      return Promise.all(promises).then(noOp);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /* @private helper for updateAreaVisibility */
   function isAreaVisible(localAreaName, containerVisible) {
      var areaVisible = visibilityByArea[localAreaName];
      if (areaVisible === undefined) {
         return containerVisible;
      }
      return areaVisible && (containerVisible || overrideByArea[localAreaName]);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Triggers a visibility change the widget itself and all its areas, always overriding its container
    * visibility with the given value.
    * This simplifies implementing popup/popover/layer widgets, which always live in an invisible container
    * area, but need to show/hide all their owned areas.
    *
    * To control the visibility of individual areas, use #updateAreaVisibility
    *
    * @param {Boolean} visible
    *   The new visibility state of the widget.
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function updateWidgetVisibility(visible) {
      var widget = context.widget.id;
      var eventName = 'changeWidgetVisibilityRequest.' + widget + '.' + visible;
      return eventBus.publishAndGatherReplies(eventName, { widget: widget, visible: visible }, noDeliveryToSender);
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   /**
    * Remove the given callback (registered through one or more of the on... methods) from any subscriptions.
    *
    * @param {Function} callback
    *    a callback that was previously registered using any of the `on...` methods.
    *    It will be removed from all registrations. Passing an unknown callback has no effect.
    *
    * @return {AxVisibility}
    *    this instance for chaining
    *
    * @memberof AxVisibility
    */
   function unsubscribe(callback) {
      [showListeners, hideListeners].forEach(remove);

      function remove(array) {
         var index = array.indexOf(callback);
         if (index === -1) {
            return;
         }
         array.splice(index, 1);
         remove(array);
      }
      return api;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function release() {
      unsubscribeToAreaRequests();
      unsubscribeToChanges();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function updateChangeSubscription() {
      var needsSubscription = trackingProperty || showListeners.length + hideListeners.length;
      if (needsSubscription && unsubscribeToChanges === noOp) {
         unsubscribeToChanges = eventBus.subscribe('didChangeAreaVisibility.' + context.widget.area, function (_ref) {
            var visible = _ref.visible;

            if (visible === isVisible) {
               return;
            }
            isVisible = visible;
            if (trackingProperty) {
               context[trackingProperty] = visible;
            }
            (visible ? showListeners : hideListeners).forEach(function (f) {
               return f(visible);
            });
         });
      } else if (unsubscribeToChanges && !needsSubscription) {
         unsubscribeToChanges();
         unsubscribeToChanges = noOp;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function responder(callback) {
      return function (_ref2) {
         var area = _ref2.area,
             containerVisible = _ref2.visible;

         var visible = callback(areaHelper.localName(area), containerVisible);
         if (visible === true || visible === false) {
            var didEvent = 'didChangeAreaVisibility.' + area + '.' + visible;
            eventBus.publish(didEvent, { area: area, visible: visible }, noDeliveryToSender);
         }
      };
   }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = createCollectors;
/* harmony export (immutable) */ __webpack_exports__["b"] = createProviders;
/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/**
 * Accepts and keeps laxarjs application data from various laxarjs services, and makes it available to
 * development tools.
 *
 * This module has an internal API (the `collectors`-service), and an external API (the `providers` service).
 * The collectors service is fed data by the other laxarjs services, while the provider allows external
 * listeners to subscribe to that data's changes, or to retrieve snapshots of it.
 */



// eslint-disable-next-line valid-jsdoc
/** Collects inspection data from laxarjs services */
function createCollectors(configuration, log) {
   return {
      pages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pages__["a" /* createCollector */])(configuration, log)
   };
}

// eslint-disable-next-line valid-jsdoc
/** Exposes inspection data from laxarjs services to development tools */
function createProviders(collectors) {
   return {
      pages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pages__["b" /* createProvider */])(collectors.pages)
   };
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_utilities_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utilities_string__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_runtime_services__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_runtime_plain_adapter__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "object", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_utilities_object__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "string", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_utilities_string__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "plainAdapter", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_runtime_plain_adapter__; });
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instances", function() { return instances; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * The API entry point for boostrapping LaxarJS applications.
 * Also, provides a couple of utilities to deal with assertions, objects and strings.
 *
 * @module laxar
 */








// Get a reference to the global object of the JS environment.
// See http://stackoverflow.com/a/6930376 for details
var global = void 0;
try {
   // eslint-disable-next-line no-new-func, no-eval
   global = Function('return this')() || (1, eval)('this');
} catch (_) {
   // if it forbids eval, it's probably a browser
   global = window;
}

/**
 * Bootstraps AngularJS on the provided `anchorElement` and sets up the LaxarJS runtime.
 *
 * @param {HTMLElement} anchorElement
 *    the element to insert the page in
 * @param {Object} [optionalOptions]
 *    optional options for bootstrapping
 * @param {Array} optionalOptions.widgetAdapters
 *    widget adapters that are used in this application
 * @param {Object} optionalOptions.configuration
 *    configuration for the laxar application. See http://laxarjs.org/docs/laxar-latest/manuals/configuration/
 *    for further information on available properties
 * @param {Object} optionalOptions.artifacts
 *    an artifact listing for the application, generated by the utilized built tool (e.g. webpack)
 *
 * @memberof laxar
 */
function bootstrap(anchorElement) {
   var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
       _ref$widgetAdapters = _ref.widgetAdapters,
       widgetAdapters = _ref$widgetAdapters === undefined ? [] : _ref$widgetAdapters,
       _ref$configuration = _ref.configuration,
       configuration = _ref$configuration === undefined ? {} : _ref$configuration,
       _ref$artifacts = _ref.artifacts,
       artifacts = _ref$artifacts === undefined ? {} : _ref$artifacts;

   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__["a" /* default */])(anchorElement).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__["a" /* default */])(widgetAdapters).hasType(Array).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__["a" /* default */])(artifacts).hasType(Object).isNotNull();
   __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utilities_assert__["a" /* default */])(configuration).hasType(Object).isNotNull();

   var services = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_runtime_services__["a" /* create */])(configuration, artifacts);

   var log = services.log,
       themeLoader = services.themeLoader,
       widgetLoader = services.widgetLoader;

   themeLoader.load();

   var adapterServices = {
      adapterUtilities: services.adapterUtilities,
      artifactProvider: services.artifactProvider,
      configuration: services.configuration,
      flowService: services.flowService,
      globalEventBus: services.globalEventBus,
      heartbeat: services.heartbeat,
      log: log,
      storage: services.storage,
      tooling: services.toolingProviders,
      // TODO (https://github.com/LaxarJS/laxar/issues/363 and https://github.com/LaxarJS/laxar/issues/397)
      // Fixing the latter issue broke laxar-mocks, since it could no longer access the widget loader.
      // To temporarily fix this, we re-add the widget loader to the exposed services.
      // Nevertheless on the medium /short term we want to be able to load single widgets into the page
      // (the first issue above) and use the api that will be created for this in laxar-mocks.
      widgetLoader: widgetLoader
   };
   var adapterModules = [__WEBPACK_IMPORTED_MODULE_4__lib_runtime_plain_adapter__].concat(_toConsumableArray(widgetAdapters));
   var adapters = bootstrapWidgetAdapters(anchorElement, adapterServices, adapterModules, artifacts);
   widgetLoader.registerWidgetAdapters(adapters);

   announceInstance(services);

   var flowName = services.configuration.get('flow.name');
   if (!flowName) {
      log.trace('LaxarJS Bootstrap complete: No `flow.name` configured.');
      return;
   }

   whenDocumentReady(function () {
      log.trace('LaxarJS loading Flow: ' + flowName);
      services.pageService.createControllerFor(anchorElement);
      services.flowController.loadFlow().then(function () {
         log.trace('Flow loaded');
      }, function (err) {
         log.fatal('LaxarJS failed to load flow.');
         log.fatal('Error [0].\nStack: [1]', err, err && err.stack);
      });
   });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function whenDocumentReady(callback) {
   if (document.readyState === 'complete') {
      callback();
   } else {
      document.addEventListener('DOMContentLoaded', callback);
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bootstrapWidgetAdapters(anchorElement, services, adapterModules, artifacts) {
   var log = services.log;

   var adapterModulesByTechnology = {};
   var artifactsByTechnology = {};

   adapterModules.forEach(function (module) {
      adapterModulesByTechnology[module.technology] = module;
      artifactsByTechnology[module.technology] = { widgets: [], controls: [] };
   });

   ['widgets', 'controls'].forEach(function (type) {
      artifacts[type].forEach(function (artifact) {
         var technology = artifact.descriptor.integration.technology;

         if (!adapterModulesByTechnology[technology]) {
            var name = artifact.descriptor.name;

            log.fatal('Unknown widget technology: [0], required by [1] "[2]"', technology, type, name);
            return;
         }
         artifactsByTechnology[technology][type].push(artifact);
      });
   });

   var adaptersByTechnology = {};
   Object.keys(adapterModulesByTechnology).forEach(function (technology) {
      var adapterModule = adapterModulesByTechnology[technology];
      var artifacts = artifactsByTechnology[technology];
      adaptersByTechnology[technology] = adapterModule.bootstrap(artifacts, services, anchorElement);
   });
   return adaptersByTechnology;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function announceInstance(services) {
   var configuration = services.configuration,
       log = services.log,
       storage = services.storage;


   if (configuration.get('tooling.enabled')) {
      instances()[configuration.get('name', 'unnamed')] = services;
   }

   var idGenerator = configuration.get('logging.instanceId', simpleId);
   if (idGenerator === false) {
      return;
   }

   var instanceIdStorageKey = 'axLogTags.INST';
   var store = storage.getApplicationSessionStorage();
   var instanceId = store.getItem(instanceIdStorageKey);
   if (!instanceId) {
      instanceId = idGenerator();
      store.setItem(instanceIdStorageKey, instanceId);
   }
   log.addTag('INST', instanceId);

   function simpleId() {
      return '' + Date.now() + Math.floor(Math.random() * 100);
   }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Provide tooling access to LaxarJS services.
 *
 * Each laxar#bootstrap call creates a new set of services such as a logger, global event bus etc. For tools
 * like the laxar-developer-tools-widget, it may be necessary to access these services for a given instance,
 * or for all instances.
 *
 * @param {String} [optionalName]
 *   The configuration name of a LaxarJS instance to inspect.
 *   May be omitted to access all application instances by name.
 *
 * @return {Object}
 *   The tooling services for a specified instance, or for all instances that have tooling enabled.
 *
 * @memberof laxar
 */
function instances(optionalName) {
   var instances = global.laxarInstances = global.laxarInstances || {};
   return optionalName ? instances[optionalName] : instances;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/***/ })
/******/ ]);
});
//# sourceMappingURL=laxar.js.map

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(5);

var ReactCurrentOwner = __webpack_require__(17);

var warning = __webpack_require__(2);
var canDefineProperty = __webpack_require__(80);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(231);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (undefined !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (undefined !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      undefined !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      undefined !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (undefined !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (undefined !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (undefined !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(5);

var ReactChildren = __webpack_require__(426);
var ReactComponent = __webpack_require__(77);
var ReactPureComponent = __webpack_require__(430);
var ReactClass = __webpack_require__(427);
var ReactDOMFactories = __webpack_require__(428);
var ReactElement = __webpack_require__(28);
var ReactPropTypes = __webpack_require__(429);
var ReactVersion = __webpack_require__(431);

var onlyChild = __webpack_require__(433);
var warning = __webpack_require__(2);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (undefined !== 'production') {
  var ReactElementValidator = __webpack_require__(232);
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;

if (undefined !== 'production') {
  var warned = false;
  __spread = function () {
    undefined !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    warned = true;
    return _assign.apply(null, arguments);
  };
}

var React = {

  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactComponent,
  PureComponent: ReactPureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

module.exports = React;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__(348);

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {string}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */
  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    // use shadow dom when available
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(337)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var suffix = res[6]
    var asterisk = res[7]

    var repeat = suffix === '+' || suffix === '*'
    var optional = suffix === '?' || suffix === '*'
    var delimiter = prefix || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
    }
  }

  return function (obj) {
    var path = ''
    var data = obj || {}

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = encodeURIComponent(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.pattern

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = keys
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (undefined !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(29);

var invariant = __webpack_require__(1);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? undefined !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(425);
var ReactElement = __webpack_require__(28);

var emptyFunction = __webpack_require__(15);
var traverseAllChildren = __webpack_require__(434);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(29),
    _assign = __webpack_require__(5);

var ReactComponent = __webpack_require__(77);
var ReactElement = __webpack_require__(28);
var ReactPropTypeLocationNames = __webpack_require__(79);
var ReactNoopUpdateQueue = __webpack_require__(78);

var emptyObject = __webpack_require__(38);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if (undefined !== 'production') {
      validateTypeDef(Constructor, childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if (undefined !== 'production') {
      validateTypeDef(Constructor, contextTypes, 'context');
    }
    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if (undefined !== 'production') {
      validateTypeDef(Constructor, propTypes, 'prop');
    }
    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      undefined !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? undefined !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? undefined !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if (undefined !== 'production') {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      undefined !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? undefined !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
  !!ReactElement.isValidElement(spec) ? undefined !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? undefined !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (undefined !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? undefined !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? undefined !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? undefined !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? undefined !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (undefined !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        undefined !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        undefined !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function () {};
_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (undefined !== 'production') {
        undefined !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (undefined !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? undefined !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (undefined !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? undefined !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

    if (undefined !== 'production') {
      undefined !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      undefined !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

module.exports = ReactClass;

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(28);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (undefined !== 'production') {
  var ReactElementValidator = __webpack_require__(232);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(28);
var ReactPropTypeLocationNames = __webpack_require__(79);
var ReactPropTypesSecret = __webpack_require__(233);

var emptyFunction = __webpack_require__(15);
var getIteratorFn = __webpack_require__(81);
var warning = __webpack_require__(2);

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
  symbol: createPrimitiveTypeChecker('symbol'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: createElementTypeChecker(),
  instanceOf: createInstanceTypeChecker,
  node: createNodeChecker(),
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker
};

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/*eslint-disable no-self-compare*/
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/*eslint-enable no-self-compare*/

/**
 * We use an Error-like object for backward compatibility as people may call
 * PropTypes directly and inspect their output. However we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

function createChainableTypeChecker(validate) {
  if (undefined !== 'production') {
    var manualPropTypeCallCache = {};
  }
  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if (undefined !== 'production') {
      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
        var cacheKey = componentName + ':' + propName;
        if (!manualPropTypeCallCache[cacheKey]) {
          undefined !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
          manualPropTypeCallCache[cacheKey] = true;
        }
      }
    }
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
        }
        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location, propFullName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName, secret) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
    }
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!ReactElement.isValidElement(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      var actualClassName = getClassName(props[propName]);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (is(propValue, expectedValues[i])) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
    }
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (propValue === null || ReactElement.isValidElement(propValue)) {
        return true;
      }

      var iteratorFn = getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!isNode(step.value)) {
              return false;
            }
          }
        } else {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!isNode(entry[1])) {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }

      return true;
    default:
      return false;
  }
}

function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === 'symbol') {
    return true;
  }

  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;
  }

  // Fallback for non-spec compliant Symbols which are polyfilled.
  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;
  }

  return false;
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  if (isSymbol(propType, propValue)) {
    return 'symbol';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

// Returns class name of the object, if any.
function getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

module.exports = ReactPropTypes;

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(5);

var ReactComponent = __webpack_require__(77);
var ReactNoopUpdateQueue = __webpack_require__(78);

var emptyObject = __webpack_require__(38);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = ReactPureComponent;

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.4.2';

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(29);

var ReactPropTypeLocationNames = __webpack_require__(79);
var ReactPropTypesSecret = __webpack_require__(233);

var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && __webpack_require__.i({"NODE_ENV":undefined}) && undefined === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(11);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? undefined !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      undefined !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (undefined !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(11);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        undefined !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(29);

var ReactElement = __webpack_require__(28);

var invariant = __webpack_require__(1);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? undefined !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(29);

var ReactCurrentOwner = __webpack_require__(17);
var REACT_ELEMENT_TYPE = __webpack_require__(231);

var getIteratorFn = __webpack_require__(81);
var invariant = __webpack_require__(1);
var KeyEscapeUtils = __webpack_require__(424);
var warning = __webpack_require__(2);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (undefined !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          undefined !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (undefined !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ? undefined !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(7);
module.exports = __webpack_require__(25);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
// Polyfill based on:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
   (function () {
      var toStr = Object.prototype.toString;
      var isCallable = function isCallable(fn) {
         return typeof fn === 'function' || toStr.call(fn) === '[ object Function ]';
      };
      var toInteger = function toInteger(value) {
         var number = Number(value);
         if (isNaN(number)) {
            return 0;
         }
         if (number === 0 || !isFinite(number)) {
            return number;
         }
         return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function toLength(value) {
         var len = toInteger(value);
         return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      // The length property of the from method is 1.
      Array.from = function from(arrayLike /*, mapFn, thisArg */) {
         // 1. Let C be the this value.
         var C = this;

         // 2. Let items be ToObject(arrayLike).
         var items = Object(arrayLike);

         // 3. ReturnIfAbrupt(items).
         if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
         }

         // 4. If mapfn is undefined, then let mapping be false.
         // eslint-disable-next-line no-void
         var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
         var T = void 0;
         if (typeof mapFn !== 'undefined') {
            // 5. else
            // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
               throw new TypeError('Array.from: when provided, the second argument must be a function');
            }

            // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 2) {
               T = arguments[2];
            }
         }

         // 10. Let lenValue be Get(items, "length").
         // 11. Let len be ToLength(lenValue).
         var len = toLength(items.length);

         // 13. If IsConstructor(C) is true, then
         // 13. a. Let A be the result of calling the [ [Construct] ] internal method
         // of C with an argument list containing the single item len.
         // 14. a. Else, Let A be ArrayCreate(len).
         var A = isCallable(C) ? Object(new C(len)) : new Array(len);

         // 16. Let k be 0.
         var k = 0;
         // 17. Repeat, while k < len… (also steps a - h)
         var kValue = void 0;
         while (k < len) {
            kValue = items[k];
            if (mapFn) {
               A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
               A[k] = kValue;
            }
            k += 1;
         }
         // 18. Let putStatus be Put(A, "length", len, true).
         A.length = len;
         // 20. Return A.
         return A;
      };
   })();
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Polyfill based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Alternatives seem to cause problems with MSIE (e.g. by relying on a `global` object).
if (!Array.prototype.includes) {
   // eslint-disable-next-line no-extend-native
   Array.prototype.includes = function (searchElement, optionalFromIndex) {
      'use strict';

      if (this == null) {
         throw new TypeError('Array.prototype.includes called on null or undefined');
      }
      var list = Object(this);
      var n = parseInt(list.length, 10) || 0;
      if (n === 0) {
         return false;
      }

      var start = parseInt(optionalFromIndex, 10) || 0;
      var k = start >= 0 ? start : Math.max(0, n + start);

      // detect special case (only NaN !== NaN):
      // eslint-disable-next-line no-self-compare
      if (searchElement !== searchElement) {
         while (k < n) {
            if (list[k] !== list[k]) {
               return true;
            }
            k++;
         }
         return false;
      }

      while (k < n) {
         if (searchElement === list[k]) {
            return true;
         }
         k++;
      }
      return false;
   };
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
// Polyfill based on:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (!Object.assign) {
   Object.assign = function (target) {
      'use strict';
      // We must check against these specific cases.

      if (target === undefined || target === null) {
         throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
         var source = arguments[index];
         if (source !== undefined && source !== null) {
            for (var nextKey in source) {
               // eslint-disable-next-line max-depth
               if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
               }
            }
         }
      }
      return output;
   };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6)(__webpack_require__(5))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (typeof input === 'string') {
      this.url = input
    } else {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split('\r\n').forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "(function (root) {\n\n  // Store setTimeout reference so promise-polyfill will be unaffected by\n  // other code modifying setTimeout (like sinon.useFakeTimers())\n  var setTimeoutFunc = setTimeout;\n\n  function noop() {}\n  \n  // Polyfill for Function.prototype.bind\n  function bind(fn, thisArg) {\n    return function () {\n      fn.apply(thisArg, arguments);\n    };\n  }\n\n  function Promise(fn) {\n    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');\n    if (typeof fn !== 'function') throw new TypeError('not a function');\n    this._state = 0;\n    this._handled = false;\n    this._value = undefined;\n    this._deferreds = [];\n\n    doResolve(fn, this);\n  }\n\n  function handle(self, deferred) {\n    while (self._state === 3) {\n      self = self._value;\n    }\n    if (self._state === 0) {\n      self._deferreds.push(deferred);\n      return;\n    }\n    self._handled = true;\n    Promise._immediateFn(function () {\n      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;\n      if (cb === null) {\n        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);\n        return;\n      }\n      var ret;\n      try {\n        ret = cb(self._value);\n      } catch (e) {\n        reject(deferred.promise, e);\n        return;\n      }\n      resolve(deferred.promise, ret);\n    });\n  }\n\n  function resolve(self, newValue) {\n    try {\n      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure\n      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');\n      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {\n        var then = newValue.then;\n        if (newValue instanceof Promise) {\n          self._state = 3;\n          self._value = newValue;\n          finale(self);\n          return;\n        } else if (typeof then === 'function') {\n          doResolve(bind(then, newValue), self);\n          return;\n        }\n      }\n      self._state = 1;\n      self._value = newValue;\n      finale(self);\n    } catch (e) {\n      reject(self, e);\n    }\n  }\n\n  function reject(self, newValue) {\n    self._state = 2;\n    self._value = newValue;\n    finale(self);\n  }\n\n  function finale(self) {\n    if (self._state === 2 && self._deferreds.length === 0) {\n      Promise._immediateFn(function() {\n        if (!self._handled) {\n          Promise._unhandledRejectionFn(self._value);\n        }\n      });\n    }\n\n    for (var i = 0, len = self._deferreds.length; i < len; i++) {\n      handle(self, self._deferreds[i]);\n    }\n    self._deferreds = null;\n  }\n\n  function Handler(onFulfilled, onRejected, promise) {\n    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;\n    this.onRejected = typeof onRejected === 'function' ? onRejected : null;\n    this.promise = promise;\n  }\n\n  /**\n   * Take a potentially misbehaving resolver function and make sure\n   * onFulfilled and onRejected are only called once.\n   *\n   * Makes no guarantees about asynchrony.\n   */\n  function doResolve(fn, self) {\n    var done = false;\n    try {\n      fn(function (value) {\n        if (done) return;\n        done = true;\n        resolve(self, value);\n      }, function (reason) {\n        if (done) return;\n        done = true;\n        reject(self, reason);\n      });\n    } catch (ex) {\n      if (done) return;\n      done = true;\n      reject(self, ex);\n    }\n  }\n\n  Promise.prototype['catch'] = function (onRejected) {\n    return this.then(null, onRejected);\n  };\n\n  Promise.prototype.then = function (onFulfilled, onRejected) {\n    var prom = new (this.constructor)(noop);\n\n    handle(this, new Handler(onFulfilled, onRejected, prom));\n    return prom;\n  };\n\n  Promise.all = function (arr) {\n    var args = Array.prototype.slice.call(arr);\n\n    return new Promise(function (resolve, reject) {\n      if (args.length === 0) return resolve([]);\n      var remaining = args.length;\n\n      function res(i, val) {\n        try {\n          if (val && (typeof val === 'object' || typeof val === 'function')) {\n            var then = val.then;\n            if (typeof then === 'function') {\n              then.call(val, function (val) {\n                res(i, val);\n              }, reject);\n              return;\n            }\n          }\n          args[i] = val;\n          if (--remaining === 0) {\n            resolve(args);\n          }\n        } catch (ex) {\n          reject(ex);\n        }\n      }\n\n      for (var i = 0; i < args.length; i++) {\n        res(i, args[i]);\n      }\n    });\n  };\n\n  Promise.resolve = function (value) {\n    if (value && typeof value === 'object' && value.constructor === Promise) {\n      return value;\n    }\n\n    return new Promise(function (resolve) {\n      resolve(value);\n    });\n  };\n\n  Promise.reject = function (value) {\n    return new Promise(function (resolve, reject) {\n      reject(value);\n    });\n  };\n\n  Promise.race = function (values) {\n    return new Promise(function (resolve, reject) {\n      for (var i = 0, len = values.length; i < len; i++) {\n        values[i].then(resolve, reject);\n      }\n    });\n  };\n\n  // Use polyfill for setImmediate for performance gains\n  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||\n    function (fn) {\n      setTimeoutFunc(fn, 0);\n    };\n\n  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {\n    if (typeof console !== 'undefined' && console) {\n      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console\n    }\n  };\n\n  /**\n   * Set the immediate function to execute callbacks\n   * @param fn {function} Function to execute\n   * @deprecated\n   */\n  Promise._setImmediateFn = function _setImmediateFn(fn) {\n    Promise._immediateFn = fn;\n  };\n\n  /**\n   * Change the function to execute on unhandled rejection\n   * @param {function} fn Function to execute on unhandled rejection\n   * @deprecated\n   */\n  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {\n    Promise._unhandledRejectionFn = fn;\n  };\n  \n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = Promise;\n  } else if (!root.Promise) {\n    root.Promise = Promise;\n  }\n\n})(this);\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_promise_polyfill_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_promise_polyfill_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_script_loader_promise_polyfill_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch_fetch_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch_fetch_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_whatwg_fetch_fetch_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_polyfills_array_from_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_polyfills_array_from_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_polyfills_array_from_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_polyfills_array_includes_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_polyfills_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_polyfills_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_polyfills_object_assign_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_polyfills_object_assign_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_polyfills_object_assign_js__);
// script-loader works for MSIE (in contrast to the core-js loader)






/***/ })
/******/ ]);
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(34);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(29);

var ReactNoopUpdateQueue = __webpack_require__(78);

var canDefineProperty = __webpack_require__(80);
var emptyObject = __webpack_require__(38);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? undefined !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (undefined !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          undefined !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

module.exports = ReactComponent;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(2);

function warnNoop(publicInstance, callerName) {
  if (undefined !== 'production') {
    var constructor = publicInstance.constructor;
    undefined !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (undefined !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (undefined !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ })

/******/ });
//# sourceMappingURL=vendor.bundle.js.map