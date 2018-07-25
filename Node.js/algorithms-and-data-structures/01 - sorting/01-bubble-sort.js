'use strict'

/**
 * 
 * @param {*} elem1
 * @param {*} elem2 
 * @return {Number} -1 if elem1 < elem2, 1 if elem1 > elem2, 0 otherwise
 */
function comparisonFunction (elem1, elem2) {
  if (elem1 === elem2) {
    return 0
  }

  return elem1 < elem2 ? -1 : 1
}

/**
 * Implementation of bubble sort algorithm for sorting items in ascending order.
 * The bubble sort algorithm, with a time complexity (big-o) of n^2 compares adjacent entries and swaps them if the first element is 
 * greater than the second element
 * @param {Object} options
 * @param {Array} options.elements 
 * @param {Function} [options.comparisonFunc = comparisonFunction] - function for comparing 2 entries of elements. 
 * The function receives elem1, elem2 as arguments and should return 0 if elem1 = elem2, 1 if elem1 > elem2 and -1 if elem1 < elem2
 * @return {Array} the sorted array of elements
 */
function bubbleSort (elements, comparisonFunc = comparisonFunction) {
  let hasSwappedElems = false
  let arrLen = elements.length

  do {
    hasSwappedElems = false

    for (let i = 0; i < arrLen - 1; ++i) {
      const nextElemInd = i + 1
      const firstIsGreaterThanSecond = comparisonFunc(elements[i], elements[nextElemInd]) === 1

      if (firstIsGreaterThanSecond) {
        const tempElem = elements[nextElemInd]
        elements[nextElemInd] = elements[i]
        elements[i] = tempElem

        hasSwappedElems = true
      }
    }
  } while (hasSwappedElems)

  return elements
}

module.exports = bubbleSort