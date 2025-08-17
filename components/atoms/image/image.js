// components/CustomImage.js
import Image from 'next/image';

const CustomImage = ({ src, alt, className }) => {

  const picStyle = {
    position: "relative",
    display: "block",
  }
  return (
    <picture style={picStyle} className={className}>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='fill'
      />
    </picture>

  );
};

export default CustomImage;
