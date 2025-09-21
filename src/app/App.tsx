import { ModalProvider } from "shared/ui";
import { Births } from "pages/births/ui";
import { OnThisDayDataProvider } from "entities/births/ui";

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
