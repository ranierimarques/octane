export default function Svg({ ...props }) {
  return (
    <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 12.5h14m-18-6h18m-10 12h10"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
