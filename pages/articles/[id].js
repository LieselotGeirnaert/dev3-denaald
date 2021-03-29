import Layout from '../../components/Layout';

const Article = ({ article }) => {
  console.log(article);
  return (
    <Layout>
      <main>
        <h2>{ article.title }</h2>
        <p>{ article.description }</p>
      </main>
    </Layout>
  )
}

export default Article;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles`)
  const articles = await res.json()

  const paths = articles.map((article) => ({
    params: { id: "" + article.id },
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles`)
  const articles = await res.json()
  const article = articles[params - 1]

  return {
    props: {
      article
    },
  }
}

