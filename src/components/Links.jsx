import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: 'All' },
  { url: '/news', text: 'News' },
  { url: '/images', text: 'Images' },
  { url: '/videos', text: 'Videos' },
]

export const Links = () => {
  return (
    <div className="flex justify-between items-center mt-4 sm:justify-around">
      <NavLink to="/search" className="p-1">
        All
      </NavLink>
      <NavLink to="/news" className="p-1">
        News
      </NavLink>
      <NavLink to="/images" className="p-1">
        Images
      </NavLink>
      <NavLink to="videos" className="p-1">
        Videos
      </NavLink>
    </div>
  )
}
