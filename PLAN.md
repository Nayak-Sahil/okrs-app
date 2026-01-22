# React Training Demo: Why React?

## Objective
Demonstrate why React exists by comparing a vanilla HTML/CSS/JS todo app with a React version, highlighting **efficient DOM updates** using react-scan.

## Project Structure

```
interns-training-2026/
├── PLAN.md
├── vanilla-todo/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── react-todo/
    ├── package.json
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        └── components/
            └── TodoItem.jsx
```

## The Problem We're Solving

### Vanilla JS Approach
- When state changes, we manually re-render the **entire list**
- Every DOM element gets destroyed and recreated
- Inefficient and causes visual flicker with large lists
- Hard to track what actually changed

### React Approach
- React's Virtual DOM diffs changes
- Only updates the **specific DOM nodes** that changed
- Smooth, efficient updates
- react-scan visually shows exactly what re-renders

## Demo Flow

1. **Start with Vanilla JS app**
   - Add several todos
   - Toggle one todo - notice the entire list flashes/re-renders
   - Open DevTools → Performance tab to show DOM operations

2. **Switch to React app with react-scan**
   - Add several todos
   - Toggle one todo - react-scan highlights only that item
   - Visual proof of efficient updates

## Key Teaching Points

| Aspect | Vanilla JS | React |
|--------|-----------|-------|
| DOM Updates | Re-render everything | Update only changed nodes |
| State Management | Manual tracking | Declarative with useState |
| Code Organization | All in one file | Component-based |
| Debugging | console.log everywhere | React DevTools + react-scan |

## Running the Projects

### Vanilla Todo
```bash
cd vanilla-todo
# Open index.html in browser (or use Live Server)
```

### React Todo
```bash
cd react-todo
npm install
npm run dev
# react-scan is already integrated
```

## What to Watch For

1. In vanilla app: Open DevTools → Elements tab, watch DOM nodes get replaced
2. In React app: react-scan overlay shows green highlights on re-rendered components
3. Toggle a todo in both - compare the visual feedback
