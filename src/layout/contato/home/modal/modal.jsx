import { forwardRef, useImperativeHandle } from 'react'

import { ClientOnlyPortal } from 'src/common'
import { useModal } from 'src/resources/hooks'
import { SuccessfulModal } from 'src/shared'

import * as S from './modal.styles'

function Modal(_, ref) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  useImperativeHandle(ref, () => {
    return {
      openModal: handleOpenModal,
    }
  })

  return (
    <ClientOnlyPortal selector="modal">
      <S.Overlay className={isModalOpen ? 'open' : ''} onClick={handleCloseModal} />

      <SuccessfulModal isModalOpen={isModalOpen} onCloseModal={handleCloseModal} />
    </ClientOnlyPortal>
  )
}

export default forwardRef(Modal)
