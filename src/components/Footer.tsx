
export const Footer = () => {
  return (
    <footer
      aria-labelledby="footer"
      className="bg-white pt-8 border-t w-full border-gray-200"
    >
     
      <div className="border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nqobile Mvundlela. All rights reserved.
        </p>
      </div>
    </footer>
  );
};