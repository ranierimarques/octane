export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        stroke="url(#paint0_linear_3034_5907)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3034_5907"
          x1="3"
          y1="12"
          x2="21"
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
