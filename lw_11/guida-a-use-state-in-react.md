## Guida a `useState` in React

### Cos'è `useState`?

`useState` è un Hook introdotto in React 16.8 che permette di aggiungere uno
stato ai componenti funzionali. Prima dell'introduzione degli Hooks, solo i
componenti a classi potevano gestire lo stato. Con `useState`, i componenti
funzionali possono mantenere e aggiornare uno stato interno in modo semplice e
conciso.

### Sintassi di base

La sintassi di base di `useState` è la seguente:

```javascript
const [state, setState] = useState(initialState)
```

- `state` è la variabile di stato corrente.
- `setState` è una funzione che permette di aggiornare lo stato.
- `initialState` è il valore iniziale dello stato.

### Esempio di utilizzo

Ecco un esempio di un semplice contatore che utilizza `useState` per gestire lo
stato del contatore:

```javascript
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0) // Stato iniziale a 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
```

### Inizializzazione dello stato

L'inizializzazione dello stato può essere fatta con qualsiasi tipo di valore:
numeri, stringhe, booleani, array, oggetti o funzioni. Vediamo alcuni esempi:

#### Stato con valore numerico

```javascript
const [count, setCount] = useState(0)
```

#### Stato con stringa

```javascript
const [name, setName] = useState('John')
```

#### Stato con booleano

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false)
```

#### Stato con array

```javascript
const [items, setItems] = useState([])
```

#### Stato con oggetto

```javascript
const [user, setUser] = useState({ name: '', age: 0 })
```

### Funzioni di aggiornamento dello stato

La funzione di aggiornamento dello stato (`setState`) può essere utilizzata in
diversi modi:

#### Aggiornamento diretto

```javascript
setCount(count + 1)
```

#### Aggiornamento basato sul valore precedente

Se il nuovo stato dipende dal valore precedente, è preferibile usare una
funzione:

```javascript
setCount((prevCount) => prevCount + 1)
```

Questo è utile per evitare problemi di sincronia quando si aggiorna lo stato più
volte in rapida successione.

### Uso avanzato

#### Funzione di inizializzazione

Se l'inizializzazione dello stato è costosa, puoi passare una funzione a
`useState`. Questa funzione verrà eseguita solo al primo render:

```javascript
const [count, setCount] = useState(() => {
  const initialCount = someExpensiveComputation()
  return initialCount
})
```

#### Gestione dello stato complesso

Per gestire uno stato complesso, come un oggetto con più proprietà, è possibile
aggiornare solo le proprietà necessarie usando lo spread operator:

```javascript
const [user, setUser] = useState({ name: '', age: 0 })

const updateName = (newName) => {
  setUser((prevUser) => ({
    ...prevUser,
    name: newName,
  }))
}

const updateAge = (newAge) => {
  setUser((prevUser) => ({
    ...prevUser,
    age: newAge,
  }))
}
```

### Esempi pratici

#### Gestione di una lista

```javascript
import React, { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
```

#### Modulo di login

```javascript
import React, { useState } from 'react'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logica di autenticazione
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
```

### Conclusione

`useState` è uno degli Hook più fondamentali e usati in React. Permette di
aggiungere e gestire lo stato nei componenti funzionali in modo semplice ed
efficace. Comprendere come utilizzare `useState` ti permetterà di costruire
componenti React più dinamici e interattivi.

Per ulteriori dettagli, puoi consultare la
[documentazione ufficiale di React](https://reactjs.org/docs/hooks-state.html).
