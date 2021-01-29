import { SearchInput } from 'evergreen-ui';
import Carousel, { Slide } from '../../primitives/Carousel';

function ListingDefault({ setView }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full px-5">
      <div className="w-full">
        <div className="flex justify-end mt-10 mb-5">
          <SearchInput placeholder="Search..." className="bg-gray-50" height={40} />
        </div>
        <Carousel size={3}>
          <Slide size={3}>
            <Card
              image="/images/coins.png"
              title="Exchange Currency"
              description="Exchange money from one local currency to another"
              colour="bg-yellow-50"
              setView={setView}
            />
          </Slide>
          <Slide size={3}>
            <Card
              image="/images/house.png"
              title="Get an Accomodation"
              description="Find the best accomodation at affordable prices"
              colour="bg-blue-50"
              setView={setView}
            />
          </Slide>
          <Slide size={3}>
            <Card
              image="/images/globe.png"
              title="Explore your Destination"
              description="Get relevant information about any country and community"
              colour="bg-green-50"
              setView={setView}
            />
          </Slide>
          <Slide size={3}>
            <Card
              image="/images/globe.png"
              title="Explore your Destination"
              description="Get relevant information about any country and community"
              colour="bg-green-50"
              setView={setView}
            />
          </Slide>
          <Slide size={3}>
            <Card
              image="/images/globe.png"
              title="Explore your Destination"
              description="Get relevant information about any country and community"
              colour="bg-green-50"
              setView={setView}
            />
          </Slide>
        </Carousel>
      </div>
    </div>
  );
}

function Card({ image, description, title, colour, setView }) {
  return (
    <div
      className={`flex justify-between p-4 rounded items-center mx-2 py-16 h-auto min-h-full cursor-pointer smallLaptop:py-8 ${colour}`}
      onClick={() => setView(title)}
    >
      <div className="w-full">
        <p className="text-lg font-semibold mb-3">{title}</p>
        <p>{description}</p>
      </div>
      <div className="h-32 smallLaptop:hidden">
        <img className="ml-2 h-full w-auto smallLaptop:hidden" src={image} />
      </div>
    </div>
  );
}

export default ListingDefault;
