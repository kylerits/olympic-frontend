import Image from 'next/image'
import Slider from 'react-slick'

const Content = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    adaptiveHeight: true,
    className: 'max-w-xl mx-auto relative'
  }

  return (
    <div className="content py-8">
      {/* Slider */}
      <div className="slider-wrap pb-8">
        <Slider {...settings}>
          {data.colors.length > 0 ? data.colors.map((color, index) => (
            <div key={`slide-${index}`} className="slider-item">
              <div className="relative slider-item-inner text-center">
                <Image
                  src={color.uri}
                  alt={color.name}
                  width={300}
                  height={300}
                  className="inline-block"
                  loading="lazy"
                />
              </div>
            </div>
          )) : null}
        </Slider>
      </div>
      {/* Title */}
      <div className="title pb-8">
        <h2 className="text-center text-3xl font-semibold">{data.name}</h2>
        <p className="text-sm text-gray-500 text-center">{data.size} kb</p>
      </div>
      {/* Download */}
      <div className="download-button-wrap text-center">
        <a 
          href={data.downloadUri} 
          className="download-button inline-flex items-center border-2 border-yellow-600 hover:bg-yellow-600 duration-200 hover:text-yellow-50 rounded-md px-5 py-2 font-semibold" 
          download
        >
          <span className="inline-block mr-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14.25L12 4.75"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.75 10.75L12 14.25L15.25 10.75"></path>
            </svg>
          </span>
          <span className="inline-block pr-4">Download</span>
        </a>
      </div>
    </div>
  );
}

export default Content;