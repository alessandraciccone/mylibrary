const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark">
      <p className=" text-light text-center">
        Nebbia delle Rune- {currentYear}
      </p>
    </footer>
  );
};

export default MyFooter;
