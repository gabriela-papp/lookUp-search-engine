import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    getResults('/search/q=Australia+Queensland')
  }, [])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg dark:text-blue-300 text-blue-700 hover:underline">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return 'SEARCH'
    case '/news':
      return 'SEARCH'
    case '/videos':
      return 'SEARCH'
    default:
      return 'ERROR'
  }
}
