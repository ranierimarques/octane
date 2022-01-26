import { AnimatePresence } from 'framer-motion'

import { ClientOnlyPortal } from 'src/common'
import { useModal } from 'src/resources/hooks'

import * as S from './modal.styles'

function Modal({ infos: { icon, title, showMore } }) {
  const { modalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>

      <ClientOnlyPortal selector="modal">
        <AnimatePresence>
          {modalOpen && (
            <S.Wrapper isOpen={modalOpen}>
              <S.Overlay
                onClick={handleCloseModal}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
              />

              <S.Modal
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <S.Header>
                  {icon}
                  <S.Title>{title}</S.Title>
                </S.Header>
                <S.Description>{showMore}</S.Description>
                <S.Button onClick={handleCloseModal}>Ok</S.Button>
                <S.CloseMenu onClick={handleCloseModal} />
              </S.Modal>
            </S.Wrapper>
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </>
  )
}

export default Modal
