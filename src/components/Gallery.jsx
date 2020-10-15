import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    return (
      <div className="grid-container">
        {this.props.photos ? 
          this.props.photos.map((photo) => {
            let server = photo.server;
            let photo_id = photo.id;
            let secret = photo.secret;
            let title = photo.title;
            let src = `https://farm66.staticflickr.com/${server}/${photo_id}_${secret}_m.jpg`;
            return (
              <div key={photo.id} className="grid-item">
                <div>
                  <h2><span className="title">{title}</span></h2>
                  <img src={src} alt={title} />
                </div>
              </div>
            )
          }) 
          : 
            <div>
              <h1>Loading Images</h1>
            </div>
        }
      </div>
    )
  }
}
