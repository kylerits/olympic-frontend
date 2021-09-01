import {useState} from 'react'

const ContentGrid = ({data}) => {
  const [columnCount, setColumnCount] = useState(5)

  return (
    <div 
      className="content-grid grid gap-8" 
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {data.map((item, index) => (
        <div key={index} className="content-grid__item">{item.name}</div>
      ))}
    </div>
  );
}
 
export default ContentGrid;