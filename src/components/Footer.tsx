
export const Footer = () => {
  return (
    <footer
      aria-labelledby="footer"
      className="pt-8 border-t w-full border-[#30363d]"
    >
     
      <div className="text-center">
        <p className="text-sm text-[#c9d1d9]">
          © {new Date().getFullYear()} Mvundlela Nqobile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};