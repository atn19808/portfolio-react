import { stackList } from "../data/ProjectData";
function About() {
  return (
    <div className="mt-20" id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <img
            className="mx-auto mb-4 mt-0 max-w-[120px]"
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Your Name</strong> Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <div className="mx-auto -mb-8 flex flex-wrap justify-center">
            {stackList.map((stack, index) => (
              <div
                key={index}
                className="tech mb-8 flex min-w-[100px] max-w-[100px] flex-col items-center"
              >
                <img className="h-12 w-12" src={stack.img} alt={stack.name} />
                <div className="text-sm">{stack.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
