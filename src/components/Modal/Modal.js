import { Overlay, ModalOverlay } from './Modal.styled';
import * as basicLightbox from 'basiclightbox';
export const Modal = ({ largeImageUrl, onClose }) => {
  const content = `<Overlay className="overlay" onClick={onClose}>
      <div class="modal">
        <img src=${largeImageUrl} alt="" />
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
        <img src={largeImageUrl} alt="" />
      </ModalOverlay>
    </Overlay>
  );
};
