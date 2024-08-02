"use client";

import { useState } from 'react';
import CardForm from '../components/CardForm/CardForm';
import CreditCard from '../components/CreditCard/CreditCard';
import styles from './page.module.css';

export default function HomePage() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CreditCard cardDetails={cardDetails} />
      </div>
      <div className={styles.right}>
        <CardForm onUpdate={setCardDetails} />
      </div>
    </div>
  );
}
