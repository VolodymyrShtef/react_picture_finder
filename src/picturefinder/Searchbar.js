import React, { Component } from "react";
import styles from "./PF.module.css";

export default class Searchbar extends Component {
  state = {
    searchQuery: "",
  };
  handleInput = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.searchQuery) {
      alert("Введи пошуковий запит");
      return;
    }
    this.props.onSubmit(this.state.searchQuery, 1);
    this.setState({ searchQuery: "" });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
