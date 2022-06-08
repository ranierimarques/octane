import * as S from './successful-modal.styles'
import { SuccessCheck } from './svgs'

function SuccessfulModal({ isModalOpen, onCloseModal }) {
  return (
    <S.Modal className={isModalOpen ? 'open' : ''}>
      <SuccessCheck />
      <S.Title>Sucesso</S.Title>
      <S.Description>Sua mensagem foi enviada!</S.Description>

      <S.Button onClick={onCloseModal}>OK</S.Button>
    </S.Modal>
  )
}

export default SuccessfulModal
