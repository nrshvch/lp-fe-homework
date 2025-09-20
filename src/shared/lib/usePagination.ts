import { useCallback, useMemo, useState } from "react";

export function usePagination<T>(items: T[], pageSize = 10) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = useMemo(
    () => items.slice(start, end),
    [items, start, end]
  );

  const nextPage = useCallback(() => setPage(currentPage + 1), [currentPage]);
  const prevPage = useCallback(() => setPage(currentPage - 1), [currentPage]);

  return useMemo(
    () => ({
      page: currentPage,
      totalPages,
      paginatedItems,
      nextPage,
      prevPage,
    }),
    [currentPage, totalPages, paginatedItems, nextPage, prevPage]
  );
}
