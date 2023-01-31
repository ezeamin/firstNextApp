const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error();  

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
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

const CommentsPage = async (props) => {
  const {
    params: { id },
  } = props;

  const comments = await fetchComments(id);

  return (
    <article
      style={{
        background: '#444',
        borderRadius: '1rem',
        padding: '0.5rem 1rem ',
        marginTop: '1rem',
      }}
    >
      <h1 style={{ marginTop: '0.5rem' }}>Comentarios</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} style={{ fontSize: '10px' }}>
            <h2>{comment.name}</h2>
            <small>{comment.body}</small>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CommentsPage;
