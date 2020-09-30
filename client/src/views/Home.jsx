import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Partners from "../components/Partners";
const Home = ({ changeShowNavbar, showNavbar }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="triangle-left"></div>
      <div className="banner">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>
        <div className="content">
          <p className="title-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            earum!
          </p>
        </div>
        <div className="dash"></div>
        <div className="explore">
          <Link className="explore-link" to="/productions">
            {" "}
            Explore &nbsp; <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-sm">
        <div className="sm-content">
          <p className="title1">About Aayam</p>
          <p className="text">
            “Aayam”-an exclusive institute of arts, was founded in the year
            1997, and also affiliated with Pracheen Kala Kendra, an Open
            University of performing and visual arts. <br />
            Aayam was established by Ms.Sindhu Mishra, a learned Bharatnatyam
            dancer and a dedicated teacher with the view of making young
            generation aware of the aesthetics of performing arts like Dance &
            Music.
            <br />
            <br />
            <br /> It is observed that in today’s growing age of technology,
            kids are being raised more on internet and various flashy gadgets
            rather than enjoying outdoor physical activities. On one hand, teens
            could be seen outperforming their teachers and parents in technology
            and much more ambitious but on other hand their abilities are being
            measured on academic parameters alone thereby limiting one’s own
            creativity and thought process & thus youth is seeing the world only
            through the screen in their hands.
            {showMore && (
              <>
                <br />
                <br />
                <br />
                In such an increasingly globalized and competitive environment,
                the strength of all the arts including dance, music, theatre,
                painting etc. need to be recognized which plays an important
                role in its ability to fuel the mind and thus fuels our
                creativity. A creative mind has the ability to make discoveries,
                innovations and thereby excelling in any field.
                <br />
                <br />
                <br /> Dance and music are capable of breaking boundaries of
                caste, creed or language and unite people from different
                background and cultural heritage. Dance is conversation between
                body and soul. It is the expression of emotions, feelings and
                opinions through graceful movements and manipulation of body,
                whereas music touches the soul by transcending all boundaries of
                communication and helps one to manifest unspoken desire.
              </>
            )}
          </p>
          <div className="center mt-4">
            <div
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="button"
            >
              {!showMore ? <p>Read More.</p> : <p>Read less.</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="section-mentors">
        <div className="center">
          <div className="title-bold">Our Guru</div>
        </div>
        <div className="card-list">
          <div className="mentors-list">
            <div className="mentor">
              <div>
                <img
                  className="mentor-image"
                  src="https://source.unsplash.com/500x500/?dancer"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mentor-content">
            <div className="m-content">
              <div>
                {" "}
                <p className="title">Lorem, ipsum.</p>{" "}
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, molestias rem tempore, voluptatem mollitia nam,
                consectetur error odit exercitationem voluptatum optio iure
                magni quidem accusamus atque! Sit impedit aut doloribus. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Esse dolorem
                eligendi, sapiente, quis tempora illo natus dolores corrupti
                porro cum harum consectetur hic. Quos facere, dignissimos
                sapiente illum ex hic? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas mollitia ad tenetur maiores ut quod
                tempore non consectetur neque? Reprehenderit officia commodi,
                consequuntur laboriosam placeat alias deleniti eos maiores
                minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque dicta sed porro quae, aspernatur quisquam veniam
                assumenda adipisci eaque, sapiente dolorem dolore animi
                veritatis repellat ipsa totam laudantium voluptatibus facere.
              </p>
            </div>
            <div className="prev-next">
              <div>
                <i className="fas fa-arrow-left c-icon"></i>
              </div>
              <div>
                <i className="fas fa-arrow-right c-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-bar">
        <div className="part1">
          <div className="our-methodology">
            <div>
              <div>
                <div className="title-bold">Our Methodology</div>
              </div>
              <div>
                <p className="description white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, tempore dignissimos doloremque deserunt omnis nulla
                  pariatur corrupti voluptatibus reprehenderit rerum atque qui
                  veniam quis eos voluptates magnam animi accusamus deleniti?
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <img
            className="image-banner"
            src="https://source.unsplash.com/1920x1080/?building"
            alt=""
          />
        </div>
      </div>
      <div className="section-achievements">
        <div className="center mt-4">
          <div className="title-bold mt-4">Our Achievements</div>
        </div>
        <div className="a-list">
          <div className="a-card">
            <img
              src="https://via.placeholder.com/200"
              className="a-image"
              alt="achievement"
            />

            <p className="semi-blod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium sint, cum ullam hic deserunt illum.
            </p>
          </div>
          <div className="a-card">
            <img
              src="https://via.placeholder.com/200"
              className="a-image"
              alt="achievement"
            />

            <p className="semi-blod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium sint, cum ullam hic deserunt illum.
            </p>
          </div>
          <div className="a-card">
            <img
              src="https://via.placeholder.com/200"
              className="a-image"
              alt="achievement"
            />

            <p className="semi-blod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium sint, cum ullam hic deserunt illum.
            </p>
          </div>
        </div>
      </div>
      <div className="section-achievements">
        <div className="center mt-4">
          <div className="title-bold mt-4">Our Partners</div>
        </div>

        <Partners />
      </div>
    </div>
  );
};

export default Home;
