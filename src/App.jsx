import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import hassan from "./assets/hassan.jpeg"

function App() {
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("Sport");
  const [country, setCountry] = useState("PK");
  const getNews = async (topic, country) => {
    const apiKey = "pub_621857ca538510408306905e52b9f0b9f73ae";
    const url = `https://newsdata.io/api/1/news`;

    try {
      const respone = await axios.get(url, {
        params: {
          apikey: apiKey,
          q: topic,
          country: country,
          language: "en",
        },
      });
      setNews(respone.data.results);
      console.log(respone.data.results);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    getNews(topic, country);
  }, [topic, country]);

  return (
    <div className="container">
      <h1>News Search Engine</h1>
      <label htmlFor="topic">
        Topic:
        <select
          id="topic"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option value="Sport">Sport</option>
          <option value="Corruption">Corruption</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Politics">Politics</option>
          <option value="Terrorism">Terrorism</option>
        </select>
      </label>

      <br />

      <label htmlFor="country">
        Country:
        <select
          id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value="PK">Pakistan</option>
          <option value="IN">India</option>
          <option value="US">USA</option>
        </select>
      </label>

      <div className="card">
        <Carousel>
          {news.map((e, i) => {
            return (
              <Carousel.Item key={i} interval={2000}>
                <img src={e?.image_url} alt={e.title} className="d-block w-100" />
                <Carousel.Caption>
                  <h3>{e.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>

              // <Card key={i} style={{ width: "18rem" }}>
              //   <Card.Img variant="top" src={e?.image_url} />
              //   <Card.Body>
              //     <Card.Title>{e?.title}</Card.Title>
              //     <Card.Text>{e?.description}</Card.Text>
              //   </Card.Body>
              //   <Card.Body>
              //     <Card.Link href={e?.source_url}>{e?.source_name}</Card.Link>
              //   </Card.Body>
              // </Card>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
