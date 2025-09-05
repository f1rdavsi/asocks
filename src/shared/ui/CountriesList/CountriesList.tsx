import React, { useState, useMemo, useEffect } from 'react'
import { mockCountries } from '@shared/api/mock-data'
import type { Country } from './type'
import './CountriesList.scss'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const CountriesList: React.FC = () => {
  const [search, setSearch] = useState('')
  const [activeLetters, setActiveLetters] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // имитация загрузки
    return () => clearTimeout(timer)
  }, [])

  const toggleLetter = (letter: string) => {
    setActiveLetters(prev =>
      prev.includes(letter) ? prev.filter(l => l !== letter) : [...prev, letter]
    )
  }

  // Фильтрация стран по поиску и выбранным буквам
  const filteredCountries = useMemo(() => {
    let result = mockCountries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )

    if (activeLetters.length > 0) {
      result = result.filter(country =>
        activeLetters.some(letter =>
          country.name.toUpperCase().startsWith(letter)
        )
      )
    }

    return result
  }, [search, activeLetters])

  // Группировка по первой букве после фильтрации
  const groupedCountries = useMemo(() => {
    const map: Record<string, Country[]> = {}

    filteredCountries.forEach(country => {
      const letter = country.name.charAt(0).toUpperCase()
      if (!map[letter]) map[letter] = []
      map[letter].push(country)
    })

    return Object.keys(map)
      .sort()
      .map(letter => ({
        letter,
        countries: map[letter].sort((a, b) => a.name.localeCompare(b.name)),
      }))
  }, [filteredCountries])

  return (
    <div className="countries container">
      <h2 className="countries__title">All locations</h2>

      <div className="countries__search">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="countries__alphabet">
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => toggleLetter(letter)}
            className={`countries__letter ${
              activeLetters.includes(letter) ? 'active' : ''
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="countries__list">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="countries__letter-group__item countries__skeleton"
                >
                  <div className="skeleton-flag" />
                  <div className="skeleton-info">
                    <div className="skeleton-text" />
                    <div className="skeleton-ips" />
                  </div>
                </div>
              ))
          : groupedCountries.map(group => (
              <div key={group.letter} className="countries__letter-group">
                <div className="countries__letter-group__title">{group.letter}</div>
                <div className="countries__letter-group__row">
                  {group.countries.map(country => (
                    <div
                      key={country.name}
                      className="countries__letter-group__item"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="countries__letter-group__flag"
                      />
                      <div className="countries__letter-group__info">
                        <span className="countries__letter-group__name">
                          {country.name}
                        </span>
                        <span className="countries__letter-group__ips">
                          {country.ips.toLocaleString()} IPs
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
