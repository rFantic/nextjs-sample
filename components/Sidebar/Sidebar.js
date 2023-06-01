import Link from 'next/link';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
    return (
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <div>Resources</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;