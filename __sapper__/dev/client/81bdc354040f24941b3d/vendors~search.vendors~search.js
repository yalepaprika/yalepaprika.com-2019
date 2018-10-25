(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~search"],{

/***/ "./node_modules/eases-jsnext/dist/eases.es.js":
/*!****************************************************!*\
  !*** ./node_modules/eases-jsnext/dist/eases.es.js ***!
  \****************************************************/
/*! exports provided: backInOut, backIn, backOut, bounceInOut, bounceIn, bounceOut, circInOut, circIn, circOut, cubicInOut, cubicIn, cubicOut, elasticInOut, elasticIn, elasticOut, expoInOut, expoIn, expoOut, linear, quadInOut, quadIn, quadOut, quartInOut, quartIn, quartOut, quintInOut, quintIn, quintOut, sineInOut, sineIn, sineOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoInOut", function() { return expoInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoIn", function() { return expoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoOut", function() { return expoOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartInOut", function() { return quarticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartIn", function() { return quarticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartOut", function() { return quarticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintInOut", function() { return qinticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintIn", function() { return qinticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintOut", function() { return qinticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineInOut", function() { return sineInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineIn", function() { return sineIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineOut", function() { return sineOut; });
function backInOut(t) {
  var s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s))
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
}

function backIn(t) {
  var s = 1.70158;
  return t * t * ((s + 1) * t - s)
}

function backOut(t) {
  var s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1
}

function bounceOut(t) {
  var a = 4.0 / 11.0;
  var b = 8.0 / 11.0;
  var c = 9.0 / 10.0;

  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;

  var t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72
}

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t)
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

function circOut(t) {
  return Math.sqrt(1 - ( --t * t ))
}

function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

function cubicIn(t) {
  return t * t * t
}

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0
}

function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

function linear(t) {
  return t
}

function quadInOut(t) {
    t /= 0.5;
    if (t < 1) return 0.5*t*t
    t--;
    return -0.5 * (t*(t-2) - 1)
}

function quadIn(t) {
  return t * t
}

function quadOut(t) {
  return -t * (t - 2.0)
}

function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

function quarticIn(t) {
  return Math.pow(t, 4.0)
}

function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

function qinticIn(t) {
  return t * t * t * t * t
}

function qinticOut(t) {
  return --t * t * t * t * t + 1
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI*t) - 1)
}

function sineIn (t) {
  var v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1
  else return 1 - v
}

function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}




/***/ }),

/***/ "./node_modules/lunr/lunr.js":
/*!***********************************!*\
  !*** ./node_modules/lunr/lunr.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.1
 * Copyright (C) 2018 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.1"
/*!
 * lunr.utils
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === void 0 || result === '') continue

      if (result instanceof Array) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2018 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      } else {
        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        })
      }
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node,
      wildcardFound = false

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * As soon as a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      wildcardFound = true
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next

      // TODO: is this needed anymore?
      if (wildcardFound) {
        node.edges["*"] = root
      }
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.complete

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = {},
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2018 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),

/***/ "./node_modules/svelte-transitions-fly/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/svelte-transitions-fly/module.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "./node_modules/eases-jsnext/dist/eases.es.js");


function fly(node, ref) {
	var delay = ref.delay; if ( delay === void 0 ) delay = 0;
	var duration = ref.duration; if ( duration === void 0 ) duration = 400;
	var easing = ref.easing; if ( easing === void 0 ) easing = eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicOut"];
	var x = ref.x; if ( x === void 0 ) x = 0;
	var y = ref.y; if ( y === void 0 ) y = 0;

	var style = getComputedStyle(node);
	var opacity = +style.opacity;
	var transform = style.transform === 'none' ? '' : style.transform;

	return {
		delay: delay,
		duration: duration,
		easing: easing,
		css: function (t) { return ("\n\t\t\ttransform: " + transform + " translate(" + ((1 - t) * x) + "px, " + ((1 - t) * y) + "px);\n\t\t\topacity: " + (t * opacity)); }
	};
}

/* harmony default export */ __webpack_exports__["default"] = (fly);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWFzZXMtanNuZXh0L2Rpc3QvZWFzZXMuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXRyYW5zaXRpb25zLWZseS9tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7OztBQ3JLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLFNBQVM7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckMsYUFBYTtBQUNiO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckMsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxpQkFBaUI7QUFDekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVcsV0FBVztBQUN0QixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixVQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDBCQUEwQjtBQUMvQywyQkFBMkIsMkJBQTJCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsK0JBQStCLGNBQWMsc0JBQXNCO0FBQ25FLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWSxXQUFXO0FBQ3ZCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVcsV0FBVztBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFF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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSx1QkFBdUI7QUFDekY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUssUUFVTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNTVHa0I7O0FBRW5CO0FBQ0EsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsZUFBZTtBQUNmLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJHQUEyRyxvQ0FBb0M7QUFDcEs7QUFDQTs7QUFFQSIsImZpbGUiOiI4MWJkYzM1NDA0MGYyNDk0MWIzZC92ZW5kb3JzfnNlYXJjaC52ZW5kb3JzfnNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuICBpZiAoKHQgKj0gMikgPCAxKVxuICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSlcbiAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpXG59XG5cbmZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxuZnVuY3Rpb24gYmFja091dCh0KSB7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDFcbn1cblxuZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgdmFyIGEgPSA0LjAgLyAxMS4wO1xuICB2YXIgYiA9IDguMCAvIDExLjA7XG4gIHZhciBjID0gOS4wIC8gMTAuMDtcblxuICB2YXIgY2EgPSA0MzU2LjAgLyAzNjEuMDtcbiAgdmFyIGNiID0gMzU0NDIuMCAvIDE4MDUuMDtcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMDtcblxuICB2YXIgdDIgPSB0ICogdDtcblxuICByZXR1cm4gdCA8IGFcbiAgICA/IDcuNTYyNSAqIHQyXG4gICAgOiB0IDwgYlxuICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgOiB0IDwgY1xuICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyXG59XG5cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjVcbn1cblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbmZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5mdW5jdGlvbiBjaXJjSW4odCkge1xuICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KVxufVxuXG5mdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKCAtLXQgKiB0ICkpXG59XG5cbmZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gNC4wICogdCAqIHQgKiB0XG4gICAgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wXG59XG5cbmZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0XG59XG5cbmZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgdmFyIGYgPSB0IC0gMS4wO1xuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbmZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiBNYXRoLnNpbigrMTMuMCAqIE1hdGguUEkvMiAqIDIuMCAqIHQpICogTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgIDogMC41ICogTWF0aC5zaW4oLTEzLjAgKiBNYXRoLlBJLzIgKiAoKDIuMCAqIHQgLSAxLjApICsgMS4wKSkgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArIDEuMFxufVxuXG5mdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5mdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMFxufVxuXG5mdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICByZXR1cm4gKHQgPT09IDAuMCB8fCB0ID09PSAxLjApXG4gICAgPyB0XG4gICAgOiB0IDwgMC41XG4gICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsICgyMC4wICogdCkgLSAxMC4wKVxuICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gKHQgKiAyMC4wKSkgKyAxLjBcbn1cblxuZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbmZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5mdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41O1xuICAgIGlmICh0IDwgMSkgcmV0dXJuIDAuNSp0KnRcbiAgICB0LS07XG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbmZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gIHJldHVybiB0ICogdFxufVxuXG5mdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIC10ICogKHQgLSAyLjApXG59XG5cbmZ1bmN0aW9uIHF1YXJ0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjBcbn1cblxuZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxuZnVuY3Rpb24gcXVhcnRpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wXG59XG5cbmZ1bmN0aW9uIHFpbnRpY0luT3V0KHQpIHtcbiAgICBpZiAoICggdCAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0XG4gICAgcmV0dXJuIDAuNSAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyIClcbn1cblxuZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxuZnVuY3Rpb24gcWludGljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxXG59XG5cbmZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5mdW5jdGlvbiBzaW5lSW4gKHQpIHtcbiAgdmFyIHYgPSBNYXRoLmNvcyh0ICogTWF0aC5QSSAqIDAuNSk7XG4gIGlmIChNYXRoLmFicyh2KSA8IDFlLTE0KSByZXR1cm4gMVxuICBlbHNlIHJldHVybiAxIC0gdlxufVxuXG5mdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBNYXRoLlBJLzIpXG59XG5cbmV4cG9ydCB7IGJhY2tJbk91dCwgYmFja0luLCBiYWNrT3V0LCBib3VuY2VJbk91dCwgYm91bmNlSW4sIGJvdW5jZU91dCwgY2lyY0luT3V0LCBjaXJjSW4sIGNpcmNPdXQsIGN1YmljSW5PdXQsIGN1YmljSW4sIGN1YmljT3V0LCBlbGFzdGljSW5PdXQsIGVsYXN0aWNJbiwgZWxhc3RpY091dCwgZXhwb0luT3V0LCBleHBvSW4sIGV4cG9PdXQsIGxpbmVhciwgcXVhZEluT3V0LCBxdWFkSW4sIHF1YWRPdXQsIHF1YXJ0aWNJbk91dCBhcyBxdWFydEluT3V0LCBxdWFydGljSW4gYXMgcXVhcnRJbiwgcXVhcnRpY091dCBhcyBxdWFydE91dCwgcWludGljSW5PdXQgYXMgcXVpbnRJbk91dCwgcWludGljSW4gYXMgcXVpbnRJbiwgcWludGljT3V0IGFzIHF1aW50T3V0LCBzaW5lSW5PdXQsIHNpbmVJbiwgc2luZU91dCB9O1xuIiwiLyoqXG4gKiBsdW5yIC0gaHR0cDovL2x1bnJqcy5jb20gLSBBIGJpdCBsaWtlIFNvbHIsIGJ1dCBtdWNoIHNtYWxsZXIgYW5kIG5vdCBhcyBicmlnaHQgLSAyLjMuMVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuOyhmdW5jdGlvbigpe1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbmZpZ3VyaW5nIGFuZCBjb25zdHJ1Y3RpbmdcbiAqIGEgbmV3IGx1bnIgSW5kZXguXG4gKlxuICogQSBsdW5yLkJ1aWxkZXIgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBpcGVsaW5lIHNldHVwXG4gKiB3aXRoIGEgdHJpbW1lciwgc3RvcCB3b3JkIGZpbHRlciBhbmQgc3RlbW1lci5cbiAqXG4gKiBUaGlzIGJ1aWxkZXIgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIGNvbmZpZ3VyYXRpb24gZnVuY3Rpb25cbiAqIHRoYXQgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLCBhbGxvd2luZyB0aGUgbGlzdCBvZiBmaWVsZHNcbiAqIGFuZCBvdGhlciBidWlsZGVyIHBhcmFtZXRlcnMgdG8gYmUgY3VzdG9taXNlZC5cbiAqXG4gKiBBbGwgZG9jdW1lbnRzIF9tdXN0XyBiZSBhZGRlZCB3aXRoaW4gdGhlIHBhc3NlZCBjb25maWcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBpZHggPSBsdW5yKGZ1bmN0aW9uICgpIHtcbiAqICAgdGhpcy5maWVsZCgndGl0bGUnKVxuICogICB0aGlzLmZpZWxkKCdib2R5JylcbiAqICAgdGhpcy5yZWYoJ2lkJylcbiAqXG4gKiAgIGRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAqICAgICB0aGlzLmFkZChkb2MpXG4gKiAgIH0sIHRoaXMpXG4gKiB9KVxuICpcbiAqIEBzZWUge0BsaW5rIGx1bnIuQnVpbGRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAc2VlIHtAbGluayBsdW5yLnRyaW1tZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0b3BXb3JkRmlsdGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdGVtbWVyfVxuICogQG5hbWVzcGFjZSB7ZnVuY3Rpb259IGx1bnJcbiAqL1xudmFyIGx1bnIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuQnVpbGRlclxuXG4gIGJ1aWxkZXIucGlwZWxpbmUuYWRkKFxuICAgIGx1bnIudHJpbW1lcixcbiAgICBsdW5yLnN0b3BXb3JkRmlsdGVyLFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgYnVpbGRlci5zZWFyY2hQaXBlbGluZS5hZGQoXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBjb25maWcuY2FsbChidWlsZGVyLCBidWlsZGVyKVxuICByZXR1cm4gYnVpbGRlci5idWlsZCgpXG59XG5cbmx1bnIudmVyc2lvbiA9IFwiMi4zLjFcIlxuLyohXG4gKiBsdW5yLnV0aWxzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIG5hbWVzcGFjZSBjb250YWluaW5nIHV0aWxzIGZvciB0aGUgcmVzdCBvZiB0aGUgbHVuciBsaWJyYXJ5XG4gKiBAbmFtZXNwYWNlIGx1bnIudXRpbHNcbiAqL1xubHVuci51dGlscyA9IHt9XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgcHJpbnRlZC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKiBAZnVuY3Rpb25cbiAqL1xubHVuci51dGlscy53YXJuID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsLmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG59KSh0aGlzKVxuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgdGhlIGZ1bmN0aW9uIHJldHVybnNcbiAqIHRoZSBlbXB0eSBzdHJpbmcsIGluIGFsbCBvdGhlciBjYXNlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIGB0b1N0cmluZ2Agb24gdGhlIHBhc3NlZCBvYmplY3QgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtBbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFzc2VkIG9iamVjdC5cbiAqIEBtZW1iZXJPZiBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMuYXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IHZvaWQgMCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKVxuICB9XG59XG5cbi8qKlxuICogQ2xvbmVzIGFuIG9iamVjdC5cbiAqXG4gKiBXaWxsIGNyZWF0ZSBhIGNvcHkgb2YgYW4gZXhpc3Rpbmcgb2JqZWN0IHN1Y2ggdGhhdCBhbnkgbXV0YXRpb25zXG4gKiBvbiB0aGUgY29weSBjYW5ub3QgYWZmZWN0IHRoZSBvcmlnaW5hbC5cbiAqXG4gKiBPbmx5IHNoYWxsb3cgb2JqZWN0cyBhcmUgc3VwcG9ydGVkLCBwYXNzaW5nIGEgbmVzdGVkIG9iamVjdCB0byB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGNhdXNlIGEgVHlwZUVycm9yLlxuICpcbiAqIE9iamVjdHMgd2l0aCBwcmltaXRpdmVzLCBhbmQgYXJyYXlzIG9mIHByaW1pdGl2ZXMgYXJlIHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IGEgY2xvbmUgb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IHdoZW4gYSBuZXN0ZWQgb2JqZWN0IGlzIHBhc3NlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICovXG5sdW5yLnV0aWxzLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmopXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV0sXG4gICAgICAgIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsLnNsaWNlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2xvbmUgaXMgbm90IGRlZXAgYW5kIGRvZXMgbm90IHN1cHBvcnQgbmVzdGVkIG9iamVjdHNcIilcbiAgfVxuXG4gIHJldHVybiBjbG9uZVxufVxubHVuci5GaWVsZFJlZiA9IGZ1bmN0aW9uIChkb2NSZWYsIGZpZWxkTmFtZSwgc3RyaW5nVmFsdWUpIHtcbiAgdGhpcy5kb2NSZWYgPSBkb2NSZWZcbiAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWVcbiAgdGhpcy5fc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZVxufVxuXG5sdW5yLkZpZWxkUmVmLmpvaW5lciA9IFwiL1wiXG5cbmx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gIHZhciBuID0gcy5pbmRleE9mKGx1bnIuRmllbGRSZWYuam9pbmVyKVxuXG4gIGlmIChuID09PSAtMSkge1xuICAgIHRocm93IFwibWFsZm9ybWVkIGZpZWxkIHJlZiBzdHJpbmdcIlxuICB9XG5cbiAgdmFyIGZpZWxkUmVmID0gcy5zbGljZSgwLCBuKSxcbiAgICAgIGRvY1JlZiA9IHMuc2xpY2UobiArIDEpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkUmVmLCBzKVxufVxuXG5sdW5yLkZpZWxkUmVmLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX3N0cmluZ1ZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5maWVsZE5hbWUgKyBsdW5yLkZpZWxkUmVmLmpvaW5lciArIHRoaXMuZG9jUmVmXG4gIH1cblxuICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWVcbn1cbi8qIVxuICogbHVuci5TZXRcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgbHVuciBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuU2V0ID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuZWxlbWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgaWYgKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5sZW5ndGggPSBlbGVtZW50cy5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5lbGVtZW50c1tlbGVtZW50c1tpXV0gPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMubGVuZ3RoID0gMFxuICB9XG59XG5cbi8qKlxuICogQSBjb21wbGV0ZSBzZXQgdGhhdCBjb250YWlucyBhbGwgZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmNvbXBsZXRlID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbXB0eSBzZXQgdGhhdCBjb250YWlucyBubyBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcmVhZG9ubHlcbiAqIEB0eXBlIHtsdW5yLlNldH1cbiAqL1xubHVuci5TZXQuZW1wdHkgPSB7XG4gIGludGVyc2VjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgdW5pb246IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIE9iamVjdCB3aG9zZSBwcmVzZW5jZSBpbiB0aGlzIHNldCBpcyB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICovXG5sdW5yLlNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHJldHVybiAhIXRoaXMuZWxlbWVudHNbb2JqZWN0XVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgc2V0IGNvbnRhaW5pbmcgb25seSB0aGUgZWxlbWVudHMgdGhhdCBhcmUgcHJlc2VudCBpbiBib3RoXG4gKiB0aGlzIHNldCBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlNldH0gb3RoZXIgLSBzZXQgdG8gaW50ZXJzZWN0IHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJucyB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKi9cblxubHVuci5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgYSwgYiwgZWxlbWVudHMsIGludGVyc2VjdGlvbiA9IFtdXG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPCBvdGhlci5sZW5ndGgpIHtcbiAgICBhID0gdGhpc1xuICAgIGIgPSBvdGhlclxuICB9IGVsc2Uge1xuICAgIGEgPSBvdGhlclxuICAgIGIgPSB0aGlzXG4gIH1cblxuICBlbGVtZW50cyA9IE9iamVjdC5rZXlzKGEuZWxlbWVudHMpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV1cbiAgICBpZiAoZWxlbWVudCBpbiBiLmVsZW1lbnRzKSB7XG4gICAgICBpbnRlcnNlY3Rpb24ucHVzaChlbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQgKGludGVyc2VjdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb21iaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIHVuaW9uIHdpdGggdGhpcyBzZXQuXG4gKiBAcmV0dXJuIHtsdW5yLlNldH0gYSBuZXcgc2V0IHRoYXQgaXMgdGhlIHVuaW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIGx1bnIuU2V0LmNvbXBsZXRlXG4gIH1cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmVtcHR5KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJldHVybiBuZXcgbHVuci5TZXQoT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyLmVsZW1lbnRzKSkpXG59XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBpbnZlcnNlIGRvY3VtZW50IGZyZXF1ZW5jeSBmb3JcbiAqIGEgcG9zdGluZy4gVGhpcyBpcyBzaGFyZWQgYmV0d2VlbiB0aGUgYnVpbGRlciBhbmQgdGhlIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3N0aW5nIC0gVGhlIHBvc3RpbmcgZm9yIGEgZ2l2ZW4gdGVybVxuICogQHBhcmFtIHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cy5cbiAqL1xubHVuci5pZGYgPSBmdW5jdGlvbiAocG9zdGluZywgZG9jdW1lbnRDb3VudCkge1xuICB2YXIgZG9jdW1lbnRzV2l0aFRlcm0gPSAwXG5cbiAgZm9yICh2YXIgZmllbGROYW1lIGluIHBvc3RpbmcpIHtcbiAgICBpZiAoZmllbGROYW1lID09ICdfaW5kZXgnKSBjb250aW51ZSAvLyBJZ25vcmUgdGhlIHRlcm0gaW5kZXgsIGl0cyBub3QgYSBmaWVsZFxuICAgIGRvY3VtZW50c1dpdGhUZXJtICs9IE9iamVjdC5rZXlzKHBvc3RpbmdbZmllbGROYW1lXSkubGVuZ3RoXG4gIH1cblxuICB2YXIgeCA9IChkb2N1bWVudENvdW50IC0gZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpIC8gKGRvY3VtZW50c1dpdGhUZXJtICsgMC41KVxuXG4gIHJldHVybiBNYXRoLmxvZygxICsgTWF0aC5hYnMoeCkpXG59XG5cbi8qKlxuICogQSB0b2tlbiB3cmFwcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRva2VuXG4gKiBhcyBpdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgdGV4dCBwcm9jZXNzaW5nIHBpcGVsaW5lLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtzdHI9JyddIC0gVGhlIHN0cmluZyB0b2tlbiBiZWluZyB3cmFwcGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YT17fV0gLSBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xubHVuci5Ub2tlbiA9IGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gIHRoaXMuc3RyID0gc3RyIHx8IFwiXCJcbiAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IHt9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG9rZW4gc3RyaW5nIHRoYXQgaXMgYmVpbmcgd3JhcHBlZCBieSB0aGlzIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyXG59XG5cbi8qKlxuICogQSB0b2tlbiB1cGRhdGUgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHVwZGF0aW5nIG9yIG9wdGlvbmFsbHlcbiAqIHdoZW4gY2xvbmluZyBhIHRva2VuLlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YWRhdGEgLSBBbGwgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byB0aGUgd3JhcHBlZCBzdHJpbmcgdG9rZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICogICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKClcbiAqIH0pXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHRva2VuIHN0cmluZy5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5zdHIgPSBmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB0b2tlbi4gT3B0aW9uYWxseSBhIGZ1bmN0aW9uIGNhbiBiZVxuICogYXBwbGllZCB0byB0aGUgY2xvbmVkIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gW2ZuXSAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4gPSBmbiB8fCBmdW5jdGlvbiAocykgeyByZXR1cm4gcyB9XG4gIHJldHVybiBuZXcgbHVuci5Ub2tlbiAoZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpLCB0aGlzLm1ldGFkYXRhKVxufVxuLyohXG4gKiBsdW5yLnRva2VuaXplclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3Igc3BsaXR0aW5nIGEgc3RyaW5nIGludG8gdG9rZW5zIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG9cbiAqIHRoZSBzZWFyY2ggaW5kZXguIFVzZXMgYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAgdG8gc3BsaXQgc3RyaW5ncywgY2hhbmdlXG4gKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgaG93IHN0cmluZ3MgYXJlIHNwbGl0IGludG8gdG9rZW5zLlxuICpcbiAqIFRoaXMgdG9rZW5pemVyIHdpbGwgY29udmVydCBpdHMgcGFyYW1ldGVyIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYCBhbmRcbiAqIHRoZW4gd2lsbCBzcGxpdCB0aGlzIHN0cmluZyBvbiB0aGUgY2hhcmFjdGVyIGluIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgLlxuICogQXJyYXlzIHdpbGwgaGF2ZSB0aGVpciBlbGVtZW50cyBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBhbmQgd3JhcHBlZCBpbiBhIGx1bnIuVG9rZW4uXG4gKlxuICogT3B0aW9uYWwgbWV0YWRhdGEgY2FuIGJlIHBhc3NlZCB0byB0aGUgdG9rZW5pemVyLCB0aGlzIG1ldGFkYXRhIHdpbGwgYmUgY2xvbmVkIGFuZFxuICogYWRkZWQgYXMgbWV0YWRhdGEgdG8gZXZlcnkgdG9rZW4gdGhhdCBpcyBjcmVhdGVkIGZyb20gdGhlIG9iamVjdCB0byBiZSB0b2tlbml6ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHs/KHN0cmluZ3xvYmplY3R8b2JqZWN0W10pfSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgaW50byB0b2tlbnNcbiAqIEBwYXJhbSB7P29iamVjdH0gbWV0YWRhdGEgLSBPcHRpb25hbCBtZXRhZGF0YSB0byBhc3NvY2lhdGUgd2l0aCBldmVyeSB0b2tlblxuICogQHJldHVybnMge2x1bnIuVG9rZW5bXX1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIudG9rZW5pemVyID0gZnVuY3Rpb24gKG9iaiwgbWV0YWRhdGEpIHtcbiAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG5ldyBsdW5yLlRva2VuKFxuICAgICAgICBsdW5yLnV0aWxzLmFzU3RyaW5nKHQpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGx1bnIudXRpbHMuY2xvbmUobWV0YWRhdGEpXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHZhciBzdHIgPSBvYmoudG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGgsXG4gICAgICB0b2tlbnMgPSBbXVxuXG4gIGZvciAodmFyIHNsaWNlRW5kID0gMCwgc2xpY2VTdGFydCA9IDA7IHNsaWNlRW5kIDw9IGxlbjsgc2xpY2VFbmQrKykge1xuICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChzbGljZUVuZCksXG4gICAgICAgIHNsaWNlTGVuZ3RoID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0XG5cbiAgICBpZiAoKGNoYXIubWF0Y2gobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yKSB8fCBzbGljZUVuZCA9PSBsZW4pKSB7XG5cbiAgICAgIGlmIChzbGljZUxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRva2VuTWV0YWRhdGEgPSBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKSB8fCB7fVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wicG9zaXRpb25cIl0gPSBbc2xpY2VTdGFydCwgc2xpY2VMZW5ndGhdXG4gICAgICAgIHRva2VuTWV0YWRhdGFbXCJpbmRleFwiXSA9IHRva2Vucy5sZW5ndGhcblxuICAgICAgICB0b2tlbnMucHVzaChcbiAgICAgICAgICBuZXcgbHVuci5Ub2tlbiAoXG4gICAgICAgICAgICBzdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpLFxuICAgICAgICAgICAgdG9rZW5NZXRhZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogVGhlIHNlcGFyYXRvciB1c2VkIHRvIHNwbGl0IGEgc3RyaW5nIGludG8gdG9rZW5zLiBPdmVycmlkZSB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mXG4gKiBgbHVuci50b2tlbml6ZXJgIGJlaGF2aW91ciB3aGVuIHRva2VuaXppbmcgc3RyaW5ncy4gQnkgZGVmYXVsdCB0aGlzIHNwbGl0cyBvbiB3aGl0ZXNwYWNlIGFuZCBoeXBoZW5zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzZWUgbHVuci50b2tlbml6ZXJcbiAqL1xubHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gL1tcXHNcXC1dKy9cbi8qIVxuICogbHVuci5QaXBlbGluZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5QaXBlbGluZXMgbWFpbnRhaW4gYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9ucyB0byBiZSBhcHBsaWVkIHRvIGFsbFxuICogdG9rZW5zIGluIGRvY3VtZW50cyBlbnRlcmluZyB0aGUgc2VhcmNoIGluZGV4IGFuZCBxdWVyaWVzIGJlaW5nIHJhbiBhZ2FpbnN0XG4gKiB0aGUgaW5kZXguXG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleCBjcmVhdGVkIHdpdGggdGhlIGx1bnIgc2hvcnRjdXQgd2lsbCBjb250YWluIGFcbiAqIHBpcGVsaW5lIHdpdGggYSBzdG9wIHdvcmQgZmlsdGVyIGFuZCBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIuIEV4dHJhXG4gKiBmdW5jdGlvbnMgY2FuIGJlIGFkZGVkIGJlZm9yZSBvciBhZnRlciBlaXRoZXIgb2YgdGhlc2UgZnVuY3Rpb25zIG9yIHRoZXNlXG4gKiBkZWZhdWx0IGZ1bmN0aW9ucyBjYW4gYmUgcmVtb3ZlZC5cbiAqXG4gKiBXaGVuIHJ1biB0aGUgcGlwZWxpbmUgd2lsbCBjYWxsIGVhY2ggZnVuY3Rpb24gaW4gdHVybiwgcGFzc2luZyBhIHRva2VuLCB0aGVcbiAqIGluZGV4IG9mIHRoYXQgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIGxpc3Qgb2YgYWxsIHRva2VucyBhbmQgZmluYWxseSBhIGxpc3Qgb2ZcbiAqIGFsbCB0aGUgb3JpZ2luYWwgdG9rZW5zLlxuICpcbiAqIFRoZSBvdXRwdXQgb2YgZnVuY3Rpb25zIGluIHRoZSBwaXBlbGluZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbmV4dCBmdW5jdGlvblxuICogaW4gdGhlIHBpcGVsaW5lLiBUbyBleGNsdWRlIGEgdG9rZW4gZnJvbSBlbnRlcmluZyB0aGUgaW5kZXggdGhlIGZ1bmN0aW9uXG4gKiBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCwgdGhlIHJlc3Qgb2YgdGhlIHBpcGVsaW5lIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoXG4gKiB0aGlzIHRva2VuLlxuICpcbiAqIEZvciBzZXJpYWxpc2F0aW9uIG9mIHBpcGVsaW5lcyB0byB3b3JrLCBhbGwgZnVuY3Rpb25zIHVzZWQgaW4gYW4gaW5zdGFuY2Ugb2ZcbiAqIGEgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLiBSZWdpc3RlcmVkIGZ1bmN0aW9ucyBjYW5cbiAqIHRoZW4gYmUgbG9hZGVkLiBJZiB0cnlpbmcgdG8gbG9hZCBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgdGhhdCB1c2VzIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgbm90IHJlZ2lzdGVyZWQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogSWYgbm90IHBsYW5uaW5nIG9uIHNlcmlhbGlzaW5nIHRoZSBwaXBlbGluZSB0aGVuIHJlZ2lzdGVyaW5nIHBpcGVsaW5lIGZ1bmN0aW9uc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5QaXBlbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBtYXBzIGx1bnIuVG9rZW4gdG8gbHVuci5Ub2tlbi4gQSBsdW5yLlRva2VuIGNvbnRhaW5zIHRoZSB0b2tlblxuICogc3RyaW5nIGFzIHdlbGwgYXMgYWxsIGtub3duIG1ldGFkYXRhLiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBtdXRhdGUgdGhlIHRva2VuIHN0cmluZ1xuICogb3IgbXV0YXRlIChvciBhZGQpIG1ldGFkYXRhIGZvciBhIGdpdmVuIHRva2VuLlxuICpcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIGluZGljYXRlIHRoYXQgdGhlIHBhc3NlZCB0b2tlbiBzaG91bGQgYmUgZGlzY2FyZGVkIGJ5IHJldHVybmluZ1xuICogbnVsbC4gVGhpcyB0b2tlbiB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCB3aWxsIG5vdCBiZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIE11bHRpcGxlIHRva2VucyBjYW4gYmUgcmV0dXJuZWQgYnkgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHRva2Vucy4gRWFjaCB0b2tlbiB3aWxsIGJlIHBhc3NlZFxuICogdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCBhbGwgd2lsbCByZXR1cm5lZCB0b2tlbnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQW55IG51bWJlciBvZiBwaXBlbGluZSBmdW5jdGlvbnMgbWF5IGJlIGNoYWluZWQgdG9nZXRoZXIgdXNpbmcgYSBsdW5yLlBpcGVsaW5lLlxuICpcbiAqIEBpbnRlcmZhY2UgbHVuci5QaXBlbGluZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiBmcm9tIHRoZSBkb2N1bWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCBvZiB0aGlzIHRva2VuIGluIHRoZSBjb21wbGV0ZSBsaXN0IG9mIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbltdfSB0b2tlbnMgLSBBbGwgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHJldHVybnMgeyg/bHVuci5Ub2tlbnxsdW5yLlRva2VuW10pfVxuICovXG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB3aXRoIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBGdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgaWYgdGhlIHBpcGVsaW5lXG4gKiBuZWVkcyB0byBiZSBzZXJpYWxpc2VkLCBvciBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgbmVlZHMgdG8gYmUgbG9hZGVkLlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gZG9lcyBub3QgYWRkIGl0IHRvIGEgcGlwZWxpbmUsIGZ1bmN0aW9ucyBtdXN0IHN0aWxsIGJlXG4gKiBhZGRlZCB0byBpbnN0YW5jZXMgb2YgdGhlIHBpcGVsaW5lIGZvciB0aGVtIHRvIGJlIHVzZWQgd2hlbiBydW5uaW5nIGEgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCAtIFRoZSBsYWJlbCB0byByZWdpc3RlciB0aGlzIGZ1bmN0aW9uIHdpdGhcbiAqL1xubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBsYWJlbCkge1xuICBpZiAobGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdPdmVyd3JpdGluZyBleGlzdGluZyByZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgbGFiZWwpXG4gIH1cblxuICBmbi5sYWJlbCA9IGxhYmVsXG4gIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbi5sYWJlbF0gPSBmblxufVxuXG4vKipcbiAqIFdhcm5zIGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIFBpcGVsaW5lIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgaXNSZWdpc3RlcmVkID0gZm4ubGFiZWwgJiYgKGZuLmxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucylcblxuICBpZiAoIWlzUmVnaXN0ZXJlZCkge1xuICAgIGx1bnIudXRpbHMud2FybignRnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBwaXBlbGluZS4gVGhpcyBtYXkgY2F1c2UgcHJvYmxlbXMgd2hlbiBzZXJpYWxpc2luZyB0aGUgaW5kZXguXFxuJywgZm4pXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXNlZCBwaXBlbGluZS5cbiAqXG4gKiBBbGwgZnVuY3Rpb25zIHRvIGJlIGxvYWRlZCBtdXN0IGFscmVhZHkgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuXG4gKiBJZiBhbnkgZnVuY3Rpb24gZnJvbSB0aGUgc2VyaWFsaXNlZCBkYXRhIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHRoZW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpc2VkIC0gVGhlIHNlcmlhbGlzZWQgcGlwZWxpbmUgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLlBpcGVsaW5lLmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXNlZCkge1xuICB2YXIgcGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuXG4gIHNlcmlhbGlzZWQuZm9yRWFjaChmdW5jdGlvbiAoZm5OYW1lKSB7XG4gICAgdmFyIGZuID0gbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuTmFtZV1cblxuICAgIGlmIChmbikge1xuICAgICAgcGlwZWxpbmUuYWRkKGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsb2FkIHVucmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGZuTmFtZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHBpcGVsaW5lXG59XG5cbi8qKlxuICogQWRkcyBuZXcgZnVuY3Rpb25zIHRvIHRoZSBlbmQgb2YgdGhlIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbltdfSBmdW5jdGlvbnMgLSBBbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG4gICAgdGhpcy5fc3RhY2sucHVzaChmbilcbiAgfSwgdGhpcylcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGFmdGVyIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgcG9zID0gcG9zICsgMVxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGJlZm9yZSBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgZnVuY3Rpb24gZnJvbSB0aGUgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihmbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMSlcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgbWFrZSB1cCB0aGUgcGlwZWxpbmUgYWdhaW5zdCB0aGVcbiAqIHBhc3NlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSB0b2tlbnMgdG8gcnVuIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciBzdGFja0xlbmd0aCA9IHRoaXMuX3N0YWNrLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tMZW5ndGg7IGkrKykge1xuICAgIHZhciBmbiA9IHRoaXMuX3N0YWNrW2ldXG4gICAgdmFyIG1lbW8gPSBbXVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbih0b2tlbnNbal0sIGosIHRva2VucylcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwIHx8IHJlc3VsdCA9PT0gJycpIGNvbnRpbnVlXG5cbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHJlc3VsdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIG1lbW8ucHVzaChyZXN1bHRba10pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbWVtb1xuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgcGFzc2luZyBhIHN0cmluZyB0aHJvdWdoIGEgcGlwZWxpbmUgYW5kIGdldHRpbmdcbiAqIHN0cmluZ3Mgb3V0LiBUaGlzIG1ldGhvZCB0YWtlcyBjYXJlIG9mIHdyYXBwaW5nIHRoZSBwYXNzZWQgc3RyaW5nIGluIGFcbiAqIHRva2VuIGFuZCBtYXBwaW5nIHRoZSByZXN1bHRpbmcgdG9rZW5zIGJhY2sgdG8gc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBwYXNzIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHs/b2JqZWN0fSBtZXRhZGF0YSAtIE9wdGlvbmFsIG1ldGFkYXRhIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB0b2tlblxuICogcGFzc2VkIHRvIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuU3RyaW5nID0gZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAgdmFyIHRva2VuID0gbmV3IGx1bnIuVG9rZW4gKHN0ciwgbWV0YWRhdGEpXG5cbiAgcmV0dXJuIHRoaXMucnVuKFt0b2tlbl0pLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnRvU3RyaW5nKClcbiAgfSlcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIHBpcGVsaW5lIGJ5IHJlbW92aW5nIGFueSBleGlzdGluZyBwcm9jZXNzb3JzLlxuICpcbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpcGVsaW5lIHJlYWR5IGZvciBzZXJpYWxpc2F0aW9uLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3N0YWNrLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChmbilcblxuICAgIHJldHVybiBmbi5sYWJlbFxuICB9KVxufVxuLyohXG4gKiBsdW5yLlZlY3RvclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB2ZWN0b3IgaXMgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIHZlY3RvciBzcGFjZSBvZiBkb2N1bWVudHMgYW5kIHF1ZXJpZXMuIFRoZXNlXG4gKiB2ZWN0b3JzIHN1cHBvcnQgb3BlcmF0aW9ucyB0byBkZXRlcm1pbmUgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0d28gZG9jdW1lbnRzIG9yXG4gKiBhIGRvY3VtZW50IGFuZCBhIHF1ZXJ5LlxuICpcbiAqIE5vcm1hbGx5IG5vIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIGZvciBpbml0aWFsaXppbmcgYSB2ZWN0b3IsIGJ1dCBpbiB0aGUgY2FzZSBvZlxuICogbG9hZGluZyBhIHByZXZpb3VzbHkgZHVtcGVkIHZlY3RvciB0aGUgcmF3IGVsZW1lbnRzIGNhbiBiZSBwcm92aWRlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgdmVjdG9ycyBhcmUgaW1wbGVtZW50ZWQgd2l0aCBhIGZsYXQgYXJyYXksIHdoZXJlIGFuIGVsZW1lbnRzXG4gKiBpbmRleCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBpdHMgdmFsdWUuIEUuZy4gW2luZGV4LCB2YWx1ZSwgaW5kZXgsIHZhbHVlXS4gVGhpc1xuICogYWxsb3dzIHRoZSB1bmRlcmx5aW5nIGFycmF5IHRvIGJlIGFzIHNwYXJzZSBhcyBwb3NzaWJsZSBhbmQgc3RpbGwgb2ZmZXIgZGVjZW50XG4gKiBwZXJmb3JtYW5jZSB3aGVuIGJlaW5nIHVzZWQgZm9yIHZlY3RvciBjYWxjdWxhdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge051bWJlcltdfSBbZWxlbWVudHNdIC0gVGhlIGZsYXQgbGlzdCBvZiBlbGVtZW50IGluZGV4IGFuZCBlbGVtZW50IHZhbHVlIHBhaXJzLlxuICovXG5sdW5yLlZlY3RvciA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cyB8fCBbXVxufVxuXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcG9zaXRpb24gd2l0aGluIHRoZSB2ZWN0b3IgdG8gaW5zZXJ0IGEgZ2l2ZW4gaW5kZXguXG4gKlxuICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgaW5zZXJ0IGFuZCB1cHNlcnQuIElmIHRoZXJlIGFyZSBkdXBsaWNhdGUgaW5kZXhlcyB0aGVuXG4gKiB0aGUgcG9zaXRpb24gaXMgcmV0dXJuZWQgYXMgaWYgdGhlIHZhbHVlIGZvciB0aGF0IGluZGV4IHdlcmUgdG8gYmUgdXBkYXRlZCwgYnV0IGl0XG4gKiBpcyB0aGUgY2FsbGVycyByZXNwb25zaWJpbGl0eSB0byBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGEgZHVwbGljYXRlIGF0IHRoYXQgaW5kZXhcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5wb3NpdGlvbkZvckluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIC8vIEZvciBhbiBlbXB0eSB2ZWN0b3IgdGhlIHR1cGxlIGNhbiBiZSBpbnNlcnRlZCBhdCB0aGUgYmVnaW5uaW5nXG4gIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHZhciBzdGFydCA9IDAsXG4gICAgICBlbmQgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIsXG4gICAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0LFxuICAgICAgcGl2b3RQb2ludCA9IE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKSxcbiAgICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuXG4gIHdoaWxlIChzbGljZUxlbmd0aCA+IDEpIHtcbiAgICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgICBzdGFydCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgICBlbmQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydFxuICAgIHBpdm90UG9pbnQgPSBzdGFydCArIE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKVxuICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICByZXR1cm4gKHBpdm90UG9pbnQgKyAxKSAqIDJcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydHMgYW4gZWxlbWVudCBhdCBhbiBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBEb2VzIG5vdCBhbGxvdyBkdXBsaWNhdGVzLCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIGFscmVhZHkgYW4gZW50cnlcbiAqIGZvciB0aGlzIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwpIHtcbiAgdGhpcy51cHNlcnQoaW5zZXJ0SWR4LCB2YWwsIGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBcImR1cGxpY2F0ZSBpbmRleFwiXG4gIH0pXG59XG5cbi8qKlxuICogSW5zZXJ0cyBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZm9yIHVwZGF0ZXMsIHRoZSBleGlzdGluZyB2YWx1ZSBhbmQgdGhlXG4gKiByZXF1ZXN0ZWQgdmFsdWUgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHNcbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnVwc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCwgZm4pIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB2YXIgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uRm9ySW5kZXgoaW5zZXJ0SWR4KVxuXG4gIGlmICh0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uXSA9PSBpbnNlcnRJZHgpIHtcbiAgICB0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0gPSBmbih0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0sIHZhbClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnRzLnNwbGljZShwb3NpdGlvbiwgMCwgaW5zZXJ0SWR4LCB2YWwpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhpcyB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX21hZ25pdHVkZSkgcmV0dXJuIHRoaXMuX21hZ25pdHVkZVxuXG4gIHZhciBzdW1PZlNxdWFyZXMgPSAwLFxuICAgICAgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHNMZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciB2YWwgPSB0aGlzLmVsZW1lbnRzW2ldXG4gICAgc3VtT2ZTcXVhcmVzICs9IHZhbCAqIHZhbFxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX21hZ25pdHVkZSA9IE1hdGguc3FydChzdW1PZlNxdWFyZXMpXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIHZlY3RvciB0byBjb21wdXRlIHRoZSBkb3QgcHJvZHVjdCB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICB2YXIgZG90UHJvZHVjdCA9IDAsXG4gICAgICBhID0gdGhpcy5lbGVtZW50cywgYiA9IG90aGVyVmVjdG9yLmVsZW1lbnRzLFxuICAgICAgYUxlbiA9IGEubGVuZ3RoLCBiTGVuID0gYi5sZW5ndGgsXG4gICAgICBhVmFsID0gMCwgYlZhbCA9IDAsXG4gICAgICBpID0gMCwgaiA9IDBcblxuICB3aGlsZSAoaSA8IGFMZW4gJiYgaiA8IGJMZW4pIHtcbiAgICBhVmFsID0gYVtpXSwgYlZhbCA9IGJbal1cbiAgICBpZiAoYVZhbCA8IGJWYWwpIHtcbiAgICAgIGkgKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA+IGJWYWwpIHtcbiAgICAgIGogKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA9PSBiVmFsKSB7XG4gICAgICBkb3RQcm9kdWN0ICs9IGFbaSArIDFdICogYltqICsgMV1cbiAgICAgIGkgKz0gMlxuICAgICAgaiArPSAyXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvdFByb2R1Y3Rcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIG90aGVyIHZlY3RvciB0byBjYWxjdWxhdGUgdGhlXG4gKiBzaW1pbGFyaXR5IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuc2ltaWxhcml0eSA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICByZXR1cm4gdGhpcy5kb3Qob3RoZXJWZWN0b3IpIC8gdGhpcy5tYWduaXR1ZGUoKSB8fCAwXG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHZlY3RvciB0byBhbiBhcnJheSBvZiB0aGUgZWxlbWVudHMgd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBBcnJheSAodGhpcy5lbGVtZW50cy5sZW5ndGggLyAyKVxuXG4gIGZvciAodmFyIGkgPSAxLCBqID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpICs9IDIsIGorKykge1xuICAgIG91dHB1dFtqXSA9IHRoaXMuZWxlbWVudHNbaV1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBBIEpTT04gc2VyaWFsaXphYmxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lbGVtZW50c1xufVxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIVxuICogbHVuci5zdGVtbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKiBJbmNsdWRlcyBjb2RlIGZyb20gLSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW4vUG9ydGVyU3RlbW1lci9qcy50eHRcbiAqL1xuXG4vKipcbiAqIGx1bnIuc3RlbW1lciBpcyBhbiBlbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIsIHRoaXMgaXMgYSBKYXZhU2NyaXB0XG4gKiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9ydGVyU3RlbW1lciB0YWtlbiBmcm9tIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpblxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gVGhlIHN0cmluZyB0byBzdGVtXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAZnVuY3Rpb25cbiAqL1xubHVuci5zdGVtbWVyID0gKGZ1bmN0aW9uKCl7XG4gIHZhciBzdGVwMmxpc3QgPSB7XG4gICAgICBcImF0aW9uYWxcIiA6IFwiYXRlXCIsXG4gICAgICBcInRpb25hbFwiIDogXCJ0aW9uXCIsXG4gICAgICBcImVuY2lcIiA6IFwiZW5jZVwiLFxuICAgICAgXCJhbmNpXCIgOiBcImFuY2VcIixcbiAgICAgIFwiaXplclwiIDogXCJpemVcIixcbiAgICAgIFwiYmxpXCIgOiBcImJsZVwiLFxuICAgICAgXCJhbGxpXCIgOiBcImFsXCIsXG4gICAgICBcImVudGxpXCIgOiBcImVudFwiLFxuICAgICAgXCJlbGlcIiA6IFwiZVwiLFxuICAgICAgXCJvdXNsaVwiIDogXCJvdXNcIixcbiAgICAgIFwiaXphdGlvblwiIDogXCJpemVcIixcbiAgICAgIFwiYXRpb25cIiA6IFwiYXRlXCIsXG4gICAgICBcImF0b3JcIiA6IFwiYXRlXCIsXG4gICAgICBcImFsaXNtXCIgOiBcImFsXCIsXG4gICAgICBcIml2ZW5lc3NcIiA6IFwiaXZlXCIsXG4gICAgICBcImZ1bG5lc3NcIiA6IFwiZnVsXCIsXG4gICAgICBcIm91c25lc3NcIiA6IFwib3VzXCIsXG4gICAgICBcImFsaXRpXCIgOiBcImFsXCIsXG4gICAgICBcIml2aXRpXCIgOiBcIml2ZVwiLFxuICAgICAgXCJiaWxpdGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImxvZ2lcIiA6IFwibG9nXCJcbiAgICB9LFxuXG4gICAgc3RlcDNsaXN0ID0ge1xuICAgICAgXCJpY2F0ZVwiIDogXCJpY1wiLFxuICAgICAgXCJhdGl2ZVwiIDogXCJcIixcbiAgICAgIFwiYWxpemVcIiA6IFwiYWxcIixcbiAgICAgIFwiaWNpdGlcIiA6IFwiaWNcIixcbiAgICAgIFwiaWNhbFwiIDogXCJpY1wiLFxuICAgICAgXCJmdWxcIiA6IFwiXCIsXG4gICAgICBcIm5lc3NcIiA6IFwiXCJcbiAgICB9LFxuXG4gICAgYyA9IFwiW15hZWlvdV1cIiwgICAgICAgICAgLy8gY29uc29uYW50XG4gICAgdiA9IFwiW2FlaW91eV1cIiwgICAgICAgICAgLy8gdm93ZWxcbiAgICBDID0gYyArIFwiW15hZWlvdXldKlwiLCAgICAvLyBjb25zb25hbnQgc2VxdWVuY2VcbiAgICBWID0gdiArIFwiW2FlaW91XSpcIiwgICAgICAvLyB2b3dlbCBzZXF1ZW5jZVxuXG4gICAgbWdyMCA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQywgICAgICAgICAgICAgICAvLyBbQ11WQy4uLiBpcyBtPjBcbiAgICBtZXExID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgXCIoXCIgKyBWICsgXCIpPyRcIiwgIC8vIFtDXVZDW1ZdIGlzIG09MVxuICAgIG1ncjEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBWICsgQywgICAgICAgLy8gW0NdVkNWQy4uLiBpcyBtPjFcbiAgICBzX3YgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgdjsgICAgICAgICAgICAgICAgICAgLy8gdm93ZWwgaW4gc3RlbVxuXG4gIHZhciByZV9tZ3IwID0gbmV3IFJlZ0V4cChtZ3IwKTtcbiAgdmFyIHJlX21ncjEgPSBuZXcgUmVnRXhwKG1ncjEpO1xuICB2YXIgcmVfbWVxMSA9IG5ldyBSZWdFeHAobWVxMSk7XG4gIHZhciByZV9zX3YgPSBuZXcgUmVnRXhwKHNfdik7XG5cbiAgdmFyIHJlXzFhID0gL14oLis/KShzc3xpKWVzJC87XG4gIHZhciByZTJfMWEgPSAvXiguKz8pKFtec10pcyQvO1xuICB2YXIgcmVfMWIgPSAvXiguKz8pZWVkJC87XG4gIHZhciByZTJfMWIgPSAvXiguKz8pKGVkfGluZykkLztcbiAgdmFyIHJlXzFiXzIgPSAvLiQvO1xuICB2YXIgcmUyXzFiXzIgPSAvKGF0fGJsfGl6KSQvO1xuICB2YXIgcmUzXzFiXzIgPSBuZXcgUmVnRXhwKFwiKFteYWVpb3V5bHN6XSlcXFxcMSRcIik7XG4gIHZhciByZTRfMWJfMiA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciByZV8xYyA9IC9eKC4rP1teYWVpb3VdKXkkLztcbiAgdmFyIHJlXzIgPSAvXiguKz8pKGF0aW9uYWx8dGlvbmFsfGVuY2l8YW5jaXxpemVyfGJsaXxhbGxpfGVudGxpfGVsaXxvdXNsaXxpemF0aW9ufGF0aW9ufGF0b3J8YWxpc218aXZlbmVzc3xmdWxuZXNzfG91c25lc3N8YWxpdGl8aXZpdGl8YmlsaXRpfGxvZ2kpJC87XG5cbiAgdmFyIHJlXzMgPSAvXiguKz8pKGljYXRlfGF0aXZlfGFsaXplfGljaXRpfGljYWx8ZnVsfG5lc3MpJC87XG5cbiAgdmFyIHJlXzQgPSAvXiguKz8pKGFsfGFuY2V8ZW5jZXxlcnxpY3xhYmxlfGlibGV8YW50fGVtZW50fG1lbnR8ZW50fG91fGlzbXxhdGV8aXRpfG91c3xpdmV8aXplKSQvO1xuICB2YXIgcmUyXzQgPSAvXiguKz8pKHN8dCkoaW9uKSQvO1xuXG4gIHZhciByZV81ID0gL14oLis/KWUkLztcbiAgdmFyIHJlXzVfMSA9IC9sbCQvO1xuICB2YXIgcmUzXzUgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcG9ydGVyU3RlbW1lciA9IGZ1bmN0aW9uIHBvcnRlclN0ZW1tZXIodykge1xuICAgIHZhciBzdGVtLFxuICAgICAgc3VmZml4LFxuICAgICAgZmlyc3RjaCxcbiAgICAgIHJlLFxuICAgICAgcmUyLFxuICAgICAgcmUzLFxuICAgICAgcmU0O1xuXG4gICAgaWYgKHcubGVuZ3RoIDwgMykgeyByZXR1cm4gdzsgfVxuXG4gICAgZmlyc3RjaCA9IHcuc3Vic3RyKDAsMSk7XG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvVXBwZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDFhXG4gICAgcmUgPSByZV8xYVxuICAgIHJlMiA9IHJlMl8xYTtcblxuICAgIGlmIChyZS50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUsXCIkMSQyXCIpOyB9XG4gICAgZWxzZSBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZTIsXCIkMSQyXCIpOyB9XG5cbiAgICAvLyBTdGVwIDFiXG4gICAgcmUgPSByZV8xYjtcbiAgICByZTIgPSByZTJfMWI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChmcFsxXSkpIHtcbiAgICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUyID0gcmVfc192O1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgICByZTIgPSByZTJfMWJfMjtcbiAgICAgICAgcmUzID0gcmUzXzFiXzI7XG4gICAgICAgIHJlNCA9IHJlNF8xYl8yO1xuICAgICAgICBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgICBlbHNlIGlmIChyZTMudGVzdCh3KSkgeyByZSA9IHJlXzFiXzI7IHcgPSB3LnJlcGxhY2UocmUsXCJcIik7IH1cbiAgICAgICAgZWxzZSBpZiAocmU0LnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgMWMgLSByZXBsYWNlIHN1ZmZpeCB5IG9yIFkgYnkgaSBpZiBwcmVjZWRlZCBieSBhIG5vbi12b3dlbCB3aGljaCBpcyBub3QgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgd29yZCAoc28gY3J5IC0+IGNyaSwgYnkgLT4gYnksIHNheSAtPiBzYXkpXG4gICAgcmUgPSByZV8xYztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHcgPSBzdGVtICsgXCJpXCI7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAyXG4gICAgcmUgPSByZV8yO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAybGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgM1xuICAgIHJlID0gcmVfMztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwM2xpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDRcbiAgICByZSA9IHJlXzQ7XG4gICAgcmUyID0gcmUyXzQ7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXSArIGZwWzJdO1xuICAgICAgcmUyID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDVcbiAgICByZSA9IHJlXzU7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICByZTIgPSByZV9tZXExO1xuICAgICAgcmUzID0gcmUzXzU7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSB8fCAocmUyLnRlc3Qoc3RlbSkgJiYgIShyZTMudGVzdChzdGVtKSkpKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlID0gcmVfNV8xO1xuICAgIHJlMiA9IHJlX21ncjE7XG4gICAgaWYgKHJlLnRlc3QodykgJiYgcmUyLnRlc3QodykpIHtcbiAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgfVxuXG4gICAgLy8gYW5kIHR1cm4gaW5pdGlhbCBZIGJhY2sgdG8geVxuXG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvTG93ZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuLnVwZGF0ZShwb3J0ZXJTdGVtbWVyKTtcbiAgfVxufSkoKTtcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RlbW1lciwgJ3N0ZW1tZXInKVxuLyohXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgYnVpbGRzIGEgc3RvcFdvcmRGaWx0ZXIgZnVuY3Rpb24gZnJvbSB0aGUgcHJvdmlkZWRcbiAqIGxpc3Qgb2Ygc3RvcCB3b3Jkcy5cbiAqXG4gKiBUaGUgYnVpbHQgaW4gbHVuci5zdG9wV29yZEZpbHRlciBpcyBidWlsdCB1c2luZyB0aGlzIGdlbmVyYXRvciBhbmQgY2FuIGJlIHVzZWRcbiAqIHRvIGdlbmVyYXRlIGN1c3RvbSBzdG9wV29yZEZpbHRlcnMgZm9yIGFwcGxpY2F0aW9ucyBvciBub24gRW5nbGlzaCBsYW5ndWFnZXMuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqIEBzZWUgbHVuci5zdG9wV29yZEZpbHRlclxuICovXG5sdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgPSBmdW5jdGlvbiAoc3RvcFdvcmRzKSB7XG4gIHZhciB3b3JkcyA9IHN0b3BXb3Jkcy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIHN0b3BXb3JkKSB7XG4gICAgbWVtb1tzdG9wV29yZF0gPSBzdG9wV29yZFxuICAgIHJldHVybiBtZW1vXG4gIH0sIHt9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBpZiAodG9rZW4gJiYgd29yZHNbdG9rZW4udG9TdHJpbmcoKV0gIT09IHRva2VuLnRvU3RyaW5nKCkpIHJldHVybiB0b2tlblxuICB9XG59XG5cbi8qKlxuICogbHVuci5zdG9wV29yZEZpbHRlciBpcyBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0b3Agd29yZCBsaXN0IGZpbHRlciwgYW55IHdvcmRzXG4gKiBjb250YWluZWQgaW4gdGhlIGxpc3Qgd2lsbCBub3QgYmUgcGFzc2VkIHRocm91Z2ggdGhlIGZpbHRlci5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgaW4gdGhlIFBpcGVsaW5lLiBJZiB0aGUgdG9rZW4gZG9lcyBub3QgcGFzcyB0aGVcbiAqIGZpbHRlciB0aGVuIHVuZGVmaW5lZCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBmdW5jdGlvblxuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbXMge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiB0byBjaGVjayBmb3IgYmVpbmcgYSBzdG9wIHdvcmQuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuc3RvcFdvcmRGaWx0ZXIgPSBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIoW1xuICAnYScsXG4gICdhYmxlJyxcbiAgJ2Fib3V0JyxcbiAgJ2Fjcm9zcycsXG4gICdhZnRlcicsXG4gICdhbGwnLFxuICAnYWxtb3N0JyxcbiAgJ2Fsc28nLFxuICAnYW0nLFxuICAnYW1vbmcnLFxuICAnYW4nLFxuICAnYW5kJyxcbiAgJ2FueScsXG4gICdhcmUnLFxuICAnYXMnLFxuICAnYXQnLFxuICAnYmUnLFxuICAnYmVjYXVzZScsXG4gICdiZWVuJyxcbiAgJ2J1dCcsXG4gICdieScsXG4gICdjYW4nLFxuICAnY2Fubm90JyxcbiAgJ2NvdWxkJyxcbiAgJ2RlYXInLFxuICAnZGlkJyxcbiAgJ2RvJyxcbiAgJ2RvZXMnLFxuICAnZWl0aGVyJyxcbiAgJ2Vsc2UnLFxuICAnZXZlcicsXG4gICdldmVyeScsXG4gICdmb3InLFxuICAnZnJvbScsXG4gICdnZXQnLFxuICAnZ290JyxcbiAgJ2hhZCcsXG4gICdoYXMnLFxuICAnaGF2ZScsXG4gICdoZScsXG4gICdoZXInLFxuICAnaGVycycsXG4gICdoaW0nLFxuICAnaGlzJyxcbiAgJ2hvdycsXG4gICdob3dldmVyJyxcbiAgJ2knLFxuICAnaWYnLFxuICAnaW4nLFxuICAnaW50bycsXG4gICdpcycsXG4gICdpdCcsXG4gICdpdHMnLFxuICAnanVzdCcsXG4gICdsZWFzdCcsXG4gICdsZXQnLFxuICAnbGlrZScsXG4gICdsaWtlbHknLFxuICAnbWF5JyxcbiAgJ21lJyxcbiAgJ21pZ2h0JyxcbiAgJ21vc3QnLFxuICAnbXVzdCcsXG4gICdteScsXG4gICduZWl0aGVyJyxcbiAgJ25vJyxcbiAgJ25vcicsXG4gICdub3QnLFxuICAnb2YnLFxuICAnb2ZmJyxcbiAgJ29mdGVuJyxcbiAgJ29uJyxcbiAgJ29ubHknLFxuICAnb3InLFxuICAnb3RoZXInLFxuICAnb3VyJyxcbiAgJ293bicsXG4gICdyYXRoZXInLFxuICAnc2FpZCcsXG4gICdzYXknLFxuICAnc2F5cycsXG4gICdzaGUnLFxuICAnc2hvdWxkJyxcbiAgJ3NpbmNlJyxcbiAgJ3NvJyxcbiAgJ3NvbWUnLFxuICAndGhhbicsXG4gICd0aGF0JyxcbiAgJ3RoZScsXG4gICd0aGVpcicsXG4gICd0aGVtJyxcbiAgJ3RoZW4nLFxuICAndGhlcmUnLFxuICAndGhlc2UnLFxuICAndGhleScsXG4gICd0aGlzJyxcbiAgJ3RpcycsXG4gICd0bycsXG4gICd0b28nLFxuICAndHdhcycsXG4gICd1cycsXG4gICd3YW50cycsXG4gICd3YXMnLFxuICAnd2UnLFxuICAnd2VyZScsXG4gICd3aGF0JyxcbiAgJ3doZW4nLFxuICAnd2hlcmUnLFxuICAnd2hpY2gnLFxuICAnd2hpbGUnLFxuICAnd2hvJyxcbiAgJ3dob20nLFxuICAnd2h5JyxcbiAgJ3dpbGwnLFxuICAnd2l0aCcsXG4gICd3b3VsZCcsXG4gICd5ZXQnLFxuICAneW91JyxcbiAgJ3lvdXInXG5dKVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdG9wV29yZEZpbHRlciwgJ3N0b3BXb3JkRmlsdGVyJylcbi8qIVxuICogbHVuci50cmltbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLnRyaW1tZXIgaXMgYSBwaXBlbGluZSBmdW5jdGlvbiBmb3IgdHJpbW1pbmcgbm9uIHdvcmRcbiAqIGNoYXJhY3RlcnMgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdG9rZW5zIGJlZm9yZSB0aGV5XG4gKiBlbnRlciB0aGUgaW5kZXguXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtYXkgbm90IHdvcmsgY29ycmVjdGx5IGZvciBub24gbGF0aW5cbiAqIGNoYXJhY3RlcnMgYW5kIHNob3VsZCBlaXRoZXIgYmUgcmVtb3ZlZCBvciBhZGFwdGVkIGZvciB1c2VcbiAqIHdpdGggbGFuZ3VhZ2VzIHdpdGggbm9uLWxhdGluIGNoYXJhY3RlcnMuXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICovXG5sdW5yLnRyaW1tZXIgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXFcrLywgJycpLnJlcGxhY2UoL1xcVyskLywgJycpXG4gIH0pXG59XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnRyaW1tZXIsICd0cmltbWVyJylcbi8qIVxuICogbHVuci5Ub2tlblNldFxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB0b2tlbiBzZXQgaXMgdXNlZCB0byBzdG9yZSB0aGUgdW5pcXVlIGxpc3Qgb2YgYWxsIHRva2Vuc1xuICogd2l0aGluIGFuIGluZGV4LiBUb2tlbiBzZXRzIGFyZSBhbHNvIHVzZWQgdG8gcmVwcmVzZW50IGFuXG4gKiBpbmNvbWluZyBxdWVyeSB0byB0aGUgaW5kZXgsIHRoaXMgcXVlcnkgdG9rZW4gc2V0IGFuZCBpbmRleFxuICogdG9rZW4gc2V0IGFyZSB0aGVuIGludGVyc2VjdGVkIHRvIGZpbmQgd2hpY2ggdG9rZW5zIHRvIGxvb2tcbiAqIHVwIGluIHRoZSBpbnZlcnRlZCBpbmRleC5cbiAqXG4gKiBBIHRva2VuIHNldCBjYW4gaG9sZCBtdWx0aXBsZSB0b2tlbnMsIGFzIGluIHRoZSBjYXNlIG9mIHRoZVxuICogaW5kZXggdG9rZW4gc2V0LCBvciBpdCBjYW4gaG9sZCBhIHNpbmdsZSB0b2tlbiBhcyBpbiB0aGVcbiAqIGNhc2Ugb2YgYSBzaW1wbGUgcXVlcnkgdG9rZW4gc2V0LlxuICpcbiAqIEFkZGl0aW9uYWxseSB0b2tlbiBzZXRzIGFyZSB1c2VkIHRvIHBlcmZvcm0gd2lsZGNhcmQgbWF0Y2hpbmcuXG4gKiBMZWFkaW5nLCBjb250YWluZWQgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcyBhcmUgc3VwcG9ydGVkLCBhbmRcbiAqIGZyb20gdGhpcyBlZGl0IGRpc3RhbmNlIG1hdGNoaW5nIGNhbiBhbHNvIGJlIHByb3ZpZGVkLlxuICpcbiAqIFRva2VuIHNldHMgYXJlIGltcGxlbWVudGVkIGFzIGEgbWluaW1hbCBmaW5pdGUgc3RhdGUgYXV0b21hdGEsXG4gKiB3aGVyZSBib3RoIGNvbW1vbiBwcmVmaXhlcyBhbmQgc3VmZml4ZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRva2Vucy5cbiAqIFRoaXMgaGVscHMgdG8gcmVkdWNlIHRoZSBzcGFjZSB1c2VkIGZvciBzdG9yaW5nIHRoZSB0b2tlbiBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuVG9rZW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZmluYWwgPSBmYWxzZVxuICB0aGlzLmVkZ2VzID0ge31cbiAgdGhpcy5pZCA9IGx1bnIuVG9rZW5TZXQuX25leHRJZFxuICBsdW5yLlRva2VuU2V0Ll9uZXh0SWQgKz0gMVxufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBuZXh0LCBhdXRvIGluY3JlbWVudCwgaWRlbnRpZmllciB0byBhc3NpZ25cbiAqIHRvIGEgbmV3IHRva2VuU2V0LlxuICpcbiAqIFRva2VuU2V0cyByZXF1aXJlIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gYmUgY29ycmVjdGx5IG1pbmltaXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlRva2VuU2V0Ll9uZXh0SWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIHNvcnRlZCBhcnJheSBvZiB3b3Jkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBhcnIgLSBBIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzIHRvIGNyZWF0ZSB0aGUgc2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgaW5wdXQgYXJyYXkgaXMgbm90IHNvcnRlZC5cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlclxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBidWlsZGVyLmluc2VydChhcnJbaV0pXG4gIH1cblxuICBidWlsZGVyLmZpbmlzaCgpXG4gIHJldHVybiBidWlsZGVyLnJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IGZyb20gYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGF1c2UgLSBBIHNpbmdsZSBjbGF1c2UgZnJvbSBsdW5yLlF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXVzZS50ZXJtIC0gVGhlIHF1ZXJ5IGNsYXVzZSB0ZXJtLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjbGF1c2UuZWRpdERpc3RhbmNlXSAtIFRoZSBvcHRpb25hbCBlZGl0IGRpc3RhbmNlIGZvciB0aGUgdGVybS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21DbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICgnZWRpdERpc3RhbmNlJyBpbiBjbGF1c2UpIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcoY2xhdXNlLnRlcm0sIGNsYXVzZS5lZGl0RGlzdGFuY2UpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyhjbGF1c2UudGVybSlcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHN0cmluZyB3aXRoIGEgc3BlY2lmaWVkXG4gKiBlZGl0IGRpc3RhbmNlLlxuICpcbiAqIEluc2VydGlvbnMsIGRlbGV0aW9ucywgc3Vic3RpdHV0aW9ucyBhbmQgdHJhbnNwb3NpdGlvbnMgYXJlIGVhY2hcbiAqIHRyZWF0ZWQgYXMgYW4gZWRpdCBkaXN0YW5jZSBvZiAxLlxuICpcbiAqIEluY3JlYXNpbmcgdGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB3aWxsIGhhdmUgYSBkcmFtYXRpYyBpbXBhY3RcbiAqIG9uIHRoZSBwZXJmb3JtYW5jZSBvZiBib3RoIGNyZWF0aW5nIGFuZCBpbnRlcnNlY3RpbmcgdGhlc2UgVG9rZW5TZXRzLlxuICogSXQgaXMgYWR2aXNlZCB0byBrZWVwIHRoZSBlZGl0IGRpc3RhbmNlIGxlc3MgdGhhbiAzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdG9rZW4gc2V0IGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gZWRpdERpc3RhbmNlIC0gVGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtsdW5yLlZlY3Rvcn1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBlZGl0RGlzdGFuY2UpIHtcbiAgdmFyIHJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgbm9kZTogcm9vdCxcbiAgICBlZGl0c1JlbWFpbmluZzogZWRpdERpc3RhbmNlLFxuICAgIHN0cjogc3RyXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBubyBlZGl0XG4gICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgbm9FZGl0Tm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub0VkaXROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IG5vRWRpdE5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBub0VkaXROb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogbm9FZGl0Tm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgZGVsZXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gZGVsZXRlIGluIHRoZSBzdHJpbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgZGVsZXRpb25Ob2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IGRlbGV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGRlbGV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBqdXN0IHJlbW92aW5nIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIHRoZSBzdHJcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgZnJhbWUubm9kZS5maW5hbCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzdWJzdGl0dXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHN1YnN0aXR1dGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBzdWJzdGl0dXRlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBzdWJzdGl0dXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHN1YnN0aXR1dGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgxKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGluc2VydGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IGluc2VydGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMCkge1xuICAgICAgICBpbnNlcnRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogaW5zZXJ0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJhbnNwb3NpdGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgdHJhbnNwb3NpdGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIHRoZXJlIGFyZSBlbm91Z2ggY2hhcmFjdGVycyB0byB0cmFuc3Bvc2VcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhckEgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIGNoYXJCID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICB0cmFuc3Bvc2VOb2RlXG5cbiAgICAgIGlmIChjaGFyQiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdID0gdHJhbnNwb3NlTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiB0cmFuc3Bvc2VOb2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBjaGFyQSArIGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGZyb20gYSBzdHJpbmcuXG4gKlxuICogVGhlIHN0cmluZyBtYXkgY29udGFpbiBvbmUgb3IgbW9yZSB3aWxkY2FyZCBjaGFyYWN0ZXJzICgqKVxuICogdGhhdCB3aWxsIGFsbG93IHdpbGRjYXJkIG1hdGNoaW5nIHdoZW4gaW50ZXJzZWN0aW5nIHdpdGhcbiAqIGFub3RoZXIgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIGEgVG9rZW5TZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBub2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICByb290ID0gbm9kZSxcbiAgICAgIHdpbGRjYXJkRm91bmQgPSBmYWxzZVxuXG4gIC8qXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGNoYXJhY3RlcnMgd2l0aGluIHRoZSBwYXNzZWQgc3RyaW5nXG4gICAqIGFwcGVuZGluZyBhIG5vZGUgZm9yIGVhY2ggY2hhcmFjdGVyLlxuICAgKlxuICAgKiBBcyBzb29uIGFzIGEgd2lsZGNhcmQgY2hhcmFjdGVyIGlzIGZvdW5kIHRoZW4gYSBzZWxmXG4gICAqIHJlZmVyZW5jaW5nIGVkZ2UgaXMgaW50cm9kdWNlZCB0byBjb250aW51YWxseSBtYXRjaFxuICAgKiBhbnkgbnVtYmVyIG9mIGFueSBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjaGFyID0gc3RyW2ldLFxuICAgICAgICBmaW5hbCA9IChpID09IGxlbiAtIDEpXG5cbiAgICBpZiAoY2hhciA9PSBcIipcIikge1xuICAgICAgd2lsZGNhcmRGb3VuZCA9IHRydWVcbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBub2RlXG4gICAgICBub2RlLmZpbmFsID0gZmluYWxcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICBuZXh0LmZpbmFsID0gZmluYWxcblxuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHRcbiAgICAgIG5vZGUgPSBuZXh0XG5cbiAgICAgIC8vIFRPRE86IGlzIHRoaXMgbmVlZGVkIGFueW1vcmU/XG4gICAgICBpZiAod2lsZGNhcmRGb3VuZCkge1xuICAgICAgICBub2RlLmVkZ2VzW1wiKlwiXSA9IHJvb3RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoaXMgVG9rZW5TZXQgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3b3JkcyA9IFtdXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBwcmVmaXg6IFwiXCIsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKSxcbiAgICAgICAgZWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbGVuID0gZWRnZXMubGVuZ3RoXG5cbiAgICBpZiAoZnJhbWUubm9kZS5maW5hbCkge1xuICAgICAgLyogSW4gU2FmYXJpLCBhdCB0aGlzIHBvaW50IHRoZSBwcmVmaXggaXMgc29tZXRpbWVzIGNvcnJ1cHRlZCwgc2VlOlxuICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL29saXZlcm5uL2x1bnIuanMvaXNzdWVzLzI3OSBDYWxsaW5nIGFueVxuICAgICAgICogU3RyaW5nLnByb3RvdHlwZSBtZXRob2QgZm9yY2VzIFNhZmFyaSB0byBcImNhc3RcIiB0aGlzIHN0cmluZyB0byB3aGF0XG4gICAgICAgKiBpdCdzIHN1cHBvc2VkIHRvIGJlLCBmaXhpbmcgdGhlIGJ1Zy4gKi9cbiAgICAgIGZyYW1lLnByZWZpeC5jaGFyQXQoMClcbiAgICAgIHdvcmRzLnB1c2goZnJhbWUucHJlZml4KVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBlZGdlID0gZWRnZXNbaV1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIHByZWZpeDogZnJhbWUucHJlZml4LmNvbmNhdChlZGdlKSxcbiAgICAgICAgbm9kZTogZnJhbWUubm9kZS5lZGdlc1tlZGdlXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29yZHNcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGFsbG93IFRva2VuU2V0cyB0byBiZSB1c2VkIGFzIGtleXNcbiAqIGluIG9iamVjdHMsIGxhcmdlbHkgdG8gYWlkIHRoZSBjb25zdHJ1Y3Rpb24gYW5kIG1pbmltaXNhdGlvblxuICogb2YgYSBUb2tlblNldC4gQXMgc3VjaCBpdCBpcyBub3QgZGVzaWduZWQgdG8gYmUgYSBodW1hblxuICogZnJpZW5kbHkgcmVwcmVzZW50YXRpb24gb2YgdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAvLyBOT1RFOiBVc2luZyBPYmplY3Qua2V5cyBoZXJlIGFzIHRoaXMuZWRnZXMgaXMgdmVyeSBsaWtlbHlcbiAgLy8gdG8gZW50ZXIgJ2hhc2gtbW9kZScgd2l0aCBtYW55IGtleXMgYmVpbmcgYWRkZWRcbiAgLy9cbiAgLy8gYXZvaWRpbmcgYSBmb3ItaW4gbG9vcCBoZXJlIGFzIGl0IGxlYWRzIHRvIHRoZSBmdW5jdGlvblxuICAvLyBiZWluZyBkZS1vcHRpbWlzZWQgKGF0IGxlYXN0IGluIFY4KS4gRnJvbSBzb21lIHNpbXBsZVxuICAvLyBiZW5jaG1hcmtzIHRoZSBwZXJmb3JtYW5jZSBpcyBjb21wYXJhYmxlLCBidXQgYWxsb3dpbmdcbiAgLy8gVjggdG8gb3B0aW1pemUgbWF5IG1lYW4gZWFzeSBwZXJmb3JtYW5jZSB3aW5zIGluIHRoZSBmdXR1cmUuXG5cbiAgaWYgKHRoaXMuX3N0cikge1xuICAgIHJldHVybiB0aGlzLl9zdHJcbiAgfVxuXG4gIHZhciBzdHIgPSB0aGlzLmZpbmFsID8gJzEnIDogJzAnLFxuICAgICAgbGFiZWxzID0gT2JqZWN0LmtleXModGhpcy5lZGdlcykuc29ydCgpLFxuICAgICAgbGVuID0gbGFiZWxzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbGFiZWwgPSBsYWJlbHNbaV0sXG4gICAgICAgIG5vZGUgPSB0aGlzLmVkZ2VzW2xhYmVsXVxuXG4gICAgc3RyID0gc3RyICsgbGFiZWwgKyBub2RlLmlkXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBUb2tlblNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2ZcbiAqIHRoaXMgVG9rZW5TZXQgYW5kIHRoZSBwYXNzZWQgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpbnRlcnNlY3Rpb24gd2lsbCB0YWtlIGludG8gYWNjb3VudCBhbnkgd2lsZGNhcmRzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGIgLSBBbiBvdGhlciBUb2tlblNldCB0byBpbnRlcnNlY3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgb3V0cHV0ID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICBmcmFtZSA9IHVuZGVmaW5lZFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcU5vZGU6IGIsXG4gICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBOT1RFOiBBcyB3aXRoIHRoZSAjdG9TdHJpbmcgbWV0aG9kLCB3ZSBhcmUgdXNpbmdcbiAgICAvLyBPYmplY3Qua2V5cyBhbmQgYSBmb3IgbG9vcCBpbnN0ZWFkIG9mIGEgZm9yLWluIGxvb3BcbiAgICAvLyBhcyBib3RoIG9mIHRoZXNlIG9iamVjdHMgZW50ZXIgJ2hhc2gnIG1vZGUsIGNhdXNpbmdcbiAgICAvLyB0aGUgZnVuY3Rpb24gdG8gYmUgZGUtb3B0aW1pc2VkIGluIFY4XG4gICAgdmFyIHFFZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLnFOb2RlLmVkZ2VzKSxcbiAgICAgICAgcUxlbiA9IHFFZGdlcy5sZW5ndGgsXG4gICAgICAgIG5FZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBuTGVuID0gbkVkZ2VzLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgcSA9IDA7IHEgPCBxTGVuOyBxKyspIHtcbiAgICAgIHZhciBxRWRnZSA9IHFFZGdlc1txXVxuXG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5MZW47IG4rKykge1xuICAgICAgICB2YXIgbkVkZ2UgPSBuRWRnZXNbbl1cblxuICAgICAgICBpZiAobkVkZ2UgPT0gcUVkZ2UgfHwgcUVkZ2UgPT0gJyonKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW25FZGdlXSxcbiAgICAgICAgICAgICAgcU5vZGUgPSBmcmFtZS5xTm9kZS5lZGdlc1txRWRnZV0sXG4gICAgICAgICAgICAgIGZpbmFsID0gbm9kZS5maW5hbCAmJiBxTm9kZS5maW5hbCxcbiAgICAgICAgICAgICAgbmV4dCA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgKG5FZGdlIGluIGZyYW1lLm91dHB1dC5lZGdlcykge1xuICAgICAgICAgICAgLy8gYW4gZWRnZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY3JlYXRlIGEgbmV3IG5vZGUsIGp1c3Qgc2V0IHRoZSBmaW5hbGl0eVxuICAgICAgICAgICAgLy8gYml0IHVubGVzcyB0aGlzIG5vZGUgaXMgYWxyZWFkeSBmaW5hbFxuICAgICAgICAgICAgbmV4dCA9IGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV1cbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBuZXh0LmZpbmFsIHx8IGZpbmFsXG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gZWRnZSBleGlzdHMgeWV0LCBtdXN0IGNyZWF0ZSBvbmVcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZmluYWxpdHkgYml0IGFuZCBpbnNlcnQgaXRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIG91dHB1dFxuICAgICAgICAgICAgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gZmluYWxcbiAgICAgICAgICAgIGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV0gPSBuZXh0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBxTm9kZTogcU5vZGUsXG4gICAgICAgICAgICBvdXRwdXQ6IG5leHQsXG4gICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cbmx1bnIuVG9rZW5TZXQuQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSBcIlwiXG4gIHRoaXMucm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gIHRoaXMudW5jaGVja2VkTm9kZXMgPSBbXVxuICB0aGlzLm1pbmltaXplZE5vZGVzID0ge31cbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAod29yZCkge1xuICB2YXIgbm9kZSxcbiAgICAgIGNvbW1vblByZWZpeCA9IDBcblxuICBpZiAod29yZCA8IHRoaXMucHJldmlvdXNXb3JkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yIChcIk91dCBvZiBvcmRlciB3b3JkIGluc2VydGlvblwiKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aCAmJiBpIDwgdGhpcy5wcmV2aW91c1dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod29yZFtpXSAhPSB0aGlzLnByZXZpb3VzV29yZFtpXSkgYnJlYWtcbiAgICBjb21tb25QcmVmaXgrK1xuICB9XG5cbiAgdGhpcy5taW5pbWl6ZShjb21tb25QcmVmaXgpXG5cbiAgaWYgKHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoID09IDApIHtcbiAgICBub2RlID0gdGhpcy5yb290XG4gIH0gZWxzZSB7XG4gICAgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxXS5jaGlsZFxuICB9XG5cbiAgZm9yICh2YXIgaSA9IGNvbW1vblByZWZpeDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV4dE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgICAgY2hhciA9IHdvcmRbaV1cblxuICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0Tm9kZVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wdXNoKHtcbiAgICAgIHBhcmVudDogbm9kZSxcbiAgICAgIGNoYXI6IGNoYXIsXG4gICAgICBjaGlsZDogbmV4dE5vZGVcbiAgICB9KVxuXG4gICAgbm9kZSA9IG5leHROb2RlXG4gIH1cblxuICBub2RlLmZpbmFsID0gdHJ1ZVxuICB0aGlzLnByZXZpb3VzV29yZCA9IHdvcmRcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubWluaW1pemUoMClcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5taW5pbWl6ZSA9IGZ1bmN0aW9uIChkb3duVG8pIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSBkb3duVG87IGktLSkge1xuICAgIHZhciBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1tpXSxcbiAgICAgICAgY2hpbGRLZXkgPSBub2RlLmNoaWxkLnRvU3RyaW5nKClcblxuICAgIGlmIChjaGlsZEtleSBpbiB0aGlzLm1pbmltaXplZE5vZGVzKSB7XG4gICAgICBub2RlLnBhcmVudC5lZGdlc1tub2RlLmNoYXJdID0gdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FjaGUgdGhlIGtleSBmb3IgdGhpcyBub2RlIHNpbmNlXG4gICAgICAvLyB3ZSBrbm93IGl0IGNhbid0IGNoYW5nZSBhbnltb3JlXG4gICAgICBub2RlLmNoaWxkLl9zdHIgPSBjaGlsZEtleVxuXG4gICAgICB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XSA9IG5vZGUuY2hpbGRcbiAgICB9XG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnBvcCgpXG4gIH1cbn1cbi8qIVxuICogbHVuci5JbmRleFxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQW4gaW5kZXggY29udGFpbnMgdGhlIGJ1aWx0IGluZGV4IG9mIGFsbCBkb2N1bWVudHMgYW5kIHByb3ZpZGVzIGEgcXVlcnkgaW50ZXJmYWNlXG4gKiB0byB0aGUgaW5kZXguXG4gKlxuICogVXN1YWxseSBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCB3aWxsIG5vdCBiZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29uc3RydWN0b3IsIGluc3RlYWRcbiAqIGx1bnIuQnVpbGRlciBzaG91bGQgYmUgdXNlZCB0byBjb25zdHJ1Y3QgbmV3IGluZGV4ZXMsIG9yIGx1bnIuSW5kZXgubG9hZCBzaG91bGQgYmVcbiAqIHVzZWQgdG8gbG9hZCBwcmV2aW91c2x5IGJ1aWx0IGFuZCBzZXJpYWxpemVkIGluZGV4ZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSBUaGUgYXR0cmlidXRlcyBvZiB0aGUgYnVpbHQgc2VhcmNoIGluZGV4LlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzLmludmVydGVkSW5kZXggLSBBbiBpbmRleCBvZiB0ZXJtL2ZpZWxkIHRvIGRvY3VtZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgbHVuci5WZWN0b3I+fSBhdHRycy5maWVsZFZlY3RvcnMgLSBGaWVsZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGF0dHJzLnRva2VuU2V0IC0gQW4gc2V0IG9mIGFsbCBjb3JwdXMgdG9rZW5zLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXR0cnMuZmllbGRzIC0gVGhlIG5hbWVzIG9mIGluZGV4ZWQgZG9jdW1lbnQgZmllbGRzLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lfSBhdHRycy5waXBlbGluZSAtIFRoZSBwaXBlbGluZSB0byB1c2UgZm9yIHNlYXJjaCB0ZXJtcy5cbiAqL1xubHVuci5JbmRleCA9IGZ1bmN0aW9uIChhdHRycykge1xuICB0aGlzLmludmVydGVkSW5kZXggPSBhdHRycy5pbnZlcnRlZEluZGV4XG4gIHRoaXMuZmllbGRWZWN0b3JzID0gYXR0cnMuZmllbGRWZWN0b3JzXG4gIHRoaXMudG9rZW5TZXQgPSBhdHRycy50b2tlblNldFxuICB0aGlzLmZpZWxkcyA9IGF0dHJzLmZpZWxkc1xuICB0aGlzLnBpcGVsaW5lID0gYXR0cnMucGlwZWxpbmVcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBjb250YWlucyBkZXRhaWxzIG9mIGEgZG9jdW1lbnQgbWF0Y2hpbmcgYSBzZWFyY2ggcXVlcnkuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLkluZGV4flJlc3VsdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZiAtIFRoZSByZWZlcmVuY2Ugb2YgdGhlIGRvY3VtZW50IHRoaXMgcmVzdWx0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2NvcmUgLSBBIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgcmVwcmVzZW50aW5nIGhvdyBzaW1pbGFyIHRoaXMgZG9jdW1lbnQgaXMgdG8gdGhlIHF1ZXJ5LlxuICogQHByb3BlcnR5IHtsdW5yLk1hdGNoRGF0YX0gbWF0Y2hEYXRhIC0gQ29udGFpbnMgbWV0YWRhdGEgYWJvdXQgdGhpcyBtYXRjaCBpbmNsdWRpbmcgd2hpY2ggdGVybShzKSBjYXVzZWQgdGhlIG1hdGNoLlxuICovXG5cbi8qKlxuICogQWx0aG91Z2ggbHVuciBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBjcmVhdGUgcXVlcmllcyB1c2luZyBsdW5yLlF1ZXJ5LCBpdCBhbHNvIHByb3ZpZGVzIGEgc2ltcGxlXG4gKiBxdWVyeSBsYW5ndWFnZSB3aGljaCBpdHNlbGYgaXMgcGFyc2VkIGludG8gYW4gaW5zdGFuY2Ugb2YgbHVuci5RdWVyeS5cbiAqXG4gKiBGb3IgcHJvZ3JhbW1hdGljYWxseSBidWlsZGluZyBxdWVyaWVzIGl0IGlzIGFkdmlzZWQgdG8gZGlyZWN0bHkgdXNlIGx1bnIuUXVlcnksIHRoZSBxdWVyeSBsYW5ndWFnZVxuICogaXMgYmVzdCB1c2VkIGZvciBodW1hbiBlbnRlcmVkIHRleHQgcmF0aGVyIHRoYW4gcHJvZ3JhbSBnZW5lcmF0ZWQgdGV4dC5cbiAqXG4gKiBBdCBpdHMgc2ltcGxlc3QgcXVlcmllcyBjYW4ganVzdCBiZSBhIHNpbmdsZSB0ZXJtLCBlLmcuIGBoZWxsb2AsIG11bHRpcGxlIHRlcm1zIGFyZSBhbHNvIHN1cHBvcnRlZFxuICogYW5kIHdpbGwgYmUgY29tYmluZWQgd2l0aCBPUiwgZS5nIGBoZWxsbyB3b3JsZGAgd2lsbCBtYXRjaCBkb2N1bWVudHMgdGhhdCBjb250YWluIGVpdGhlciAnaGVsbG8nXG4gKiBvciAnd29ybGQnLCB0aG91Z2ggdGhvc2UgdGhhdCBjb250YWluIGJvdGggd2lsbCByYW5rIGhpZ2hlciBpbiB0aGUgcmVzdWx0cy5cbiAqXG4gKiBXaWxkY2FyZHMgY2FuIGJlIGluY2x1ZGVkIGluIHRlcm1zIHRvIG1hdGNoIG9uZSBvciBtb3JlIHVuc3BlY2lmaWVkIGNoYXJhY3RlcnMsIHRoZXNlIHdpbGRjYXJkcyBjYW5cbiAqIGJlIGluc2VydGVkIGFueXdoZXJlIHdpdGhpbiB0aGUgdGVybSwgYW5kIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgY2FuIGV4aXN0IGluIGEgc2luZ2xlIHRlcm0uIEFkZGluZ1xuICogd2lsZGNhcmRzIHdpbGwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgdGhhdCB3aWxsIGJlIGZvdW5kIGJ1dCBjYW4gYWxzbyBoYXZlIGEgbmVnYXRpdmVcbiAqIGltcGFjdCBvbiBxdWVyeSBwZXJmb3JtYW5jZSwgZXNwZWNpYWxseSB3aXRoIHdpbGRjYXJkcyBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgdGVybS5cbiAqXG4gKiBUZXJtcyBjYW4gYmUgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyBmaWVsZHMsIGUuZy4gYHRpdGxlOmhlbGxvYCwgb25seSBkb2N1bWVudHMgd2l0aCB0aGUgdGVybVxuICogaGVsbG8gaW4gdGhlIHRpdGxlIGZpZWxkIHdpbGwgbWF0Y2ggdGhpcyBxdWVyeS4gVXNpbmcgYSBmaWVsZCBub3QgcHJlc2VudCBpbiB0aGUgaW5kZXggd2lsbCBsZWFkXG4gKiB0byBhbiBlcnJvciBiZWluZyB0aHJvd24uXG4gKlxuICogTW9kaWZpZXJzIGNhbiBhbHNvIGJlIGFkZGVkIHRvIHRlcm1zLCBsdW5yIHN1cHBvcnRzIGVkaXQgZGlzdGFuY2UgYW5kIGJvb3N0IG1vZGlmaWVycyBvbiB0ZXJtcy4gQSB0ZXJtXG4gKiBib29zdCB3aWxsIG1ha2UgZG9jdW1lbnRzIG1hdGNoaW5nIHRoYXQgdGVybSBzY29yZSBoaWdoZXIsIGUuZy4gYGZvb141YC4gRWRpdCBkaXN0YW5jZSBpcyBhbHNvIHN1cHBvcnRlZFxuICogdG8gcHJvdmlkZSBmdXp6eSBtYXRjaGluZywgZS5nLiAnaGVsbG9+Micgd2lsbCBtYXRjaCBkb2N1bWVudHMgd2l0aCBoZWxsbyB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMi5cbiAqIEF2b2lkIGxhcmdlIHZhbHVlcyBmb3IgZWRpdCBkaXN0YW5jZSB0byBpbXByb3ZlIHF1ZXJ5IHBlcmZvcm1hbmNlLlxuICpcbiAqIEVhY2ggdGVybSBhbHNvIHN1cHBvcnRzIGEgcHJlc2VuY2UgbW9kaWZpZXIuIEJ5IGRlZmF1bHQgYSB0ZXJtJ3MgcHJlc2VuY2UgaW4gZG9jdW1lbnQgaXMgb3B0aW9uYWwsIGhvd2V2ZXJcbiAqIHRoaXMgY2FuIGJlIGNoYW5nZWQgdG8gZWl0aGVyIHJlcXVpcmVkIG9yIHByb2hpYml0ZWQuIEZvciBhIHRlcm0ncyBwcmVzZW5jZSB0byBiZSByZXF1aXJlZCBpbiBhIGRvY3VtZW50IHRoZVxuICogdGVybSBzaG91bGQgYmUgcHJlZml4ZWQgd2l0aCBhICcrJywgZS5nLiBgK2ZvbyBiYXJgIGlzIGEgc2VhcmNoIGZvciBkb2N1bWVudHMgdGhhdCBtdXN0IGNvbnRhaW4gJ2ZvbycgYW5kXG4gKiBvcHRpb25hbGx5IGNvbnRhaW4gJ2JhcicuIENvbnZlcnNlbHkgYSBsZWFkaW5nICctJyBzZXRzIHRoZSB0ZXJtcyBwcmVzZW5jZSB0byBwcm9oaWJpdGVkLCBpLmUuIGl0IG11c3Qgbm90XG4gKiBhcHBlYXIgaW4gYSBkb2N1bWVudCwgZS5nLiBgLWZvbyBiYXJgIGlzIGEgc2VhcmNoIGZvciBkb2N1bWVudHMgdGhhdCBkbyBub3QgY29udGFpbiAnZm9vJyBidXQgbWF5IGNvbnRhaW4gJ2JhcicuXG4gKlxuICogVG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGUgYmFja3NsYXNoIGNoYXJhY3RlciAnXFwnIGNhbiBiZSB1c2VkLCB0aGlzIGFsbG93cyBzZWFyY2hlcyB0byBpbmNsdWRlXG4gKiBjaGFyYWN0ZXJzIHRoYXQgd291bGQgbm9ybWFsbHkgYmUgY29uc2lkZXJlZCBtb2RpZmllcnMsIGUuZy4gYGZvb1xcfjJgIHdpbGwgc2VhcmNoIGZvciBhIHRlcm0gXCJmb29+MlwiIGluc3RlYWRcbiAqIG9mIGF0dGVtcHRpbmcgdG8gYXBwbHkgYSBib29zdCBvZiAyIHRvIHRoZSBzZWFyY2ggdGVybSBcImZvb1wiLlxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IGx1bnIuSW5kZXh+UXVlcnlTdHJpbmdcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlNpbXBsZSBzaW5nbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG8gd29ybGRcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gc2NvcGVkIHRvIGEgZmllbGQ8L2NhcHRpb24+XG4gKiB0aXRsZTpoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGEgYm9vc3Qgb2YgMTA8L2NhcHRpb24+XG4gKiBoZWxsb14xMFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMjwvY2FwdGlvbj5cbiAqIGhlbGxvfjJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm1zIHdpdGggcHJlc2VuY2UgbW9kaWZpZXJzPC9jYXB0aW9uPlxuICogLWZvbyArYmFyIGJhelxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBzZWFyY2ggYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgbHVuciBxdWVyeSBzeW50YXguXG4gKlxuICogUmVzdWx0cyB3aWxsIGJlIHJldHVybmVkIHNvcnRlZCBieSB0aGVpciBzY29yZSwgdGhlIG1vc3QgcmVsZXZhbnQgcmVzdWx0c1xuICogd2lsbCBiZSByZXR1cm5lZCBmaXJzdC4gIEZvciBkZXRhaWxzIG9uIGhvdyB0aGUgc2NvcmUgaXMgY2FsY3VsYXRlZCwgcGxlYXNlIHNlZVxuICogdGhlIHtAbGluayBodHRwczovL2x1bnJqcy5jb20vZ3VpZGVzL3NlYXJjaGluZy5odG1sI3Njb3Jpbmd8Z3VpZGV9LlxuICpcbiAqIEZvciBtb3JlIHByb2dyYW1tYXRpYyBxdWVyeWluZyB1c2UgbHVuci5JbmRleCNxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+UXVlcnlTdHJpbmd9IHF1ZXJ5U3RyaW5nIC0gQSBzdHJpbmcgY29udGFpbmluZyBhIGx1bnIgcXVlcnkuXG4gKiBAdGhyb3dzIHtsdW5yLlF1ZXJ5UGFyc2VFcnJvcn0gSWYgdGhlIHBhc3NlZCBxdWVyeSBzdHJpbmcgY2Fubm90IGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnlTdHJpbmcpIHtcbiAgcmV0dXJuIHRoaXMucXVlcnkoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBsdW5yLlF1ZXJ5UGFyc2VyKHF1ZXJ5U3RyaW5nLCBxdWVyeSlcbiAgICBwYXJzZXIucGFyc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcXVlcnkgYnVpbGRlciBjYWxsYmFjayBwcm92aWRlcyBhIHF1ZXJ5IG9iamVjdCB0byBiZSB1c2VkIHRvIGV4cHJlc3NcbiAqIHRoZSBxdWVyeSB0byBwZXJmb3JtIG9uIHRoZSBpbmRleC5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5JbmRleH5xdWVyeUJ1aWxkZXJcbiAqIEBwYXJhbSB7bHVuci5RdWVyeX0gcXVlcnkgLSBUaGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHVwLlxuICogQHRoaXMgbHVuci5RdWVyeVxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBxdWVyeSBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyB0aGUgeWllbGRlZCBsdW5yLlF1ZXJ5IG9iamVjdC5cbiAqXG4gKiBJZiBwZXJmb3JtaW5nIHByb2dyYW1tYXRpYyBxdWVyaWVzIGFnYWluc3QgdGhlIGluZGV4LCB0aGlzIG1ldGhvZCBpcyBwcmVmZXJyZWRcbiAqIG92ZXIgbHVuci5JbmRleCNzZWFyY2ggc28gYXMgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgcXVlcnkgcGFyc2luZyBvdmVyaGVhZC5cbiAqXG4gKiBBIHF1ZXJ5IG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgdXNlZCB0b1xuICogZXhwcmVzcyB0aGUgcXVlcnkgdG8gYmUgcnVuIGFnYWluc3QgdGhlIGluZGV4LlxuICpcbiAqIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgY2FsbGJhY2sgcGFyYW1ldGVyIGl0IGlzIF9ub3RfIGFuXG4gKiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCB0aGUgY2FsbGJhY2sgaXMganVzdCB5aWVsZGVkIGEgcXVlcnkgb2JqZWN0IHRvIGJlXG4gKiBjdXN0b21pemVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5xdWVyeUJ1aWxkZXJ9IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gYnVpbGQgdGhlIHF1ZXJ5LlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIGZvciBlYWNoIHF1ZXJ5IGNsYXVzZVxuICAvLyAqIHByb2Nlc3MgdGVybXNcbiAgLy8gKiBleHBhbmQgdGVybXMgZnJvbSB0b2tlbiBzZXRcbiAgLy8gKiBmaW5kIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGFcbiAgLy8gKiBnZXQgZG9jdW1lbnQgdmVjdG9yc1xuICAvLyAqIHNjb3JlIGRvY3VtZW50c1xuXG4gIHZhciBxdWVyeSA9IG5ldyBsdW5yLlF1ZXJ5KHRoaXMuZmllbGRzKSxcbiAgICAgIG1hdGNoaW5nRmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHF1ZXJ5VmVjdG9ycyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICB0ZXJtRmllbGRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICByZXF1aXJlZE1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcHJvaGliaXRlZE1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgLypcbiAgICogVG8gc3VwcG9ydCBmaWVsZCBsZXZlbCBib29zdHMgYSBxdWVyeSB2ZWN0b3IgaXMgY3JlYXRlZCBwZXJcbiAgICogZmllbGQuIEFuIGVtcHR5IHZlY3RvciBpcyBlYWdlcmx5IGNyZWF0ZWQgdG8gc3VwcG9ydCBuZWdhdGVkXG4gICAqIHF1ZXJpZXMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVlcnlWZWN0b3JzW3RoaXMuZmllbGRzW2ldXSA9IG5ldyBsdW5yLlZlY3RvclxuICB9XG5cbiAgZm4uY2FsbChxdWVyeSwgcXVlcnkpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVyeS5jbGF1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBVbmxlc3MgdGhlIHBpcGVsaW5lIGhhcyBiZWVuIGRpc2FibGVkIGZvciB0aGlzIHRlcm0sIHdoaWNoIGlzXG4gICAgICogdGhlIGNhc2UgZm9yIHRlcm1zIHdpdGggd2lsZGNhcmRzLCB3ZSBuZWVkIHRvIHBhc3MgdGhlIGNsYXVzZVxuICAgICAqIHRlcm0gdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLiBBIHBpcGVsaW5lIHJldHVybnMgYW4gYXJyYXlcbiAgICAgKiBvZiBwcm9jZXNzZWQgdGVybXMuIFBpcGVsaW5lIGZ1bmN0aW9ucyBtYXkgZXhwYW5kIHRoZSBwYXNzZWRcbiAgICAgKiB0ZXJtLCB3aGljaCBtZWFucyB3ZSBtYXkgZW5kIHVwIHBlcmZvcm1pbmcgbXVsdGlwbGUgaW5kZXggbG9va3Vwc1xuICAgICAqIGZvciBhIHNpbmdsZSBxdWVyeSB0ZXJtLlxuICAgICAqL1xuICAgIHZhciBjbGF1c2UgPSBxdWVyeS5jbGF1c2VzW2ldLFxuICAgICAgICB0ZXJtcyA9IG51bGwsXG4gICAgICAgIGNsYXVzZU1hdGNoZXMgPSBsdW5yLlNldC5jb21wbGV0ZVxuXG4gICAgaWYgKGNsYXVzZS51c2VQaXBlbGluZSkge1xuICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1blN0cmluZyhjbGF1c2UudGVybSwge1xuICAgICAgICBmaWVsZHM6IGNsYXVzZS5maWVsZHNcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1zID0gW2NsYXVzZS50ZXJtXVxuICAgIH1cblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdGVybXMubGVuZ3RoOyBtKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbbV1cblxuICAgICAgLypcbiAgICAgICAqIEVhY2ggdGVybSByZXR1cm5lZCBmcm9tIHRoZSBwaXBlbGluZSBuZWVkcyB0byB1c2UgdGhlIHNhbWUgcXVlcnlcbiAgICAgICAqIGNsYXVzZSBvYmplY3QsIGUuZy4gdGhlIHNhbWUgYm9vc3QgYW5kIG9yIGVkaXQgZGlzdGFuY2UuIFRoZVxuICAgICAgICogc2ltcGxlc3Qgd2F5IHRvIGRvIHRoaXMgaXMgdG8gcmUtdXNlIHRoZSBjbGF1c2Ugb2JqZWN0IGJ1dCBtdXRhdGVcbiAgICAgICAqIGl0cyB0ZXJtIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBjbGF1c2UudGVybSA9IHRlcm1cblxuICAgICAgLypcbiAgICAgICAqIEZyb20gdGhlIHRlcm0gaW4gdGhlIGNsYXVzZSB3ZSBjcmVhdGUgYSB0b2tlbiBzZXQgd2hpY2ggd2lsbCB0aGVuXG4gICAgICAgKiBiZSB1c2VkIHRvIGludGVyc2VjdCB0aGUgaW5kZXhlcyB0b2tlbiBzZXQgdG8gZ2V0IGEgbGlzdCBvZiB0ZXJtc1xuICAgICAgICogdG8gbG9va3VwIGluIHRoZSBpbnZlcnRlZCBpbmRleFxuICAgICAgICovXG4gICAgICB2YXIgdGVybVRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlKGNsYXVzZSksXG4gICAgICAgICAgZXhwYW5kZWRUZXJtcyA9IHRoaXMudG9rZW5TZXQuaW50ZXJzZWN0KHRlcm1Ub2tlblNldCkudG9BcnJheSgpXG5cbiAgICAgIC8qXG4gICAgICAgKiBJZiBhIHRlcm0gbWFya2VkIGFzIHJlcXVpcmVkIGRvZXMgbm90IGV4aXN0IGluIHRoZSB0b2tlblNldCBpdCBpc1xuICAgICAgICogaW1wb3NzaWJsZSBmb3IgdGhlIHNlYXJjaCB0byByZXR1cm4gYW55IG1hdGNoZXMuIFdlIHNldCBhbGwgdGhlIGZpZWxkXG4gICAgICAgKiBzY29wZWQgcmVxdWlyZWQgbWF0Y2hlcyBzZXQgdG8gZW1wdHkgYW5kIHN0b3AgZXhhbWluaW5nIGFueSBmdXJ0aGVyXG4gICAgICAgKiBjbGF1c2VzLlxuICAgICAgICovXG4gICAgICBpZiAoZXhwYW5kZWRUZXJtcy5sZW5ndGggPT09IDAgJiYgY2xhdXNlLnByZXNlbmNlID09PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba11cbiAgICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuZW1wdHlcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhwYW5kZWRUZXJtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAvKlxuICAgICAgICAgKiBGb3IgZWFjaCB0ZXJtIGdldCB0aGUgcG9zdGluZyBhbmQgdGVybUluZGV4LCB0aGlzIGlzIHJlcXVpcmVkIGZvclxuICAgICAgICAgKiBidWlsZGluZyB0aGUgcXVlcnkgdmVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGV4cGFuZGVkVGVybSA9IGV4cGFuZGVkVGVybXNbal0sXG4gICAgICAgICAgICBwb3N0aW5nID0gdGhpcy5pbnZlcnRlZEluZGV4W2V4cGFuZGVkVGVybV0sXG4gICAgICAgICAgICB0ZXJtSW5kZXggPSBwb3N0aW5nLl9pbmRleFxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICogRm9yIGVhY2ggZmllbGQgdGhhdCB0aGlzIHF1ZXJ5IHRlcm0gaXMgc2NvcGVkIGJ5IChieSBkZWZhdWx0XG4gICAgICAgICAgICogYWxsIGZpZWxkcyBhcmUgaW4gc2NvcGUpIHdlIG5lZWQgdG8gZ2V0IGFsbCB0aGUgZG9jdW1lbnQgcmVmc1xuICAgICAgICAgICAqIHRoYXQgaGF2ZSB0aGlzIHRlcm0gaW4gdGhhdCBmaWVsZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoZSBwb3N0aW5nIGlzIHRoZSBlbnRyeSBpbiB0aGUgaW52ZXJ0ZWRJbmRleCBmb3IgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogdGVybSBmcm9tIGFib3ZlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba10sXG4gICAgICAgICAgICAgIGZpZWxkUG9zdGluZyA9IHBvc3RpbmdbZmllbGRdLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50UmVmcyA9IE9iamVjdC5rZXlzKGZpZWxkUG9zdGluZyksXG4gICAgICAgICAgICAgIHRlcm1GaWVsZCA9IGV4cGFuZGVkVGVybSArIFwiL1wiICsgZmllbGQsXG4gICAgICAgICAgICAgIG1hdGNoaW5nRG9jdW1lbnRzU2V0ID0gbmV3IGx1bnIuU2V0KG1hdGNoaW5nRG9jdW1lbnRSZWZzKVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBpZiB0aGUgcHJlc2VuY2Ugb2YgdGhpcyB0ZXJtIGlzIHJlcXVpcmVkIGVuc3VyZSB0aGF0IHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIGRvY3VtZW50cyBhcmUgYWRkZWQgdG8gdGhlIHNldCBvZiByZXF1aXJlZCBtYXRjaGVzIGZvciB0aGlzIGNsYXVzZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgICAgICAgY2xhdXNlTWF0Y2hlcyA9IGNsYXVzZU1hdGNoZXMudW5pb24obWF0Y2hpbmdEb2N1bWVudHNTZXQpXG5cbiAgICAgICAgICAgIGlmIChyZXF1aXJlZE1hdGNoZXNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmNvbXBsZXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBpZiB0aGUgcHJlc2VuY2Ugb2YgdGhpcyB0ZXJtIGlzIHByb2hpYml0ZWQgZW5zdXJlIHRoYXQgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogZG9jdW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgc2V0IG9mIHByb2hpYml0ZWQgbWF0Y2hlcyBmb3IgdGhpcyBmaWVsZCxcbiAgICAgICAgICAgKiBjcmVhdGluZyB0aGF0IHNldCBpZiBpdCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlBST0hJQklURUQpIHtcbiAgICAgICAgICAgIGlmIChwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5lbXB0eVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPSBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0udW5pb24obWF0Y2hpbmdEb2N1bWVudHNTZXQpXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBQcm9oaWJpdGVkIG1hdGNoZXMgc2hvdWxkIG5vdCBiZSBwYXJ0IG9mIHRoZSBxdWVyeSB2ZWN0b3IgdXNlZCBmb3JcbiAgICAgICAgICAgICAqIHNpbWlsYXJpdHkgc2NvcmluZyBhbmQgbm8gbWV0YWRhdGEgc2hvdWxkIGJlIGV4dHJhY3RlZCBzbyB3ZSBjb250aW51ZVxuICAgICAgICAgICAgICogdG8gdGhlIG5leHQgZmllbGRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFRoZSBxdWVyeSBmaWVsZCB2ZWN0b3IgaXMgcG9wdWxhdGVkIHVzaW5nIHRoZSB0ZXJtSW5kZXggZm91bmQgZm9yXG4gICAgICAgICAgICogdGhlIHRlcm0gYW5kIGEgdW5pdCB2YWx1ZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBib29zdCBhcHBsaWVkLlxuICAgICAgICAgICAqIFVzaW5nIHVwc2VydCBiZWNhdXNlIHRoZXJlIGNvdWxkIGFscmVhZHkgYmUgYW4gZW50cnkgaW4gdGhlIHZlY3RvclxuICAgICAgICAgICAqIGZvciB0aGUgdGVybSB3ZSBhcmUgd29ya2luZyB3aXRoLiBJbiB0aGF0IGNhc2Ugd2UganVzdCBhZGQgdGhlIHNjb3Jlc1xuICAgICAgICAgICAqIHRvZ2V0aGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHF1ZXJ5VmVjdG9yc1tmaWVsZF0udXBzZXJ0KHRlcm1JbmRleCwgY2xhdXNlLmJvb3N0LCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGIgfSlcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlJ3ZlIGFscmVhZHkgc2VlbiB0aGlzIHRlcm0sIGZpZWxkIGNvbWJvIHRoZW4gd2UndmUgYWxyZWFkeSBjb2xsZWN0ZWRcbiAgICAgICAgICAgKiB0aGUgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YSwgbm8gbmVlZCB0byBnbyB0aHJvdWdoIGFsbCB0aGF0IGFnYWluXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBtYXRjaGluZ0RvY3VtZW50UmVmcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIEFsbCBtZXRhZGF0YSBmb3IgdGhpcyB0ZXJtL2ZpZWxkL2RvY3VtZW50IHRyaXBsZVxuICAgICAgICAgICAgICogYXJlIHRoZW4gZXh0cmFjdGVkIGFuZCBjb2xsZWN0ZWQgaW50byBhbiBpbnN0YW5jZVxuICAgICAgICAgICAgICogb2YgbHVuci5NYXRjaERhdGEgcmVhZHkgdG8gYmUgcmV0dXJuZWQgaW4gdGhlIHF1ZXJ5XG4gICAgICAgICAgICAgKiByZXN1bHRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0RvY3VtZW50UmVmID0gbWF0Y2hpbmdEb2N1bWVudFJlZnNbbF0sXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChtYXRjaGluZ0RvY3VtZW50UmVmLCBmaWVsZCksXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEgPSBmaWVsZFBvc3RpbmdbbWF0Y2hpbmdEb2N1bWVudFJlZl0sXG4gICAgICAgICAgICAgICAgZmllbGRNYXRjaFxuXG4gICAgICAgICAgICBpZiAoKGZpZWxkTWF0Y2ggPSBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YSAoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaWVsZE1hdGNoLmFkZChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcHJlc2VuY2Ugd2FzIHJlcXVpcmVkIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSByZXF1aXJlZE1hdGNoZXMgZmllbGQgc2V0cy5cbiAgICAgKiBXZSBkbyB0aGlzIGFmdGVyIGFsbCBmaWVsZHMgZm9yIHRoZSB0ZXJtIGhhdmUgY29sbGVjdGVkIHRoZWlyIG1hdGNoZXMgYmVjYXVzZVxuICAgICAqIHRoZSBjbGF1c2UgdGVybXMgcHJlc2VuY2UgaXMgcmVxdWlyZWQgaW4gX2FueV8gb2YgdGhlIGZpZWxkcyBub3QgX2FsbF8gb2YgdGhlXG4gICAgICogZmllbGRzLlxuICAgICAqL1xuICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdXG4gICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSByZXF1aXJlZE1hdGNoZXNbZmllbGRdLmludGVyc2VjdChjbGF1c2VNYXRjaGVzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBOZWVkIHRvIGNvbWJpbmUgdGhlIGZpZWxkIHNjb3BlZCByZXF1aXJlZCBhbmQgcHJvaGliaXRlZFxuICAgKiBtYXRjaGluZyBkb2N1bWVudHMgaW50byBhIGdsb2JhbCBzZXQgb2YgcmVxdWlyZWQgYW5kIHByb2hpYml0ZWRcbiAgICogbWF0Y2hlc1xuICAgKi9cbiAgdmFyIGFsbFJlcXVpcmVkTWF0Y2hlcyA9IGx1bnIuU2V0LmNvbXBsZXRlLFxuICAgICAgYWxsUHJvaGliaXRlZE1hdGNoZXMgPSBsdW5yLlNldC5lbXB0eVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXVxuXG4gICAgaWYgKHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0pIHtcbiAgICAgIGFsbFJlcXVpcmVkTWF0Y2hlcyA9IGFsbFJlcXVpcmVkTWF0Y2hlcy5pbnRlcnNlY3QocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSlcbiAgICB9XG5cbiAgICBpZiAocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdKSB7XG4gICAgICBhbGxQcm9oaWJpdGVkTWF0Y2hlcyA9IGFsbFByb2hpYml0ZWRNYXRjaGVzLnVuaW9uKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSlcbiAgICB9XG4gIH1cblxuICB2YXIgbWF0Y2hpbmdGaWVsZFJlZnMgPSBPYmplY3Qua2V5cyhtYXRjaGluZ0ZpZWxkcyksXG4gICAgICByZXN1bHRzID0gW10sXG4gICAgICBtYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIC8qXG4gICAqIElmIHRoZSBxdWVyeSBpcyBuZWdhdGVkIChjb250YWlucyBvbmx5IHByb2hpYml0ZWQgdGVybXMpXG4gICAqIHdlIG5lZWQgdG8gZ2V0IF9hbGxfIGZpZWxkUmVmcyBjdXJyZW50bHkgZXhpc3RpbmcgaW4gdGhlXG4gICAqIGluZGV4LiBUaGlzIGlzIG9ubHkgZG9uZSB3aGVuIHdlIGtub3cgdGhhdCB0aGUgcXVlcnkgaXNcbiAgICogZW50aXJlbHkgcHJvaGliaXRlZCB0ZXJtcyB0byBhdm9pZCBhbnkgY29zdCBvZiBnZXR0aW5nIGFsbFxuICAgKiBmaWVsZFJlZnMgdW5uZWNlc3NhcmlseS5cbiAgICpcbiAgICogQWRkaXRpb25hbGx5LCBibGFuayBNYXRjaERhdGEgbXVzdCBiZSBjcmVhdGVkIHRvIGNvcnJlY3RseVxuICAgKiBwb3B1bGF0ZSB0aGUgcmVzdWx0cy5cbiAgICovXG4gIGlmIChxdWVyeS5pc05lZ2F0ZWQoKSkge1xuICAgIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRmllbGRSZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWF0Y2hpbmdGaWVsZFJlZiA9IG1hdGNoaW5nRmllbGRSZWZzW2ldXG4gICAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcobWF0Y2hpbmdGaWVsZFJlZilcbiAgICAgIG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdID0gbmV3IGx1bnIuTWF0Y2hEYXRhXG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogQ3VycmVudGx5IHdlIGhhdmUgZG9jdW1lbnQgZmllbGRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LCBidXQgd2VcbiAgICAgKiBuZWVkIHRvIHJldHVybiBkb2N1bWVudHMuIFRoZSBtYXRjaERhdGEgYW5kIHNjb3JlcyBhcmUgY29tYmluZWRcbiAgICAgKiBmcm9tIG11bHRpcGxlIGZpZWxkcyBiZWxvbmdpbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBTY29yZXMgYXJlIGNhbGN1bGF0ZWQgYnkgZmllbGQsIHVzaW5nIHRoZSBxdWVyeSB2ZWN0b3JzIGNyZWF0ZWRcbiAgICAgKiBhYm92ZSwgYW5kIGNvbWJpbmVkIGludG8gYSBmaW5hbCBkb2N1bWVudCBzY29yZSB1c2luZyBhZGRpdGlvbi5cbiAgICAgKi9cbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcobWF0Y2hpbmdGaWVsZFJlZnNbaV0pLFxuICAgICAgICBkb2NSZWYgPSBmaWVsZFJlZi5kb2NSZWZcblxuICAgIGlmICghYWxsUmVxdWlyZWRNYXRjaGVzLmNvbnRhaW5zKGRvY1JlZikpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGFsbFByb2hpYml0ZWRNYXRjaGVzLmNvbnRhaW5zKGRvY1JlZikpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIGZpZWxkVmVjdG9yID0gdGhpcy5maWVsZFZlY3RvcnNbZmllbGRSZWZdLFxuICAgICAgICBzY29yZSA9IHF1ZXJ5VmVjdG9yc1tmaWVsZFJlZi5maWVsZE5hbWVdLnNpbWlsYXJpdHkoZmllbGRWZWN0b3IpLFxuICAgICAgICBkb2NNYXRjaFxuXG4gICAgaWYgKChkb2NNYXRjaCA9IG1hdGNoZXNbZG9jUmVmXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jTWF0Y2guc2NvcmUgKz0gc2NvcmVcbiAgICAgIGRvY01hdGNoLm1hdGNoRGF0YS5jb21iaW5lKG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICByZWY6IGRvY1JlZixcbiAgICAgICAgc2NvcmU6IHNjb3JlLFxuICAgICAgICBtYXRjaERhdGE6IG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXVxuICAgICAgfVxuICAgICAgbWF0Y2hlc1tkb2NSZWZdID0gbWF0Y2hcbiAgICAgIHJlc3VsdHMucHVzaChtYXRjaClcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBTb3J0IHRoZSByZXN1bHRzIG9iamVjdHMgYnkgc2NvcmUsIGhpZ2hlc3QgZmlyc3QuXG4gICAqL1xuICByZXR1cm4gcmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlXG4gIH0pXG59XG5cbi8qKlxuICogUHJlcGFyZXMgdGhlIGluZGV4IGZvciBKU09OIHNlcmlhbGl6YXRpb24uXG4gKlxuICogVGhlIHNjaGVtYSBmb3IgdGhpcyBKU09OIGJsb2Igd2lsbCBiZSBkZXNjcmliZWQgaW4gYVxuICogc2VwYXJhdGUgSlNPTiBzY2hlbWEgZmlsZS5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbnZlcnRlZEluZGV4ID0gT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KVxuICAgIC5zb3J0KClcbiAgICAubWFwKGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICByZXR1cm4gW3Rlcm0sIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXV1cbiAgICB9LCB0aGlzKVxuXG4gIHZhciBmaWVsZFZlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVmVjdG9ycylcbiAgICAubWFwKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHJldHVybiBbcmVmLCB0aGlzLmZpZWxkVmVjdG9yc1tyZWZdLnRvSlNPTigpXVxuICAgIH0sIHRoaXMpXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiBsdW5yLnZlcnNpb24sXG4gICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcbiAgICBmaWVsZFZlY3RvcnM6IGZpZWxkVmVjdG9ycyxcbiAgICBpbnZlcnRlZEluZGV4OiBpbnZlcnRlZEluZGV4LFxuICAgIHBpcGVsaW5lOiB0aGlzLnBpcGVsaW5lLnRvSlNPTigpXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGl6ZWRJbmRleCAtIEEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkluZGV4LmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXplZEluZGV4KSB7XG4gIHZhciBhdHRycyA9IHt9LFxuICAgICAgZmllbGRWZWN0b3JzID0ge30sXG4gICAgICBzZXJpYWxpemVkVmVjdG9ycyA9IHNlcmlhbGl6ZWRJbmRleC5maWVsZFZlY3RvcnMsXG4gICAgICBpbnZlcnRlZEluZGV4ID0ge30sXG4gICAgICBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleCA9IHNlcmlhbGl6ZWRJbmRleC5pbnZlcnRlZEluZGV4LFxuICAgICAgdG9rZW5TZXRCdWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlcixcbiAgICAgIHBpcGVsaW5lID0gbHVuci5QaXBlbGluZS5sb2FkKHNlcmlhbGl6ZWRJbmRleC5waXBlbGluZSlcblxuICBpZiAoc2VyaWFsaXplZEluZGV4LnZlcnNpb24gIT0gbHVuci52ZXJzaW9uKSB7XG4gICAgbHVuci51dGlscy53YXJuKFwiVmVyc2lvbiBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgc2VyaWFsaXNlZCBpbmRleC4gQ3VycmVudCB2ZXJzaW9uIG9mIGx1bnIgJ1wiICsgbHVuci52ZXJzaW9uICsgXCInIGRvZXMgbm90IG1hdGNoIHNlcmlhbGl6ZWQgaW5kZXggJ1wiICsgc2VyaWFsaXplZEluZGV4LnZlcnNpb24gKyBcIidcIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkVmVjdG9yc1tpXSxcbiAgICAgICAgcmVmID0gdHVwbGVbMF0sXG4gICAgICAgIGVsZW1lbnRzID0gdHVwbGVbMV1cblxuICAgIGZpZWxkVmVjdG9yc1tyZWZdID0gbmV3IGx1bnIuVmVjdG9yKGVsZW1lbnRzKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4W2ldLFxuICAgICAgICB0ZXJtID0gdHVwbGVbMF0sXG4gICAgICAgIHBvc3RpbmcgPSB0dXBsZVsxXVxuXG4gICAgdG9rZW5TZXRCdWlsZGVyLmluc2VydCh0ZXJtKVxuICAgIGludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gIH1cblxuICB0b2tlblNldEJ1aWxkZXIuZmluaXNoKClcblxuICBhdHRycy5maWVsZHMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRzXG5cbiAgYXR0cnMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG4gIGF0dHJzLmludmVydGVkSW5kZXggPSBpbnZlcnRlZEluZGV4XG4gIGF0dHJzLnRva2VuU2V0ID0gdG9rZW5TZXRCdWlsZGVyLnJvb3RcbiAgYXR0cnMucGlwZWxpbmUgPSBwaXBlbGluZVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleChhdHRycylcbn1cbi8qIVxuICogbHVuci5CdWlsZGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLkJ1aWxkZXIgcGVyZm9ybXMgaW5kZXhpbmcgb24gYSBzZXQgb2YgZG9jdW1lbnRzIGFuZFxuICogcmV0dXJucyBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCByZWFkeSBmb3IgcXVlcnlpbmcuXG4gKlxuICogQWxsIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluZGV4IGlzIGRvbmUgdmlhIHRoZSBidWlsZGVyLCB0aGVcbiAqIGZpZWxkcyB0byBpbmRleCwgdGhlIGRvY3VtZW50IHJlZmVyZW5jZSwgdGhlIHRleHQgcHJvY2Vzc2luZ1xuICogcGlwZWxpbmUgYW5kIGRvY3VtZW50IHNjb3JpbmcgcGFyYW1ldGVycyBhcmUgYWxsIHNldCBvbiB0aGVcbiAqIGJ1aWxkZXIgYmVmb3JlIGluZGV4aW5nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9yZWYgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHJlZmVyZW5jZSBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IF9maWVsZHMgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGZpZWxkcyB0byBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBpbnZlcnRlZEluZGV4IC0gVGhlIGludmVydGVkIGluZGV4IG1hcHMgdGVybXMgdG8gZG9jdW1lbnQgZmllbGRzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50VGVybUZyZXF1ZW5jaWVzIC0gS2VlcHMgdHJhY2sgb2YgZG9jdW1lbnQgdGVybSBmcmVxdWVuY2llcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudExlbmd0aHMgLSBLZWVwcyB0cmFjayBvZiB0aGUgbGVuZ3RoIG9mIGRvY3VtZW50cyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge2x1bnIudG9rZW5pemVyfSB0b2tlbml6ZXIgLSBGdW5jdGlvbiBmb3Igc3BsaXR0aW5nIHN0cmluZ3MgaW50byB0b2tlbnMgZm9yIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBwaXBlbGluZSAtIFRoZSBwaXBlbGluZSBwZXJmb3JtcyB0ZXh0IHByb2Nlc3Npbmcgb24gdG9rZW5zIGJlZm9yZSBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gc2VhcmNoUGlwZWxpbmUgLSBBIHBpcGVsaW5lIGZvciBwcm9jZXNzaW5nIHNlYXJjaCB0ZXJtcyBiZWZvcmUgcXVlcnlpbmcgdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBLZWVwcyB0cmFjayBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyBpbmRleGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9iIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBmaWVsZCBsZW5ndGggbm9ybWFsaXphdGlvbiwgc2V0dGluZyB0aGlzIHRvIDAgZGlzYWJsZWQgbm9ybWFsaXphdGlvbiwgMSBmdWxseSBub3JtYWxpemVzIGZpZWxkIGxlbmd0aHMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuNzUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2sxIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBob3cgcXVpY2tseSBhbiBpbmNyZWFzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm0gZnJlcXVlbmN5IHNhdHVyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0ZXJtSW5kZXggLSBBIGNvdW50ZXIgaW5jcmVtZW50ZWQgZm9yIGVhY2ggdW5pcXVlIHRlcm0sIHVzZWQgdG8gaWRlbnRpZnkgYSB0ZXJtcyBwb3NpdGlvbiBpbiB0aGUgdmVjdG9yIHNwYWNlLlxuICogQHByb3BlcnR5IHthcnJheX0gbWV0YWRhdGFXaGl0ZWxpc3QgLSBBIGxpc3Qgb2YgbWV0YWRhdGEga2V5cyB0aGF0IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCBmb3IgZW50cnkgaW4gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlZiA9IFwiaWRcIlxuICB0aGlzLl9maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX2RvY3VtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzID0ge31cbiAgdGhpcy5maWVsZExlbmd0aHMgPSB7fVxuICB0aGlzLnRva2VuaXplciA9IGx1bnIudG9rZW5pemVyXG4gIHRoaXMucGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLnNlYXJjaFBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5kb2N1bWVudENvdW50ID0gMFxuICB0aGlzLl9iID0gMC43NVxuICB0aGlzLl9rMSA9IDEuMlxuICB0aGlzLnRlcm1JbmRleCA9IDBcbiAgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdCA9IFtdXG59XG5cbi8qKlxuICogU2V0cyB0aGUgZG9jdW1lbnQgZmllbGQgdXNlZCBhcyB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLiBFdmVyeSBkb2N1bWVudCBtdXN0IGhhdmUgdGhpcyBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIHRoaXMgZmllbGQgaW4gdGhlIGRvY3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgaWYgaXQgaXMgbm90IGEgc3RyaW5nIGl0IHdpbGwgYmVcbiAqIGNvZXJjZWQgaW50byBhIHN0cmluZyBieSBjYWxsaW5nIHRvU3RyaW5nLlxuICpcbiAqIFRoZSBkZWZhdWx0IHJlZiBpcyAnaWQnLlxuICpcbiAqIFRoZSByZWYgc2hvdWxkIF9ub3RfIGJlIGNoYW5nZWQgZHVyaW5nIGluZGV4aW5nLCBpdCBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgZG9jdW1lbnRzIGFyZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LiBDaGFuZ2luZyBpdCBkdXJpbmcgaW5kZXhpbmcgY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW50IHJlc3VsdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiAtIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgZmllbGQgaW4gdGhlIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5fcmVmID0gcmVmXG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqXG4gKiBMdW5yIGV4cGVjdHMgYSBmaWVsZCB0byBiZSBhdCB0aGUgdG9wIGxldmVsIG9mIGEgZG9jdW1lbnQsIGlmIGhvd2V2ZXIgdGhlIGZpZWxkXG4gKiBpcyBkZWVwbHkgbmVzdGVkIHdpdGhpbiBhIGRvY3VtZW50IGFuIGV4dHJhY3RvciBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBleHRyYWN0XG4gKiB0aGUgcmlnaHQgZmllbGQgZm9yIGluZGV4aW5nLlxuICpcbiAqIEBjYWxsYmFjayBmaWVsZEV4dHJhY3RvclxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCBiZWluZyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcmV0dXJucyB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5kZXhlZCBmb3IgdGhpcyBmaWVsZC5cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV4dHJhY3RpbmcgYSBuZXN0ZWQgZmllbGQ8L2NhcHRpb24+XG4gKiBmdW5jdGlvbiAoZG9jKSB7IHJldHVybiBkb2MubmVzdGVkLmZpZWxkIH1cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGUgbGlzdCBvZiBkb2N1bWVudCBmaWVsZHMgdGhhdCB3aWxsIGJlIGluZGV4ZWQuIEV2ZXJ5IGRvY3VtZW50IGJlaW5nXG4gKiBpbmRleGVkIHNob3VsZCBoYXZlIHRoaXMgZmllbGQuIE51bGwgdmFsdWVzIGZvciB0aGlzIGZpZWxkIGluIGluZGV4ZWQgZG9jdW1lbnRzIHdpbGxcbiAqIG5vdCBjYXVzZSBlcnJvcnMgYnV0IHdpbGwgbGltaXQgdGhlIGNoYW5jZSBvZiB0aGF0IGRvY3VtZW50IGJlaW5nIHJldHJpZXZlZCBieSBzZWFyY2hlcy5cbiAqXG4gKiBBbGwgZmllbGRzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgYWRkaW5nIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIEFkZGluZyBmaWVsZHMgYWZ0ZXJcbiAqIGEgZG9jdW1lbnQgaGFzIGJlZW4gaW5kZXhlZCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIGFscmVhZHkgaW5kZXhlZCBkb2N1bWVudHMuXG4gKlxuICogRmllbGRzIGNhbiBiZSBib29zdGVkIGF0IGJ1aWxkIHRpbWUuIFRoaXMgYWxsb3dzIHRlcm1zIHdpdGhpbiB0aGF0IGZpZWxkIHRvIGhhdmUgbW9yZVxuICogaW1wb3J0YW5jZSB3aGVuIHJhbmtpbmcgc2VhcmNoIHJlc3VsdHMuIFVzZSBhIGZpZWxkIGJvb3N0IHRvIHNwZWNpZnkgdGhhdCBtYXRjaGVzIHdpdGhpblxuICogb25lIGZpZWxkIGFyZSBtb3JlIGltcG9ydGFudCB0aGFuIG90aGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb2YgYSBmaWVsZCB0byBpbmRleCBpbiBhbGwgZG9jdW1lbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPcHRpb25hbCBhdHRyaWJ1dGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IFthdHRyaWJ1dGVzLmJvb3N0PTFdIC0gQm9vc3QgYXBwbGllZCB0byBhbGwgdGVybXMgd2l0aGluIHRoaXMgZmllbGQuXG4gKiBAcGFyYW0ge2ZpZWxkRXh0cmFjdG9yfSBbYXR0cmlidXRlcy5leHRyYWN0b3JdIC0gRnVuY3Rpb24gdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZpZWxkTmFtZSBjYW5ub3QgY29udGFpbiB1bnN1cHBvcnRlZCBjaGFyYWN0ZXJzICcvJ1xuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXR0cmlidXRlcykge1xuICBpZiAoL1xcLy8udGVzdChmaWVsZE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IgKFwiRmllbGQgJ1wiICsgZmllbGROYW1lICsgXCInIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyICcvJ1wiKVxuICB9XG5cbiAgdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0gPSBhdHRyaWJ1dGVzIHx8IHt9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gdHVuZSB0aGUgYW1vdW50IG9mIGZpZWxkIGxlbmd0aCBub3JtYWxpc2F0aW9uIHRoYXQgaXMgYXBwbGllZCB3aGVuXG4gKiBjYWxjdWxhdGluZyByZWxldmFuY2Ugc2NvcmVzLiBBIHZhbHVlIG9mIDAgd2lsbCBjb21wbGV0ZWx5IGRpc2FibGUgYW55IG5vcm1hbGlzYXRpb25cbiAqIGFuZCBhIHZhbHVlIG9mIDEgd2lsbCBmdWxseSBub3JtYWxpc2UgZmllbGQgbGVuZ3Rocy4gVGhlIGRlZmF1bHQgaXMgMC43NS4gVmFsdWVzIG9mIGJcbiAqIHdpbGwgYmUgY2xhbXBlZCB0byB0aGUgcmFuZ2UgMCAtIDEuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5iID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHRoaXMuX2IgPSAwXG4gIH0gZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgIHRoaXMuX2IgPSAxXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYiA9IG51bWJlclxuICB9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdGhhdCBjb250cm9scyB0aGUgc3BlZWQgYXQgd2hpY2ggYSByaXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybVxuICogZnJlcXVlbmN5IHNhdHVyYXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi4gU2V0dGluZyB0aGlzIHRvIGEgaGlnaGVyIHZhbHVlIHdpbGwgZ2l2ZVxuICogc2xvd2VyIHNhdHVyYXRpb24gbGV2ZWxzLCBhIGxvd2VyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHF1aWNrZXIgc2F0dXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmsxID0gZnVuY3Rpb24gKG51bWJlcikge1xuICB0aGlzLl9rMSA9IG51bWJlclxufVxuXG4vKipcbiAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXguXG4gKlxuICogQmVmb3JlIGFkZGluZyBmaWVsZHMgdG8gdGhlIGluZGV4IHRoZSBpbmRleCBzaG91bGQgaGF2ZSBiZWVuIGZ1bGx5IHNldHVwLCB3aXRoIHRoZSBkb2N1bWVudFxuICogcmVmIGFuZCBhbGwgZmllbGRzIHRvIGluZGV4IGFscmVhZHkgaGF2aW5nIGJlZW4gc3BlY2lmaWVkLlxuICpcbiAqIFRoZSBkb2N1bWVudCBtdXN0IGhhdmUgYSBmaWVsZCBuYW1lIGFzIHNwZWNpZmllZCBieSB0aGUgcmVmIChieSBkZWZhdWx0IHRoaXMgaXMgJ2lkJykgYW5kXG4gKiBpdCBzaG91bGQgaGF2ZSBhbGwgZmllbGRzIGRlZmluZWQgZm9yIGluZGV4aW5nLCB0aG91Z2ggbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90XG4gKiBjYXVzZSBlcnJvcnMuXG4gKlxuICogRW50aXJlIGRvY3VtZW50cyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBBcHBseWluZyBhIGJvb3N0IHRvIGEgZG9jdW1lbnQgaW5kaWNhdGVzIHRoYXRcbiAqIHRoaXMgZG9jdW1lbnQgc2hvdWxkIHJhbmsgaGlnaGVyIGluIHNlYXJjaCByZXN1bHRzIHRoYW4gb3RoZXIgZG9jdW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgdG8gYWRkIHRvIHRoZSBpbmRleC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGRvY1JlZiA9IGRvY1t0aGlzLl9yZWZdLFxuICAgICAgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIHRoaXMuX2RvY3VtZW50c1tkb2NSZWZdID0gYXR0cmlidXRlcyB8fCB7fVxuICB0aGlzLmRvY3VtZW50Q291bnQgKz0gMVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXSxcbiAgICAgICAgZXh0cmFjdG9yID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uZXh0cmFjdG9yLFxuICAgICAgICBmaWVsZCA9IGV4dHJhY3RvciA/IGV4dHJhY3Rvcihkb2MpIDogZG9jW2ZpZWxkTmFtZV0sXG4gICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5pemVyKGZpZWxkLCB7XG4gICAgICAgICAgZmllbGRzOiBbZmllbGROYW1lXVxuICAgICAgICB9KSxcbiAgICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1bih0b2tlbnMpLFxuICAgICAgICBmaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkTmFtZSksXG4gICAgICAgIGZpZWxkVGVybXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSA9IGZpZWxkVGVybXNcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gPSAwXG5cbiAgICAvLyBzdG9yZSB0aGUgbGVuZ3RoIG9mIHRoaXMgZmllbGQgZm9yIHRoaXMgZG9jdW1lbnRcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gKz0gdGVybXMubGVuZ3RoXG5cbiAgICAvLyBjYWxjdWxhdGUgdGVybSBmcmVxdWVuY2llcyBmb3IgdGhpcyBmaWVsZFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal1cblxuICAgICAgaWYgKGZpZWxkVGVybXNbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpZWxkVGVybXNbdGVybV0gPSAwXG4gICAgICB9XG5cbiAgICAgIGZpZWxkVGVybXNbdGVybV0gKz0gMVxuXG4gICAgICAvLyBhZGQgdG8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIC8vIGNyZWF0ZSBhbiBpbml0aWFsIHBvc3RpbmcgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwb3N0aW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICBwb3N0aW5nW1wiX2luZGV4XCJdID0gdGhpcy50ZXJtSW5kZXhcbiAgICAgICAgdGhpcy50ZXJtSW5kZXggKz0gMVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcG9zdGluZ1tmaWVsZHNba11dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW4gZW50cnkgZm9yIHRoaXMgdGVybS9maWVsZE5hbWUvZG9jUmVmIHRvIHRoZSBpbnZlcnRlZEluZGV4XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgYWxsIHdoaXRlbGlzdGVkIG1ldGFkYXRhIGFib3V0IHRoaXMgdG9rZW4gaW4gdGhlXG4gICAgICAvLyBpbnZlcnRlZCBpbmRleFxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUtleSA9IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3RbbF0sXG4gICAgICAgICAgICBtZXRhZGF0YSA9IHRlcm0ubWV0YWRhdGFbbWV0YWRhdGFLZXldXG5cbiAgICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldLnB1c2gobWV0YWRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhdmVyYWdlIGRvY3VtZW50IGxlbmd0aCBmb3IgdGhpcyBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZExlbmd0aHMpLFxuICAgICAgbnVtYmVyT2ZGaWVsZHMgPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgYWNjdW11bGF0b3IgPSB7fSxcbiAgICAgIGRvY3VtZW50c1dpdGhGaWVsZCA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkZpZWxkczsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lXG5cbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdIHx8IChkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdID0gMClcbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdICs9IDFcblxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSB8fCAoYWNjdW11bGF0b3JbZmllbGRdID0gMClcbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gKz0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdXG4gIH1cblxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkTmFtZV0gPSBhY2N1bXVsYXRvcltmaWVsZE5hbWVdIC8gZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkTmFtZV1cbiAgfVxuXG4gIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoID0gYWNjdW11bGF0b3Jcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSB2ZWN0b3Igc3BhY2UgbW9kZWwgb2YgZXZlcnkgZG9jdW1lbnQgdXNpbmcgbHVuci5WZWN0b3JcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZUZpZWxkVmVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyksXG4gICAgICBmaWVsZFJlZnNMZW5ndGggPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgdGVybUlkZkNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRSZWZzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGROYW1lID0gZmllbGRSZWYuZmllbGROYW1lLFxuICAgICAgICBmaWVsZExlbmd0aCA9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSxcbiAgICAgICAgZmllbGRWZWN0b3IgPSBuZXcgbHVuci5WZWN0b3IsXG4gICAgICAgIHRlcm1GcmVxdWVuY2llcyA9IHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdLFxuICAgICAgICB0ZXJtcyA9IE9iamVjdC5rZXlzKHRlcm1GcmVxdWVuY2llcyksXG4gICAgICAgIHRlcm1zTGVuZ3RoID0gdGVybXMubGVuZ3RoXG5cblxuICAgIHZhciBmaWVsZEJvb3N0ID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uYm9vc3QgfHwgMSxcbiAgICAgICAgZG9jQm9vc3QgPSB0aGlzLl9kb2N1bWVudHNbZmllbGRSZWYuZG9jUmVmXS5ib29zdCB8fCAxXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zTGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal0sXG4gICAgICAgICAgdGYgPSB0ZXJtRnJlcXVlbmNpZXNbdGVybV0sXG4gICAgICAgICAgdGVybUluZGV4ID0gdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLl9pbmRleCxcbiAgICAgICAgICBpZGYsIHNjb3JlLCBzY29yZVdpdGhQcmVjaXNpb25cblxuICAgICAgaWYgKHRlcm1JZGZDYWNoZVt0ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkZiA9IGx1bnIuaWRmKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSwgdGhpcy5kb2N1bWVudENvdW50KVxuICAgICAgICB0ZXJtSWRmQ2FjaGVbdGVybV0gPSBpZGZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkZiA9IHRlcm1JZGZDYWNoZVt0ZXJtXVxuICAgICAgfVxuXG4gICAgICBzY29yZSA9IGlkZiAqICgodGhpcy5fazEgKyAxKSAqIHRmKSAvICh0aGlzLl9rMSAqICgxIC0gdGhpcy5fYiArIHRoaXMuX2IgKiAoZmllbGRMZW5ndGggLyB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aFtmaWVsZE5hbWVdKSkgKyB0ZilcbiAgICAgIHNjb3JlICo9IGZpZWxkQm9vc3RcbiAgICAgIHNjb3JlICo9IGRvY0Jvb3N0XG4gICAgICBzY29yZVdpdGhQcmVjaXNpb24gPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkgLyAxMDAwXG4gICAgICAvLyBDb252ZXJ0cyAxLjIzNDU2Nzg5IHRvIDEuMjM0LlxuICAgICAgLy8gUmVkdWNpbmcgdGhlIHByZWNpc2lvbiBzbyB0aGF0IHRoZSB2ZWN0b3JzIHRha2UgdXAgbGVzc1xuICAgICAgLy8gc3BhY2Ugd2hlbiBzZXJpYWxpc2VkLiBEb2luZyBpdCBub3cgc28gdGhhdCB0aGV5IGJlaGF2ZVxuICAgICAgLy8gdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlciBzZXJpYWxpc2F0aW9uLiBBbHNvLCB0aGlzIGlzXG4gICAgICAvLyB0aGUgZmFzdGVzdCBhcHByb2FjaCB0byByZWR1Y2luZyBhIG51bWJlcidzIHByZWNpc2lvbiBpblxuICAgICAgLy8gSmF2YVNjcmlwdC5cblxuICAgICAgZmllbGRWZWN0b3IuaW5zZXJ0KHRlcm1JbmRleCwgc2NvcmVXaXRoUHJlY2lzaW9uKVxuICAgIH1cblxuICAgIGZpZWxkVmVjdG9yc1tmaWVsZFJlZl0gPSBmaWVsZFZlY3RvclxuICB9XG5cbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IG9mIGFsbCB0b2tlbnMgaW4gdGhlIGluZGV4IHVzaW5nIGx1bnIuVG9rZW5TZXRcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZVRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQXJyYXkoXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KS5zb3J0KClcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgaW5kZXgsIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXguXG4gKlxuICogVGhpcyBjb21wbGV0ZXMgdGhlIGluZGV4aW5nIHByb2Nlc3MgYW5kIHNob3VsZCBvbmx5IGJlIGNhbGxlZFxuICogb25jZSBhbGwgZG9jdW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocygpXG4gIHRoaXMuY3JlYXRlRmllbGRWZWN0b3JzKClcbiAgdGhpcy5jcmVhdGVUb2tlblNldCgpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KHtcbiAgICBpbnZlcnRlZEluZGV4OiB0aGlzLmludmVydGVkSW5kZXgsXG4gICAgZmllbGRWZWN0b3JzOiB0aGlzLmZpZWxkVmVjdG9ycyxcbiAgICB0b2tlblNldDogdGhpcy50b2tlblNldCxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcyksXG4gICAgcGlwZWxpbmU6IHRoaXMuc2VhcmNoUGlwZWxpbmVcbiAgfSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGx1Z2luIHRvIHRoZSBpbmRleCBidWlsZGVyLlxuICpcbiAqIEEgcGx1Z2luIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqIFBsdWdpbnMgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXNlIG9yIGV4dGVuZCB0aGUgYmVoYXZpb3VyIG9mIHRoZSBpbmRleFxuICogaW4gc29tZSB3YXkuIEEgcGx1Z2luIGlzIGp1c3QgYSBmdW5jdGlvbiwgdGhhdCBlbmNhcHN1bGF0ZWQgdGhlIGN1c3RvbVxuICogYmVoYXZpb3VyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBidWlsZGluZyB0aGUgaW5kZXguXG4gKlxuICogVGhlIHBsdWdpbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBhcmd1bWVudCwgYWRkaXRpb25hbFxuICogYXJndW1lbnRzIGNhbiBhbHNvIGJlIHBhc3NlZCB3aGVuIGNhbGxpbmcgdXNlLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIFRoZSBwbHVnaW4gdG8gYXBwbHkuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgZm4uYXBwbHkodGhpcywgYXJncylcbn1cbi8qKlxuICogQ29udGFpbnMgYW5kIGNvbGxlY3RzIG1ldGFkYXRhIGFib3V0IGEgbWF0Y2hpbmcgZG9jdW1lbnQuXG4gKiBBIHNpbmdsZSBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSBpcyByZXR1cm5lZCBhcyBwYXJ0IG9mIGV2ZXJ5XG4gKiBsdW5yLkluZGV4flJlc3VsdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWV0YWRhdGEgLSBBIGNsb25lZCBjb2xsZWN0aW9uIG9mIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICB2YXIgY2xvbmVkTWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEgfHwge30pXG5cbiAgLy8gQ2xvbmluZyB0aGUgbWV0YWRhdGEgdG8gcHJldmVudCB0aGUgb3JpZ2luYWxcbiAgLy8gYmVpbmcgbXV0YXRlZCBkdXJpbmcgbWF0Y2ggZGF0YSBjb21iaW5hdGlvbi5cbiAgLy8gTWV0YWRhdGEgaXMga2VwdCBpbiBhbiBhcnJheSB3aXRoaW4gdGhlIGludmVydGVkXG4gIC8vIGluZGV4IHNvIGNsb25pbmcgdGhlIGRhdGEgY2FuIGJlIGRvbmUgd2l0aFxuICAvLyBBcnJheSNzbGljZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cbiAgICBjbG9uZWRNZXRhZGF0YVtrZXldID0gbWV0YWRhdGFba2V5XS5zbGljZSgpXG4gIH1cblxuICB0aGlzLm1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gY2xvbmVkTWV0YWRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpbGwgYmUgY3JlYXRlZCBmb3IgZXZlcnkgdGVybSB0aGF0IG1hdGNoZXMgYVxuICogZG9jdW1lbnQuIEhvd2V2ZXIgb25seSBvbmUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgaW4gYSBsdW5yLkluZGV4flJlc3VsdC4gVGhpc1xuICogbWV0aG9kIGNvbWJpbmVzIG1ldGFkYXRhIGZyb20gYW5vdGhlciBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aXRoIHRoaXNcbiAqIG9iamVjdHMgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHtsdW5yLk1hdGNoRGF0YX0gb3RoZXJNYXRjaERhdGEgLSBBbm90aGVyIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEgdG8gbWVyZ2Ugd2l0aCB0aGlzIG9uZS5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlck1hdGNoRGF0YSkge1xuICB2YXIgdGVybXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXSxcbiAgICAgICAgZmllbGRzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV0pXG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tqXSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdKVxuXG4gICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba11cblxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gb3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtZXRhZGF0YSBmb3IgYSB0ZXJtL2ZpZWxkIHBhaXIgdG8gdGhpcyBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIGlmICghKHRlcm0gaW4gdGhpcy5tZXRhZGF0YSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghKGZpZWxkIGluIHRoaXMubWV0YWRhdGFbdGVybV0pKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuXG4gICAgaWYgKGtleSBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG1ldGFkYXRhW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBtZXRhZGF0YVtrZXldXG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgbHVuci5RdWVyeSBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyB3YXkgb2YgZGVmaW5pbmcgcXVlcmllcyB0byBiZSBwZXJmb3JtZWRcbiAqIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogUHJlZmVyIGNvbnN0cnVjdGluZyBhIGx1bnIuUXVlcnkgdXNpbmcgdGhlIHtAbGluayBsdW5yLkluZGV4I3F1ZXJ5fSBtZXRob2RcbiAqIHNvIHRoZSBxdWVyeSBvYmplY3QgaXMgcHJlLWluaXRpYWxpemVkIHdpdGggdGhlIHJpZ2h0IGluZGV4IGZpZWxkcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7bHVuci5RdWVyeX5DbGF1c2VbXX0gY2xhdXNlcyAtIEFuIGFycmF5IG9mIHF1ZXJ5IGNsYXVzZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBhbGxGaWVsZHMgLSBBbiBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIGZpZWxkcyBpbiBhIGx1bnIuSW5kZXguXG4gKi9cbmx1bnIuUXVlcnkgPSBmdW5jdGlvbiAoYWxsRmllbGRzKSB7XG4gIHRoaXMuY2xhdXNlcyA9IFtdXG4gIHRoaXMuYWxsRmllbGRzID0gYWxsRmllbGRzXG59XG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBhdXRvbWF0aWMgd2lsZGNhcmQgaW5zZXJ0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB3aWxkY2FyZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgdGVybSB3aXRob3V0IGhhdmluZyB0byBtYW51YWxseSBkbyBhbnkgc3RyaW5nXG4gKiBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSB3aWxkY2FyZCBjb25zdGFudHMgY2FuIGJlIGJpdHdpc2UgY29tYmluZWQgdG8gc2VsZWN0IGJvdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGRlZmF1bHRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5OT05FIC0gVGhlIHRlcm0gd2lsbCBoYXZlIG5vIHdpbGRjYXJkcyBpbnNlcnRlZCwgdGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5MRUFESU5HIC0gUHJlcGVuZCB0aGUgdGVybSB3aXRoIGEgd2lsZGNhcmQsIHVubGVzcyBhIGxlYWRpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5UUkFJTElORyAtIEFwcGVuZCBhIHdpbGRjYXJkIHRvIHRoZSB0ZXJtLCB1bmxlc3MgYSB0cmFpbGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHtcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyB8IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cblxubHVuci5RdWVyeS53aWxkY2FyZCA9IG5ldyBTdHJpbmcgKFwiKlwiKVxubHVuci5RdWVyeS53aWxkY2FyZC5OT05FID0gMFxubHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HID0gMVxubHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyA9IDJcblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIHByZXNlbmNlIGEgdGVybSBtdXN0IGhhdmUgaW4gbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGVudW0ge251bWJlcn1cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggcmVxdWlyZWQgcHJlc2VuY2U8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHByZXNlbmNlOiBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEIH0pXG4gKi9cbmx1bnIuUXVlcnkucHJlc2VuY2UgPSB7XG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBvcHRpb25hbCwgdGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIE9QVElPTkFMOiAxLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyByZXF1aXJlZCwgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUkVRVUlSRUQ6IDIsXG5cbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIHByb2hpYml0ZWQsIGRvY3VtZW50cyB0aGF0IGRvIGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUFJPSElCSVRFRDogM1xufVxuXG4vKipcbiAqIEEgc2luZ2xlIGNsYXVzZSBpbiBhIHtAbGluayBsdW5yLlF1ZXJ5fSBjb250YWlucyBhIHRlcm0gYW5kIGRldGFpbHMgb24gaG93IHRvXG4gKiBtYXRjaCB0aGF0IHRlcm0gYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmllbGRzIC0gVGhlIGZpZWxkcyBpbiBhbiBpbmRleCB0aGlzIGNsYXVzZSBzaG91bGQgYmUgbWF0Y2hlZCBhZ2FpbnN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtib29zdD0xXSAtIEFueSBib29zdCB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gbWF0Y2hpbmcgdGhpcyBjbGF1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VkaXREaXN0YW5jZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIGZ1enp5IG1hdGNoaW5nIGFwcGxpZWQsIGFuZCBob3cgZnV6enkgdGhlIG1hdGNoIHNob3VsZCBiZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3VzZVBpcGVsaW5lXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpbGRjYXJkPWx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIHdpbGRjYXJkcyBhcHBlbmRlZCBvciBwcmVwZW5kZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZXNlbmNlPWx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxdIC0gVGhlIHRlcm1zIHByZXNlbmNlIGluIGFueSBtYXRjaGluZyBkb2N1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBBZGRzIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfSB0byB0aGlzIHF1ZXJ5LlxuICpcbiAqIFVubGVzcyB0aGUgY2xhdXNlIGNvbnRhaW5zIHRoZSBmaWVsZHMgdG8gYmUgbWF0Y2hlZCBhbGwgZmllbGRzIHdpbGwgYmUgbWF0Y2hlZC4gSW4gYWRkaXRpb25cbiAqIGEgZGVmYXVsdCBib29zdCBvZiAxIGlzIGFwcGxpZWQgdG8gdGhlIGNsYXVzZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl+Q2xhdXNlfSBjbGF1c2UgLSBUaGUgY2xhdXNlIHRvIGFkZCB0byB0aGlzIHF1ZXJ5LlxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCEoJ2ZpZWxkcycgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5maWVsZHMgPSB0aGlzLmFsbEZpZWxkc1xuICB9XG5cbiAgaWYgKCEoJ2Jvb3N0JyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmJvb3N0ID0gMVxuICB9XG5cbiAgaWYgKCEoJ3VzZVBpcGVsaW5lJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnVzZVBpcGVsaW5lID0gdHJ1ZVxuICB9XG5cbiAgaWYgKCEoJ3dpbGRjYXJkJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLndpbGRjYXJkID0gbHVuci5RdWVyeS53aWxkY2FyZC5OT05FXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORykgJiYgKGNsYXVzZS50ZXJtLmNoYXJBdCgwKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCIqXCIgKyBjbGF1c2UudGVybVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HKSAmJiAoY2xhdXNlLnRlcm0uc2xpY2UoLTEpICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIlwiICsgY2xhdXNlLnRlcm0gKyBcIipcIlxuICB9XG5cbiAgaWYgKCEoJ3ByZXNlbmNlJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5PUFRJT05BTFxuICB9XG5cbiAgdGhpcy5jbGF1c2VzLnB1c2goY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQSBuZWdhdGVkIHF1ZXJ5IGlzIG9uZSBpbiB3aGljaCBldmVyeSBjbGF1c2UgaGFzIGEgcHJlc2VuY2Ugb2ZcbiAqIHByb2hpYml0ZWQuIFRoZXNlIHF1ZXJpZXMgcmVxdWlyZSBzb21lIHNwZWNpYWwgcHJvY2Vzc2luZyB0byByZXR1cm5cbiAqIHRoZSBleHBlY3RlZCByZXN1bHRzLlxuICpcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuaXNOZWdhdGVkID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNsYXVzZXNbaV0ucHJlc2VuY2UgIT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSB0ZXJtIHRvIHRoZSBjdXJyZW50IHF1ZXJ5LCB1bmRlciB0aGUgY292ZXJzIHRoaXMgd2lsbCBjcmVhdGUgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9XG4gKiB0byB0aGUgbGlzdCBvZiBjbGF1c2VzIHRoYXQgbWFrZSB1cCB0aGlzIHF1ZXJ5LlxuICpcbiAqIFRoZSB0ZXJtIGlzIHVzZWQgYXMgaXMsIGkuZS4gbm8gdG9rZW5pemF0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIGJ5IHRoaXMgbWV0aG9kLiBJbnN0ZWFkIGNvbnZlcnNpb25cbiAqIHRvIGEgdG9rZW4gb3IgdG9rZW4tbGlrZSBzdHJpbmcgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gKlxuICogVGhlIHRlcm0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgLiBNdWx0aXBsZSB0ZXJtcyBjYW4gYmUgcGFzc2VkIGFzIGFuXG4gKiBhcnJheSwgZWFjaCB0ZXJtIGluIHRoZSBhcnJheSB3aWxsIHNoYXJlIHRoZSBzYW1lIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119IHRlcm0gLSBUaGUgdGVybShzKSB0byBhZGQgdG8gdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBxdWVyeSBjbGF1c2UuXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnk8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIpXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5IGFuZCBzcGVjaWZ5aW5nIHNlYXJjaCBmaWVsZHMsIHRlcm0gYm9vc3QgYW5kIGF1dG9tYXRpYyB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIiwge1xuICogICBmaWVsZHM6IFtcInRpdGxlXCJdLFxuICogICBib29zdDogMTAsXG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+dXNpbmcgbHVuci50b2tlbml6ZXIgdG8gY29udmVydCBhIHN0cmluZyB0byB0b2tlbnMgYmVmb3JlIHVzaW5nIHRoZW0gYXMgdGVybXM8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKGx1bnIudG9rZW5pemVyKFwiZm9vIGJhclwiKSlcbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUudGVybSA9IGZ1bmN0aW9uICh0ZXJtLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlcm0pKSB7XG4gICAgdGVybS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHRoaXMudGVybSh0LCBsdW5yLnV0aWxzLmNsb25lKG9wdGlvbnMpKSB9LCB0aGlzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgY2xhdXNlID0gb3B0aW9ucyB8fCB7fVxuICBjbGF1c2UudGVybSA9IHRlcm0udG9TdHJpbmcoKVxuXG4gIHRoaXMuY2xhdXNlKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxubHVuci5RdWVyeVBhcnNlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3RhcnQsIGVuZCkge1xuICB0aGlzLm5hbWUgPSBcIlF1ZXJ5UGFyc2VFcnJvclwiXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gIHRoaXMuZW5kID0gZW5kXG59XG5cbmx1bnIuUXVlcnlQYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxubHVuci5RdWVyeUxleGVyID0gZnVuY3Rpb24gKHN0cikge1xuICB0aGlzLmxleGVtZXMgPSBbXVxuICB0aGlzLnN0ciA9IHN0clxuICB0aGlzLmxlbmd0aCA9IHN0ci5sZW5ndGhcbiAgdGhpcy5wb3MgPSAwXG4gIHRoaXMuc3RhcnQgPSAwXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucyA9IFtdXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnNsaWNlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ViU2xpY2VzID0gW10sXG4gICAgICBzbGljZVN0YXJ0ID0gdGhpcy5zdGFydCxcbiAgICAgIHNsaWNlRW5kID0gdGhpcy5wb3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWNlRW5kID0gdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zW2ldXG4gICAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpKVxuICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgfVxuXG4gIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHRoaXMucG9zKSlcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aCA9IDBcblxuICByZXR1cm4gc3ViU2xpY2VzLmpvaW4oJycpXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHRoaXMubGV4ZW1lcy5wdXNoKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0cjogdGhpcy5zbGljZVN0cmluZygpLFxuICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgIGVuZDogdGhpcy5wb3NcbiAgfSlcblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lc2NhcGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5wdXNoKHRoaXMucG9zIC0gMSlcbiAgdGhpcy5wb3MgKz0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIuRU9TXG4gIH1cblxuICB2YXIgY2hhciA9IHRoaXMuc3RyLmNoYXJBdCh0aGlzLnBvcylcbiAgdGhpcy5wb3MgKz0gMVxuICByZXR1cm4gY2hhclxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgLSB0aGlzLnN0YXJ0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdGFydCA9PSB0aGlzLnBvcykge1xuICAgIHRoaXMucG9zICs9IDFcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmJhY2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb3MgLT0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmFjY2VwdERpZ2l0UnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhciwgY2hhckNvZGVcblxuICBkbyB7XG4gICAgY2hhciA9IHRoaXMubmV4dCgpXG4gICAgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgfSB3aGlsZSAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KVxuXG4gIGlmIChjaGFyICE9IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICB0aGlzLmJhY2t1cCgpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5tb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmxlbmd0aFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIuRU9TID0gJ0VPUydcbmx1bnIuUXVlcnlMZXhlci5GSUVMRCA9ICdGSUVMRCdcbmx1bnIuUXVlcnlMZXhlci5URVJNID0gJ1RFUk0nXG5sdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSA9ICdFRElUX0RJU1RBTkNFJ1xubHVuci5RdWVyeUxleGVyLkJPT1NUID0gJ0JPT1NUJ1xubHVuci5RdWVyeUxleGVyLlBSRVNFTkNFID0gJ1BSRVNFTkNFJ1xuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuYmFja3VwKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQpXG4gIGxleGVyLmlnbm9yZSgpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDEpIHtcbiAgICBsZXhlci5iYWNrdXAoKVxuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cblxuICBsZXhlci5pZ25vcmUoKVxuXG4gIGlmIChsZXhlci5tb3JlKCkpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSlcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhCb29zdCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkJPT1NUKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVPUyA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyB0aGUgc2VwYXJhdG9yIHVzZWQgd2hlbiB0b2tlbmlzaW5nIGZpZWxkc1xuLy8gd2l0aGluIGEgZG9jdW1lbnQuIFRoZXNlIHNob3VsZCBtYXRjaCBvdGhlcndpc2UgaXQgaXNcbi8vIG5vdCBwb3NzaWJsZSB0byBzZWFyY2ggZm9yIHNvbWUgdG9rZW5zIHdpdGhpbiBhIGRvY3VtZW50LlxuLy9cbi8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdXNlciB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBvbiB0aGVcbi8vIHRva2VuaXplciBzbyBpdCBfbWlnaHRfIGNsYXNoIHdpdGggYW55IG90aGVyIG9mIHRoZSBzcGVjaWFsXG4vLyBjaGFyYWN0ZXJzIGFscmVhZHkgdXNlZCB3aXRoaW4gdGhlIHNlYXJjaCBzdHJpbmcsIGUuZy4gOi5cbi8vXG4vLyBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3IgaW5cbi8vIHN1Y2ggYSB3YXkgdGhhdCBtYWtlcyBzb21lIHdvcmRzIHVuc2VhcmNoYWJsZSB1c2luZyBhIHNlYXJjaFxuLy8gc3RyaW5nLlxubHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IgPSBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JcblxubHVuci5RdWVyeUxleGVyLmxleFRleHQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY2hhciA9IGxleGVyLm5leHQoKVxuXG4gICAgaWYgKGNoYXIgPT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFT1NcbiAgICB9XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVyIGlzICdcXCdcbiAgICBpZiAoY2hhci5jaGFyQ29kZUF0KDApID09IDkyKSB7XG4gICAgICBsZXhlci5lc2NhcGVDaGFyYWN0ZXIoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIjpcIikge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZFxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiflwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiXlwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEJvb3N0XG4gICAgfVxuXG4gICAgLy8gXCIrXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcmVxdWlyZWRcbiAgICAvLyBjaGVja2luZyBmb3IgbGVuZ3RoIHRvIGVuc3VyZSB0aGF0IG9ubHlcbiAgICAvLyBsZWFkaW5nIFwiK1wiIGFyZSBjb25zaWRlcmVkXG4gICAgaWYgKGNoYXIgPT0gXCIrXCIgJiYgbGV4ZXIud2lkdGgoKSA9PT0gMSkge1xuICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgICB9XG5cbiAgICAvLyBcIi1cIiBpbmRpY2F0ZXMgdGVybSBwcmVzZW5jZSBpcyBwcm9oaWJpdGVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIi1cIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiLVwiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgaWYgKGNoYXIubWF0Y2gobHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRlcm1cbiAgICB9XG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIHF1ZXJ5KSB7XG4gIHRoaXMubGV4ZXIgPSBuZXcgbHVuci5RdWVyeUxleGVyIChzdHIpXG4gIHRoaXMucXVlcnkgPSBxdWVyeVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxuICB0aGlzLmxleGVtZUlkeCA9IDBcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV4ZXIucnVuKClcbiAgdGhpcy5sZXhlbWVzID0gdGhpcy5sZXhlci5sZXhlbWVzXG5cbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeVBhcnNlci5wYXJzZUNsYXVzZVxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnF1ZXJ5XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBlZWtMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxleGVtZXNbdGhpcy5sZXhlbWVJZHhdXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZXhlbWUgPSB0aGlzLnBlZWtMZXhlbWUoKVxuICB0aGlzLmxleGVtZUlkeCArPSAxXG4gIHJldHVybiBsZXhlbWVcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUubmV4dENsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbXBsZXRlZENsYXVzZSA9IHRoaXMuY3VycmVudENsYXVzZVxuICB0aGlzLnF1ZXJ5LmNsYXVzZShjb21wbGV0ZWRDbGF1c2UpXG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGVkIGVpdGhlciBhIGZpZWxkIG9yIGEgdGVybSwgZm91bmQgXCIgKyBsZXhlbWUudHlwZVxuXG4gICAgICBpZiAobGV4ZW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSAnXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnN0cikge1xuICAgIGNhc2UgXCItXCI6XG4gICAgICBwYXJzZXIuY3VycmVudENsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiK1wiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgcHJlc2VuY2Ugb3BlcmF0b3InXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwYXJzZXIucXVlcnkuYWxsRmllbGRzLmluZGV4T2YobGV4ZW1lLnN0cikgPT0gLTEpIHtcbiAgICB2YXIgcG9zc2libGVGaWVsZHMgPSBwYXJzZXIucXVlcnkuYWxsRmllbGRzLm1hcChmdW5jdGlvbiAoZikgeyByZXR1cm4gXCInXCIgKyBmICsgXCInXCIgfSkuam9pbignLCAnKSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgZmllbGQgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJywgcG9zc2libGUgZmllbGRzOiBcIiArIHBvc3NpYmxlRmllbGRzXG5cbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZmllbGRzID0gW2xleGVtZS5zdHJdXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLnRlcm0gPSBsZXhlbWUuc3RyLnRvTG93ZXJDYXNlKClcblxuICBpZiAobGV4ZW1lLnN0ci5pbmRleE9mKFwiKlwiKSAhPSAtMSkge1xuICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnVzZVBpcGVsaW5lID0gZmFsc2VcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVkaXREaXN0YW5jZSA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihlZGl0RGlzdGFuY2UpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZWRpdCBkaXN0YW5jZSBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5lZGl0RGlzdGFuY2UgPSBlZGl0RGlzdGFuY2VcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJvb3N0ID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGJvb3N0KSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImJvb3N0IG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmJvb3N0ID0gYm9vc3RcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbiAgLyoqXG4gICAqIGV4cG9ydCB0aGUgbW9kdWxlIHZpYSBBTUQsIENvbW1vbkpTIG9yIGFzIGEgYnJvd3NlciBnbG9iYWxcbiAgICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgICovXG4gIDsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoZmFjdG9yeSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLyoqXG4gICAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAqIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgKiBsaWtlIE5vZGUuXG4gICAgICAgKi9cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICByb290Lmx1bnIgPSBmYWN0b3J5KClcbiAgICB9XG4gIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAgKiBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJldHVybiBsdW5yXG4gIH0pKVxufSkoKTtcbiIsImltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSAnZWFzZXMtanNuZXh0JztcblxuZnVuY3Rpb24gZmx5KG5vZGUsIHJlZikge1xuXHR2YXIgZGVsYXkgPSByZWYuZGVsYXk7IGlmICggZGVsYXkgPT09IHZvaWQgMCApIGRlbGF5ID0gMDtcblx0dmFyIGR1cmF0aW9uID0gcmVmLmR1cmF0aW9uOyBpZiAoIGR1cmF0aW9uID09PSB2b2lkIDAgKSBkdXJhdGlvbiA9IDQwMDtcblx0dmFyIGVhc2luZyA9IHJlZi5lYXNpbmc7IGlmICggZWFzaW5nID09PSB2b2lkIDAgKSBlYXNpbmcgPSBjdWJpY091dDtcblx0dmFyIHggPSByZWYueDsgaWYgKCB4ID09PSB2b2lkIDAgKSB4ID0gMDtcblx0dmFyIHkgPSByZWYueTsgaWYgKCB5ID09PSB2b2lkIDAgKSB5ID0gMDtcblxuXHR2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHR2YXIgb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuXHR2YXIgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcblxuXHRyZXR1cm4ge1xuXHRcdGRlbGF5OiBkZWxheSxcblx0XHRkdXJhdGlvbjogZHVyYXRpb24sXG5cdFx0ZWFzaW5nOiBlYXNpbmcsXG5cdFx0Y3NzOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gKFwiXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybSArIFwiIHRyYW5zbGF0ZShcIiArICgoMSAtIHQpICogeCkgKyBcInB4LCBcIiArICgoMSAtIHQpICogeSkgKyBcInB4KTtcXG5cXHRcXHRcXHRvcGFjaXR5OiBcIiArICh0ICogb3BhY2l0eSkpOyB9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZseTtcbiJdLCJzb3VyY2VSb290IjoiIn0=