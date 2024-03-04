import React from 'react'
import styles from './Filters.module.scss'
import filters from './filters.json'

interface Option {
  label: string
  id: number
}

interface FiltersProps {
  filter: number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: FiltersProps) {
  function selectFilter(option: Option) {
    if (filter === option.id) return setFilter(null)
    return setFilter(option.id)
  }

  return (
    <div className={styles.filter}>
      {filters.map(option => (
        <button
          className={`${styles.btn} ${
            filter === option.id ? styles.active : ''
          }`}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
