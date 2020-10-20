export default function User({ username, color, boxSizes }) {
  return (
    <>
      <a
        href={`https://github.com/${username}`}
        data-testid={username}
        className="user"
        key={username}
        title={`@${username}`}
      >
        <span className="username">{username}</span>
      </a>
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
