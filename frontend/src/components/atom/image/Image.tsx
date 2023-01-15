import { default as NextImage, ImageLoader, ImageProps } from 'next/image';

const loader: ImageLoader = ({ src, width, quality }) => {
  return quality
    ? `${src}?format=auto&quality=${quality}&width=${width}`
    : `${src}?format=auto&width=${width}`;
};
// TODO: rollback images with loader to next/image
export const Image = (props: ImageProps) => {
  return <NextImage loader={loader} {...props}/>
}
