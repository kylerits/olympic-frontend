import axios from 'axios';
import {useState, useEffect} from 'react'
import ContentGrid from "../components/ContentGrid";
import Content from '../components/Content';
import Head from 'next/head'

const Home = ({data}) => {

  const [showDrawer, setShowDrawer] = useState(false)
  const [currentSlug, setCurrentSlug] = useState(data[0].slug)
  const [currentData, setCurrentData] = useState({})

  const openDrawer = () => {
    setShowDrawer(true)
  }

  const closeDrawer = () => {
    setShowDrawer(false)
  }

  const getSlug = (slug) => {
    setCurrentSlug(slug)
    console.log(currentSlug)
    openDrawer()
  }

  useEffect(async () => {
    if(currentSlug !== '') {
      const response = await axios.get(`http://localhost:8080/${currentSlug}`)
      setCurrentData(response.data)
    }
  }, [currentSlug])

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
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
            <div className="flex">
              {/* Grid component */}
              <div className="grid-wrap w-full">
                <ContentGrid data={data} getSlug={getSlug} />
              </div>
              {/* Drawer Component */}
              <div 
                className="drawer-wrap flex-shrink-0 duration-300" 
                style={{
                  width: showDrawer ? '500px' : '0',
                }}
              >
                <div className="sticky top-0 w-full overflow-hidden">
                  {/* Close Drawer button area */}
                  <div className="close-drawer-wrap text-right">
                    <button 
                      className="close-button inline-block" 
                      aria-label="Close Drawer"
                      onClick={closeDrawer}
                    ><span className="inline-block">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L6.75 17.25"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75L17.25 17.25"></path>
                      </svg>
                    </span></button>
                  </div>
                  {/* Drawer Content */}
                  <div className="drawer-content px-8">
                    { currentSlug.length > 0 ? (
                      <div className="content-wrap">
                        {Object.keys(currentData).length > 0 ? (
                          <div className="content-wrap">
                            <Content data={currentData} />
                          </div>
                        ) : (
                          <p className="text-center">Loading...</p>
                        )}
                      </div>
                    ) : null }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
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