import { useState, useRef } from 'react'

import * as S from './dropdown.styles'

function Dropdown({ config }) {
  const { disabled, id, label, options } = config
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('')

  function handleDropdownOpen() {
    setIsVisible(true)

    inputRef.current.classList.add('focus')

    document.addEventListener('click', dropdownClose, true)
  }

  function dropdownClose(event) {
    document.removeEventListener('click', dropdownClose, true)
    inputRef.current.classList.remove('focus')

    const ref = dropdownRef.current
    const clickedOnDropdown = ref.contains(event.target)

    if (clickedOnDropdown) {
      inputRef.current.blur()
      event.stopPropagation()
    }

    setIsVisible(false)
  }

  function handleDropdownValueChange(event) {
    const optionText = event.target.innerText

    if (optionText === dropdownValue) {
      setDropdownValue('')
      return
    }

    setDropdownValue(optionText)
  }

  return (
    <S.Wrapper>
      <S.Div onClick={handleDropdownOpen} ref={dropdownRef}>
        <S.Input
          id={id}
          type="text"
          placeholder=" "
          disabled={disabled}
          ref={inputRef}
          value={dropdownValue}
          readOnly
        />
        <S.Label>{label}</S.Label>
        <S.ArrowDropDown />
        <S.BottomLine />
      </S.Div>

      <S.Options isVisible={isVisible}>
        {options.map(option => (
          <S.Option
            key={option}
            onClick={handleDropdownValueChange}
            className={dropdownValue === option ? 'active' : ''}
          >
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default Dropdown
