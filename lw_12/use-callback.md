### Guida a `useCallback` in React

#### Cos'è `useCallback`?

`useCallback` è un hook fornito da React che viene utilizzato per memorizzare (o
"memorizzare in cache") le funzioni tra i render. Viene spesso usato per
ottimizzare le prestazioni, evitando che funzioni definite inline vengano
ricreate ad ogni render, a meno che le dipendenze specificate non cambino.

#### Sintassi

```jsx
const memoizedCallback = useCallback(() => {
  // funzione da memorizzare
}, [dipendenze])
```

- **Funzione da memorizzare**: La funzione che vuoi memorizzare.
- **Dipendenze**: Un array di dipendenze. La funzione verrà ricreata solo se una
  delle dipendenze cambia.

#### Quando usare `useCallback`?

`useCallback` è utile principalmente nei seguenti scenari:

1. **Passare callback ai componenti figli**: Quando passi una funzione a un
   componente figlio, può causare un nuovo render del componente figlio se la
   funzione viene ricreata ad ogni render del genitore.
2. **Ottimizzare componenti memorizzati**: Se un componente è memorizzato
   utilizzando `React.memo`, il componente non si renderizzerà di nuovo a meno
   che le sue props cambino. `useCallback` può aiutare a garantire che le props
   non cambino inutilmente.

#### Esempio di utilizzo di `useCallback`

Supponiamo di avere un componente che accetta una callback come prop.
Utilizzeremo `useCallback` per memorizzare la funzione e prevenire render non
necessari.

```jsx
import React, { useState, useCallback } from 'react'

const Button = React.memo(({ onClick }) => {
  console.log('Button render')
  return <button onClick={onClick}>Click me</button>
})

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  )
}

export default App
```

In questo esempio:

- La componente `Button` viene memorizzata con `React.memo`, quindi si
  renderizzerà solo se la prop `onClick` cambia.
- `handleClick` è memorizzato con `useCallback`, quindi la funzione non verrà
  ricreata ad ogni render di `App`.

#### Differenza tra `useCallback` e `useMemo`

- **`useCallback`**: Memorizza una funzione.
- **`useMemo`**: Memorizza il risultato di una funzione.

Esempio di `useMemo`:

```jsx
import React, { useState, useMemo } from 'react'

const ExpensiveCalculation = ({ num }) => {
  const calculate = useMemo(() => {
    console.log('Calculating...')
    return num * 2
  }, [num])

  return <div>{calculate}</div>
}

const App = () => {
  const [number, setNumber] = useState(1)

  return (
    <div>
      <ExpensiveCalculation num={number} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  )
}

export default App
```

In questo esempio, `calculate` verrà ricalcolato solo se `num` cambia, grazie a
`useMemo`.

#### Considerazioni finali

- **Performance**: `useCallback` può migliorare le performance, ma usarlo
  indiscriminatamente può avere l'effetto opposto. Usalo solo quando è realmente
  necessario.
- **Dipendenze**: Assicurati di includere tutte le dipendenze necessarie
  nell'array delle dipendenze. Se non lo fai, potresti introdurre bug difficili
  da debuggare.
