interface ImageItem {
  id: number;
  img: string;
  title: string;
}

const imageArray: ImageItem[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluJTIwcGFpc3xlbnwwfHx8fDE2MjY3NzQzNzI&ixlib=rb-1.2.1&q=80&w=400",
    title: "Paisaje Montañoso",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxwbGF5YSUyMHRyb3BpY2FsfGVufDB8fHx8MTYyNjc3NDM4Ng&ixlib=rb-1.2.1&q=80&w=400",
    title: "Playa Tropical",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjaXR5JTIwbW9kZXJuJTIwYXZpbGFibGV8ZW58MHx8fHwxNjI2Nzc0NDQw&ixlib=rb-1.2.1&q=80&w=400",
    title: "Ciudad Moderna",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxib3NrJTIwdmVyZGUlMjBjbGFyZSUyMG5hdHVyZXxlbnwwfHx8fDE2MjY3NzQ0MDM&ixlib=rb-1.2.1&q=80&w=400",
    title: "Bosque Verde",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxhdGFyZGVjZXIlMjBlbGVjdHJpY3xlbnwwfHx8fDE2MjY3NzQ0MTg&ixlib=rb-1.2.1&q=80&w=400",
    title: "Atardecer en el Mar",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExfHxudXR1cmUlMjBzYWx2YWdlJTIwbGFuZHNjb3BlZXxlbnwwfHx8fDE2MjY3NzQ0MjI&ixlib=rb-1.2.1&q=80&w=400",
    title: "Naturaleza Salvaje",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluJTIwcGFpc3xlbnwwfHx8fDE2MjY3NzQzNzI&ixlib=rb-1.2.1&q=80&w=400",
    title: "Paisaje Montañoso",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxwbGF5YSUyMHRyb3BpY2FsfGVufDB8fHx8MTYyNjc3NDM4Ng&ixlib=rb-1.2.1&q=80&w=400",
    title: "Playa Tropical",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjaXR5JTIwbW9kZXJuJTIwYXZpbGFibGV8ZW58MHx8fHwxNjI2Nzc0NDQw&ixlib=rb-1.2.1&q=80&w=400",
    title: "Ciudad Moderna",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxib3NrJTIwdmVyZGUlMjBjbGFyZSUyMG5hdHVyZXxlbnwwfHx8fDE2MjY3NzQ0MDM&ixlib=rb-1.2.1&q=80&w=400",
    title: "Bosque Verde",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxhdGFyZGVjZXIlMjBlbGVjdHJpY3xlbnwwfHx8fDE2MjY3NzQ0MTg&ixlib=rb-1.2.1&q=80&w=400",
    title: "Atardecer en el Mar",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExfHxudXR1cmUlMjBzYWx2YWdlJTIwbGFuZHNjb3BlZXxlbnwwfHx8fDE2MjY3NzQ0MjI&ixlib=rb-1.2.1&q=80&w=400",
    title: "Naturaleza Salvaje",
  },
];

export const ImageGallery = () => {
  return (
    <>
      {/* <div className="flex flex-wrap overflow-scroll h-[500px] justify-center bg-white rounded-md">
          {imageArray.map((image) => (
            <div key={image.id}>
              <img src={image.img} className=" p-[1px]" />
            </div>
          ))}
        </div> */}

      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {imageArray.map((image, index) => (
            <div key={index} className="w-full">
              <img
                alt={`gallery image ${index + 1}`}
                className="block w-full object-cover object-center p-[1px]"
                src={image.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
