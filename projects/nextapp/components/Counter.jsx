"use client";

import { useState } from 'react';
import { BiSolidBeer } from 'react-icons/bi';
import { RiBeerFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image'; // Importa il componente Image di Next.js
import styles from '../styles/counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [beerIcons, setBeerIcons] = useState(Array(30).fill(<BiSolidBeer />));

  const incrementCounter = () => {
    if (count < 30) {
      const newIcons = [...beerIcons];
      newIcons[count] = <RiBeerFill className={styles.filledIcon} />;
      setBeerIcons(newIcons);
      setCount(count + 1);
    } else {
      setBeerIcons(Array(30).fill(<BiSolidBeer />));
      setCount(0);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.title}>Maratona della Birra</h1>
      <Image src="/birretta.webp" alt="Birretta felice" width={100} height={100} className={styles.smilingBeerMug} />
      <div className={styles.beerIcons}>
        {beerIcons.map((icon, index) => (
          <span key={index} className={styles.beerIcon}>
            {icon}
          </span>
        ))}
      </div>
      <p className={styles.count}>{count}</p>
      <button onClick={incrementCounter} className={styles.button}>
        {count < 30 ? 'Alla salute!' : 'Ricominciamo'}
      </button>
      <Link href="/" className={styles.linkButton}>Vai alla TodoList</Link>
    </div>
  );
}
