import Sidebar from '../../components/Sidebar/Sidebar';
import CodingResources from '../../components/CodingResources/CodingResources';
import styles from '../../styles/Resources.module.css'
import '../../styles/global.css';
import Head from 'next/head';

// if we navigate to localhost:3000/blog/123...
export default function Resources() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Resources</title>
      </Head>
      <Sidebar />
      <CodingResources />
    </div>
  );
}

// Api samples.
// [{"id":1,"description":"South Florida's Best Meetups on Youtube","url":"https://www.youtube.com/bocajs","types":["tutorial"],"topics":["js","html"],"levels":["beginner","intermediate","advanced"]}]