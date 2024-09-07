const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ali-attia-32b898223"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ali.zaghloul.393/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ali22905"
        target="_blank"
        rel="noreferrer"
        style={{width: '30px'}}
      >
        <img alt="github-link" src="../assets/github-img.jpg" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
