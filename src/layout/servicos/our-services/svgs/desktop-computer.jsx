export default function Svg({ ...props }) {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.75 25 17 28l-1 1h8l-1-1-.75-3M11 21h18m-16 4h14a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        stroke="url(#paint0_linear_3034_5906)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x=".5"
        y=".5"
        width="39"
        height="39"
        rx="19.5"
        stroke="url(#paint1_linear_3034_5906)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3034_5906"
          x1="11"
          y1="20"
          x2="29"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5343" />
          <stop offset="1" stopColor="#FF8175" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3034_5906"
          x1="0"
          y1="20"
          x2="40"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5343" />
          <stop offset="1" stopColor="#FF8175" />
        </linearGradient>
      </defs>
    </svg>
  )
}
