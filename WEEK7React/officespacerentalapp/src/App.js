import React from 'react';

function App() {
  const officeSpaces = [
    { name: "Prestige Tech Park", rent: 75000, address: "Bangalore" },
    { name: "WeWork Galaxy", rent: 55000, address: "Bangalore" },
    { name: "DLF Cyber City", rent: 80000, address: "Gurgaon" },
    { name: "Tidel Park", rent: 40000, address: "Chennai" }
  ];

  const heading = <h1 style={{ textAlign: "center", color: "#333" }}>Office Space Rental App</h1>;

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px"
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {heading}
      <img
        src="https://cdn.prod.website-files.com/65699217dfd51ffa36145d36/68808ce0f04105eeb9bfcdb6_imgi_80_65cf0f15623ad82237b80705_Artboard%204-100-p-1080.webp"
        alt="Office Space"
        style={imageStyle}
      />

      <h2 style={{ marginTop: "30px" }}>Available Offices:</h2>
      <ul>
        {officeSpaces.map((office, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <strong>{office.name}</strong> <br />
            Address: {office.address} <br />
            Rent:{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
