import { ModalProvider, OnThisDayDataProvider } from "shared/ui";
import { Births } from "pages/births/ui";

function App() {
  return (
    <ModalProvider>
      <OnThisDayDataProvider>
        <Births />
      </OnThisDayDataProvider>
    </ModalProvider>
  );
}

export default App;
