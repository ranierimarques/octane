import { useState } from 'react'

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    document.body.style.overflowY = 'hidden'
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    document.body.style.overflowY = 'overlay'
    setModalOpen(false)
  }

  return { modalOpen, handleOpenModal, handleCloseModal }
}

export default useModal
