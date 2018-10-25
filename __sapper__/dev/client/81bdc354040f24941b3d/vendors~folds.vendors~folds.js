(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~folds"],{

/***/ "./node_modules/muuri/src/Packer/Packer.js":
/*!*************************************************!*\
  !*** ./node_modules/muuri/src/Packer/Packer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Muuri Packer
 * Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/src/Packer/LICENSE.md
 */

/**
 * This is the default layout algorithm for Muuri. Based on MAXRECTS approach
 * as described by Jukka Jylänki in his survey: "A Thousand Ways to Pack the
 * Bin - A Practical Approach to Two-Dimensional Rectangle Bin Packing.".
 *
 * @class
 */
function Packer() {
  this._layout = {
    slots: [],
    slotSizes: [],
    setWidth: false,
    setHeight: false,
    width: false,
    height: false
  };
  this._freeSlots = [];
  this._newSlots = [];
  this._rectItem = {};
  this._rectStore = [];
  this._rectId = 0;

  // Bind sort handlers.
  this._sortRectsLeftTop = this._sortRectsLeftTop.bind(this);
  this._sortRectsTopLeft = this._sortRectsTopLeft.bind(this);
}

/**
 * @public
 * @memberof Packer.prototype
 * @param {Item[]} items
 * @param {Number} width
 * @param {Number} height
 * @param {Object} [options]
 * @param {Boolean} [options.fillGaps=false]
 * @param {Boolean} [options.horizontal=false]
 * @param {Boolean} [options.alignRight=false]
 * @param {Boolean} [options.alignBottom=false]
 * @returns {LayoutData}
 */
Packer.prototype.getLayout = function(items, width, height, options) {
  var layout = this._layout;
  var fillGaps = !!(options && options.fillGaps);
  var isHorizontal = !!(options && options.horizontal);
  var alignRight = !!(options && options.alignRight);
  var alignBottom = !!(options && options.alignBottom);
  var rounding = !!(options && options.rounding);
  var i;

  // Reset layout data.
  layout.slots.length = layout.slotSizes.length = 0;
  layout.width = isHorizontal ? 0 : rounding ? Math.round(width) : width;
  layout.height = !isHorizontal ? 0 : rounding ? Math.round(height) : height;
  layout.setWidth = isHorizontal;
  layout.setHeight = !isHorizontal;

  // No need to go further if items do not exist.
  if (!items.length) return layout;

  // Find slots for items.
  for (i = 0; i < items.length; i++) {
    this._addSlot(items[i], isHorizontal, fillGaps, rounding);
  }

  // If the alignment is set to right we need to adjust the results.
  if (alignRight) {
    for (i = 0; i < layout.slots.length; i = i + 2) {
      layout.slots[i] = layout.width - (layout.slots[i] + layout.slotSizes[i]);
    }
  }

  // If the alignment is set to bottom we need to adjust the results.
  if (alignBottom) {
    for (i = 1; i < layout.slots.length; i = i + 2) {
      layout.slots[i] = layout.height - (layout.slots[i] + layout.slotSizes[i]);
    }
  }

  // Reset slots arrays and rect id.
  this._freeSlots.length = 0;
  this._newSlots.length = 0;
  this._rectId = 0;

  return layout;
};

/**
 * Calculate position for the layout item. Returns the left and top position
 * of the item in pixels.
 *
 * @private
 * @memberof Packer.prototype
 * @param {Item} item
 * @param {Boolean} isHorizontal
 * @param {Boolean} fillGaps
 * @param {Boolean} rounding
 * @returns {Array}
 */
Packer.prototype._addSlot = (function() {
  var leeway = 0.001;
  var itemSlot = {};
  return function(item, isHorizontal, fillGaps, rounding) {
    var layout = this._layout;
    var freeSlots = this._freeSlots;
    var newSlots = this._newSlots;
    var rect;
    var rectId;
    var potentialSlots;
    var ignoreCurrentSlots;
    var i;
    var ii;

    // Reset new slots.
    newSlots.length = 0;

    // Set item slot initial data.
    itemSlot.left = null;
    itemSlot.top = null;
    itemSlot.width = item._width + item._marginLeft + item._marginRight;
    itemSlot.height = item._height + item._marginTop + item._marginBottom;

    // Round item slot width and height if needed.
    if (rounding) {
      itemSlot.width = Math.round(itemSlot.width);
      itemSlot.height = Math.round(itemSlot.height);
    }

    // Try to find a slot for the item.
    for (i = 0; i < freeSlots.length; i++) {
      rectId = freeSlots[i];
      if (!rectId) continue;
      rect = this._getRect(rectId);
      if (itemSlot.width <= rect.width + leeway && itemSlot.height <= rect.height + leeway) {
        itemSlot.left = rect.left;
        itemSlot.top = rect.top;
        break;
      }
    }

    // If no slot was found for the item.
    if (itemSlot.left === null) {
      // Position the item in to the bottom left (vertical mode) or top right
      // (horizontal mode) of the grid.
      itemSlot.left = !isHorizontal ? 0 : layout.width;
      itemSlot.top = !isHorizontal ? layout.height : 0;

      // If gaps don't needs filling do not add any current slots to the new
      // slots array.
      if (!fillGaps) {
        ignoreCurrentSlots = true;
      }
    }

    // In vertical mode, if the item's bottom overlaps the grid's bottom.
    if (!isHorizontal && itemSlot.top + itemSlot.height > layout.height) {
      // If item is not aligned to the left edge, create a new slot.
      if (itemSlot.left > 0) {
        newSlots.push(this._addRect(0, layout.height, itemSlot.left, Infinity));
      }

      // If item is not aligned to the right edge, create a new slot.
      if (itemSlot.left + itemSlot.width < layout.width) {
        newSlots.push(
          this._addRect(
            itemSlot.left + itemSlot.width,
            layout.height,
            layout.width - itemSlot.left - itemSlot.width,
            Infinity
          )
        );
      }

      // Update grid height.
      layout.height = itemSlot.top + itemSlot.height;
    }

    // In horizontal mode, if the item's right overlaps the grid's right edge.
    if (isHorizontal && itemSlot.left + itemSlot.width > layout.width) {
      // If item is not aligned to the top, create a new slot.
      if (itemSlot.top > 0) {
        newSlots.push(this._addRect(layout.width, 0, Infinity, itemSlot.top));
      }

      // If item is not aligned to the bottom, create a new slot.
      if (itemSlot.top + itemSlot.height < layout.height) {
        newSlots.push(
          this._addRect(
            layout.width,
            itemSlot.top + itemSlot.height,
            Infinity,
            layout.height - itemSlot.top - itemSlot.height
          )
        );
      }

      // Update grid width.
      layout.width = itemSlot.left + itemSlot.width;
    }

    // Clean up the current slots making sure there are no old slots that
    // overlap with the item. If an old slot overlaps with the item, split it
    // into smaller slots if necessary.
    for (i = fillGaps ? 0 : ignoreCurrentSlots ? freeSlots.length : i; i < freeSlots.length; i++) {
      rectId = freeSlots[i];
      if (!rectId) continue;
      rect = this._getRect(rectId);
      potentialSlots = this._splitRect(rect, itemSlot);
      for (ii = 0; ii < potentialSlots.length; ii++) {
        rectId = potentialSlots[ii];
        rect = this._getRect(rectId);
        // Let's make sure here that we have a big enough slot
        // (width/height > 0.49px) and also let's make sure that the slot is
        // within the boundaries of the grid.
        if (
          rect.width > 0.49 &&
          rect.height > 0.49 &&
          ((!isHorizontal && rect.top < layout.height) ||
            (isHorizontal && rect.left < layout.width))
        ) {
          newSlots.push(rectId);
        }
      }
    }

    // Sanitize new slots.
    if (newSlots.length) {
      this._purgeRects(newSlots).sort(
        isHorizontal ? this._sortRectsLeftTop : this._sortRectsTopLeft
      );
    }

    // Update layout width/height.
    if (isHorizontal) {
      layout.width = Math.max(layout.width, itemSlot.left + itemSlot.width);
    } else {
      layout.height = Math.max(layout.height, itemSlot.top + itemSlot.height);
    }

    // Add item slot data to layout slots (and store the slot size for later
    // usage too).
    layout.slots.push(itemSlot.left, itemSlot.top);
    layout.slotSizes.push(itemSlot.width, itemSlot.height);

    // Free/new slots switcheroo!
    this._freeSlots = newSlots;
    this._newSlots = freeSlots;
  };
})();

/**
 * Add a new rectangle to the rectangle store. Returns the id of the new
 * rectangle.
 *
 * @private
 * @memberof Packer.prototype
 * @param {Number} left
 * @param {Number} top
 * @param {Number} width
 * @param {Number} height
 * @returns {RectId}
 */
Packer.prototype._addRect = function(left, top, width, height) {
  var rectId = ++this._rectId;
  var rectStore = this._rectStore;

  rectStore[rectId] = left || 0;
  rectStore[++this._rectId] = top || 0;
  rectStore[++this._rectId] = width || 0;
  rectStore[++this._rectId] = height || 0;

  return rectId;
};

/**
 * Get rectangle data from the rectangle store by id. Optionally you can
 * provide a target object where the rectangle data will be written in. By
 * default an internal object is reused as a target object.
 *
 * @private
 * @memberof Packer.prototype
 * @param {RectId} id
 * @param {Object} [target]
 * @returns {Object}
 */
Packer.prototype._getRect = function(id, target) {
  var rectItem = target ? target : this._rectItem;
  var rectStore = this._rectStore;

  rectItem.left = rectStore[id] || 0;
  rectItem.top = rectStore[++id] || 0;
  rectItem.width = rectStore[++id] || 0;
  rectItem.height = rectStore[++id] || 0;

  return rectItem;
};

/**
 * Punch a hole into a rectangle and split the remaining area into smaller
 * rectangles (4 at max).
 *
 * @private
 * @memberof Packer.prototype
 * @param {Rectangle} rect
 * @param {Rectangle} hole
 * @returns {RectId[]}
 */
Packer.prototype._splitRect = (function() {
  var results = [];
  return function(rect, hole) {
    // Reset old results.
    results.length = 0;

    // If the rect does not overlap with the hole add rect to the return data
    // as is.
    if (!this._doRectsOverlap(rect, hole)) {
      results.push(this._addRect(rect.left, rect.top, rect.width, rect.height));
      return results;
    }

    // Left split.
    if (rect.left < hole.left) {
      results.push(this._addRect(rect.left, rect.top, hole.left - rect.left, rect.height));
    }

    // Right split.
    if (rect.left + rect.width > hole.left + hole.width) {
      results.push(
        this._addRect(
          hole.left + hole.width,
          rect.top,
          rect.left + rect.width - (hole.left + hole.width),
          rect.height
        )
      );
    }

    // Top split.
    if (rect.top < hole.top) {
      results.push(this._addRect(rect.left, rect.top, rect.width, hole.top - rect.top));
    }

    // Bottom split.
    if (rect.top + rect.height > hole.top + hole.height) {
      results.push(
        this._addRect(
          rect.left,
          hole.top + hole.height,
          rect.width,
          rect.top + rect.height - (hole.top + hole.height)
        )
      );
    }

    return results;
  };
})();

/**
 * Check if two rectangles overlap.
 *
 * @private
 * @memberof Packer.prototype
 * @param {Rectangle} a
 * @param {Rectangle} b
 * @returns {Boolean}
 */
Packer.prototype._doRectsOverlap = function(a, b) {
  return !(
    a.left + a.width <= b.left ||
    b.left + b.width <= a.left ||
    a.top + a.height <= b.top ||
    b.top + b.height <= a.top
  );
};

/**
 * Check if a rectangle is fully within another rectangle.
 *
 * @private
 * @memberof Packer.prototype
 * @param {Rectangle} a
 * @param {Rectangle} b
 * @returns {Boolean}
 */
Packer.prototype._isRectWithinRect = function(a, b) {
  return (
    a.left >= b.left &&
    a.top >= b.top &&
    a.left + a.width <= b.left + b.width &&
    a.top + a.height <= b.top + b.height
  );
};

/**
 * Loops through an array of rectangle ids and resets all that are fully
 * within another rectangle in the array. Resetting in this case means that
 * the rectangle id value is replaced with zero.
 *
 * @private
 * @memberof Packer.prototype
 * @param {RectId[]} rectIds
 * @returns {RectId[]}
 */
Packer.prototype._purgeRects = (function() {
  var rectA = {};
  var rectB = {};
  return function(rectIds) {
    var i = rectIds.length;
    var ii;

    while (i--) {
      ii = rectIds.length;
      if (!rectIds[i]) continue;
      this._getRect(rectIds[i], rectA);
      while (ii--) {
        if (!rectIds[ii] || i === ii) continue;
        if (this._isRectWithinRect(rectA, this._getRect(rectIds[ii], rectB))) {
          rectIds[i] = 0;
          break;
        }
      }
    }

    return rectIds;
  };
})();

/**
 * Sort rectangles with top-left gravity.
 *
 * @private
 * @memberof Packer.prototype
 * @param {RectId} aId
 * @param {RectId} bId
 * @returns {Number}
 */
Packer.prototype._sortRectsTopLeft = (function() {
  var rectA = {};
  var rectB = {};
  return function(aId, bId) {
    this._getRect(aId, rectA);
    this._getRect(bId, rectB);
    // prettier-ignore
    return rectA.top < rectB.top ? -1 :
           rectA.top > rectB.top ? 1 :
           rectA.left < rectB.left ? -1 :
           rectA.left > rectB.left ? 1 : 0;
  };
})();

/**
 * Sort rectangles with left-top gravity.
 *
 * @private
 * @memberof Packer.prototype
 * @param {RectId} aId
 * @param {RectId} bId
 * @returns {Number}
 */
Packer.prototype._sortRectsLeftTop = (function() {
  var rectA = {};
  var rectB = {};
  return function(aId, bId) {
    this._getRect(aId, rectA);
    this._getRect(bId, rectB);
    // prettier-ignore
    return rectA.left < rectB.left ? -1 :
           rectA.left > rectB.left ? 1 :
           rectA.top < rectB.top ? -1 :
           rectA.top > rectB.top ? 1 : 0;
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (Packer);


/***/ }),

/***/ "./node_modules/prando/dist/Prando.es.js":
/*!***********************************************!*\
  !*** ./node_modules/prando/dist/Prando.es.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Prando = /** @class */ (function () {
    // ================================================================================================================
    // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
    /**
     * Generate a new Prando pseudo-random number generator.
     *
     * @param seed - A number or string seed that determines which pseudo-random number sequence will be created. Defaults to current time.
     */
    function Prando(seed) {
        this._value = NaN;
        if (typeof (seed) === "string") {
            // String seed
            this._seed = this.hashCode(seed);
        }
        else if (typeof (seed) === "number") {
            // Numeric seed
            this._seed = seed;
        }
        else {
            // Pseudo-random seed
            this._seed = Date.now() + Math.random();
        }
        this.reset();
    }
    // ================================================================================================================
    // PUBLIC INTERFACE -----------------------------------------------------------------------------------------------
    /**
     * Generates a pseudo-random number between a lower (inclusive) and a higher (exclusive) bounds.
     *
     * @param min - The minimum number that can be randomly generated.
     * @param pseudoMax - The maximum number that can be randomly generated (exclusive).
     * @return The generated pseudo-random number.
     */
    Prando.prototype.next = function (min, pseudoMax) {
        if (min === void 0) { min = 0; }
        if (pseudoMax === void 0) { pseudoMax = 1; }
        this.recalculate();
        return this.map(this._value, Prando.MIN, Prando.MAX, min, pseudoMax);
    };
    /**
     * Generates a pseudo-random integer number in a range (inclusive).
     *
     * @param min - The minimum number that can be randomly generated.
     * @param max - The maximum number that can be randomly generated.
     * @return The generated pseudo-random number.
     */
    Prando.prototype.nextInt = function (min, max) {
        if (min === void 0) { min = 10; }
        if (max === void 0) { max = 100; }
        this.recalculate();
        return Math.floor(this.map(this._value, Prando.MIN, Prando.MAX, min, max + 1));
    };
    /**
     * Generates a pseudo-random string sequence of a particular length from a specific character range.
     *
     * Note: keep in mind that creating a random string sequence does not guarantee uniqueness; there is always a
     * 1 in (char_length^string_length) chance of collision. For real unique string ids, always check for
     * pre-existing ids, or employ a robust GUID/UUID generator.
     *
     * @param length - Length of the strting to be generated.
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated string sequence.
     */
    Prando.prototype.nextString = function (length, chars) {
        if (length === void 0) { length = 16; }
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        var str = "";
        while (str.length < length) {
            str += this.nextChar(chars);
        }
        return str;
    };
    /**
     * Generates a pseudo-random string of 1 character specific character range.
     *
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated character.
     */
    Prando.prototype.nextChar = function (chars) {
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        this.recalculate();
        return chars.substr(this.nextInt(0, chars.length - 1), 1);
    };
    /**
     * Picks a pseudo-random item from an array. The array is left unmodified.
     *
     * Note: keep in mind that while the returned item will be random enough, picking one item from the array at a time
     * does not guarantee nor imply that a sequence of random non-repeating items will be picked. If you want to
     * *pick items in a random order* from an array, instead of *pick one random item from an array*, it's best to
     * apply a *shuffle* transformation to the array instead, then read it linearly.
     *
     * @param array - Array of any type containing one or more candidates for random picking.
     * @return An item from the array.
     */
    Prando.prototype.nextArrayItem = function (array) {
        this.recalculate();
        return array[this.nextInt(0, array.length - 1)];
    };
    /**
     * Generates a pseudo-random boolean.
     *
     * @return A value of true or false.
     */
    Prando.prototype.nextBoolean = function () {
        this.recalculate();
        return this._value > 0.5;
    };
    /**
     * Skips ahead in the sequence of numbers that are being generated. This is equivalent to
     * calling next() a specified number of times, but faster since it doesn't need to map the
     * new random numbers to a range and return it.
     *
     * @param iterations - The number of items to skip ahead.
     */
    Prando.prototype.skip = function (iterations) {
        if (iterations === void 0) { iterations = 1; }
        while (iterations-- > 0) {
            this.recalculate();
        }
    };
    /**
     * Reset the pseudo-random number sequence back to its starting seed. Further calls to next()
     * will then produce the same sequence of numbers it had produced before. This is equivalent to
     * creating a new Prando instance with the same seed as another Prando instance.
     *
     * Example:
     * let rng = new Prando(12345678);
     * console.log(rng.next()); // 0.6177754114889017
     * console.log(rng.next()); // 0.5784605181725837
     * rng.reset();
     * console.log(rng.next()); // 0.6177754114889017 again
     * console.log(rng.next()); // 0.5784605181725837 again
     */
    Prando.prototype.reset = function () {
        this._value = this._seed;
    };
    // ================================================================================================================
    // PRIVATE INTERFACE ----------------------------------------------------------------------------------------------
    Prando.prototype.recalculate = function () {
        // Xorshift*32
        // Based on George Marsaglia's work: http://www.jstatsoft.org/v08/i14/paper
        this._value ^= this._value << 13;
        this._value ^= this._value >> 17;
        this._value ^= this._value << 5;
    };
    Prando.prototype.map = function (val, minFrom, maxFrom, minTo, maxTo) {
        return ((val - minFrom) / (maxFrom - minFrom)) * (maxTo - minTo) + minTo;
    };
    Prando.prototype.hashCode = function (str) {
        var hash = 0;
        if (str) {
            var l = str.length;
            for (var i = 0; i < l; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash |= 0;
            }
        }
        return hash;
    };
    Prando.MIN = -2147483648; // Int32 min
    Prando.MAX = 2147483647; // Int32 max
    return Prando;
}());

/* harmony default export */ __webpack_exports__["default"] = (Prando);
//# sourceMappingURL=Prando.es.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXV1cmkvc3JjL1BhY2tlci9QYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByYW5kby9kaXN0L1ByYW5kby5lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7QUFDQSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6IjgxYmRjMzU0MDQwZjI0OTQxYjNkL3ZlbmRvcnN+Zm9sZHMudmVuZG9yc35mb2xkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTXV1cmkgUGFja2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtcHJlc2VudCwgTmlrbGFzIFLDpG3DtiA8aW5yYW1vQGdtYWlsLmNvbT5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2hhbHR1L211dXJpL2Jsb2IvbWFzdGVyL3NyYy9QYWNrZXIvTElDRU5TRS5tZFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBsYXlvdXQgYWxnb3JpdGhtIGZvciBNdXVyaS4gQmFzZWQgb24gTUFYUkVDVFMgYXBwcm9hY2hcbiAqIGFzIGRlc2NyaWJlZCBieSBKdWtrYSBKeWzDpG5raSBpbiBoaXMgc3VydmV5OiBcIkEgVGhvdXNhbmQgV2F5cyB0byBQYWNrIHRoZVxuICogQmluIC0gQSBQcmFjdGljYWwgQXBwcm9hY2ggdG8gVHdvLURpbWVuc2lvbmFsIFJlY3RhbmdsZSBCaW4gUGFja2luZy5cIi5cbiAqXG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gUGFja2VyKCkge1xuICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgc2xvdHM6IFtdLFxuICAgIHNsb3RTaXplczogW10sXG4gICAgc2V0V2lkdGg6IGZhbHNlLFxuICAgIHNldEhlaWdodDogZmFsc2UsXG4gICAgd2lkdGg6IGZhbHNlLFxuICAgIGhlaWdodDogZmFsc2VcbiAgfTtcbiAgdGhpcy5fZnJlZVNsb3RzID0gW107XG4gIHRoaXMuX25ld1Nsb3RzID0gW107XG4gIHRoaXMuX3JlY3RJdGVtID0ge307XG4gIHRoaXMuX3JlY3RTdG9yZSA9IFtdO1xuICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gIC8vIEJpbmQgc29ydCBoYW5kbGVycy5cbiAgdGhpcy5fc29ydFJlY3RzTGVmdFRvcCA9IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AuYmluZCh0aGlzKTtcbiAgdGhpcy5fc29ydFJlY3RzVG9wTGVmdCA9IHRoaXMuX3NvcnRSZWN0c1RvcExlZnQuYmluZCh0aGlzKTtcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmlsbEdhcHM9ZmFsc2VdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWw9ZmFsc2VdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduUmlnaHQ9ZmFsc2VdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsaWduQm90dG9tPWZhbHNlXVxuICogQHJldHVybnMge0xheW91dERhdGF9XG4gKi9cblBhY2tlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24oaXRlbXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgdmFyIGZpbGxHYXBzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmZpbGxHYXBzKTtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3Jpem9udGFsKTtcbiAgdmFyIGFsaWduUmlnaHQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuYWxpZ25SaWdodCk7XG4gIHZhciBhbGlnbkJvdHRvbSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGlnbkJvdHRvbSk7XG4gIHZhciByb3VuZGluZyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5yb3VuZGluZyk7XG4gIHZhciBpO1xuXG4gIC8vIFJlc2V0IGxheW91dCBkYXRhLlxuICBsYXlvdXQuc2xvdHMubGVuZ3RoID0gbGF5b3V0LnNsb3RTaXplcy5sZW5ndGggPSAwO1xuICBsYXlvdXQud2lkdGggPSBpc0hvcml6b250YWwgPyAwIDogcm91bmRpbmcgPyBNYXRoLnJvdW5kKHdpZHRoKSA6IHdpZHRoO1xuICBsYXlvdXQuaGVpZ2h0ID0gIWlzSG9yaXpvbnRhbCA/IDAgOiByb3VuZGluZyA/IE1hdGgucm91bmQoaGVpZ2h0KSA6IGhlaWdodDtcbiAgbGF5b3V0LnNldFdpZHRoID0gaXNIb3Jpem9udGFsO1xuICBsYXlvdXQuc2V0SGVpZ2h0ID0gIWlzSG9yaXpvbnRhbDtcblxuICAvLyBObyBuZWVkIHRvIGdvIGZ1cnRoZXIgaWYgaXRlbXMgZG8gbm90IGV4aXN0LlxuICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuIGxheW91dDtcblxuICAvLyBGaW5kIHNsb3RzIGZvciBpdGVtcy5cbiAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5fYWRkU2xvdChpdGVtc1tpXSwgaXNIb3Jpem9udGFsLCBmaWxsR2Fwcywgcm91bmRpbmcpO1xuICB9XG5cbiAgLy8gSWYgdGhlIGFsaWdubWVudCBpcyBzZXQgdG8gcmlnaHQgd2UgbmVlZCB0byBhZGp1c3QgdGhlIHJlc3VsdHMuXG4gIGlmIChhbGlnblJpZ2h0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LndpZHRoIC0gKGxheW91dC5zbG90c1tpXSArIGxheW91dC5zbG90U2l6ZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBhbGlnbm1lbnQgaXMgc2V0IHRvIGJvdHRvbSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgcmVzdWx0cy5cbiAgaWYgKGFsaWduQm90dG9tKSB7XG4gICAgZm9yIChpID0gMTsgaSA8IGxheW91dC5zbG90cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgbGF5b3V0LnNsb3RzW2ldID0gbGF5b3V0LmhlaWdodCAtIChsYXlvdXQuc2xvdHNbaV0gKyBsYXlvdXQuc2xvdFNpemVzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCBzbG90cyBhcnJheXMgYW5kIHJlY3QgaWQuXG4gIHRoaXMuX2ZyZWVTbG90cy5sZW5ndGggPSAwO1xuICB0aGlzLl9uZXdTbG90cy5sZW5ndGggPSAwO1xuICB0aGlzLl9yZWN0SWQgPSAwO1xuXG4gIHJldHVybiBsYXlvdXQ7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSBwb3NpdGlvbiBmb3IgdGhlIGxheW91dCBpdGVtLiBSZXR1cm5zIHRoZSBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAqIG9mIHRoZSBpdGVtIGluIHBpeGVscy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIFBhY2tlci5wcm90b3R5cGVcbiAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICogQHBhcmFtIHtCb29sZWFufSBpc0hvcml6b250YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlsbEdhcHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcm91bmRpbmdcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fYWRkU2xvdCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGxlZXdheSA9IDAuMDAxO1xuICB2YXIgaXRlbVNsb3QgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0sIGlzSG9yaXpvbnRhbCwgZmlsbEdhcHMsIHJvdW5kaW5nKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICB2YXIgZnJlZVNsb3RzID0gdGhpcy5fZnJlZVNsb3RzO1xuICAgIHZhciBuZXdTbG90cyA9IHRoaXMuX25ld1Nsb3RzO1xuICAgIHZhciByZWN0O1xuICAgIHZhciByZWN0SWQ7XG4gICAgdmFyIHBvdGVudGlhbFNsb3RzO1xuICAgIHZhciBpZ25vcmVDdXJyZW50U2xvdHM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGlpO1xuXG4gICAgLy8gUmVzZXQgbmV3IHNsb3RzLlxuICAgIG5ld1Nsb3RzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBTZXQgaXRlbSBzbG90IGluaXRpYWwgZGF0YS5cbiAgICBpdGVtU2xvdC5sZWZ0ID0gbnVsbDtcbiAgICBpdGVtU2xvdC50b3AgPSBudWxsO1xuICAgIGl0ZW1TbG90LndpZHRoID0gaXRlbS5fd2lkdGggKyBpdGVtLl9tYXJnaW5MZWZ0ICsgaXRlbS5fbWFyZ2luUmlnaHQ7XG4gICAgaXRlbVNsb3QuaGVpZ2h0ID0gaXRlbS5faGVpZ2h0ICsgaXRlbS5fbWFyZ2luVG9wICsgaXRlbS5fbWFyZ2luQm90dG9tO1xuXG4gICAgLy8gUm91bmQgaXRlbSBzbG90IHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkLlxuICAgIGlmIChyb3VuZGluZykge1xuICAgICAgaXRlbVNsb3Qud2lkdGggPSBNYXRoLnJvdW5kKGl0ZW1TbG90LndpZHRoKTtcbiAgICAgIGl0ZW1TbG90LmhlaWdodCA9IE1hdGgucm91bmQoaXRlbVNsb3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gZmluZCBhIHNsb3QgZm9yIHRoZSBpdGVtLlxuICAgIGZvciAoaSA9IDA7IGkgPCBmcmVlU2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlY3RJZCA9IGZyZWVTbG90c1tpXTtcbiAgICAgIGlmICghcmVjdElkKSBjb250aW51ZTtcbiAgICAgIHJlY3QgPSB0aGlzLl9nZXRSZWN0KHJlY3RJZCk7XG4gICAgICBpZiAoaXRlbVNsb3Qud2lkdGggPD0gcmVjdC53aWR0aCArIGxlZXdheSAmJiBpdGVtU2xvdC5oZWlnaHQgPD0gcmVjdC5oZWlnaHQgKyBsZWV3YXkpIHtcbiAgICAgICAgaXRlbVNsb3QubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgICAgaXRlbVNsb3QudG9wID0gcmVjdC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIHNsb3Qgd2FzIGZvdW5kIGZvciB0aGUgaXRlbS5cbiAgICBpZiAoaXRlbVNsb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgLy8gUG9zaXRpb24gdGhlIGl0ZW0gaW4gdG8gdGhlIGJvdHRvbSBsZWZ0ICh2ZXJ0aWNhbCBtb2RlKSBvciB0b3AgcmlnaHRcbiAgICAgIC8vIChob3Jpem9udGFsIG1vZGUpIG9mIHRoZSBncmlkLlxuICAgICAgaXRlbVNsb3QubGVmdCA9ICFpc0hvcml6b250YWwgPyAwIDogbGF5b3V0LndpZHRoO1xuICAgICAgaXRlbVNsb3QudG9wID0gIWlzSG9yaXpvbnRhbCA/IGxheW91dC5oZWlnaHQgOiAwO1xuXG4gICAgICAvLyBJZiBnYXBzIGRvbid0IG5lZWRzIGZpbGxpbmcgZG8gbm90IGFkZCBhbnkgY3VycmVudCBzbG90cyB0byB0aGUgbmV3XG4gICAgICAvLyBzbG90cyBhcnJheS5cbiAgICAgIGlmICghZmlsbEdhcHMpIHtcbiAgICAgICAgaWdub3JlQ3VycmVudFNsb3RzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbiB2ZXJ0aWNhbCBtb2RlLCBpZiB0aGUgaXRlbSdzIGJvdHRvbSBvdmVybGFwcyB0aGUgZ3JpZCdzIGJvdHRvbS5cbiAgICBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQgPiBsYXlvdXQuaGVpZ2h0KSB7XG4gICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSBsZWZ0IGVkZ2UsIGNyZWF0ZSBhIG5ldyBzbG90LlxuICAgICAgaWYgKGl0ZW1TbG90LmxlZnQgPiAwKSB7XG4gICAgICAgIG5ld1Nsb3RzLnB1c2godGhpcy5fYWRkUmVjdCgwLCBsYXlvdXQuaGVpZ2h0LCBpdGVtU2xvdC5sZWZ0LCBJbmZpbml0eSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdGVtIGlzIG5vdCBhbGlnbmVkIHRvIHRoZSByaWdodCBlZGdlLCBjcmVhdGUgYSBuZXcgc2xvdC5cbiAgICAgIGlmIChpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPCBsYXlvdXQud2lkdGgpIHtcbiAgICAgICAgbmV3U2xvdHMucHVzaChcbiAgICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgICAgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoLFxuICAgICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICAgIGxheW91dC53aWR0aCAtIGl0ZW1TbG90LmxlZnQgLSBpdGVtU2xvdC53aWR0aCxcbiAgICAgICAgICAgIEluZmluaXR5XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgZ3JpZCBoZWlnaHQuXG4gICAgICBsYXlvdXQuaGVpZ2h0ID0gaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEluIGhvcml6b250YWwgbW9kZSwgaWYgdGhlIGl0ZW0ncyByaWdodCBvdmVybGFwcyB0aGUgZ3JpZCdzIHJpZ2h0IGVkZ2UuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCAmJiBpdGVtU2xvdC5sZWZ0ICsgaXRlbVNsb3Qud2lkdGggPiBsYXlvdXQud2lkdGgpIHtcbiAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIHRvcCwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICBpZiAoaXRlbVNsb3QudG9wID4gMCkge1xuICAgICAgICBuZXdTbG90cy5wdXNoKHRoaXMuX2FkZFJlY3QobGF5b3V0LndpZHRoLCAwLCBJbmZpbml0eSwgaXRlbVNsb3QudG9wKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0ZW0gaXMgbm90IGFsaWduZWQgdG8gdGhlIGJvdHRvbSwgY3JlYXRlIGEgbmV3IHNsb3QuXG4gICAgICBpZiAoaXRlbVNsb3QudG9wICsgaXRlbVNsb3QuaGVpZ2h0IDwgbGF5b3V0LmhlaWdodCkge1xuICAgICAgICBuZXdTbG90cy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICBpdGVtU2xvdC50b3AgKyBpdGVtU2xvdC5oZWlnaHQsXG4gICAgICAgICAgICBJbmZpbml0eSxcbiAgICAgICAgICAgIGxheW91dC5oZWlnaHQgLSBpdGVtU2xvdC50b3AgLSBpdGVtU2xvdC5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBncmlkIHdpZHRoLlxuICAgICAgbGF5b3V0LndpZHRoID0gaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIHRoZSBjdXJyZW50IHNsb3RzIG1ha2luZyBzdXJlIHRoZXJlIGFyZSBubyBvbGQgc2xvdHMgdGhhdFxuICAgIC8vIG92ZXJsYXAgd2l0aCB0aGUgaXRlbS4gSWYgYW4gb2xkIHNsb3Qgb3ZlcmxhcHMgd2l0aCB0aGUgaXRlbSwgc3BsaXQgaXRcbiAgICAvLyBpbnRvIHNtYWxsZXIgc2xvdHMgaWYgbmVjZXNzYXJ5LlxuICAgIGZvciAoaSA9IGZpbGxHYXBzID8gMCA6IGlnbm9yZUN1cnJlbnRTbG90cyA/IGZyZWVTbG90cy5sZW5ndGggOiBpOyBpIDwgZnJlZVNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWN0SWQgPSBmcmVlU2xvdHNbaV07XG4gICAgICBpZiAoIXJlY3RJZCkgY29udGludWU7XG4gICAgICByZWN0ID0gdGhpcy5fZ2V0UmVjdChyZWN0SWQpO1xuICAgICAgcG90ZW50aWFsU2xvdHMgPSB0aGlzLl9zcGxpdFJlY3QocmVjdCwgaXRlbVNsb3QpO1xuICAgICAgZm9yIChpaSA9IDA7IGlpIDwgcG90ZW50aWFsU2xvdHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgIHJlY3RJZCA9IHBvdGVudGlhbFNsb3RzW2lpXTtcbiAgICAgICAgcmVjdCA9IHRoaXMuX2dldFJlY3QocmVjdElkKTtcbiAgICAgICAgLy8gTGV0J3MgbWFrZSBzdXJlIGhlcmUgdGhhdCB3ZSBoYXZlIGEgYmlnIGVub3VnaCBzbG90XG4gICAgICAgIC8vICh3aWR0aC9oZWlnaHQgPiAwLjQ5cHgpIGFuZCBhbHNvIGxldCdzIG1ha2Ugc3VyZSB0aGF0IHRoZSBzbG90IGlzXG4gICAgICAgIC8vIHdpdGhpbiB0aGUgYm91bmRhcmllcyBvZiB0aGUgZ3JpZC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlY3Qud2lkdGggPiAwLjQ5ICYmXG4gICAgICAgICAgcmVjdC5oZWlnaHQgPiAwLjQ5ICYmXG4gICAgICAgICAgKCghaXNIb3Jpem9udGFsICYmIHJlY3QudG9wIDwgbGF5b3V0LmhlaWdodCkgfHxcbiAgICAgICAgICAgIChpc0hvcml6b250YWwgJiYgcmVjdC5sZWZ0IDwgbGF5b3V0LndpZHRoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3U2xvdHMucHVzaChyZWN0SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2FuaXRpemUgbmV3IHNsb3RzLlxuICAgIGlmIChuZXdTbG90cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3B1cmdlUmVjdHMobmV3U2xvdHMpLnNvcnQoXG4gICAgICAgIGlzSG9yaXpvbnRhbCA/IHRoaXMuX3NvcnRSZWN0c0xlZnRUb3AgOiB0aGlzLl9zb3J0UmVjdHNUb3BMZWZ0XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBsYXlvdXQgd2lkdGgvaGVpZ2h0LlxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGxheW91dC53aWR0aCA9IE1hdGgubWF4KGxheW91dC53aWR0aCwgaXRlbVNsb3QubGVmdCArIGl0ZW1TbG90LndpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5b3V0LmhlaWdodCA9IE1hdGgubWF4KGxheW91dC5oZWlnaHQsIGl0ZW1TbG90LnRvcCArIGl0ZW1TbG90LmhlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGl0ZW0gc2xvdCBkYXRhIHRvIGxheW91dCBzbG90cyAoYW5kIHN0b3JlIHRoZSBzbG90IHNpemUgZm9yIGxhdGVyXG4gICAgLy8gdXNhZ2UgdG9vKS5cbiAgICBsYXlvdXQuc2xvdHMucHVzaChpdGVtU2xvdC5sZWZ0LCBpdGVtU2xvdC50b3ApO1xuICAgIGxheW91dC5zbG90U2l6ZXMucHVzaChpdGVtU2xvdC53aWR0aCwgaXRlbVNsb3QuaGVpZ2h0KTtcblxuICAgIC8vIEZyZWUvbmV3IHNsb3RzIHN3aXRjaGVyb28hXG4gICAgdGhpcy5fZnJlZVNsb3RzID0gbmV3U2xvdHM7XG4gICAgdGhpcy5fbmV3U2xvdHMgPSBmcmVlU2xvdHM7XG4gIH07XG59KSgpO1xuXG4vKipcbiAqIEFkZCBhIG5ldyByZWN0YW5nbGUgdG8gdGhlIHJlY3RhbmdsZSBzdG9yZS4gUmV0dXJucyB0aGUgaWQgb2YgdGhlIG5ld1xuICogcmVjdGFuZ2xlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3BcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICogQHJldHVybnMge1JlY3RJZH1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fYWRkUmVjdCA9IGZ1bmN0aW9uKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICB2YXIgcmVjdElkID0gKyt0aGlzLl9yZWN0SWQ7XG4gIHZhciByZWN0U3RvcmUgPSB0aGlzLl9yZWN0U3RvcmU7XG5cbiAgcmVjdFN0b3JlW3JlY3RJZF0gPSBsZWZ0IHx8IDA7XG4gIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSB0b3AgfHwgMDtcbiAgcmVjdFN0b3JlWysrdGhpcy5fcmVjdElkXSA9IHdpZHRoIHx8IDA7XG4gIHJlY3RTdG9yZVsrK3RoaXMuX3JlY3RJZF0gPSBoZWlnaHQgfHwgMDtcblxuICByZXR1cm4gcmVjdElkO1xufTtcblxuLyoqXG4gKiBHZXQgcmVjdGFuZ2xlIGRhdGEgZnJvbSB0aGUgcmVjdGFuZ2xlIHN0b3JlIGJ5IGlkLiBPcHRpb25hbGx5IHlvdSBjYW5cbiAqIHByb3ZpZGUgYSB0YXJnZXQgb2JqZWN0IHdoZXJlIHRoZSByZWN0YW5nbGUgZGF0YSB3aWxsIGJlIHdyaXR0ZW4gaW4uIEJ5XG4gKiBkZWZhdWx0IGFuIGludGVybmFsIG9iamVjdCBpcyByZXVzZWQgYXMgYSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtSZWN0SWR9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblBhY2tlci5wcm90b3R5cGUuX2dldFJlY3QgPSBmdW5jdGlvbihpZCwgdGFyZ2V0KSB7XG4gIHZhciByZWN0SXRlbSA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMuX3JlY3RJdGVtO1xuICB2YXIgcmVjdFN0b3JlID0gdGhpcy5fcmVjdFN0b3JlO1xuXG4gIHJlY3RJdGVtLmxlZnQgPSByZWN0U3RvcmVbaWRdIHx8IDA7XG4gIHJlY3RJdGVtLnRvcCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICByZWN0SXRlbS53aWR0aCA9IHJlY3RTdG9yZVsrK2lkXSB8fCAwO1xuICByZWN0SXRlbS5oZWlnaHQgPSByZWN0U3RvcmVbKytpZF0gfHwgMDtcblxuICByZXR1cm4gcmVjdEl0ZW07XG59O1xuXG4vKipcbiAqIFB1bmNoIGEgaG9sZSBpbnRvIGEgcmVjdGFuZ2xlIGFuZCBzcGxpdCB0aGUgcmVtYWluaW5nIGFyZWEgaW50byBzbWFsbGVyXG4gKiByZWN0YW5nbGVzICg0IGF0IG1heCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gKiBAcGFyYW0ge1JlY3RhbmdsZX0gcmVjdFxuICogQHBhcmFtIHtSZWN0YW5nbGV9IGhvbGVcbiAqIEByZXR1cm5zIHtSZWN0SWRbXX1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fc3BsaXRSZWN0ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24ocmVjdCwgaG9sZSkge1xuICAgIC8vIFJlc2V0IG9sZCByZXN1bHRzLlxuICAgIHJlc3VsdHMubGVuZ3RoID0gMDtcblxuICAgIC8vIElmIHRoZSByZWN0IGRvZXMgbm90IG92ZXJsYXAgd2l0aCB0aGUgaG9sZSBhZGQgcmVjdCB0byB0aGUgcmV0dXJuIGRhdGFcbiAgICAvLyBhcyBpcy5cbiAgICBpZiAoIXRoaXMuX2RvUmVjdHNPdmVybGFwKHJlY3QsIGhvbGUpKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCkpO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gTGVmdCBzcGxpdC5cbiAgICBpZiAocmVjdC5sZWZ0IDwgaG9sZS5sZWZ0KSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCBob2xlLmxlZnQgLSByZWN0LmxlZnQsIHJlY3QuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgLy8gUmlnaHQgc3BsaXQuXG4gICAgaWYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggPiBob2xlLmxlZnQgKyBob2xlLndpZHRoKSB7XG4gICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgIHRoaXMuX2FkZFJlY3QoXG4gICAgICAgICAgaG9sZS5sZWZ0ICsgaG9sZS53aWR0aCxcbiAgICAgICAgICByZWN0LnRvcCxcbiAgICAgICAgICByZWN0LmxlZnQgKyByZWN0LndpZHRoIC0gKGhvbGUubGVmdCArIGhvbGUud2lkdGgpLFxuICAgICAgICAgIHJlY3QuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVG9wIHNwbGl0LlxuICAgIGlmIChyZWN0LnRvcCA8IGhvbGUudG9wKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5fYWRkUmVjdChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCBob2xlLnRvcCAtIHJlY3QudG9wKSk7XG4gICAgfVxuXG4gICAgLy8gQm90dG9tIHNwbGl0LlxuICAgIGlmIChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0ID4gaG9sZS50b3AgKyBob2xlLmhlaWdodCkge1xuICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICB0aGlzLl9hZGRSZWN0KFxuICAgICAgICAgIHJlY3QubGVmdCxcbiAgICAgICAgICBob2xlLnRvcCArIGhvbGUuaGVpZ2h0LFxuICAgICAgICAgIHJlY3Qud2lkdGgsXG4gICAgICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAtIChob2xlLnRvcCArIGhvbGUuaGVpZ2h0KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gcmVjdGFuZ2xlcyBvdmVybGFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtSZWN0YW5nbGV9IGFcbiAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBiXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fZG9SZWN0c092ZXJsYXAgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiAhKFxuICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0IHx8XG4gICAgYi5sZWZ0ICsgYi53aWR0aCA8PSBhLmxlZnQgfHxcbiAgICBhLnRvcCArIGEuaGVpZ2h0IDw9IGIudG9wIHx8XG4gICAgYi50b3AgKyBiLmhlaWdodCA8PSBhLnRvcFxuICApO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHJlY3RhbmdsZSBpcyBmdWxseSB3aXRoaW4gYW5vdGhlciByZWN0YW5nbGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gKiBAcGFyYW0ge1JlY3RhbmdsZX0gYVxuICogQHBhcmFtIHtSZWN0YW5nbGV9IGJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5QYWNrZXIucHJvdG90eXBlLl9pc1JlY3RXaXRoaW5SZWN0ID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gKFxuICAgIGEubGVmdCA+PSBiLmxlZnQgJiZcbiAgICBhLnRvcCA+PSBiLnRvcCAmJlxuICAgIGEubGVmdCArIGEud2lkdGggPD0gYi5sZWZ0ICsgYi53aWR0aCAmJlxuICAgIGEudG9wICsgYS5oZWlnaHQgPD0gYi50b3AgKyBiLmhlaWdodFxuICApO1xufTtcblxuLyoqXG4gKiBMb29wcyB0aHJvdWdoIGFuIGFycmF5IG9mIHJlY3RhbmdsZSBpZHMgYW5kIHJlc2V0cyBhbGwgdGhhdCBhcmUgZnVsbHlcbiAqIHdpdGhpbiBhbm90aGVyIHJlY3RhbmdsZSBpbiB0aGUgYXJyYXkuIFJlc2V0dGluZyBpbiB0aGlzIGNhc2UgbWVhbnMgdGhhdFxuICogdGhlIHJlY3RhbmdsZSBpZCB2YWx1ZSBpcyByZXBsYWNlZCB3aXRoIHplcm8uXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQYWNrZXIucHJvdG90eXBlXG4gKiBAcGFyYW0ge1JlY3RJZFtdfSByZWN0SWRzXG4gKiBAcmV0dXJucyB7UmVjdElkW119XG4gKi9cblBhY2tlci5wcm90b3R5cGUuX3B1cmdlUmVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciByZWN0QSA9IHt9O1xuICB2YXIgcmVjdEIgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RJZHMpIHtcbiAgICB2YXIgaSA9IHJlY3RJZHMubGVuZ3RoO1xuICAgIHZhciBpaTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlpID0gcmVjdElkcy5sZW5ndGg7XG4gICAgICBpZiAoIXJlY3RJZHNbaV0pIGNvbnRpbnVlO1xuICAgICAgdGhpcy5fZ2V0UmVjdChyZWN0SWRzW2ldLCByZWN0QSk7XG4gICAgICB3aGlsZSAoaWktLSkge1xuICAgICAgICBpZiAoIXJlY3RJZHNbaWldIHx8IGkgPT09IGlpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVjdFdpdGhpblJlY3QocmVjdEEsIHRoaXMuX2dldFJlY3QocmVjdElkc1tpaV0sIHJlY3RCKSkpIHtcbiAgICAgICAgICByZWN0SWRzW2ldID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWN0SWRzO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCB0b3AtbGVmdCBncmF2aXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzVG9wTGVmdCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHJlY3RBID0ge307XG4gIHZhciByZWN0QiA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIHJlY3RBLnRvcCA8IHJlY3RCLnRvcCA/IC0xIDpcbiAgICAgICAgICAgcmVjdEEudG9wID4gcmVjdEIudG9wID8gMSA6XG4gICAgICAgICAgIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOiAwO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBTb3J0IHJlY3RhbmdsZXMgd2l0aCBsZWZ0LXRvcCBncmF2aXR5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUGFja2VyLnByb3RvdHlwZVxuICogQHBhcmFtIHtSZWN0SWR9IGFJZFxuICogQHBhcmFtIHtSZWN0SWR9IGJJZFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuUGFja2VyLnByb3RvdHlwZS5fc29ydFJlY3RzTGVmdFRvcCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHJlY3RBID0ge307XG4gIHZhciByZWN0QiA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24oYUlkLCBiSWQpIHtcbiAgICB0aGlzLl9nZXRSZWN0KGFJZCwgcmVjdEEpO1xuICAgIHRoaXMuX2dldFJlY3QoYklkLCByZWN0Qik7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIHJlY3RBLmxlZnQgPCByZWN0Qi5sZWZ0ID8gLTEgOlxuICAgICAgICAgICByZWN0QS5sZWZ0ID4gcmVjdEIubGVmdCA/IDEgOlxuICAgICAgICAgICByZWN0QS50b3AgPCByZWN0Qi50b3AgPyAtMSA6XG4gICAgICAgICAgIHJlY3RBLnRvcCA+IHJlY3RCLnRvcCA/IDEgOiAwO1xuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2VyO1xuIiwidmFyIFByYW5kbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ09OU1RSVUNUT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgbmV3IFByYW5kbyBwc2V1ZG8tcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VlZCAtIEEgbnVtYmVyIG9yIHN0cmluZyBzZWVkIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBwc2V1ZG8tcmFuZG9tIG51bWJlciBzZXF1ZW5jZSB3aWxsIGJlIGNyZWF0ZWQuIERlZmF1bHRzIHRvIGN1cnJlbnQgdGltZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQcmFuZG8oc2VlZCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IE5hTjtcbiAgICAgICAgaWYgKHR5cGVvZiAoc2VlZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIFN0cmluZyBzZWVkXG4gICAgICAgICAgICB0aGlzLl9zZWVkID0gdGhpcy5oYXNoQ29kZShzZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgKHNlZWQpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBOdW1lcmljIHNlZWRcbiAgICAgICAgICAgIHRoaXMuX3NlZWQgPSBzZWVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUHNldWRvLXJhbmRvbSBzZWVkXG4gICAgICAgICAgICB0aGlzLl9zZWVkID0gRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUFVCTElDIElOVEVSRkFDRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHBzZXVkby1yYW5kb20gbnVtYmVyIGJldHdlZW4gYSBsb3dlciAoaW5jbHVzaXZlKSBhbmQgYSBoaWdoZXIgKGV4Y2x1c2l2ZSkgYm91bmRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1pbiAtIFRoZSBtaW5pbXVtIG51bWJlciB0aGF0IGNhbiBiZSByYW5kb21seSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIHBzZXVkb01heCAtIFRoZSBtYXhpbXVtIG51bWJlciB0aGF0IGNhbiBiZSByYW5kb21seSBnZW5lcmF0ZWQgKGV4Y2x1c2l2ZSkuXG4gICAgICogQHJldHVybiBUaGUgZ2VuZXJhdGVkIHBzZXVkby1yYW5kb20gbnVtYmVyLlxuICAgICAqL1xuICAgIFByYW5kby5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChtaW4sIHBzZXVkb01heCkge1xuICAgICAgICBpZiAobWluID09PSB2b2lkIDApIHsgbWluID0gMDsgfVxuICAgICAgICBpZiAocHNldWRvTWF4ID09PSB2b2lkIDApIHsgcHNldWRvTWF4ID0gMTsgfVxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcCh0aGlzLl92YWx1ZSwgUHJhbmRvLk1JTiwgUHJhbmRvLk1BWCwgbWluLCBwc2V1ZG9NYXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgcHNldWRvLXJhbmRvbSBpbnRlZ2VyIG51bWJlciBpbiBhIHJhbmdlIChpbmNsdXNpdmUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1pbiAtIFRoZSBtaW5pbXVtIG51bWJlciB0aGF0IGNhbiBiZSByYW5kb21seSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIG1heCAtIFRoZSBtYXhpbXVtIG51bWJlciB0aGF0IGNhbiBiZSByYW5kb21seSBnZW5lcmF0ZWQuXG4gICAgICogQHJldHVybiBUaGUgZ2VuZXJhdGVkIHBzZXVkby1yYW5kb20gbnVtYmVyLlxuICAgICAqL1xuICAgIFByYW5kby5wcm90b3R5cGUubmV4dEludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICBpZiAobWluID09PSB2b2lkIDApIHsgbWluID0gMTA7IH1cbiAgICAgICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDEwMDsgfVxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMubWFwKHRoaXMuX3ZhbHVlLCBQcmFuZG8uTUlOLCBQcmFuZG8uTUFYLCBtaW4sIG1heCArIDEpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHBzZXVkby1yYW5kb20gc3RyaW5nIHNlcXVlbmNlIG9mIGEgcGFydGljdWxhciBsZW5ndGggZnJvbSBhIHNwZWNpZmljIGNoYXJhY3RlciByYW5nZS5cbiAgICAgKlxuICAgICAqIE5vdGU6IGtlZXAgaW4gbWluZCB0aGF0IGNyZWF0aW5nIGEgcmFuZG9tIHN0cmluZyBzZXF1ZW5jZSBkb2VzIG5vdCBndWFyYW50ZWUgdW5pcXVlbmVzczsgdGhlcmUgaXMgYWx3YXlzIGFcbiAgICAgKiAxIGluIChjaGFyX2xlbmd0aF5zdHJpbmdfbGVuZ3RoKSBjaGFuY2Ugb2YgY29sbGlzaW9uLiBGb3IgcmVhbCB1bmlxdWUgc3RyaW5nIGlkcywgYWx3YXlzIGNoZWNrIGZvclxuICAgICAqIHByZS1leGlzdGluZyBpZHMsIG9yIGVtcGxveSBhIHJvYnVzdCBHVUlEL1VVSUQgZ2VuZXJhdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxlbmd0aCAtIExlbmd0aCBvZiB0aGUgc3RydGluZyB0byBiZSBnZW5lcmF0ZWQuXG4gICAgICogQHBhcmFtIGNoYXJzIC0gQ2hhcmFjdGVycyB0aGF0IGFyZSB1c2VkIHdoZW4gY3JlYXRpbmcgdGhlIHJhbmRvbSBzdHJpbmcuIERlZmF1bHRzIHRvIGFsbCBhbHBoYW51bWVyaWMgY2hhcnMgKEEtWiwgYS16LCAwLTkpLlxuICAgICAqIEByZXR1cm4gVGhlIGdlbmVyYXRlZCBzdHJpbmcgc2VxdWVuY2UuXG4gICAgICovXG4gICAgUHJhbmRvLnByb3RvdHlwZS5uZXh0U3RyaW5nID0gZnVuY3Rpb24gKGxlbmd0aCwgY2hhcnMpIHtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7IGxlbmd0aCA9IDE2OyB9XG4gICAgICAgIGlmIChjaGFycyA9PT0gdm9pZCAwKSB7IGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiOyB9XG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RyICs9IHRoaXMubmV4dENoYXIoY2hhcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBwc2V1ZG8tcmFuZG9tIHN0cmluZyBvZiAxIGNoYXJhY3RlciBzcGVjaWZpYyBjaGFyYWN0ZXIgcmFuZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2hhcnMgLSBDaGFyYWN0ZXJzIHRoYXQgYXJlIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgcmFuZG9tIHN0cmluZy4gRGVmYXVsdHMgdG8gYWxsIGFscGhhbnVtZXJpYyBjaGFycyAoQS1aLCBhLXosIDAtOSkuXG4gICAgICogQHJldHVybiBUaGUgZ2VuZXJhdGVkIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBQcmFuZG8ucHJvdG90eXBlLm5leHRDaGFyID0gZnVuY3Rpb24gKGNoYXJzKSB7XG4gICAgICAgIGlmIChjaGFycyA9PT0gdm9pZCAwKSB7IGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiOyB9XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLnN1YnN0cih0aGlzLm5leHRJbnQoMCwgY2hhcnMubGVuZ3RoIC0gMSksIDEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGlja3MgYSBwc2V1ZG8tcmFuZG9tIGl0ZW0gZnJvbSBhbiBhcnJheS4gVGhlIGFycmF5IGlzIGxlZnQgdW5tb2RpZmllZC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGtlZXAgaW4gbWluZCB0aGF0IHdoaWxlIHRoZSByZXR1cm5lZCBpdGVtIHdpbGwgYmUgcmFuZG9tIGVub3VnaCwgcGlja2luZyBvbmUgaXRlbSBmcm9tIHRoZSBhcnJheSBhdCBhIHRpbWVcbiAgICAgKiBkb2VzIG5vdCBndWFyYW50ZWUgbm9yIGltcGx5IHRoYXQgYSBzZXF1ZW5jZSBvZiByYW5kb20gbm9uLXJlcGVhdGluZyBpdGVtcyB3aWxsIGJlIHBpY2tlZC4gSWYgeW91IHdhbnQgdG9cbiAgICAgKiAqcGljayBpdGVtcyBpbiBhIHJhbmRvbSBvcmRlciogZnJvbSBhbiBhcnJheSwgaW5zdGVhZCBvZiAqcGljayBvbmUgcmFuZG9tIGl0ZW0gZnJvbSBhbiBhcnJheSosIGl0J3MgYmVzdCB0b1xuICAgICAqIGFwcGx5IGEgKnNodWZmbGUqIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBhcnJheSBpbnN0ZWFkLCB0aGVuIHJlYWQgaXQgbGluZWFybHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJyYXkgLSBBcnJheSBvZiBhbnkgdHlwZSBjb250YWluaW5nIG9uZSBvciBtb3JlIGNhbmRpZGF0ZXMgZm9yIHJhbmRvbSBwaWNraW5nLlxuICAgICAqIEByZXR1cm4gQW4gaXRlbSBmcm9tIHRoZSBhcnJheS5cbiAgICAgKi9cbiAgICBQcmFuZG8ucHJvdG90eXBlLm5leHRBcnJheUl0ZW0gPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICByZXR1cm4gYXJyYXlbdGhpcy5uZXh0SW50KDAsIGFycmF5Lmxlbmd0aCAtIDEpXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHBzZXVkby1yYW5kb20gYm9vbGVhbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSB2YWx1ZSBvZiB0cnVlIG9yIGZhbHNlLlxuICAgICAqL1xuICAgIFByYW5kby5wcm90b3R5cGUubmV4dEJvb2xlYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlID4gMC41O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2tpcHMgYWhlYWQgaW4gdGhlIHNlcXVlbmNlIG9mIG51bWJlcnMgdGhhdCBhcmUgYmVpbmcgZ2VuZXJhdGVkLiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgKiBjYWxsaW5nIG5leHQoKSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMsIGJ1dCBmYXN0ZXIgc2luY2UgaXQgZG9lc24ndCBuZWVkIHRvIG1hcCB0aGVcbiAgICAgKiBuZXcgcmFuZG9tIG51bWJlcnMgdG8gYSByYW5nZSBhbmQgcmV0dXJuIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZXJhdGlvbnMgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNraXAgYWhlYWQuXG4gICAgICovXG4gICAgUHJhbmRvLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24gKGl0ZXJhdGlvbnMpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPT09IHZvaWQgMCkgeyBpdGVyYXRpb25zID0gMTsgfVxuICAgICAgICB3aGlsZSAoaXRlcmF0aW9ucy0tID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcHNldWRvLXJhbmRvbSBudW1iZXIgc2VxdWVuY2UgYmFjayB0byBpdHMgc3RhcnRpbmcgc2VlZC4gRnVydGhlciBjYWxscyB0byBuZXh0KClcbiAgICAgKiB3aWxsIHRoZW4gcHJvZHVjZSB0aGUgc2FtZSBzZXF1ZW5jZSBvZiBudW1iZXJzIGl0IGhhZCBwcm9kdWNlZCBiZWZvcmUuIFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAqIGNyZWF0aW5nIGEgbmV3IFByYW5kbyBpbnN0YW5jZSB3aXRoIHRoZSBzYW1lIHNlZWQgYXMgYW5vdGhlciBQcmFuZG8gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqIGxldCBybmcgPSBuZXcgUHJhbmRvKDEyMzQ1Njc4KTtcbiAgICAgKiBjb25zb2xlLmxvZyhybmcubmV4dCgpKTsgLy8gMC42MTc3NzU0MTE0ODg5MDE3XG4gICAgICogY29uc29sZS5sb2cocm5nLm5leHQoKSk7IC8vIDAuNTc4NDYwNTE4MTcyNTgzN1xuICAgICAqIHJuZy5yZXNldCgpO1xuICAgICAqIGNvbnNvbGUubG9nKHJuZy5uZXh0KCkpOyAvLyAwLjYxNzc3NTQxMTQ4ODkwMTcgYWdhaW5cbiAgICAgKiBjb25zb2xlLmxvZyhybmcubmV4dCgpKTsgLy8gMC41Nzg0NjA1MTgxNzI1ODM3IGFnYWluXG4gICAgICovXG4gICAgUHJhbmRvLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9zZWVkO1xuICAgIH07XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFBSSVZBVEUgSU5URVJGQUNFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBQcmFuZG8ucHJvdG90eXBlLnJlY2FsY3VsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBYb3JzaGlmdCozMlxuICAgICAgICAvLyBCYXNlZCBvbiBHZW9yZ2UgTWFyc2FnbGlhJ3Mgd29yazogaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcbiAgICAgICAgdGhpcy5fdmFsdWUgXj0gdGhpcy5fdmFsdWUgPDwgMTM7XG4gICAgICAgIHRoaXMuX3ZhbHVlIF49IHRoaXMuX3ZhbHVlID4+IDE3O1xuICAgICAgICB0aGlzLl92YWx1ZSBePSB0aGlzLl92YWx1ZSA8PCA1O1xuICAgIH07XG4gICAgUHJhbmRvLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAodmFsLCBtaW5Gcm9tLCBtYXhGcm9tLCBtaW5UbywgbWF4VG8pIHtcbiAgICAgICAgcmV0dXJuICgodmFsIC0gbWluRnJvbSkgLyAobWF4RnJvbSAtIG1pbkZyb20pKSAqIChtYXhUbyAtIG1pblRvKSArIG1pblRvO1xuICAgIH07XG4gICAgUHJhbmRvLnByb3RvdHlwZS5oYXNoQ29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIGhhc2ggPSAwO1xuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGhhc2ggfD0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICB9O1xuICAgIFByYW5kby5NSU4gPSAtMjE0NzQ4MzY0ODsgLy8gSW50MzIgbWluXG4gICAgUHJhbmRvLk1BWCA9IDIxNDc0ODM2NDc7IC8vIEludDMyIG1heFxuICAgIHJldHVybiBQcmFuZG87XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBQcmFuZG87XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QcmFuZG8uZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9