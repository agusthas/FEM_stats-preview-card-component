import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}></div>
      <div className={styles.card__body}>
        <h2 className={styles.card__title}>
          Get <span className={styles.strong}>insights</span> that help your
          business grow.
        </h2>
        <p className={styles.card__description}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <ul className={styles.card__lists}>
          <li className={styles.card__list}>
            <div className={styles.list__number}>10k+</div>
            <div className={styles.list__text}>COMPANIES</div>
          </li>
          <li className={styles.card__list}>
            <div className={styles.list__number}>314</div>
            <div className={styles.list__text}>TEMPLATES</div>
          </li>
          <li className={styles.card__list}>
            <div className={styles.list__number}>12M+</div>
            <div className={styles.list__text}>QUERIES</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
