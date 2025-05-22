function BackGround() {
  return (
    <>
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              opacity: .8;
            }
            50% {
              opacity: .3;
            }
          }
        `}
      </style>

      {/* Static solid black background */}
      <div className="fixed top-0 left-0 z-[-3] w-full min-h-screen bg-black" />

      {/* Animated glowing radial gradient on top */}
      <div
        className="fixed top-0 left-0 z-[-2] w-full min-h-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(60,90,250,0.8), rgba(255,255,255,0))',
          animation: 'glow 10s ease-in-out infinite',
          mixBlendMode: 'screen', // You can change to 'overlay' or 'lighten' for different looks
        }}
      />
    </>
  );
}
export default BackGround;
