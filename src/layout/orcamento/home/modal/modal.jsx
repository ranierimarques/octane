import { forwardRef, useImperativeHandle } from 'react'

import { ClientOnlyPortal, FormButton } from '@/common'
import { useModal } from '@/hooks'
import { SuccessfulModal } from '@/shared'
import { InformationsModal } from '..'

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

      {/* <SuccessfulModal /> */}

      {/* <InformationsModal /> */}

      <S.Modal className={isModalOpen ? 'open' : ''}>
        <S.Title>Deseja verificar as informações preenchidas antes de enviar?</S.Title>
        <S.Warning>
          Ao clicar em Enviar formulário, você confirma que leu e reconhece os{' '}
          <S.Link
            href="https://octane-xi.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Termos de Serviço
          </S.Link>{' '}
          e o{' '}
          <S.Link
            href="https://octane-xi.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Aviso de privacidade
          </S.Link>
          .
        </S.Warning>

        <S.Buttons>
          <FormButton variant="text">Verificar informações</FormButton>
          <FormButton>Enviar formulário</FormButton>
        </S.Buttons>

        <S.CloseMenu onClick={handleCloseModal} />
      </S.Modal>
    </ClientOnlyPortal>
  )
}

export default forwardRef(Modal)
