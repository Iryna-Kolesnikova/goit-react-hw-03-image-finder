import { useEffect } from 'react';
import { Overlay, ModalOverlay } from './Modal.styled';

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleEscape = el => {
      if (el.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClick = el => {
    if (el.target === el.currentTarget) {
      onClose();
    }
  };

  if (!largeImageURL) {
    return null;
  }
  return (
    <Overlay className="overlay" onClick={handleClick}>
      <ModalOverlay className="modal">
        <img src={largeImageURL} alt="" />
      </ModalOverlay>
    </Overlay>
  );
};
