# 🚀 React Counter App

## 📌 Description

A simple React app that displays a counter and allows users to **increase** or **decrease** the value using buttons. Built using **useState** and functional components.

---

## ✨ Features

* 🔢 Shows live counter value
* ➕ Increment button
* ➖ Decrement button
* ⚡ Instant UI updates with React state

---

## 🧠 Concepts Used

* React Functional Components
* `useState` Hook
* Event Handling

---

## 🧩 Code

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Counter;
```

---

## ▶️ Run the Project

```bash
npm install
npm start
```

