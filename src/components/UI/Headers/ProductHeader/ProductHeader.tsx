import { createRef, useEffect } from 'react';
import { VideoPopup } from '../..';
import breakpoints from '../../../../constants/breakpoints';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { landScapeImages } from '../../../../mock/images';
import { PRODUCT_BY_ID_allProducts_store } from '../../../../queries/__generated__/PRODUCT_BY_ID';
import styles from './ProductHeader.module.css';

interface Props {
  store: PRODUCT_BY_ID_allProducts_store;
}

export default function ProductHeader({ store }: Props): JSX.Element {
  const pageHeader = createRef<HTMLDivElement>();

  const isMD = useMediaQuery(`(max-width: ${breakpoints.md}px)`);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;

        if (pageHeader && pageHeader.current) {
          pageHeader.current.style.transform = `translate3d(0, ${windowScrollTop}px, 0)`;
        }
      };

      window.addEventListener('scroll', updateScroll);
      return () => {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header page-header-mini">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${
              store.banner?.publicUrlTransformed || landScapeImages[0]
            })`
          }}
          ref={pageHeader}
        />
        {store.video && (
          <div
            id="header-play-btn"
            style={{
              position: 'absolute',
              zIndex: 10,
              bottom: isMD ? 'calc(50% - 20px)' : 20,
              right: isMD ? 'calc(50% - 20px)' : 20
            }}
          >
            <VideoPopup
              id="videoHeader"
              videoURL={store.video}
              tooltipText="Ver presentación de la Tienda"
            >
              <div
                className={styles.playIcon}
                style={{
                  backgroundColor: 'var(--primary)',
                  padding: '10px',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <i className={`now-ui-icons media-1_button-play`} />
              </div>
            </VideoPopup>
          </div>
        )}
      </div>
    </>
  );
}
