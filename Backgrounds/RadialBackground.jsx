function BackGround() {
  return (
    <>
      <style>
        {`
          @keyframes glow {
            0%, 100% { opacity: .3; }
            50% { opacity: .8; }
          }
        `}
      </style>

      {/* Hero section with animated gradient background */}
      <section
        className="top-0 z-[-2] relative w-full h-screen bg-black overflow-hidden"
      >
        <div
          className=" top-0 z-[-2] absolute left-0 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,110,220,0.8), transparent)',
            animation: 'glow 3s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
    
      </section>


    </>
  );
}
export default BackGround;
