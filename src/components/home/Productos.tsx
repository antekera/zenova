export function Productos() {
  return (
    <section id="productos" className="services-area relative">
      <div className="container">
        <div className="flex">
          <div className="mx-4 w-full lg:w-1/2">
            <div className="section-title pb-10">
              <h4 className="title">Crafted For</h4>
              <p>
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <div className="row">
              <div className="w-full md:w-1/2">
                <div className="services-content mx-4 block sm:flex">
                  <div className="services-icon">
                    <i className="lni-bolt" />
                  </div>
                  <div className="services-content media-body mb-8 ml-0 sm:ml-3">
                    <h4 className="services-title">Startup</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="services-content mx-4 block sm:flex">
                  <div className="services-icon">
                    <i className="lni-bar-chart" />
                  </div>
                  <div className="services-content media-body mb-8 ml-0 sm:ml-3">
                    <h4 className="services-title">SaaS Business</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="services-content mx-4 block sm:flex">
                  <div className="services-icon">
                    <i className="lni-brush" />
                  </div>
                  <div className="services-content media-body mb-8 ml-0 sm:ml-3">
                    <h4 className="services-title">Agency</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="services-content mx-4 block sm:flex">
                  <div className="services-icon">
                    <i className="lni-bulb" />
                  </div>
                  <div className="services-content media-body mb-8 ml-0 sm:ml-3">
                    <h4 className="services-title">App Landing</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="services-image">
      <div className="image">
        <img src="assets/images/services.png" alt="Services" />
      </div>
    </div> */}
    </section>
  );
}
