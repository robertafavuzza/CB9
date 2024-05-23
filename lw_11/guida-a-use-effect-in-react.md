## Guida a `useEffect` in React

### Cos'è `useEffect`?

`useEffect` è un Hook introdotto in React 16.8 che permette di eseguire effetti
collaterali nelle funzioni componenti. Gli effetti collaterali possono essere
operazioni come il fetching dei dati, la modifica del DOM, la sottoscrizione a
servizi, e altro ancora. `useEffect` sostituisce i metodi del ciclo di vita dei
componenti delle classi come `componentDidMount`, `componentDidUpdate` e
`componentWillUnmount`.

### Sintassi di base

La sintassi di base di `useEffect` è la seguente:

```javascript
useEffect(() => {
  // Codice dell'effetto
})
```

### Esecuzione di `useEffect`

Per impostazione predefinita, `useEffect` viene eseguito dopo ogni render del
componente. Tuttavia, è possibile controllare quando l'effetto viene eseguito
utilizzando un array di dipendenze.

### Array di Dipendenze

L'array di dipendenze è il secondo argomento passato a `useEffect`. Controlla
quando l'effetto deve essere eseguito:

- **Effetto senza dipendenze**: Eseguito ad ogni render.

  ```javascript
  useEffect(() => {
    // Effetto eseguito ad ogni render
  })
  ```

- **Effetto con array vuoto**: Eseguito solo una volta, al mount del componente.

  ```javascript
  useEffect(() => {
    // Effetto eseguito solo al mount
  }, [])
  ```

- **Effetto con dipendenze specifiche**: Eseguito solo quando una delle
  dipendenze cambia.

  ```javascript
  useEffect(() => {
    // Effetto eseguito solo quando "someValue" cambia
  }, [someValue])
  ```

### Cleanup degli Effetti

Alcuni effetti richiedono una pulizia per evitare memory leaks, ad esempio la
rimozione di event listeners o la cancellazione di timers. `useEffect` permette
di definire una funzione di cleanup che verrà eseguita al momento del dismount
del componente o prima che l'effetto venga rieseguito:

```javascript
useEffect(() => {
  // Codice dell'effetto

  return () => {
    // Codice di cleanup
  }
}, [someValue]) // Cleanup eseguito quando "someValue" cambia o al dismount
```

### Esempi Pratici

#### Fetching dei Dati

Esempio di un componente che esegue il fetching dei dati al mount:

```javascript
import React, { useEffect, useState } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []) // Effetto eseguito solo al mount

  if (!data) return <div>Loading...</div>

  return <div>{JSON.stringify(data)}</div>
}
```

#### Event Listener

Esempio di un componente che aggiunge un event listener al mount e lo rimuove al
dismount:

```javascript
import React, { useEffect } from 'react'

function WindowSize() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized:', window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup al dismount
    }
  }, []) // Effetto eseguito solo al mount

  return <div>Resize the window and check the console</div>
}
```

#### Dipendenze

Esempio di un effetto che viene rieseguito quando una dipendenza cambia:

```javascript
import React, { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}` // Aggiorna il titolo della pagina ogni volta che "count" cambia
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

### Conclusione

`useEffect` è uno strumento potente per gestire effetti collaterali nei
componenti funzionali di React. Comprendere come e quando utilizzare
`useEffect`, insieme alla gestione delle dipendenze e del cleanup, è
fondamentale per scrivere componenti React efficienti e privi di bug.

Per ulteriori dettagli, puoi consultare la
[documentazione ufficiale di React](https://reactjs.org/docs/hooks-effect.html).
