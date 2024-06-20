import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Contact Us</h1>
      <p>Hai domande? Non farcele grazie!</p>
      <p>Email: info@moviedatabase.com</p>
      <p>Phone: +39 000 000 000</p>
      <p>Address: Palermo</p>
    </div>
  );
};

export default Contacts;
