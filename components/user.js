export default function User({ username, color, boxSizes }) {
  return (
    <>
      <div data-testid={username} className="user" key={username}>
        <span className="username">{username}</span>
      </div>
      <style jsx>{`
        .user {
          background-color: #${color}};
          content: " ";
          min-height: ${boxSizes};
        }
        .username {
          visibility: hidden;
        }
      `}</style>
    </>
  );
}
