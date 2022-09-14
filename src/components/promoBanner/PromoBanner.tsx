import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import { landScapeImages } from '../../mock/images';
import { CONTENT_BY_SECTION_allCustomContents } from '../../queries/__generated__/CONTENT_BY_SECTION';
import { getRandomInt } from '../../util/math';

interface Props {
  content: (CONTENT_BY_SECTION_allCustomContents | null)[];
}

export default function PromoBanner({ content }: Props): JSX.Element | null {
  const [selectedItem, setSelectedItem] =
    useState<CONTENT_BY_SECTION_allCustomContents | null>(null);

  useEffect(() => {
    const rnd = getRandomInt(0, content.length - 1);
    const item = content[rnd];
    item && setSelectedItem(item);
  }, []);

  const router = useRouter();

  if (!selectedItem) return null;

  const img1 =
    selectedItem.image1?.publicUrlTransformed ||
    selectedItem.image2?.publicUrlTransformed ||
    landScapeImages[1];
  const img2 =
    selectedItem.image2?.publicUrlTransformed ||
    selectedItem.image1?.publicUrlTransformed ||
    landScapeImages[2];

  const linkProp = {
    ...(selectedItem.path && {
      onClick: () => {
        selectedItem.path && router.push(selectedItem.path);
      }
    })
  };

  return (
    <Container fluid>
      <Row>
        <Col className="px-0" md="6">
          <Card
            className="card-fashion card-background"
            style={{
              backgroundImage: `url(${img1})`
            }}
          >
            <CardBody>
              {selectedItem.heading1 && (
                <CardTitle className="text-left" tag="div">
                  <h2>
                    <a {...linkProp}>{selectedItem.heading1}</a>
                  </h2>
                </CardTitle>
              )}
              {selectedItem.heading2 && (
                <CardFooter className="text-left">
                  <div className="stats">{selectedItem.heading2}</div>
                </CardFooter>
              )}
            </CardBody>
          </Card>
        </Col>
        <Col className="px-0" md="6">
          <div className="card-container">
            <Card className="card-fashion">
              {selectedItem.body && (
                <CardTitle tag="div">
                  <h4>
                    <a {...linkProp}>{selectedItem.body}</a>
                  </h4>
                </CardTitle>
              )}
            </Card>
            <Card
              className="card-fashion card-background"
              style={{
                backgroundImage: `url(${img2})`
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
