const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-primary/10 animate-float-slow" />
      <div className="absolute top-[60%] left-[10%] w-16 h-16 rounded-full bg-secondary/10 animate-float-medium" />
      <div className="absolute top-[80%] left-[15%] w-12 h-12 rounded-full bg-accent/10 animate-float-fast" />
      <div className="absolute top-[30%] right-[8%] w-24 h-24 rounded-full bg-primary/10 animate-float-medium" />
      <div className="absolute top-[70%] right-[20%] w-14 h-14 rounded-full bg-secondary/10 animate-float-slow" />
      <div className="absolute top-[15%] right-[25%] w-18 h-18 rounded-full bg-accent/10 animate-float-fast" />
      
      {/* Floating Squares */}
      <div className="absolute top-[25%] left-[20%] w-16 h-16 bg-primary/10 animate-float-medium rotate-45" />
      <div className="absolute top-[50%] right-[15%] w-20 h-20 bg-secondary/10 animate-float-slow rotate-12" />
      <div className="absolute top-[85%] left-[40%] w-12 h-12 bg-accent/10 animate-float-fast rotate-45" />
      
      {/* Floating Triangles */}
      <div className="absolute top-[40%] left-[30%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-primary/10 animate-float-slow" />
      <div className="absolute top-[65%] right-[30%] w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-secondary/10 animate-float-medium" />
      <div className="absolute top-[20%] left-[45%] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-accent/10 animate-float-fast" />
      
      {/* Additional Decorative Elements */}
      <div className="absolute top-[45%] right-[40%] w-10 h-10 rounded-full bg-primary/5 animate-pulse-slow" />
      <div className="absolute top-[75%] left-[50%] w-16 h-16 rounded-full bg-secondary/5 animate-pulse-slow" />
      <div className="absolute top-[10%] left-[60%] w-14 h-14 rounded-full bg-accent/5 animate-pulse-slow" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-[35%] left-[70%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl animate-float-slow" />
      <div className="absolute top-[55%] right-[5%] w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl animate-float-medium" />
      <div className="absolute top-[5%] left-[35%] w-36 h-36 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl animate-float-fast" />
    </div>
  );
};

export default AnimatedBackground;