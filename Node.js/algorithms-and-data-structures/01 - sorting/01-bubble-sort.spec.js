'use strict'

const sort = require('./01-bubble-sort')

describe('Bubble Sort Spec', () => {
  describe('Sorting Primitives', () => {
    it('should sort elements in ascending order of magnitude', () => {
      const arrToSort = [5, 7, 6, 4]
      const sorted = [4, 5, 6, 7]

      expect(sort(arrToSort)).toEqual(sorted)
    })
  })

  describe('Sorting Non-Primitives', () => {
    let comparisonFunc

    beforeAll(() => {
      comparisonFunc = (elem1, elem2) => {
        const elemOneName = elem1.name.toLowerCase()
        const elemTwoName = elem2.name.toLowerCase()

        if (elemOneName === elemTwoName) return 0

        return elemOneName < elemTwoName ? -1 : 1
      }
    })

    it('should sort objects using custom comparison function', () => {
      const arrToSort = [{name: 'Nana Adane'}, {name: 'Tettey Phillip'}, {name: 'Ian Jazzi'}, {name: 'obeng william'}]
      const sorted = [{name: 'Ian Jazzi'}, {name: 'Nana Adane'}, {name: 'obeng william'}, {name: 'Tettey Phillip'}]

      expect(sort(arrToSort, comparisonFunc)).toEqual(sorted)
    })
  })
})