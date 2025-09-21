import { setOnThisDay } from "entities/births/model";
import { useCallback, useContext } from "react";
import { fetchOnThisDay } from "shared/api/on-this-day";
import { isoDateToDay, isoDateToMonth } from "shared/lib/utils";
import { Button, Modal } from "shared/ui";
import { useModal } from "shared/ui/ModalProvider/context";
import { OnThisDayDataContext } from "./context";

export function useOnThisDayData() {
  const context = useContext(OnThisDayDataContext);
  const { open, close } = useModal();

  if (context === undefined)
    throw new Error("useOnThisDay must be used within a OnThisDayDataProvider");

  const [state, dispatch] = context;

  const fetch = useCallback(
    async (isoDay: string) => {
      try {
        const data = await fetchOnThisDay(
          isoDateToMonth(isoDay),
          isoDateToDay(isoDay)
        );

        dispatch(setOnThisDay(isoDay, data));
      } catch (err) {
        open(
          <Modal
            title="Error"
            error
            actions={<Button onClick={close}>Ok</Button>}
          >
            {String(err)}
          </Modal>
        );
      }
    }, 
    [close, dispatch, open]
  );

  return {
    data: state.onThisDay,
    fetch,
  };
}
