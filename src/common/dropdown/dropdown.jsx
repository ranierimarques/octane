import { useForm } from '@/contexts'
import { useRef, useState } from 'react'
import * as S from './dropdown.styles'

const NAVBAR_HEIGHT = 84

function Dropdown({ disabled, id, children, options }) {
  const { handleChangeData, state } = useForm()
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)
  const optionsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState('')

  function dropdownClose(event) {
    window.removeEventListener('resize', handleResize)
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

    const spaceTop = marginTop - NAVBAR_HEIGHT
    const spaceBottom = window.innerHeight - marginBottom

    const hasSpaceTop = spaceTop >= 0
    const hasSpaceBottom = spaceBottom >= 0

    if (hasSpaceBottom) {
      setPosition('')
      return
    }

    if (hasSpaceTop) {
      setPosition('top')
      return
    }

    if (spaceBottom >= spaceTop) {
      setPosition('')
      return
    }

    setPosition('top')
  }

  function handleDropdownOpen() {
    setIsVisible(true)
    handleResize()

    window.addEventListener('resize', handleResize)
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
