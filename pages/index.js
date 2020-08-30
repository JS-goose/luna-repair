import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from '../components/Image/image';

export default function Home() {
  return (
    <article>
      <h1 className="text-5xl">Welcome to Luna Repair System!</h1>
      <div>
        <Image path={`landingPageBG.jpg`} />
      </div>
    </article>
  );
}
