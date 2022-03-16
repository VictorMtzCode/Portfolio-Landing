import "./SingleProject.css";
import { useRef } from "react";
import ProjectImagesCarousel from "./ProjectImagesCarousel";
import ContactMe from "../ContactMe/ContactMe";
import { chitChatData } from "../../ProjectsData";
import { Helmet } from "react-helmet-async";
import MainButton from "../MainButton";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const ChitChat = () => {
  const featuresSection = useRef(null);
  const goToFeatures = () => {
    window.scrollTo({ top: featuresSection.current.offsetTop });
  };
  return (
    <section className="single-project">
      <Helmet>
        <title>Chit Chat</title>
        <meta name="description" content="Chat Project" />
      </Helmet>
      <div className="project-headers">
        <h1 className="single-project-title">Chit Chat</h1>
        <MainButton
          link="https://anime-shoppe.netlify.app/"
          text="LIVE SITE"
          type="main-btn secondary-btn"
        />
        <FaArrowAltCircleDown className="arrow-down" onClick={goToFeatures} />
      </div>
      <div className="single-project-overview">
        <h1>{chitChatData.Overview.title}</h1>
        <p className="single-project-p">{chitChatData.Overview.text}</p>
        <span className="title-technologies single-project-technologies">
          <p className="title-technology">MongoDB</p>
          <p className="title-technology">Express</p>
          <p className="title-technology">React</p>
          <p className="title-technology">Node JS</p>
        </span>
      </div>
      <div ref={featuresSection} className="single-project-features">
        <h1 className="features-title">Features</h1>
        <div className="feature-no-photo">
          <h1 className="feature-h1">{chitChatData.Authentication.title}</h1>
          <p className="single-project-p">{chitChatData.Authentication.text}</p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h1 className="feature-h1">{chitChatData.FormErrors.title}</h1>
            <p className="single-project-p">
              {chitChatData.FormErrors.textOne}
            </p>
            <p className="single-project-p">
              {chitChatData.FormErrors.textTwo}
            </p>
          </div>
          <img
            className="feature-img"
            src={chitChatData.FormErrors.image}
            alt="chitchat-form-errors"
          />
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">{chitChatData.Search.title}</h1>
          <p className="single-project-p">{chitChatData.Search.text}</p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h1 className="feature-h1">{chitChatData.NewGC.title}</h1>
            <p className="single-project-p">{chitChatData.NewGC.textOne}</p>
            <p className="single-project-p">{chitChatData.NewGC.textTwo}</p>
          </div>
          <img
            className="feature-img"
            src={chitChatData.NewGC.image}
            alt="chat-new-gc"
          />
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h1 className="feature-h1">{chitChatData.EditGC.title}</h1>
            <p className="single-project-p">{chitChatData.EditGC.textOne}</p>
            <p className="single-project-p">{chitChatData.EditGC.textTwo}</p>
          </div>
          <img
            className="feature-img"
            src={chitChatData.EditGC.image}
            alt="chat-edit-gc"
          />
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">{chitChatData.NodeMongo.title}</h1>
          <p className="single-project-p">{chitChatData.NodeMongo.text}</p>
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">Fully Responsive</h1>
          <p className="single-project-p">
            Chit Chat is fully responsive to ensure the layout of the movie/show
            cards and the information on different pages are in the best
            position across all device widths. The website is responsive for
            mobile, tablet and desktop devices.
          </p>
        </div>
      </div>

      <ProjectImagesCarousel
        imageOne={chitChatData.CarouselImages.imageOne}
        imageTwo={chitChatData.CarouselImages.imageTwo}
        imageThree={chitChatData.CarouselImages.imageThree}
      />
      <div className="contact-div">
        <ContactMe />
        <FaArrowAltCircleUp
          className="arrow-up"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </section>
  );
};

export default ChitChat;
