import Sidebar from '../components/Sidebar/Sidebar';
import CodingResources from '../components/CodingResources/CodingResources';
import styles from '../styles/Resources.module.css'
import '../styles/global.css';
import Head from 'next/head';

async function getData() {
  const res = await fetch('https://api.sampleapis.com/codingresources/codingResources');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}


// if we navigate to localhost:3000/blog/123...
export default async function Resources() {

  const data = await getData();
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Resources</title>
      </Head>
      <Sidebar />
      <CodingResources codingResources={data}/>
    </div>
  );
}

// Api samples.
// [{"id":1,"description":"South Florida's Best Meetups on Youtube","url":"https://www.youtube.com/bocajs","types":["tutorial"],"topics":["js","html"],"levels":["beginner","intermediate","advanced"]}]