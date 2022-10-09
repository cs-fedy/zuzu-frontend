type TSearchProps = {
  color?: string;
};

function Search({ color = "stroke-white" }: TSearchProps) {
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
      <circle
        className={color}
        cx="13.7279"
        cy="14.2276"
        r="10.4867"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={color}
        d="M21.0215 22.0659L25.1328 26.1666"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Search;
