import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ClientOnlyPortal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.getElementById(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}
