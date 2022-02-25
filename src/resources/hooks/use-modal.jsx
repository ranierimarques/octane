import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    document.body.style.overflowY = 'hidden'
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    document.body.style.overflowY = 'overlay'
    setIsModalOpen(false)
  }

  return { isModalOpen, handleOpenModal, handleCloseModal }
}

export default useModal
