import Link from 'next/link';
import LikeButton from './LikeButton';

const fetchPosts = async () => {
  //   no-store indica que, cuando se buildee la pagina, no tiene que "descargar" estos datos sino mantener el fetch
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  return await response.json();
};

const ListOfPosts = async () => {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      {/* Vieja manera */}
      {/* <Link href='/posts/[id]' as={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  ));
};

export default ListOfPosts;
