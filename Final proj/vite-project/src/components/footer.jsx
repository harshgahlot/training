function Footer() {
  return (
    <footer id="site-footer">
      <div class="bg-success bg-opacity-25 py-5">
        <div class="container py-3">
          <div class="row">
            <div class="col-xl-3 col-md-6 col-sm-12">
              <h5 class="pb-3">
                <i class="fa-solid fa-user-group pe-1"></i> About us
              </h5>
              <span class="text-secondary">
                Empowering learners worldwide with flexible, high-quality
                courses. Our platform offers diverse subjects, expert
                instructors, and interactive content to help you achieve your
                educational goals.
              </span>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <h5 class="pb-3">
                <i class="fa-solid fa-link pe-1"></i> Important links
              </h5>
              <ul>
                <li>
                  <a href="#" class="text-decoration-none link-secondary">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none link-secondary">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none link-secondary">
                    Terms of services
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <h5 class="pb-3">
                <i class="fa-solid fa-location-dot pe-1"></i> Our location
              </h5>
              <span class="text-secondary">
                Mindspring
                <br />
                Chennai
                <br />
                , India
                <br />
              </span>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <h5 class="pb-3">
                <i class="fa-solid fa-paper-plane pe-1"></i> Stay updated
              </h5>
              <form>
                <input
                  type="text"
                  class="w-100 mb-2 form-control"
                  name=""
                  placeholder="Email ID"
                />
                <button class="w-100 btn btn-dark">Subscribe now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12"></div>
            <div class="col-md-6 col-sm-12">
              <span class="text-secondary pt-1 float-md-end float-sm-start">
                Copyright &copy; 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
