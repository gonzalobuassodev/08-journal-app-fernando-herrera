interface Props {
  images: string[];
}

export const ImageGallery = ({ images }: Props) => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {images &&
            images.map((image) => (
              <div key={image} className="w-full">
                <img
                  alt={`gallery image ${image + 1}`}
                  className="w-full h-full object-cover p-[1px]"
                  src={image}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
