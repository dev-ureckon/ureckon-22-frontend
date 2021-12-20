import { useState } from 'react'

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const resetValue = () => {
    setValue('')
  }
  return [value, handleChange, resetValue]
}

export { useInputState }
