function getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving) {
  if (isSolving) return "";
  if (!isSolved && !isLoadingFile)
    return (
      <div>
        Załaduj plansze{" "}
        <span
          onClick={(e) => {
            setIsLoadingFile(true);
          }}
          className="text-indigo-600 font-bold cursor-pointer"
        >
          tutaj
        </span>{" "}

      </div>
    );
  if (!isSolved && isLoadingFile) return <div>Wklej zawartość pliku</div>;
  return <div>Rozwiązane!</div>;
}

function Header({ setIsLoadingFile, isLoadingFile, isSolved, isSolving }) {
  return (
    <div>
      <div className="text-center text-3xl mt-8 text-gray-600">
        Sudoku solver
      </div>
      <div className="text-center text-xl mt-3 text-gray-600 w-max mx-auto">
        {getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving)}
      </div>
    </div>
  );
}

export default Header;
