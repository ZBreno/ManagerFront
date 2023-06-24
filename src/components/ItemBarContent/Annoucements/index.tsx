import Annoucement from "@/components/Annoucement";
import Header from "../../Header";

export default function Annoucements() {
  const annoucements = [
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
    {
      companyName: "Brisanet",
      image: "/assets/ImageAnnoucement.png",
      rating: 4.5,
      quantity_rating: 190,
      tags: [
        {
          icon: "/assets/door.png",
          name: "Home office",
        },
        {
          icon: "/assets/schedule.png",
          name: "Estágio",
        },
        {
          icon: "/assets/monitor.png",
          name: "Tecnologia",
        },
      ],
      city: "pau dos ferros",
    },
  ];
  return (
    <div className="px-10 mt-10">
      <Header title="Anúncios" subtitle="Anúncios" />
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 sm:grid-cols-2 gap-4 mt-10">
        {annoucements.map(({companyName, image,rating, quantity_rating, tags, city}, index) => (
          <Annoucement companyName={companyName} image={image} rating={rating} quantity_rating={quantity_rating} tags={tags} city={city}/>
        ))}
        
      </div>
    </div>
  );
}
