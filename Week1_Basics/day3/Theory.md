# 📘 Day 3 – Time & Space Complexity (Theory)

---

## ⏱ Time Complexity

### ✅ What is Time Complexity?
Time complexity is a way to represent the amount of time an algorithm takes to run based on the size of the input `n`.
It doesn't tell you the **exact** time (in seconds or ms), but it shows how **fast** the time grows as input increases.

---

### ❓ Why Time Complexity ≠ Actual Time Taken?
- Actual time depends on your hardware, compiler, system load, etc.
- Time complexity is a mathematical way to describe performance **independent** of those variables.

---

### 🔺 Growth Rate with Input:
We measure the **rate** at which time increases as input grows.

Examples:
- O(1) → Constant time (no matter the input size)
- O(n) → Linear time
- O(n²) → Quadratic time
- O(log n) → Logarithmic time
- O(n log n) → Linearithmic
- O(2ⁿ) → Exponential time

---

## 🔢 Big-O, Theta, and Omega Notations

### 🅾️ Big-O (O):
Represents the **upper bound** → worst-case scenario  
> "At most, how long will it take?"

### 🔶 Theta (θ):
Represents the **tight bound** → average case  
> "Typically, how long does it take?"

### 🟢 Omega (Ω):
Represents the **lower bound** → best-case scenario  
> "At least, how fast can it run?"

---

### 📊 Case Analysis:
| Case          | Symbol | Meaning                   |
|---------------|--------|---------------------------|
| Worst Case    | O      | Maximum time taken        |
| Best Case     | Ω      | Minimum time taken        |
| Average Case  | θ      | Typical time taken        |

---

## 🚫 Ignore Constants & Lower Terms

We care about the **asymptotic behavior** — how it behaves when input size becomes very large.

Examples:
- O(2n) → O(n)
- O(n + log n) → O(n)

---

## 🔁 Common Time Complexities in Code

### ➕ Linear (O(n))
```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

### ❎ Quadratic (O(n²))
```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

### 🔄 Logarithmic (O(log n))
```js
for (let i = 1; i < n; i *= 2) {
  console.log(i);
}
```

### 🔁 Linearithmic (O(n log n))
```js
for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j *= 2) {
    console.log(i, j);
  }
}
```

### ⚡ Exponential (O(2ⁿ))
```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

### ➕ Linear (O(n))
```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```



# 📘 Space Complexity (Theory)

---

## 💾 What is Space Complexity?

Space complexity is the total amount of **extra memory** (RAM) that an algorithm needs to run, relative to the size of the input.

It includes:
- Temporary variables
- Function call stack (especially with recursion)
- Auxiliary data structures (arrays, objects, etc.)
- Input duplication (if any)

---

## 🧠 Key Concepts:

### ✅ Input size (n):
The number of elements being processed. We typically express space complexity in terms of `n`.

### ✅ Output storage is **not** included.
Only count the memory your code uses **in addition** to the input.

---

## 🔢 Space Complexity Examples:

### 📌 O(1) – Constant Space:
```js
function sum(arr) {
  let total = 0; // constant space
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

---

### 📌 O(n) – Linear Space:
```js
function doubleArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
```

---

### 📌 O(n²) – Quadratic Space:
```js
function createMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}
```

---

## 🔁 Recursive Call Stack Space:

### 📌 O(n) – Recursive Example:
```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

---

## ❗ Important Rule:

> **Never reduce space complexity by manipulating the input.**

### ❌ Bad Practice:
```js
// modifies the original input
function reverseInPlace(arr) {
  return arr.reverse();
}
```

### ✅ Good Practice:
```js
// creates a new array
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
```

> Always preserve input integrity unless explicitly told otherwise.

---

## 🔥 Quick Reference:

| Space Complexity | Example Use Case                        |
|------------------|------------------------------------------|
| O(1)             | Simple iteration with no extra storage   |
| O(n)             | Arrays, stacks, hash maps                |
| O(n²)            | 2D matrices, dynamic programming tables  |
| O(log n)         | Recursive divide & conquer with tail call optimization |

---

## 🧩 Pro Tip:
- Space is more precious than time in memory-constrained systems (like embedded devices).
- In competitive programming, optimizing for space can lead to **accepted vs TLE/MLE** decisions.