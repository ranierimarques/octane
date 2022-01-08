export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
        stroke="url(#paint0_linear_3034_5914)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3034_5914"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5343" />
          <stop offset="1" stopColor="#FF8175" />
        </linearGradient>
      </defs>
    </svg>
  )
}
