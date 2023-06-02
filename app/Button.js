import Link from 'next/link';

const Button = () => {
  return (
    <button
      className={styles.generateButton}
      style={{ backgroundColor: color }}
    >
      {' '}
      Generate
    </button>
  );
};
