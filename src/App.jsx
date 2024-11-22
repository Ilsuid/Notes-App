import NotesPages from "./pages/NotesPages";
import NoteProvider from "./context/NoteContext";




function App() {
  
  return (
    <div id="app">
      <NoteProvider>
        <NotesPages />
      </NoteProvider>
    </div>
  );
}

export default App;
