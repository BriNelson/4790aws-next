import Head from "next/head";
import {ResponsiveAppBar} from "../../components/appBar";

function HomePage(props) {
  return (
    <div>
      <Head><title>movie app</title></Head>
      <main>
        <ResponsiveAppBar/>
        <h1>Movie app</h1>
</main>

    </div>
  );
}

export default HomePage;
