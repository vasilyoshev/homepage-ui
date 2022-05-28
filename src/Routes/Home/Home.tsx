import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface Image {
  id?: number;
  webformatURL: string;
  type: string;
}

interface ImageResponse {
  data: Image[];
}

interface ImagesListProps {
  images: Image[];
}

const StandardImageList: React.FC<ImagesListProps> = ({ images }) => {
  return (
    <ImageList cols={2}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img src={image.webformatURL} alt={image.type} loading='lazy' />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  async function getImages() {
    try {
      const response: AxiosResponse = await axios.get<ImageResponse>(
        'https://pixabay.com/api/?key=27694455-80dab1a81d1b698d5c796781d&q=yellow+flowers&image_type=photo',
        {
          params: {
            per_page: 10
          }
        }
      );
      const { data } = response;
      setImages(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <StandardImageList images={images} />
    </>
  );
};
