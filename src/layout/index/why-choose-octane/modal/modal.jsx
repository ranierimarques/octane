import { useState } from 'react'

import * as S from './modal.styles'

function Modal({ infos: icon, title, showMore }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>

      <S.Wrapper isOpen={modalOpen}>
        <S.Overlay onClick={handleCloseModal} />

        <S.Modal></S.Modal>
      </S.Wrapper>
    </>
  )
}

export default Modal
