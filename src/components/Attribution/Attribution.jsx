import React from 'react';
import styles from './Attribution.module.css';

const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io/?ref=challenge">Frontend Mentor</a>
      . Coded by <a href="https://github.com/agusthas">SuzuMantan &#x1F389;</a>.
    </div>
  );
};

export default Attribution;
