import css from 'styled-jsx/css'

export default css.global`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/inter-var-latin.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
    border: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    line-height: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  ::selection {
    background: rgba(225, 46, 14, 0.2);
  }

  body {
    background: #121212;
    overflow-x: hidden;

    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4dJREFUWEftV11Ik2EUfsxw2pqmGEUrkIGKaA69mLobRVH5mLsQohAyNEQQB6EJIyINwzJsiHNF/sMuupAQgkAxHE7CInQYrhuVFNOEb22i68e52eLIN1ljc1MneuELh43x7jvP85znnPf9QnDEK+SI8+PYASBAFE4uDl0gdwVOAQhdXl5+LhQK7wDYAmA/bCDuAE4DiDCZTPXr6+s3Njc365OSkl4DsAFwHBYQTwCROp3uWnh4+NOEhAQ+y7IflpaW6gsKCj4B2ORUCWpZ3AGEAjhXVlZ2ta2tbSgqKorX0tIChUJhN5vNmubm5mcajcbMleVvsFC4A6DvUQAuWyyW8dzcXMHU1BRSU1OhUqkcycnJJqvV2pSYmKgFsBGssni24VkAQqPR2K9SqVL7+vp2iJaWlqK1tdVutVo/rqysPJZKpWOcP8is+16eACIAXBwfH28wGAwlCoUizPPJVJba2lony7IdAwMDqurq6m8HKYsnAEp4vre3tyQlJeWhRCLhe6MmEonQ3d29kZaWtra6uqoSiUQv91sWTwBkxBiZTCbu7+8f5PP51Jo+V3FxMXp6eqhNJxYWFlrT09MH91oWTwAuI15hWfY9wzCRk5OTPgHweDxkZ2dDKpWioaEBZrP5RWxs7F0OBE1Tv8vbWbBtxOnp6Vft7e3pnZ2d/z0kPj4eMpkM+fn5tqysrFNOp9O+uLg4bbFY3s3MzIxUVVVNAPgNIKBW9QaAjHhBr9c/mJ2dvVlRUbFjxJqaGjQ2Ntrn5uYW5ufnJ3U63WeNRvMFwDoAmhE/AKxxfti3ApQwtqur67pEImkSi8VnSIKMjAyMjo5uKZXKR2q1mupCiX5xbP8AoCDmrhnhV37a4E0BMmJ0Tk5OyvDw8EhYWBgdUtDr9RsOh+NtXl5eOwATx5qS0Yims4KCZkJA0rvQeQPgbkQ9wzDRRUVFKC8vX4qLiysFQH1PUhNjSrqnhJ6y+LqQkBEvGY1GrVqtzujo6KBxfK+uru4NgO8AfgbrYPIFYNuIY2NjSoFAcMtmsw1lZmY+4divcrIHVGN/m3wBICPGaLVaOcMw9wsLC28bDIavAFhO+oAc7i+5LxPS72REgVwuF1ZWVmbJ5fIRAMTcGizpdzOhCxgPQDgAGsfkdJfjAyEW8J7dbsXbd0QA9EntRRE06f0pEDCDg248du8FByW05/+fKHCiwD8oVkMwSWcdCAAAAABJRU5ErkJggg==)
        4 4,
      auto;
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-track {
    background: #111115;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #4d4d57;
  }
`
