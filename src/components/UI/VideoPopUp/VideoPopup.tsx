import { useRouter } from 'next/router';
import { useState } from 'react';
import { Modal, UncontrolledTooltip } from 'reactstrap';
import breakpoints from '../../../constants/breakpoints';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface Props {
  id: string;
  children: JSX.Element;
  videoURL: string;
  tooltipText?: string;
}

export default function VideoPopup({
  id,
  videoURL,
  children,
  tooltipText
}: Props): JSX.Element | null {
  const [modal, setModal] = useState(false);
  const isMD = useMediaQuery(`(max-width: ${breakpoints.md}px)`);
  const router = useRouter();

  const handlePlayToggle = () => {
    if (!videoURL || videoURL === '') return;
    if (isMD) {
      router.push(videoURL);
    } else {
      setModal(!modal);
    }
  };

  if (!videoURL) return null;

  return (
    <>
      <div onClick={handlePlayToggle} id={`id-${id}`}>
        {children}
      </div>
      {tooltipText && (
        <UncontrolledTooltip target={`id-${id}`}>
          {tooltipText}
        </UncontrolledTooltip>
      )}
      <Modal
        isOpen={modal}
        toggle={handlePlayToggle}
        style={{
          width: '100%',
          height: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <iframe
          width="584"
          height="480"
          src={videoURL}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}
