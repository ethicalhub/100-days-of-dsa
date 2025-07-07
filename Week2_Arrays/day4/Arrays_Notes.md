
# 📒 Arrays_Notes.md

## 📚 What is an Array?

An **array** is a linear data structure used to store a collection of elements. These elements are stored in **contiguous memory locations** and can be accessed via their **index**. Arrays can hold values of any type in JavaScript (numbers, strings, objects, etc.), and unlike lower-level languages like C/C++, arrays in JavaScript are **dynamic** (they can grow or shrink in size).

```js
const arr = [10, 20, 30];
console.log(arr[1]); // Output: 20
```

---

## 🔍 Key Characteristics

- **Contiguous Memory**: Elements are stored next to each other in memory.
- **Fixed Size vs Dynamic**:
  - In languages like C, arrays are fixed-size and require manual memory management.
  - In JavaScript, arrays are dynamic and can resize automatically.
- **Indexed Access**: You can access elements using their numeric index (starting from 0).
- **Can hold mixed data types**, but ideally, keep it consistent.

---

## ⚙️ Common Array Methods in JavaScript

| Method         | Description                                      | Time Complexity |
|----------------|--------------------------------------------------|------------------|
| `push()`       | Add item at the end                              | O(1)             |
| `pop()`        | Remove item from the end                         | O(1)             |
| `unshift()`    | Add item at the beginning                        | O(n)             |
| `shift()`      | Remove item from the beginning                   | O(n)             |
| `includes()`   | Check if item exists                             | O(n)             |
| `indexOf()`    | Return the index of first occurrence             | O(n)             |
| `slice(start, end)` | Returns a shallow copy (non-mutating)     | O(k)             |
| `splice(start, deleteCount, ...items)` | Remove/insert (mutates) | O(n)             |

---

## 🧠 Learning Notes

- Arrays are objects in JavaScript.
- The length property dynamically updates as elements are added or removed.
- Always be cautious with mutating methods (`splice`, `push`, `pop`, etc.)
- Prefer **non-mutating methods** (`slice`, `concat`, `map`) when immutability is important.
- Array indexing and length are zero-based.
- Be mindful of performance when inserting or deleting at the start/middle of large arrays.

---

## 📌 Time Complexity Quick Reference

| Operation                     | Time Complexity |
|------------------------------|------------------|
| Access by index              | O(1)             |
| Search (includes, indexOf)   | O(n)             |
| Insert at end (push)         | O(1)             |
| Remove from end (pop)        | O(1)             |
| Insert/remove at beginning   | O(n)             |
| Insert/remove at middle      | O(n)             |

---

## ❓ Common Interview Questions

> **Beginner Level**
- What is an array? How is it different from an object?
- How do you find the index of an element in an array?
- How can you remove an element from an array?

> **Intermediate Level**
- What's the difference between `slice()` and `splice()`?
- How does JavaScript handle array resizing internally?
- How would you remove all occurrences of a given element from an array?

> **Advanced Level**
- Implement a custom version of `Array.prototype.map()`
- What’s the time complexity of JavaScript array methods?
- How would you insert a new element at a given position in an array without using built-in methods?

---

## 💻 Code Snippet Examples

```js
// Remove all occurrences of a number
function removeAll(arr, target) {
  return arr.filter(item => item !== target);
}

// Insert at specific index without splice
function insertAt(arr, index, value) {
  return [...arr.slice(0, index), value, ...arr.slice(index)];
}
```

---

## ✅ Key Takeaways

- Arrays are fundamental for many DSA problems.
- Knowing when to use mutating vs non-mutating methods is important.
- Time complexity helps in choosing the most efficient operations.
- Interviewers love to test array manipulation and traversal skills.

---

Stay consistent with practice — mastering arrays is a major step toward cracking DSA! 💪