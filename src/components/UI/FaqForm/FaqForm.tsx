/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Row
} from 'reactstrap';
import { FAQ_CONTENT_QUERY } from '../../../queries/faqContent';
import { FAQ_CONTENT } from '../../../queries/__generated__/FAQ_CONTENT';
import FaqHeader from '../Headers/FaqHeader/FaqHeader';
import styles from './FaqForm.module.css';

export default function FaqForm(): JSX.Element {
  const [collapses, setCollapses] = useState([0]);
  const [expanded, setExpanded] = React.useState(false);
  const [cardId, setCardId] = React.useState(0);

  const { data: faqContent } = useQuery<FAQ_CONTENT>(FAQ_CONTENT_QUERY);

  useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  const changeCollapse = (collapse: number) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  return (
    <>
      <FaqHeader />
      <div className="main">
        <div className="contact-content" style={{ marginBottom: '50px' }}>
          <Container>
            <div className={styles.Title}>
              <h2 className="title">Preguntas Frecuentes</h2>
            </div>
            <div className={styles.Description}>
              <p className="description">
                Aca puedes encontrar respuesta a las preguntas que mas recibimos
                de ustedes.
                <br></br>
                <br></br>
              </p>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  {faqContent?.allFaqContents?.map((content) => {
                    return (
                      <Card className={`card-plain`} key={content?.questionId}>
                        <CardHeader
                          id="headingOne"
                          role="tab"
                          className={styles.Pregunta}
                        >
                          <a
                            aria-expanded={collapses.includes(1)}
                            data-parent="#accordion"
                            data-toggle="collapse"
                            href="#pablo"
                            className={styles.Pregunta3}
                            onClick={(e) => {
                              e.preventDefault();
                              if (!content?.questionId) return;
                              const ID = parseInt(content.questionId);
                              setCardId(ID);
                              setExpanded(!expanded);
                              changeCollapse(ID);
                            }}
                          >
                            {content?.question}
                            <i className="now-ui-icons arrows-1_minimal-down" />
                          </a>
                        </CardHeader>
                        <Collapse
                          isOpen={
                            expanded &&
                            !!content?.questionId &&
                            cardId === parseInt(content.questionId)
                          }
                        >
                          <CardBody>
                            <Col className="ml-auto mr-auto" md="12">
                              <Card className="card-plain">
                                <CardHeader id="headingFour" role="tab">
                                  <a
                                    aria-expanded={collapses.includes(4)}
                                    data-parent="#accordion"
                                    data-toggle="collapse"
                                    href="#pablo"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      changeCollapse(4);
                                    }}
                                  >
                                    {content?.subQuestion1}
                                    <i className="now-ui-icons arrows-1_minimal-down" />
                                  </a>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes(4)}>
                                  <CardBody>
                                    <p>{content?.subAnswer1}</p>
                                  </CardBody>
                                </Collapse>
                              </Card>
                              <Card className="card-plain">
                                <CardHeader id="headingFive" role="tab">
                                  <a
                                    aria-expanded={collapses.includes(5)}
                                    data-parent="#accordion"
                                    data-toggle="collapse"
                                    href="#pablo"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      changeCollapse(5);
                                    }}
                                  >
                                    {content?.subQuestion2}
                                    <i className="now-ui-icons arrows-1_minimal-down" />
                                  </a>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes(5)}>
                                  <CardBody>
                                    <p>{content?.subAnswer2}</p>
                                  </CardBody>
                                </Collapse>
                              </Card>
                              <Card className="card-plain">
                                <CardHeader id="headingSix" role="tab">
                                  <a
                                    aria-expanded={collapses.includes(6)}
                                    data-parent="#accordion"
                                    data-toggle="collapse"
                                    href="#pablo"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      changeCollapse(6);
                                    }}
                                  >
                                    {content?.subQuestion3}
                                    <i className="now-ui-icons arrows-1_minimal-down" />
                                  </a>
                                </CardHeader>
                                <Collapse isOpen={collapses.includes(6)}>
                                  <CardBody>
                                    <p>{content?.subAnswer3}</p>
                                  </CardBody>
                                </Collapse>
                              </Card>
                            </Col>
                          </CardBody>
                        </Collapse>
                      </Card>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
