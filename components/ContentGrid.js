import {useState} from 'react'
import Image from 'next/image'

const ContentGrid = ({data, getSlug}) => {
  const [columnCount, setColumnCount] = useState(5)

  return (
    <>
      {/* Slider Function */}
      <div className="slidecontainer">
        <input 
          type="range" 
          min="2" 
          max="7" 
          value={columnCount}  
          className="slider" 
          id="myRange" 
          onChange={(e) => setColumnCount(parseInt(e.target.value))}
        />
      </div>
      {/* Grid Layout */}
      <div 
        className="content-grid grid gap-8" 
        style={{ 
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="content-grid__item" aria-label={item.name}>
            <div className="pseudo-square w-full h-0 relative pt-[100%]">
              <div className="absolute inset-0">
                <button
                  className="content__item relative w-full h-full border-2 hover:border-yellow-600 duration-200"
                  onClick={() => {
                    console.log('Open ' + item.name);
                    getSlug(item.slug);
                  }}
                >
                  {/* Image Wrap */}
                  <div className="relative w-full h-full p-5 flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%]">
                      <Image 
                        src={item.uri}
                        alt={item.name}
                        layout="fill"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Title Wrap */}
                  <p className="show-on-hover absolute bottom-0 inset-x-0 text-gray-500 text-sm p-1 text-center">{item.name}</p>
                  <div className="show-on-hover absolute inset-x-0 top-0 p-1 flex items-center justify-between">
                    {/* Size Wrap */}
                    <p className="text-gray-500 text-xs">{item.size} kb</p>
                    {/* Icon Wrap */}
                    <div className="text-gray-500 text-xs">
                      <span className="inline-block w-4 h-auto">
                        <svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V12.25"></path>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"></path>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14.75V19.25"></path>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17L14.75 17"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentGrid;