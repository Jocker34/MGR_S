import { useState } from "react";
import Header from "./components/Header";
import IOScreen from "./components/IOScreen";
import Solver from "./components/Solver";

function App() {
  const [boradData, setBoradData] = useState([
    [3, 5, 1, 6, 0, 2, 0, 0, 4],
    [0, 0, 7, 5, 0, 9, 6, 0, 0],
    [4, 0, 0, 8, 3, 0, 0, 5, 7],
    [9, 4, 0, 0, 0, 7, 0, 3, 2],
    [0, 0, 0, 3, 9, 6, 0, 0, 5],
    [0, 7, 3, 0, 8, 0, 1, 0, 0],
    [7, 3, 4, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 7, 0, 0, 4, 2, 9],
    [0, 9, 2, 4, 0, 5, 3, 0, 0],
  ]);
  const [setting, setSetting] = useState(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [loadFromFileInput, setLoadFromFileInput] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const [algorithm, setAlgorithm] = useState(null);

  return (
    <div>
      <Header
        isSolving={isSolving}
        setIsLoadingFile={setIsLoadingFile}
        isLoadingFile={isLoadingFile}
        isSolved={isSolved}
      />
      {isSolving ? (
        <Solver
          setIsSolving={setIsSolving}
          setIsSolved={setIsSolved}
          boradData={boradData}
          setBoradData={setBoradData}
          algorithm={algorithm}
        />
      ) : (
        <IOScreen
          setIsSolving={setIsSolving}
          isLoadingFile={isLoadingFile}
          setLoadFromFileInput={setLoadFromFileInput}
          loadFromFileInput={loadFromFileInput}
          setBoradData={setBoradData}
          setIsLoadingFile={setIsLoadingFile}
          boradData={boradData}
          setSetting={setSetting}
          isSolved={isSolved}
          setting={setting}
          setAlgorithm={setAlgorithm}
        />
      )}
    </div>
  );
}

export default App;

// [
//   [14, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0, 11, 0, 0],
//   [0, 8, 0, 0, 0, 0, 0, 13, 0, 2, 11, 15, 9, 0, 0, 0],
//   [0, 0, 0, 13, 0, 0, 2, 9, 0, 0, 7, 1, 14, 15, 5, 0],
//   [1, 0, 10, 0, 0, 11, 0, 5, 9, 0, 0, 4, 0, 0, 0, 0],
//   [9, 0, 0, 0, 0, 12, 0, 14, 7, 0, 0, 5, 0, 0, 0, 0],
//   [0, 0, 0, 0, 9, 0, 7, 1, 0, 0, 2, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 2, 0, 0, 0, 0, 9, 1, 0, 12, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0, 0, 0, 0, 11, 13, 0, 0, 0, 4, 3, 0],
//   [0, 16, 0, 0, 0, 0, 0, 12, 2, 0, 0, 0, 0, 14, 0, 0],
//   [13, 0, 14, 5, 0, 0, 0, 0, 0, 0, 0, 9, 0, 8, 0, 0],
//   [0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
//   [0, 0, 5, 0, 0, 15, 0, 2, 1, 7, 0, 14, 0, 3, 13, 0],
//   [0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
//   [0, 13, 9, 0, 0, 0, 0, 0, 0, 0, 4, 12, 0, 0, 0, 0],
//   [12, 2, 0, 0, 1, 0, 4, 0, 5, 0, 0, 0, 16, 6, 0, 11],
// ]