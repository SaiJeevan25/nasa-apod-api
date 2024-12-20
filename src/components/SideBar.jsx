import React from 'react'

export default function SideBar(props) {

	const { data, handleToggleBar } = props;

  return (
	<div className='sideBar'>
		<div onClick={handleToggleBar} className='bgOverlay'></div>
		<div className='sideBarContents'>
			<h2>{data?.title}</h2>
			<p>{data?.date}</p>
			<div className='descriptionContainer'>
				<p className='descriptionTitle'>Description</p>
				<p>{data?.explanation}</p>
			</div>
			<div className='copyRightContainer'>
				<i class="fa-regular fa-copyright"></i>
				<p>{data?.copyright}</p>
			</div>
			<button onClick={handleToggleBar}>
				<i class="fa-solid fa-right-long"></i>
			</button>
		</div>
	</div>
  )
}
