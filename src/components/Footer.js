function Footer() {
  return (
    <div className="relative h-64 w-full bg-[url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg)] bg-cover bg-no-repeat">
      <div className="Container">
        <span className="absolute bottom-16 text-stone-50">
          Coded with 💙 by{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/anh-ngo-64880692/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anh Ngo
          </a>{" "}
        </span>
      </div>
    </div>
  );
}

export default Footer;
