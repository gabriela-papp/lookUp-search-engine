import React, { useContext, createContext, useState } from 'react'

const ResultContext = createContext()
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${baseURL}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'b9a7e73397msh978d4b617a4ff92p13c79ejsn03bd956de277',
      },
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext)
