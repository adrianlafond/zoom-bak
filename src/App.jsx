import React, { Component } from 'react';
import ZoomBoard from './ZoomBoard';
import ZoomItem from './ZoomItem';
import ZoomImage from './zoom-content/ZoomImage';
import ZoomColor from './zoom-content/ZoomColor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZoomBoard autoLayout={{ onInit: true }}>
          {[].concat(this.renderImages(), this.renderColors())}
        </ZoomBoard>
      </div>
    );
  }

  renderImages() {
    return [
      <ZoomItem x={10} y={10} width={640} height={480} key='image-bill'>
        <ZoomImage src="assets/bill_the_cat.jpg" alt="Bill the Cat" />
      </ZoomItem>,
      <ZoomItem width={640} height={480} key='image-rock'>
        <ZoomImage src="assets/rock.jpg" />
      </ZoomItem>
    ];
  }

  renderColors() {
    const colors = [];
    for (let i = 0; i < 100; i++) {
      // https://www.paulirish.com/2009/random-hex-color-code-snippets/
      const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors[i] = (
        <ZoomItem width={100} height={100} key={`${hex}-${i}`}>
          <ZoomColor color={hex} />
        </ZoomItem>
      );
    }
    return colors;
  }
}

export default App;
