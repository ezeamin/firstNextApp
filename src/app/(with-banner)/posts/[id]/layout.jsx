import Link from 'next/link';

const fetchPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // Otra opcion para datos dinamicos
      // "Incremental Static Regeneration"
      next: {
        revalidate: 60,
      },
    }
  );
  return await response.json();
};

const Post = async (props) => {
  const {
    params: { id },
    children,
  } = props;

  const post = await fetchPost(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
};

export default Post;
