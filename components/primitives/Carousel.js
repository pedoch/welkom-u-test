// import { ActiveDot, InactiveDot } from '../icons';
import { ChevronLeftIcon, ChevronRightIcon } from 'evergreen-ui';
import { Children, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function ActualResponsiveCarouselSlider({
  height,
  width,
  dots,
  arrows,
  children,
  size,
}) {
  const [state, setState] = useState(false);
  const [propsValues, setPropsValues] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [childrenSlides, setChildrenSlides] = useState([]);

  const setNumberOfSlides = (num) => setNumberOfChildren(num);
  const setChildrenSlidesFunc = (array) => setChildrenSlides(array);

  useEffect(() => {
    let properties = { ...propsValues };
    if (height) properties = { ...properties, height };
    if (width) properties = { ...properties, height };
    setCurrentIndex(size - 1);

    setPropsValues(properties);
  }, [height, width]);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full m-auto overflow-hidden flex justify-between items-center relative"
        style={{ ...propsValues }}
      >
        <ChevronLeftIcon
          className={`cursor-pointer z-10 py-1 px-2 rounded-full border border-black text-black bg-white absolute my-auto left-0 shadow-md ${
            currentIndex === size - 1 && 'hidden'
          }`}
          size={35}
          onClick={() => {
            if (currentIndex != size - 1) setCurrentIndex(currentIndex - 1);
            else setCurrentIndex(numberOfChildren - 1);
          }}
        />
        <div className="w-full h-full overflow-hidden">
          <SliderContent
            currentIndex={currentIndex}
            setNumberOfSlides={setNumberOfSlides}
            setChildrenSlidesFunc={setChildrenSlidesFunc}
            size={size}
          >
            {children}
          </SliderContent>
        </div>
        <ChevronRightIcon
          className={`cursor-pointer z-10 py-1 px-2 rounded-full border border-black text-black bg-white absolute my-auto right-0 shadow-md ${
            currentIndex === numberOfChildren - 1 && 'hidden'
          }`}
          size={35}
          onClick={() => {
            if (currentIndex != numberOfChildren - 1) setCurrentIndex(currentIndex + 1);
            else setCurrentIndex(size - 1);
          }}
        />
      </div>
      {/* <div className="w-full flex justify-center space-x-3">
        {childrenSlides.map((child, index) => {
          return (
            <span onClick={() => setCurrentIndex(index)} className="cursor-pointer">
              <Dot key={index} index={index} currentIndex={currentIndex} />
            </span>
          );
        })}
      </div> */}
    </div>
  );
}

const SliderContent = ({
  children,
  setNumberOfSlides,
  currentIndex,
  setChildrenSlidesFunc,
  size,
}) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const childrenCount = Children.count(children);

  const ref = useRef(null);

  const getWidth = () => {
    ref.current ? setInnerWidth(ref.current.offsetWidth) : setInnerWidth(0);
  };

  useEffect(() => {
    setNumberOfSlides(childrenCount);
    setChildrenSlidesFunc(children);
  }, []);

  useEffect(() => {
    getWidth();
    window.addEventListener('resize', getWidth);
    getWidth();

    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return (
    <SliderContentStyled
      transform={() => {
        if (currentIndex <= size - 1) return 0;
        return (innerWidth / size) * (currentIndex - (size - 1));
      }}
      size={size}
      ref={ref}
    >
      {children}
    </SliderContentStyled>
  );
};

export const Slide = ({ children, size }) => {
  const SlideStyled = styled.div`
    height: auto;
    min-width: ${(props) => {
      return 100 / props.size;
    }}%;
    min-height: 100%;
  `;
  return (
    <SlideStyled className="" size={size}>
      {children}
    </SlideStyled>
  );
};

// const Dot = ({ index, currentIndex }) => {
//   if (index === currentIndex) return <ActiveDot />;
//   else return <InactiveDot />;
// };

const SliderContentStyled = styled.div`
  transform: translateX(-${(props) => props.transform}px);
  transition: transform ease-out 0.45s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: none;
`;
