import { SortingHeading, type SortingHeadingProps } from "shared/ui";
import "./style.css";
import type { DetailedHTMLProps } from "react";
import type React from "react";
import clsx from "clsx";

export type BirthListProps = {
  sortingValue: SortingHeadingProps["value"];
  onSortingChange: SortingHeadingProps["onChange"];
} & DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type BirthListItemProps = {
  text: string;
  year: number;
} & DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export function BirthList({
  sortingValue,
  onSortingChange,
  children,
  ...props
}: BirthListProps) {
  return (
    <table {...props} className={clsx("BirthList", props.className)}>
      <thead>
        <tr>
          <th>Name</th>
          <th>
            <SortingHeading
              value={sortingValue}
              name="Year"
              onChange={onSortingChange}
            />
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export function BirthListItem({ text, year, ...props }: BirthListItemProps) {
  return (
    <tr {...props} className={clsx("BirthList-Item", props.className)}>
      <td className="BirthList-Item-text">{text}</td>
      <td className="BirthList-Item-year">{year}</td>
    </tr>
  );
}
