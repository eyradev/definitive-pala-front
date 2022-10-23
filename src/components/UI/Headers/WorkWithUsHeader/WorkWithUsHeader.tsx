import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { sections } from "../../../../constants/sectionNames";
import { landScapeImages } from "../../../../mock/images";
import { CONTENT_BY_SECTION_QUERY } from "../../../../queries/customContent";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "../../../../queries/__generated__/CONTENT_BY_SECTION";

export default function WorkWithUsHeader(): JSX.Element {
  const [backgroundImage, setBackgroundImage] = useState<string | null>();

  const { data: background } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, {
    variables: { section: sections.workWithUsHeader },
  });

  useEffect(() => {
    if (!background) return;
    background?.allCustomContents
      ? setBackgroundImage(
          background?.allCustomContents[0]?.image1?.publicUrlTransformed
        )
      : setBackgroundImage(landScapeImages[0]);
  }, [background]);

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </div>
    </>
  );
}
