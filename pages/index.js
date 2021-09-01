import ContentGrid from "../components/ContentGrid";

const Home = ({data}) => {

  console.log(data);

  return (
    <main className="py-8">
      {/* Title Area */}
      <section className="pb-8">
        <div className="container">
          <h1 className="text-5xl text-center">Olympics</h1>
        </div>
      </section>

      {/* Content Grid Layout */}
      <section id="contentGrid">
        <div className="container">
          {/* Import component */}
          <ContentGrid data={data} />
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps(context) {
  // Use Fetch API to get data from backend API
  const res = await fetch(`http://localhost:8080`)
  const data = await res.json()

  if (!data) {
    return {
      notFount: true
    }
  }

  return {
    props: {
      data
    }
  }
}

export default Home;