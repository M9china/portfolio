
export const Footer = () => {
  return (
    <footer
      aria-labelledby="footer"
      className="pt-8 border-t w-full border-gray-200"
    >
     
      <div className="border-gray-100 text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Nqobile Mvundlela. All rights reserved.
        </p>
      </div>
    </footer>
  );
};