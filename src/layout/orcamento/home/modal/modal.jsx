import { forwardRef, useImperativeHandle } from 'react'

import { ClientOnlyPortal, FormControl } from 'src/common'
import { useModal } from 'src/resources/hooks'

import * as S from './modal.styles'

const configs = {
  1: {
    element: 'button',
    text: 'Verificar informações',
    variant: 'text',
  },
  2: {
    element: 'button',
    text: 'Enviar formulário',
  },
}

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
          <FormControl config={configs[1]} />
          <FormControl config={configs[2]} />
        </S.Buttons>

        <S.CloseMenu onClick={handleCloseModal} />
      </S.Modal>
    </ClientOnlyPortal>
  )
}

export default forwardRef(Modal)
