export default function Svg({ ...props }) {
  return (
    <svg width="59" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M59 6.5 49 .726v11.547L59 6.5Zm-59 1h50v-2H0v2Z"
        fill="url(#stretched-arrow1)"
      />
      <defs>
        <linearGradient
          id="stretched-arrow1"
          x1="0"
          y1="6.5"
          x2="59"
          y2="6.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1E1E6" stopOpacity="0" />
          <stop offset="1" stopColor="#726A6A" />
        </linearGradient>
      </defs>
    </svg>
  )
}
