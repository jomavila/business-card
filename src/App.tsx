import profileImage from "./assets/profile.jpg";

const App = () => {
  return (
    <div className="App p-5">
      <div className="w-full md:w-[400px] card shadow-2xl mx-auto rounded-lg py-8">
        <div className="w-[250px] bg-[#253964] rounded-full p-2 mx-auto">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-auto rounded-full"
          />
        </div>

        <h1>JOMARI AVILA</h1>
        <h2>FULL STACK WEB DEVELOPER</h2>

        <h3>CONTACT</h3>
        <ul>
          <li className="flex flex-row items-center">
            <div className="w-[30px] h-[30px] me-2 bg-[#253964] flex items-center justify-center rounded-full">
              <i className="fa-solid fa-envelope text-base"></i>
            </div>
            Jomavila129@gmail.com
          </li>
          <li className="flex flex-row items-center">
            <div className="w-[30px] h-[30px] me-2 bg-[#253964] flex items-center justify-center rounded-full">
              <i className="fa-solid fa-globe text-base"></i>
            </div>
            www.jomavila.com
          </li>
          <li className="flex flex-row items-center">
            <div className="w-[30px] h-[30px] me-2 bg-[#253964] flex items-center justify-center rounded-full">
              <i className="fa-solid fa-location-dot text-base"></i>
            </div>
            Las Pinas, Metro Manila
          </li>
          <li className="flex flex-row items-center">
            <div className="w-[30px] h-[30px] me-2 bg-[#253964] flex items-center justify-center rounded-full">
              <i className="fa-solid fa-phone text-base"></i>
            </div>
            +639218955953
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
