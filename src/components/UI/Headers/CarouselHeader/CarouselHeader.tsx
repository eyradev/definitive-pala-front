import router from 'next/router';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row
} from 'reactstrap';
import { landScapeImages } from '../../../../mock/images';
import { CONTENT_BY_SECTION_allCustomContents } from '../../../../queries/__generated__/CONTENT_BY_SECTION';
import styles from './CarouselHeader.module.css';

interface Props {
  content: (CONTENT_BY_SECTION_allCustomContents | null)[];
}

export default function CarouselHeader({ content }: Props): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  const items = content.reduce<CONTENT_BY_SECTION_allCustomContents[]>(
    (acc, curr) => {
      curr && acc.push(curr);
      return acc;
    },
    []
  );

  const handleExitStart = () => {
    setAnimating(true);
  };
  const handleExitEnd = () => {
    setAnimating(false);
  };
  const handleNext = () => {
    if (isAnimating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const handlePrevious = () => {
    if (isAnimating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const handleStepClick = (newIndex: number) => {
    if (isAnimating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={handleNext}
        previous={handlePrevious}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={handleStepClick}
        />
        {items.map((item) => {
          const backgroundImage =
            item.image1?.publicUrlTransformed ||
            item.image2?.publicUrlTransformed ||
            landScapeImages[0];
          return (
            <CarouselItem
              onExiting={handleExitStart}
              onExited={handleExitEnd}
              key={item.id}
            >
              <div
                className={`page-header header-filter ${styles.header} ${
                  item.path ? styles.clickable : ''
                }`}
                {...(item.path && {
                  onClick: () => {
                    item.path && router.push(item.path);
                  }
                })}
              >
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: `url(${backgroundImage})`
                  }}
                />
                <div className="content-center text-center">
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                      {item.heading1 && (
                        <h1 className="title">{item.heading1}</h1>
                      )}
                      {item.body && (
                        <h4 className="description text-white">{item.body}</h4>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="left carousel-control carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            handlePrevious();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-right" />
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
    </>
  );
}
