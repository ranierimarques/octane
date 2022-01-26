import { useState } from 'react'
import { ClientOnlyPortal } from 'src/common'

import * as S from './modal.styles'

function Modal({ infos: { number, subtitle, showMore } }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    document.body.style.overflowY = 'hidden'
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    document.body.style.overflowY = 'overlay'
    setModalOpen(false)
  }

  return (
    <>
      <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>

      <ClientOnlyPortal selector="modal">
        <S.Wrapper isOpen={modalOpen}>
          <S.Overlay onClick={handleCloseModal} />

          <S.Modal>
            <S.Number>{number}</S.Number>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.Description>{showMore}</S.Description>
            <S.Button onClick={handleCloseModal}>Ok</S.Button>
            <S.CloseMenu onClick={handleCloseModal} />
          </S.Modal>
        </S.Wrapper>
      </ClientOnlyPortal>
    </>
  )
}

export default Modal
