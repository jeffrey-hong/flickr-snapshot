import React, { Component } from 'react'

export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.photos ? 
          this.props.photos.map((photo) => {
            let server = photo.server;
            let photo_id = photo.id;
            let secret = photo.secret;
            let title = photo.title;
            let src = `https://farm66.staticflickr.com/${server}/${photo_id}_${secret}_m.jpg`;
            return (
              <div key={photo.id}>
                <div>
                  <span className="title">{title}</span>
                  <img src={src} alt={title} />
                </div>
              </div>
            )
          }) 
          : 
            <div>
              <h1>nothing here yet</h1>
            </div>
        }
      </React.Fragment>
    )
  }
}
