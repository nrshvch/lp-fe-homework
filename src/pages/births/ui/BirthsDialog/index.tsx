import clsx from "clsx";
import { useMemo, useState } from "react";
import { usePagination } from "shared/lib/usePagination";
import { useOnThisDayData, type SortingValues } from "shared/ui";
import { Dialog, type DialogProps } from "shared/ui/Dialog";
import { Pagination } from "shared/ui/Pagination";
import { BirthList, BirthListItem } from "../BirthList";
import "./style.css";

export function BirthsDialog({
  isoDay,
  ...props
}: { isoDay: string } & Omit<DialogProps, "title">) {
  const { data } = useOnThisDayData();

  const [sorting, setSorting] = useState<SortingValues>("desc");

  const sortedItems = useMemo(() => {
    const items = data[isoDay]?.births || [];

    return [...items].sort(({ year: a }, { year: b }) =>
      sorting === "asc" ? a - b : b - a
    );
  }, [data, isoDay, sorting]);

  const { page, totalPages, paginatedItems, nextPage, prevPage } =
    usePagination(sortedItems);

  return (
    <Dialog
      {...props}
      title="Born on this day"
      className={clsx("BirthsDialog", props.className)}
    >
      <BirthList
        className="BirthsDialog-table"
        sortingValue={sorting}
        onSortingChange={setSorting}
      >
        {paginatedItems.map(({ text, year, id }) => (
          <BirthListItem key={id} text={text} year={year} />
        ))}
      </BirthList>

      <Pagination
        className="BirthsDialog-pagination"
        page={page}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </Dialog>
  );
}
