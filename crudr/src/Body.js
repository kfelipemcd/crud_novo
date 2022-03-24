import React, { Component } from 'react';

class Body extends Component {
  render() {
    return <main>
    <div class="bd-masthead mb-3" id="content">
      <div class="container px-4 px-md-3">
        <div class="row align-items-lg-center">
          <div class="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
            
          </div>
          <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
            <h1 class="mb-3">Build fast, responsive sites with Bootstrap</h1>
            <p class="lead mb-4">
            Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Manduma pindureta quium dia nois paga.
            </p>

            <div class="d-flex flex-column flex-md-row">
              <a href="/docs/5.1/getting-started/introduction/" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">Get started</a>
              <a href="/docs/5.1/getting-started/download/" class="btn btn-lg btn-outline-secondary mb-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 5.1.3');">Download</a>
            </div>
            <p class="text-muted mb-0">
              Currently <strong>v0.0.2</strong>
              <span class="px-1">·</span>
            </p>
          </div>
        </div>
    </div>
    </div>
  </main>
  }
}

export default Body;
