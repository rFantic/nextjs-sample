import { useRouter } from 'next/router'
import CodingResources from '../../components/CodingResources/CodingResources';


// if we navigate to localhost:3000/blog/123...
export default function Resources() {
  const router = useRouter()
  return (
    <CodingResources />
  );
}

// Api samples.
// [{"id":1,"description":"South Florida's Best Meetups on Youtube","url":"https://www.youtube.com/bocajs","types":["tutorial"],"topics":["js","html"],"levels":["beginner","intermediate","advanced"]}]