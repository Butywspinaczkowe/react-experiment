import { useEffect, useState } from "react";
import axios from "axios";

function ListGroup() {
  //let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  //const [selectedIndex, setSelectedIndex]= useState(-1);
  const [images, setImages] = useState<{ message: string; status: string }[]>(
    []
  );

  
    const fetchImages = async () => {
      try {
        console.log("fetching");
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setImages([response.data]);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };
    useEffect(() => {
    fetchImages();
  }, []);

  console.log("Images:", images);
  return (
    <>
      <h1>List of stuff</h1>

      <div
        className="image-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((image) => (
          <img
            key={image.message}
            src={image.message}
            style={{ maxWidth: "100%", height: "auto" }}
            onClick={fetchImages}
          />
        ))}
      </div>
      {/* {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default ListGroup;
