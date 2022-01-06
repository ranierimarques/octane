export default function Svg({ ...props }) {
  return (
    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.338.338c.284-.284.696-.4 1.087-.306L21.5 4.878c.437.106.773.455.861.896l1.658 8.288a1.154 1.154 0 0 1 1.488.122l4.154 4.154c.45.45.45 1.181 0 1.632l-9.692 9.692c-.45.45-1.181.45-1.632 0l-4.154-4.154a1.154 1.154 0 0 1-.122-1.488l-8.288-1.658a1.154 1.154 0 0 1-.896-.86L.032 1.424C-.062 1.034.054.622.338.338Zm15.667 21.717 6.05-6.05-1.811-9.056L4.87 3.238l6.91 6.91a3.923 3.923 0 1 1-1.632 1.632l-6.91-6.91 3.71 15.374 9.057 1.811Zm-3.549-9.565a1.615 1.615 0 1 0 2.318 2.25 1.615 1.615 0 0 0-2.318-2.25Zm4.176 12.202 2.522 2.522 8.06-8.06-2.522-2.522-8.06 8.06Z"
        fill="#fff"
      />
    </svg>
  )
}