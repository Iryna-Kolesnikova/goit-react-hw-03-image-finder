import React, { Component } from 'react';
import { fetchImages } from './api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { AppStyled } from './App.styled';
import { GlobalStyle } from './Global.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 12,
    SelectedImage: null,
    isLoading: false,
    loadMore: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImagesFromApi();
    }
  }

  fetchImagesFromApi = async () => {
    try {
      const { page, query } = this.state;
      this.setState({ isLoading: true });
      const data = await fetchImages(page, query);

      const { hits, totalHits } = data;
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: page < Math.ceil(totalHits / 12),
      }));
      if (hits.length === 0) {
        toast.error('No results found.');
      } else {
        toast.success(`Found ${totalHits} images for your query.`);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [], isLoading: false });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <AppStyled>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && images.length % 12 === 0 && (
            <Button onClick={this.handleLoadMoreClick} />
          )}
          {showModal && (
            <Modal
              largeImageURL={largeImageURL}
              onClose={this.handleCloseModal}
            />
          )}
        </AppStyled>
        <GlobalStyle />
        <ToastContainer />
      </div>
    );
  }
}
