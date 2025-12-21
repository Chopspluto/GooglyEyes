export default function(){
    return (
    <svg
      viewBox="0 0 1200 400"
      className="vines"
      fill="none"
    >
      {/* Left vine */}
      <path
        d="M200 200
           C100 100, 100 300, 300 250
           S500 200, 600 150"
        className="vine"
      />

      {/* Right vine (mirror-ish) */}
      <path
        d="M1000 200
           C1100 100, 1100 300, 900 250
           S700 200, 600 150"
        className="vine"
      />
      <path class="vine thin" />
<path class="vine thick" />

      <g className="flower flower-left">
  <circle cx="180" cy="120" r="12" fill="#f3a6b3" />
  <circle cx="165" cy="115" r="10" fill="#f7c2cb" />
  <circle cx="195" cy="115" r="10" fill="#f7c2cb" />
</g>

    </svg>
  );
}