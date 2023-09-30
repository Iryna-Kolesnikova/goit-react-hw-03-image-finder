import { Overlay, ModalOverlay } from './Modal.styled';
import * as basicLightbox from 'basiclightbox';
export const Modal = ({ largeImageURL, onClose }) => {
  if (!largeImageURL) {
    return null;
  }
  const content = `<Overlay className="overlay" onClick={onClose}>
      <div class="modal">
        <img src=${largeImageURL} alt="" />
      </div>
    `;
  const instance = basicLightbox.create(content);
  const handleCloseModal = () => {
    instance.close();
    onClose();
  };
  return (
    <Overlay className="overlay" onClick={handleCloseModal}>
      <ModalOverlay className="modal">
        <img src={largeImageURL} alt="" />
      </ModalOverlay>
    </Overlay>
  );
};
