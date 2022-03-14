export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-4v4m0 4h.01"
        stroke="#B00020"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
