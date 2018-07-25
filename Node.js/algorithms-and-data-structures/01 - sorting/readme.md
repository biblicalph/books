# IMPLEMENTATION OF POPULAR SORTING ALGORITHMS

This section provides implementation of popular sorting algorithms in order of efficiency (time complexity)

## Bubble Sort Algorithm
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order

### Big O of Bubble Sort
Bubble sort has a [big-o](http://bigocheatsheet.com/) of `O(n^2)`. That is, even for a sorted list, it loops over all the elements twice

### Pseudocode
1. Loop over the elements
2. Compare the element in position `i` with the element in position `i+1`
3. Swap element in position `i` with element in position `i+1` if element in `i` is less than element in `i+1`
4. If a swap was made during step 1 to 3, repeat step 1 to 3
5. Else, sorting is done

### Example
Sort (5, 1, 4, 2, 8) using bubble sort:

```
First pass or loop
Swap 5 and 1. Result: 1, 5, 4, 2, 8
Swap 5 and 4. Result: 1, 4, 5, 2, 8
Swap 5 and 2. Result: 1, 4, 2, 5, 8
No swap between 5 and 8. Result: 1, 4, 2, 5, 8

Second pass or loop (because swaps were made)
No swap between 1 and 4. Result: 1, 4, 2, 5, 8
Swap 4 and 2. Result: 1, 2, 4, 5, 8
No swap between 4 and 5. Result: 1, 2, 4, 5, 8
No swap between 5 and 8. Result: 1, 2, 4, 5, 8

Third pass or loop (because swap was made)
No swap between 1 and 4. Result: 1, 4, 2, 5, 8
No swap between 2 and 4. Result: 1, 2, 4, 5, 8
No swap between 4 and 5. Result: 1, 2, 4, 5, 8
No swap between 5 and 8. Result: 1, 2, 4, 5, 8

Sorting done because no swap was made
```

See [bubble sort](./01-bubble-sort.js) for a working implementation in Javascript

## Insertion Sort Algorithm
Insertion sort is a sorting algorithm that builds the final sorted list one item at a time.
That is, it sorts each `kth` element in the list into its correct position in the list represented by the `k-1` entries.

### Big-O of Insertion Sort
It has a [time complexity](http://bigocheatsheet.com/) of `O(n^2)`. That is, it needs to iterate over elements of the list at least twice 
in the worst case scenario.

### Pseudocode
1. Loop over elements starting with the second element. 
   Note: The first element is assumed to be already sorted
2. Sort the element at position `k` in step 1 above into its correct position in the list of `k-1` elements as follows:
   a. Loop over the elements in the list of `k-1` items
   b. Compare element at position `i` in in step `a` above with element at `k` in step 2. If element at `k` is less than `element 
   at position `i`, insert element at position `k` before element at position `i`
3. List is sorted

### Example
Sort (5, 1, 4, 2, 8) using insertion sort:

```
1. Compare 1 with items before it.
   a. Insert 1 before 5. Result: 1, 5, 4, 2, 8
2. Compare 4 with items before it (1, 5)
   a. Compare 1 and 4. 4 is greater than 1
   b. Compare 5 and 4. 5 is greater than 4. 
   c. Insert 4 before 5. Result: 1, 4, 5, 2, 8
3. Compare 2 with items before it (1, 4, 5)
   a. 2 is greater than 1.
   b. 2 is less than 4. 
   c. Insert 2 before 4. Result: 1, 2, 4, 5, 8
4. Compare 8 with items before it (1, 2, 4, 5)
   a. 8 is greater than 1
   b. 8 is greater than 2
   c. 8 is greater than 4
   d. 8 is greater than 5
   c. Insert 8 after 5. Result: 1, 2, 4, 5, 8
```

See [insertion sort](./02-insertion-sort.js) for a working implementation in Javascript