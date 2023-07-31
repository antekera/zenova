export function Newsletter() {
  return (
    <section className="call-to-action relative overflow-hidden bg-blue-600">
      <div className="call-action-image absolute left-0 top-0 h-full w-1/2">
        <img src="assets/images/call-to-action.png" alt="call-to-action" />
      </div>

      <div className="container-fluid">
        <div className="row justify-end">
          <div className="w-full lg:w-1/2">
            <div className="call-action-content mx-auto py-32 text-center">
              <h2 className="mb-5 text-5xl font-semibold leading-tight text-white">
                Curious to Learn More? Stay Tuned
              </h2>
              <p className="mb-6 text-white">
                You let us know whenever you want us to update anything or think
                something can be optimized.
              </p>
              <form
                action="#"
                className="call-newsletter relative mx-auto w-5/6 md:w-2/3"
              >
                <i className="lni-envelope absolute left-0 top-0 pl-5 pt-3 text-xl text-blue-600" />
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full rounded-full bg-white py-3 pl-12 pr-40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn absolute right-0 top-0 mr-1 mt-1"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
