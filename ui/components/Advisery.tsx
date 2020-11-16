import React from 'react'
import styled from 'styled-components'
import AdviseryItem from './AdviseryItem'


interface Props {
  className?: string 
}

let Advisery: React.FC<Props> = ({ className }) => {
  
  const avdiseryItems: any[] = [
    {
      title: "Advise 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      inverted: true
    },
    {
      title: "Advise 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      inverted: false
    },
    {
      title: "Advise 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      inverted: true
    },
  ]
  return (
    <div className={className}>
      <h2>Advisery</h2>
      <div className="items">
        {
          avdiseryItems.map((item, idx) => (
            <AdviseryItem
              title={item.title}
              key={idx}
              description={item.description}
              inverted={item.inverted}
            />
          ))
        }
      </div>
    </div>
  )
}


Advisery = styled(Advisery)`
  grid-area: advisery;
  height: 420px;

  & h2{
    font-size: 36px;
    font-weight: bold;
    line-height: 150%;
    padding: .25rem 0;
  }

  .items{
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }

`

export default  Advisery