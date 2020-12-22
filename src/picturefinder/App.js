import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import fetchImages from "./fetchImages";
import styles from "./PF.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    spinnerShow: false,
    modalShow: false,
    bigImageURL: "",
  };

  getPictures = (query, page) => {
    this.setState({ spinnerShow: !this.state.spinnerShow, images: [] });

    fetchImages(query, page).then((data) => {
      if (data.hits.length === 0) {
        alert("Сорян, нічого не знайшов");
        this.setState({ spinnerShow: !this.state.spinnerShow });
        return;
      }
      this.setState({
        images: data.hits,
        page: 2,
        query: query,
        spinnerShow: !this.state.spinnerShow,
      });
    });
  };

  loadMoreImages = () => {
    this.setState({ spinnerShow: true });

    fetchImages(this.state.query, this.state.page).then((data) => {
      if (data.hits.length === 0) {
        alert("Сорян, більше нема");
        this.setState({ spinnerShow: !this.state.spinnerShow });
        return;
      }
      this.setState((prevState) => {
        return {
          images: [...this.state.images, ...data.hits],
          page: (prevState.page += 1),
          spinnerShow: !this.state.spinnerShow,
        };
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  showModal = (e) => {
    if (e.target.alt) {
      const bigImage = this.state.images.find(
        (image) => image.webformatURL === e.target.src
      ).largeImageURL;
      this.setState({ modalShow: true, bigImageURL: bigImage });
    }
    window.addEventListener("keydown", this.hideModal);
  };

  hideModal = (e) => {
    if (e.target.alt || e.code === "Escape") {
      this.setState({ modalShow: false, bigImageURL: "" });
      window.removeEventListener("keydown", this.hideModal);
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.getPictures} />
        {this.state.spinnerShow && (
          <div className={styles.spinner_container}>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}
        <ImageGallery images={this.state.images} onShowModal={this.showModal} />
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.loadMoreImages} />
        )}
        {this.state.modalShow && (
          <Modal URL={this.state.bigImageURL} onCloseModal={this.hideModal} />
        )}{" "}
      </div>
    );
  }
}
