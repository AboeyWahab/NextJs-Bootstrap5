import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Layout>
    <Jumbotron />
    <div className="row g-5">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>
        <Article />
        <Pagination />
      </div>
      <Sidebar />
    </div>
    </Layout>
  )
}
