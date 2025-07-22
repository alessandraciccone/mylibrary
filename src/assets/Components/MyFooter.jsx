const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark h-100">
      <p className=" text-light text-center mt-3">
        Nebbia delle Rune- {currentYear}
      </p>
    </footer>
  );
};

export default MyFooter;
