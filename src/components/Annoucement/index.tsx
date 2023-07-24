import { Avatar, Rating, Typography } from "@mui/material";
import Image from "next/image";
import ButtonForm from "../Button";
import Tag from "../Tag";

interface Tags {
  icon: string;
  tag_name: string;
}
interface AnnoucementProps {
  companyName: string;
  image: string;
  rating: number;
  quantity_rating: number;
  tags: Tags;
  city: string;
  id: number;
  companyImage: string;
}

export default function Annoucement({
  companyName,
  image,
  rating,
  quantity_rating,
  tags,
  city,
  id,
  companyImage,
}: AnnoucementProps) {
  const token = localStorage.getItem("auth-token-dve");

  return (
    <div className="border border-gray-400 border-opacity-50 rounded-lg ">
      <div className="relative min-w-fit h-28">
        <Image
          alt="imagem de anuncio"
          src={`http://127.0.0.1:8001${image}`}
          fill
          className="rounded-t-lg object-cover "
        />
      </div>
      <div className="mx-4">
        <div className=" relative flex justify-end">
          <Avatar
            alt="Remy Sharp"
            src={`http://127.0.0.1:8001${companyImage}`}
            sx={{
              width: 50,
              height: 50,
            }}
            className=" object-cover absolute -top-[25px]"
          />
        </div>
        <div className=" pb-3 border-b border-text-500">
          <Typography className="font-bold text-base mt-6 text-text-500">
            {companyName}
          </Typography>
          <div className="flex ">
            <Rating
              name="read-only"
              value={rating}
              precision={0.1}
              readOnly
              size="small"
            />
            <div className="ml-2 flex items-end">
              <Typography
                className="font-bold text-xs text-text-500"
                style={{ fontSize: 12 }}
              >
                {rating}
              </Typography>
              <Typography
                className="font-bold text-xs text-text-500 ml-1"
                style={{ fontSize: 10 }}
              >
                ({quantity_rating})
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map(({ icon, tag_name }, index) => (
            <Tag key={index} name={tag_name} icon={icon} />
          ))}
        </div>
        <div className="flex justify-between mt-4 mb-4 items-center">
          <Typography className="text-xs font-bold">{city}</Typography>
          <a
            target="_blank"
            href={`http://localhost:3001/announcementDetail/${id}?token=${token}`}
            className="font-poppins flex items-center bg-primary-500 text-white rounded-lg text-[10px] px-2 py-1"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
}
