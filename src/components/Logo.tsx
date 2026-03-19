export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Circuit board / chip icon */}
      <rect x="4" y="10" width="28" height="20" rx="2" fill="white" />
      <rect x="8" y="14" width="20" height="12" rx="1" fill="#0a0a0a" />
      <rect x="10" y="18" width="4" height="4" rx="0.5" fill="white" opacity="0.8" />
      <rect x="17" y="18" width="4" height="4" rx="0.5" fill="white" opacity="0.8" />
      <rect x="24" y="18" width="0" height="0" />
      <line x1="10" y1="8" x2="10" y2="10" stroke="white" strokeWidth="1.5" />
      <line x1="18" y1="8" x2="18" y2="10" stroke="white" strokeWidth="1.5" />
      <line x1="26" y1="8" x2="26" y2="10" stroke="white" strokeWidth="1.5" />
      <line x1="10" y1="30" x2="10" y2="32" stroke="white" strokeWidth="1.5" />
      <line x1="18" y1="30" x2="18" y2="32" stroke="white" strokeWidth="1.5" />
      <line x1="26" y1="30" x2="26" y2="32" stroke="white" strokeWidth="1.5" />
      <line x1="2" y1="16" x2="4" y2="16" stroke="white" strokeWidth="1.5" />
      <line x1="2" y1="24" x2="4" y2="24" stroke="white" strokeWidth="1.5" />
      <line x1="32" y1="16" x2="34" y2="16" stroke="white" strokeWidth="1.5" />
      <line x1="32" y1="24" x2="34" y2="24" stroke="white" strokeWidth="1.5" />
      {/* KOMTEK text */}
      <text x="44" y="28" fontFamily="monospace" fontSize="16" fontWeight="600" fill="white" letterSpacing="2">KOMTEK</text>
    </svg>
  );
};