import { forwardRef, useImperativeHandle } from 'react'

import { ClientOnlyPortal } from 'src/common'
import { useModal } from 'src/resources/hooks'

import * as S from './modal.styles'

function Modal({ infos: { number, subtitle, showMore } }, ref) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  useImperativeHandle(ref, () => {
    return {
      openModal: handleOpenModal,
    }
  })

  return (
    <ClientOnlyPortal selector="modal">
      <S.Overlay className={isModalOpen ? 'open' : ''} onClick={handleCloseModal} />

      <S.Modal className={isModalOpen ? 'open' : ''}>
        <S.Number>{number}</S.Number>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{showMore}</S.Description>
        <S.Button onClick={handleCloseModal}>Ok</S.Button>
        <S.CloseMenu onClick={handleCloseModal} />
      </S.Modal>
    </ClientOnlyPortal>
  )
}

export default forwardRef(Modal)
