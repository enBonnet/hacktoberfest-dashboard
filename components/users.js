import User from "./user";

export default function Users({ usersData, boxSizes }) {
  return (
    <>
      <div className="users">
        {usersData.map(({ username, color }) => (
          <User username={username} color={color} boxSizes={boxSizes} />
        ))}
      </div>
      <style jsx>{`
        .users {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(${boxSizes}, 1fr));
        }
      `}</style>
    </>
  );
}
