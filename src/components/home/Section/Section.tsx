import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from 'reactstrap';
import styles from './Section.module.css';

interface Props {
  title?: string;
  small?: {
    text: string;
    path?: string;
  };
  children?: ReactNode;
}

export default function Section({
  title,
  small,
  children
}: Props): JSX.Element {
  return (
    <div className="section" style={{ backgroundColor: 'unset' }}>
      <Container>
        {title && (
          <h2 className="section-title" style={{ wordBreak: 'keep-all' }}>
            {title}
            {small && (
              <>
                {' '}
                <small className={styles.sectionSmall}>
                  {small.path ? (
                    <Link href={small.path}>
                      <a>{small.text}</a>
                    </Link>
                  ) : (
                    small.text
                  )}
                </small>
              </>
            )}
          </h2>
        )}
        {children}
      </Container>
    </div>
  );
}
