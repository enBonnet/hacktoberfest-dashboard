export default function Title() {
  return (
    <>
      <div className="title">
        Feliz{" "}
        <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a>{" "}
        2020!
      </div>
      <style jsx>
        {`
          .title {
            text-align: center;
            padding: 8px 0;
            color: #000;
          }
        `}
      </style>
    </>
  );
}
