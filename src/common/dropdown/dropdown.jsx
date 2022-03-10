import { useState, useRef } from 'react'

import { useForm } from '@/contexts'

import * as S from './dropdown.styles'

function Dropdown({ disabled, id, children, options }) {
  const { handleChangeData, state } = useForm()
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)
  const optionsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState('')

  function dropdownClose(event) {
    document.removeEventListener('click', dropdownClose, true)
    document.removeEventListener('scroll', handleResize)

    const ref = dropdownRef.current
    const clickedOnDropdown = ref.contains(event.target)

    if (clickedOnDropdown) {
      inputRef.current.blur()
      event.stopPropagation()
    }

    setIsVisible(false)
  }

  function handleResize() {
    const optionsHeight = optionsRef.current.clientHeight
    const dropdownDomRect = dropdownRef.current.getBoundingClientRect()

    const marginBottom = dropdownDomRect.bottom + optionsHeight
    const marginTop = dropdownDomRect.top - optionsHeight

    const hasSpaceTop = marginTop > 84
    const hasSpaceBottom = window.innerHeight - marginBottom >= 0

    if (!hasSpaceBottom && hasSpaceTop) {
      setPosition('top')
      return
    }

    if (!hasSpaceTop && hasSpaceBottom) {
      setPosition('')
      return
    }
  }

  function handleDropdownOpen() {
    setIsVisible(true)
    handleResize()

    document.addEventListener('scroll', handleResize)
    document.addEventListener('click', dropdownClose, true)
  }

  function handleDropdownChange(event) {
    const optionText = event.target.textContent

    if (optionText === state.data[id]) {
      handleChangeData('', id)
      return
    }

    handleChangeData(optionText, id)
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
          value={state.data[id]}
          readOnly
        />
        <S.Label>{children}</S.Label>
        <S.ArrowDropDown />
        <S.BottomLine />
      </S.Div>

      <S.Options ref={optionsRef} isVisible={isVisible} className={position}>
        {options.map(option => (
          <S.Option
            key={option}
            onClick={handleDropdownChange}
            className={state.data[id] === option ? 'active' : ''}
          >
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Wrapper>
  )
}

export default Dropdown
