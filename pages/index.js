import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = ({ articles }) => {
  console.log(articles);
  return (
    <Layout title={'Home'}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Articles
          </h1>

          <div className={styles.grid}>
            {articles.map((article) => (
              <Link href="" className={styles.card} key={article.id}>
                <a className={styles.card}>
                  <h3>{ article.title }</h3>
                  <p>{ article.description }</p>
                </a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles`)
  const articles = await res.json()

  console.log(articles);
  if (!articles) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      articles,
    },
  }
}