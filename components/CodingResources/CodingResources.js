import styles from "../../styles/CodingResources.module.css"

const API_URL = 'https://api.sampleapis.com/codingresources/codingResources';

// if we navigate to localhost:3000/blog/123...
export default function CodingResourses({codingResources}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>codingResources</h1>
      <ul className={styles.list}>
        {codingResources.map((reso) => (
          <li key={reso.id} className={styles.item}>
            <h2 className={styles.subtitle}>{reso.description}</h2>
            <p className={styles.url}>{reso.url}</p>
            <p className={styles.types}>
              <strong>Types:</strong> {reso.types.join(", ")}
            </p>
            <p className={styles.topics}>
              <strong>Topics:</strong> {reso.topics.join(", ")}
            </p>
            <p className={styles.levels}>
              <strong>Levels:</strong> {reso.levels.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

[{"id":1,"description":"South Florida's Best Meetups on Youtube","url":"https://www.youtube.com/bocajs","types":["tutorial"],"topics":["js","html"],"levels":["beginner","intermediate","advanced"]}]