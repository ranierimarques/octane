import { useState, useRef } from 'react'

import * as S from './dropdown.styles'

function Dropdown({ disabled, id, children, options }) {
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('')

  function dropdownClose(event) {
    document.removeEventListener('click', dropdownClose, true)

    const ref = dropdownRef.current
    const clickedOnDropdown = ref.contains(event.target)

    if (clickedOnDropdown) {
      inputRef.current.blur()
      event.stopPropagation()
    }

    setIsVisible(false)
  }

  function handleDropdownOpen() {
    setIsVisible(true)

    document.addEventListener('click', dropdownClose, true)
  }

  function handleDropdownChange(event) {
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
          className={isVisible ? 'focus' : ''}
          value={dropdownValue}
          readOnly
        />
        <S.Label>{children}</S.Label>
        <S.ArrowDropDown />
        <S.BottomLine />
      </S.Div>

      <S.Options isVisible={isVisible}>
        {options.map(option => (
          <S.Option
            key={option}
            onClick={handleDropdownChange}
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
