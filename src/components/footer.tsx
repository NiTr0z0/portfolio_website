const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/skabhinav_018/"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/abhinav-s-k-104b0327b/"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/NiTr0z0/"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="mailto:skabhinav018@gmail.com"
            role="button"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </section>
      </div>

      <div
        className="text p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <text className="text-white">Made with ❤ using React + Typescript</text>
      </div>
    </footer>
  );
};

export default Footer;
