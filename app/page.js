import Image from 'next/image';
import bgd from '../public/images/Background.jpg';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1>Hello Cyberpunk</h1>
      <div className={styles.bgWrap}>
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}
