import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Guru from "../assets/guru.jpg";
import Partners from "../components/Partners";
import Banner from "../assets/banner.jpg";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import axios from "axios";
import _ from "../config";
import Loader from "../components/Loader";
import Empty from "../assets/empty.png";
import Methodology from "../assets/methodology.JPG";
const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreGuru, setShowMoreGuru] = useState(false);
  ReactGA.pageview("/home");

  const [state, setState] = useState({
    data: "",
    loading: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${_.API_URL}/home`);
        if (!isCancelled) {
          setState({
            ...state,
            data: response.data,
            loading: false,
          });
        }
      } catch (error) {
        setState({
          ...state,
          data: null,
          loading: false,
        });
      }
    };

    fetchData();
    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <div>
      <div className="banner banner-bg">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img className="header-logo" src={Logo} alt="aayam-logo" />
            </Link>
          </div>
        </div>
        <div className="content">
          <p className="title-text small">
            Aayam is a society dedicated to promoting Indian Culture by training
            students in the nuances of Bharatnatyam since 1997 under
            Guru-Shishya Parampara.
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
            Aayam — a society for the promotion of culture
            <br />
            <br />
            Aayam is one of the few Indian Cultural Societies, which has been
            active in various dimensions of fine arts for the past twenty years.
            Although registered only in 1997, Aayam is working with a serious
            commitment and dedication in the direction of developing a new sense
            of belonging, especially amongst children. Therefore, it has been
            running a teaching institute for classical as well as contemporary
            arts by the most well-known professionals in every field.
            <br />
            <br />
            Aayam wants to achieve the Omega Point of aesthetics and reinterpret
            the traditions in the field of music, poetry, theatre, painting,
            dance, and even social issues. Our effort is to integrate all forms
            of art to achieve a wholesome experience. It has a full- time dance
            company, which is constantly creating new works in the field of
            dance and has been receiving rave reviews all over the country.
            <br />
            <br />
            In the field of social welfare too, Aayam has shown its commitment
            by organizing many events in collaboration with NDMC and Delhi
            Commission for Women on a regular basis.
            {showMore && (
              <>
                <br />
                <br />
                Aayam has produced some of the finest disciples in
                Bharatanatyam. Many of them have been awarded the prestigious
                National Scholarship from CCRT, Government of India. One of the
                students of Aayam-Shashrek Ambardar has been awarded the
                prestigious &#39;Bal Shree Award&#39; by the President of India.
                Many of the senior students of Aayam have been performing
                regularly and making waves in the field like Ritika, Kritika
                Kumar, Arshia Mathur, Aparna Chandnani, Tanusha Tyagi, Swati
                Mittal, Aashi Vats, Jai, Vibhuti and many others.
                <br />
                <br />
                Aayam truly believes that each student has an unimaginably
                strong potential and tries to explore it to its core so that
                they are able to truly justify the art of Bharatanatyam.
                <br />
                <br />
                Aayam has always been known for creating unusual work while
                taking the form of Bharatanatyam in all its purity, yet going
                beyond the confines of the traditional form and its content.
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
                <img className="mentor-image" src={Guru} alt="Sindhu Mishra" />
              </div>
            </div>
          </div>
          <div className="mentor-content">
            <div className="m-content">
              <div>
                {" "}
                <p className="title">Sindhu Mishra</p>{" "}
                <p className="sub"> The Guru and The Danseuse</p>
              </div>
              <p className="description">
                “Teaching Dance (Bharatanatyam) is like following a rigorous
                spiritual path as it is a way of paying obeisance to my
                illustrious Gurus. The driving force is the thought that I may
                not leave this body without repaying the debt of my great
                masters” – Sindhu Mishra. She has performed in almost all
                important and prestigious Cultural Festivals of India such as
                the Megh Malhar festival of U.P Government, Jhansi Festival,
                Lucknow Mahotsav, Tai Mahotsav Soorya Festival, Ganga Mahotsav,
                Nisha Gandhi Festival, Palakkad Festival, Bharat Bhawan, and
                many others as a solo Bharatanatyam Dancer. While performing in
                the classical milieu under the guidance of eminent Gurus, Shri
                KN Dakshinamoorthy, Shri KJ Govindarajan, and Smt. Kamalini
                Dutt, Sindhu has also emerged as a choreographer with a
                compelling style of her own, her themes speak of her concerns
                and convictions as a contemporary artist.She has conducted
                several workshops all over the country in modern dance
                movements. An intense believer in the integrity of her form,
                Sindhu has been awarded a National Fellowship by the Ministry of
                Human Resource Development for pursuing Creative Work in
                Bharatanatyam. She received the Natya Ratna Award conferred by
                Sh. R. Venkatraman, Former president of India, a state Award
                from the Sindhi Academy, Government of Delhi for contribution in
                the field of Bharatanatyam.
              </p>
              {showMoreGuru ? (
                <p className="description">
                  Sindhu is also an acknowledged name as an actress in theatre,
                  having worked with some of the most eminent theatre directors
                  of the country. Her work has featured in all the major
                  National Festivals of Theatre. As a solo performer in the play
                  NAACHNI’, she has been particularly acclaimed as an actress of
                  extraordinary talent at par with the best in the field. She
                  has played a vital role in conceiving and organizing extremely
                  important events and festivals for the Government of Delhi.
                  These events have been instrumental in reviving and promoting
                  all possible genres of arts. Her choreography at an event at
                  Arunachal Pradesh showcasing almost all tribal forms of the
                  state for Hon’ble Home Minister of India was highly
                  appreciated. She has been the choreographer for many grand
                  events, one of those being “Divya Kala Shakti – Witnessing
                  Ability in Disability” presented by 250 children with special
                  needs for Hon’ble President of India at President House,
                  organized by Department of Social Justice and Empowerment on
                  18th April 2019. Earning a huge appreciation for this event,
                  she received the opportunity to again choreograph this event
                  for Hon’ble President and Prime Minister of India, being
                  staged this time at Parliament House, on 23rd July 2019. At
                  the behest of Dadra Nagar Haveli’s administration, she
                  choreographed and conceived an unusual event “Samarpan” for
                  the Hon’ble President of India in Silwasa. The program
                  showcased the classical forms of India along with the tribal
                  dance forms of that region woven together in a beautiful
                  tapestry on 17th Feb 2020.
                </p>
              ) : null}
              <div className="center mt-4 mt-less">
                <div
                  onClick={() => {
                    setShowMoreGuru(!showMoreGuru);
                  }}
                  className="button"
                >
                  {!showMoreGuru ? <p>Read More.</p> : <p>Read less.</p>}
                </div>
              </div>
            </div>
            <div className="prev-next">
              {/* <div>
                <i className="fas fa-arrow-left c-icon"></i>
              </div>
              <div>
                <i className="fas fa-arrow-right c-icon"></i>
              </div> */}
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
                  Our guru Smt Sindhu Mishra says “that Indian cultural dance
                  and music has been considered as worship of God, practicing
                  these arts is like Sadhna(meditation) which transports the
                  performer to the higher plane of consciousness leading to
                  union between Individual self with Divine self. Hence,
                  learning any form of art not only helps in developing personal
                  skills but it completes all three dimensions of life and helps
                  to enjoy and live each dimension of life wholly and thus goes
                  the name- ‘Aayam’ “. With this belief, we are consistent in
                  our efforts to imbibe the importance of classical arts in our
                  students, so that they not only excel in the field of Art but
                  also in life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="part2">
          <img
            className="image-banner"
            src={Methodology}
            alt="Our Methodology"
          />
        </div>
      </div>
      <div className="section-achievements">
        <div className="center mt-4">
          <div className="title-bold mt-4">Our Achievements</div>
        </div>
        <div className="a-list">
          {state.loading ? (
            <div className="center">
              <Loader />
            </div>
          ) : state.data.Achievements.length > 0 ? (
            state.data.Achievements.map((e, i) => (
              <div key={i} className="a-card">
                <img src={e.Image.url} className="a-image" alt="achievement" />

                <p className="semi-blod">
                  <strong>{e.Name}</strong> –{e.Description}
                </p>
              </div>
            ))
          ) : (
            <div className="center flex-it">
              <div>
                <div>
                  <img className="empty-icon" src={Empty} alt="empty-icon" />
                </div>

                <div>
                  <p>No achievements found. Check again later </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="center mt-4">
          {state.data && state.data.Partners.length > 1 ? (
            <div className="title-bold mt-4">Our Partners</div>
          ) : (
            <div className="title-bold mt-4">Our Partner</div>
          )}
        </div>

        {state.loading ? (
          <div className="center">
            <Loader />
          </div>
        ) : state.data.Partners.length > 0 ? (
          <Partners data={state.data.Partners} />
        ) : (
          <div className="center flex-it">
            <div>
              <div>
                <img className="empty-icon" src={Empty} alt="empty-icon" />
              </div>

              <div>
                <p>No Partners. Check again later </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
