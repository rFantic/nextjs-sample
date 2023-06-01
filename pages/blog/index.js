import { useRouter } from 'next/router'

export const getStaticProps = async () => {
  const resp = await fetch('https://api.sampleapis.com/codingresources/codingResources');
  const data = await resp.json();

  return {
    props: { codingResources: data }
  }
}

// if we navigate to localhost:3000/blog/123...
export default function BlogPost() {
  const router = useRouter()
  return (
    <pre>
      {JSON.stringify(codingResources, null, 2)}
    </pre>
  )
}