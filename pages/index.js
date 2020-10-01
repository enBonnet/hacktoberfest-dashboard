import Head from "next/head";
import Users from "../components/users";
import Title from "../components/title";
import userFormat from "../data/userFormat";

export default function Home() {
  const usersData = userFormat();
  const boxSizes = "100px";

  return (
    <div className="container">
      <Head>
        <title>Hacktoberfest 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <Users usersData={usersData} boxSizes={boxSizes} />

      <style jsx>{`
        .container {
          min-height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
