import React, { useState } from 'react';
import Image from 'next/image';

import addFadeInClass from '../../helpers/addFadeInClass';

declare type ImgElementStyle = NonNullable<
  JSX.IntrinsicElements['img']['style']
>;

const NextPlaceholderImage = ({
  placeholderElement,
  priority,
  src,
  width,
  height,
  alt,
  layout,
  objectFit,
}: {
  placeholderElement: React.ReactNode;
  priority?: boolean;
  src: string;
  width: number;
  height: number;
  alt?: string;
  layout?: 'fixed' | 'intrinsic' | 'responsive';
  objectFit?: ImgElementStyle['objectFit'];
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLoad = (event) => {
    setIsImageLoaded(true);
    addFadeInClass(event);
  };

  return (
    <>
      {!isImageLoaded && placeholderElement}
      {src && (
        <Image
          priority={priority || undefined}
          src={src}
          width={width}
          height={height}
          alt={alt || undefined}
          layout={layout}
          objectFit={objectFit}
          onLoad={handleLoad}
        />
      )}
    </>
  );
};

export default NextPlaceholderImage;
