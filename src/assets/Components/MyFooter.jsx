const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black h-100">
      <p className=" text-light text-center mt-3">
        Nebbia delle Rune- {currentYear}
      </p>
    </footer>
  );
};

export default MyFooter;
