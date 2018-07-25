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
 * Implementation of insertion sort algorithm for sorting items in ascending order.
 * The insertion sort algorithm, with a time complexity (big-o) of n^2 builds the sorted array one item (list) at a time.
 * Insertion sort is useful for sorting elements in a list that is almost sorted. For highly unsorted lists, its performance 
 * is almost similar to bubble sort
 * @param {Object} options
 * @param {Array} options.elements 
 * @param {Function} [options.comparisonFunc = comparisonFunction] - function for comparing 2 entries of elements. 
 * The function receives elem1, elem2 as arguments and should return 0 if elem1 = elem2, 1 if elem1 > elem2 and -1 if elem1 < elem2
 * @return {Array} the sorted array of elements
 */
function insertionSort (elements, comparisonFunc = comparisonFunction) {
  for (let i = 1, len = elements.length; i < len; ++i) {
    for (let j = 0; j < i; ++j) {
      const isLessThanNextElem = comparisonFunc(elements[i], elements[j]) === -1

      if (isLessThanNextElem) {
        const spliced = elements.splice(i, 1)
        elements.splice(j, 0, spliced[0])
        break
      }
    }
  }

  return elements
}

module.exports = insertionSort