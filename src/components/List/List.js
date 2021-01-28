import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import App from '../App/App.js';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imageLink: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} link={this.props.imageLink} />

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column columnTitle={'column1'}></Column>
          <Column columnTitle={'column2'}></Column>
          <Column columnTitle={'column3'}></Column>
        </div>
      </section>
    )
  }
}

export default List;
