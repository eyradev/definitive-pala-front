/* eslint-disable @next/next/no-img-element */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { PRODUCT_SEARCH_allProducts_category } from "../../../queries/__generated__/PRODUCT_SEARCH";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: PRODUCT_SEARCH_allProducts_category;
  categoryColor?: boolean;
}

export default function CategoryIcon({
  category,
  categoryColor,
  ...divProps
}: Props): JSX.Element {
  return (
    <>
      <div
        id={`id-${category.id}`}
        style={{
          backgroundColor: categoryColor
            ? category.color || "lightgray"
            : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        {...divProps}
      >
        {category.icon?.publicUrlTransformed ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "65%",
              height: "auto",
            }}
          >
            <img
              src={category.icon.publicUrlTransformed}
              alt={category.name || "categoria"}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ) : (
          <div style={{ fontSize: "1rem", fontWeight: "bolder" }}>
            {category.name?.charAt(0)}
          </div>
        )}
      </div>
      <UncontrolledTooltip target={`id-${category.id}`}>
        {category.type === "ILLNESS"
          ? `Apto para ${category.name?.toLowerCase()}`
          : category.name?.toLowerCase()}
      </UncontrolledTooltip>
    </>
  );
}
