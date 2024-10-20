/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
function TickMarkIcon({ isValid }) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.642 7.98299L8.375 12.25L6.92049 10.7955M9.5 1C4.52944 1 0.5 5.02944 0.5 10C0.5 14.9706 4.52944 19 9.5 19C14.4706 19 18.5 14.9706 18.5 10C18.5 5.02944 14.4706 1 9.5 1Z"
        stroke={isValid ? "#4CAF50" : "#E1E6EF"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TickMarkIcon;
