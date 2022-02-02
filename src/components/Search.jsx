import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { Links } from './Links'
import { useResultContext } from '../contexts/ResultContextProvider'

const Search = () => {
  const [text, setText] = useState('england')
  const { setSearchTerm } = useResultContext()
  const [debounceValue] = useDebounce(text, 300)

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="w-80 h-10 dark:bg-gray-200 rounded-full border p-6 outline-none text-black hover:shadow-lg"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-xl text-gray-500"
          onClick={() => setText(' ')}
        >
          x
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search
