import image from "../images/hackthoncontact.png";
import logo from "../images/logomal.png";
import bg from "../images/hackathonbg.jpg";
import ins from "../images/insta.png";
import HackCard from "./HackCard";
import ContactUs from "./ContactUs";
import csilogo from "../images/csilogo.png";
import Footer from "../ux/Footer";
// import React from "react";
export default function Hackathon() {
  // const [formData, setFormData] = React.useState({
  //   Name: "",
  //   EmailAddress: "",
  //   TeamSize: "",
  // });
  // const getData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://sheet.best/api/sheets/548bd2d0-d36d-48c9-a8d9-e6181acaf871"
  //     );
  //     const data = formData;
  //     setFormData(data);
  //   } catch (error) {}
  // };
  // React.useEffect(() => {
  //   getData();
  // }, []);
  //   function handleChange(event) {
  //     const { name, value, type, checked } = event.target;
  //     setFormData((prevFormData) => {
  //       return {
  //         ...prevFormData,
  //         [name]: type === "checkbox" ? checked : value,
  //       };
  //     });
  //   }
  return (
    <div>
      <section className="bg-temp text-red-50">
        <div
          style={{ backgroundImage: "url(" + bg + ")" }}
          className="bg-cover bg-center bg-no-repeat h-screen"
        >
          <div className="p-6">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={logo} alt="malhaar" className="w-16 md:w-24" />
                  <img src={csilogo} alt="" className="w-16 md:w-24" />
                </div>
                <ul className="text-lg gap-2 flex md:text-2xl text-white md:gap-3 justify-end relative">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">Register</li>
                  <li className="hover:underline">Contact Us</li>
                </ul>
              </div>
              <img
                src={ins}
                alt=""
                className="absolute right-6 top-20 w-5 md:right-6 md:top-24 md:w-7"
              />
            </div>
            <h1 className="pt-16 text-4xl md:text-7xl uppercase font-semibold p-7">
              Hackathon
            </h1>
            <p className="max-w-lg p-7">
              Big Brain time! Malhaar'22 brings to you a 24hr hackathon to show
              off your ingenious and clever side.
              <br /> No. Of team members: 4 <br /> Participation fee: FREE
              <br />
            </p>
            <button className="m-7 p-4 rounded-full bg-blue-400">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex">
          <HackCard title="3-5" sub="Number of members in a team" />
          <HackCard title="24hrs" sub="Duration of Hackathon" />
          <HackCard title="10+" sub="Number of teams participating" />
        </div>
        <section>
          <div className=" p-10 md:flex gap-4 justify-center md:p-36">
            <h1 className="text-3xl pb-3 md:text-7xl font-semibold">
              About <br></br>Hackathon
            </h1>
            <p className="max-w-3xl ">
              Malhaar'22 in collaboration with CSI brings to you a Hackathon
              exclusively sponsored by Cvent. Following are the details of the
              event- Date: November 23, 2022 Time: 10:00 a.m. onwards No. of
              team members: 3 to 5 THE WINNING TEAM will be awarded a handsome
              amount of 1,00,000/- to compliment its effort and hardwork!.
            </p>
          </div>
          <div className="flex flex-col-reverse p-10 md:flex md:flex-row gap-4 justify-center md:pt-10 md:p-36">
            <div>
              <p className="max-w-3xl ">
                COMING SOON! Registered teams will be provided with a problem
                statement to rack their brains on. They will have to work for a
                full day to present their groundbreaking ideas. The problem
                statements will be uploaded on the portal very soon and the
                teams will also be notified of the updates regarding it. Stay
                tuned and follow the official page of Malhaar to get timely
                updates!
              </p>
            </div>
            <h1 className="text-3xl md:text-7xl font-semibold">
              Problem <br></br>Statement
            </h1>
          </div>
        </section>
        <section className="md:grid md:grid-cols-2">
          <div className="p-10 md:p-20">
            <h1 className="text-4xl md:text-6xl font-semibold">Participate</h1>
            <p className="max-w-lg pt-10 md:p-10">
              The Participation fee for every team is absolutely FREE. So what
              are you waiting for? Get your tickets and REGISTER FOR FREE to get
              your contemplating minds aboard this avant-garde quest!
            </p>
            <img src={image} alt="laptop" />
          </div>
          <form className="flex flex-col p-10 pt-0 md:p-20 gap-4">
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input
                type="text"
                // onChange={handleChange}
                name="Name"
                // value={formData.Name}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                // onChange={handleChange}
                name="email"
                // value={formData.EmailAddress}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Team Size</label>
              <input
                type="text"
                // onChange={handleChange}
                // value={formData.TeamSize}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28 mt-4">
              Yes, I'M In
            </button>
          </form>
        </section>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}
