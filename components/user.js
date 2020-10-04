export default function User({ username, color, boxSizes }) {
  return (
    <>
      <div data-testid={username} className="user" key={username}>
        <span className="username">{username}</span>
      </div>
      <style jsx>{`
        .user {
          background: linear-gradient(#${color} 100%, #${color} 100%),
            url("https://avatars.githubusercontent.com/${username}") 50% 50%
              no-repeat;
          background-size: 90px 90px;
          background-blend-mode: color;
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
