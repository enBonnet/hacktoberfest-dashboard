export default function User({ username, color, boxSizes }) {
  return (
    <>
      <div className="user" key={username}></div>
      <style jsx>{`
        .user {
          background-color: #${color}};
          content: " ";
          min-height: ${boxSizes};
        }
      `}</style>
    </>
  );
}
