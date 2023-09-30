import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './Image.Gallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryStyle className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryStyle>
  );
};
