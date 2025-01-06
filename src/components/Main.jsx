import React from 'react'

export default function Main(props) {
  const {data} = props
  console.log(data)
  return (
    <div className='mediaContainer'>
  {data?.url?.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
    <img src={data?.url} alt={data?.title || 'Image'} className='bgImage' />
  ) : (
    <iframe
      src={data?.url}
      title={data?.title || 'Video'}
      className='bgVideo'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )}
</div>
  )
}
