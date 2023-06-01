import { useRouter } from 'next/router'
import Sidebar from '../../components/Sidebar/Sidebar';
import CodingResources from '../../components/CodingResources/CodingResources';
import styles from '../../styles/Resources.module.css'

// if we navigate to localhost:3000/blog/123...
export default function Resources() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Sidebar />
      <CodingResources />
    </div>
  );
}

// Api samples.
// [{"id":1,"description":"South Florida's Best Meetups on Youtube","url":"https://www.youtube.com/bocajs","types":["tutorial"],"topics":["js","html"],"levels":["beginner","intermediate","advanced"]}]