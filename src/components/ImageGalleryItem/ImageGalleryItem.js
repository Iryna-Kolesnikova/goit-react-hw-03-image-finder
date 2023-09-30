import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <ImageGalleryItemStyle
      className="gallery-item"
      onClick={() => onImageClick(image)}
    >
      <ImageGalleryItemImage src={image.webformatURL} alt="" />
    </ImageGalleryItemStyle>
  );
};
