import { ClientOnlyPortal } from 'src/common'
import { useModal } from 'src/resources/hooks'

import * as S from './modal.styles'

function Modal({ infos: { number, subtitle, showMore } }) {
  const { modalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>

      <ClientOnlyPortal selector="modal">
        <S.Overlay className={modalOpen ? 'open' : ''} onClick={handleCloseModal} />

        <S.Modal className={modalOpen ? 'open' : ''}>
          <S.Number>{number}</S.Number>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.Description>{showMore}</S.Description>
          <S.Button onClick={handleCloseModal}>Ok</S.Button>
          <S.CloseMenu onClick={handleCloseModal} />
        </S.Modal>
      </ClientOnlyPortal>
    </>
  )
}

export default Modal
