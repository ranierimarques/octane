export default function Svg({ ...props }) {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m18 28 4-16m4 4 4 4-4 4m-12 0-4-4 4-4"
        stroke="url(#paint0_linear_3034_5913)"
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
        stroke="url(#paint1_linear_3034_5913)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3034_5913"
          x1="10"
          y1="20"
          x2="30"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5343" />
          <stop offset="1" stopColor="#FF8175" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3034_5913"
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
