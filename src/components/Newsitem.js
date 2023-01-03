import React, { Component } from 'react'

export class Newsitem extends Component {
  
  
  render() {
    let {title,description,imageUrl ,newsUrl} = this.props;
   return(

         <div class="my-3">
        <div class="card" style={{width: "18rem"}}>
          <img src={imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}...</h5>
            <p class="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" class="btn btn-sm btn-primary">READ MORE</a>
          </div>
        </div>
        </div>
   )
  }
}

export default Newsitem