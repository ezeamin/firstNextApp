// Usar () para carpetas crea un "grupo" que se ignora como ruta
// Pueden compartir el mismo layout

const PostsLayout = ({ children }) => {
  return (
    <div>
      <marquee style={{ backgroundColor: '#ccc', color: 'blue' }}>
        Soy el mejor
      </marquee>
      {children}
    </div>
  );
};

export default PostsLayout;
