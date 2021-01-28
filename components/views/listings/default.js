import { SearchInput } from 'evergreen-ui';
import Slider from 'react-slick';

function ListingDefault({ setView }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full px-10">
      <div className="w-full">
        <div className="flex justify-end mt-10 mb-5">
          <SearchInput placeholder="Search..." className="bg-gray-50" height={40} />
        </div>
        <Slider {...settings} className="text-black">
          <Card
            image="/images/coins.png"
            title="Exchange Currency"
            description="Exchange money from one local currency to another"
            colour="bg-yellow-50"
            setView={setView}
          />
          <Card
            image="/images/house.png"
            title="Get an Accomodation"
            description="Find the best accomodation at affordable prices"
            colour="bg-blue-50"
            setView={setView}
          />
          <Card
            image="/images/globe.png"
            title="Explore your Destination"
            description="Get relevant information about any country and community"
            colour="bg-green-50"
            setView={setView}
          />
          <Card
            image="/images/coins.png"
            title="Exchange Currency"
            description="Exchange money from one local currency to another"
            colour="bg-red-50"
            setView={setView}
          />
          <Card
            image="/images/coins.png"
            title="Exchange Currency"
            description="Exchange money from one local currency to another"
            colour="bg-yellow-50"
            setView={setView}
          />
        </Slider>
      </div>
    </div>
  );
}

function Card({ image, description, title, colour, setView }) {
  return (
    <div
      className={`flex justify-between p-4 rounded items-center mx-4 py-16 h-full cursor-pointer ${colour}`}
      onClick={() => setView(title)}
    >
      <div className="w-full">
        <p className="text-lg font-semibold mb-3">{title}</p>
        <p>{description}</p>
      </div>
      <img className="ml-2 h-32 w-auto" src={image} />
    </div>
  );
}

export default ListingDefault;
