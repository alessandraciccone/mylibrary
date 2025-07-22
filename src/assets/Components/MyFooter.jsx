const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark h-100">
      <p className=" text-light text-center">
        Nebbia delle Rune- {currentYear}
      </p>
    </footer>
  );
};

export default MyFooter;
