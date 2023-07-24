"use client";
import Annoucement from "@/components/Annoucement";
import Header from "../../Header";
import ButtonForm from "@/components/Button";
import { Modal } from "@mui/material";
import LoginForm from "@/components/LoginForm";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Announcement } from "@mui/icons-material";

export default function Annoucements() {
  interface Announcement {
    company_name: string;
    company_image: {
      profile_picture: string;
    };
    main_image: {
      image: string;
    };
    rate: number;
    total_rates: number;
    tags: {
      icon: string;
      tag_name: string;
    };
    city: string;
    id: number;
  }

  const [open, setOpen] = useState(false);
  const { userDve } = useAuth();

  useEffect(() => {
    console.log(userDve);
  }, [userDve]);

  return (
    <div className="px-10 mt-10">
      {userDve ? (
        <div>
          <Header title="Anúncios" subtitle="Anúncios" page={4}/>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 gap-4 mt-10">
            {userDve.my_announcements.map((announcement: Announcement) => (
              <Annoucement
                companyImage={announcement.company_image.profile_picture}
                companyName={announcement.company_name}
                image={announcement.main_image.image}
                rating={announcement.rate}
                quantity_rating={announcement.total_rates}
                tags={announcement.tags}
                city={announcement.city}
                id={announcement.id}
                key={announcement.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <ButtonForm
            text={`Conectar com o DVE`}
            onClick={() => setOpen(!open)}
            style={{ textTransform: "none" }}
            className="bg-primary-500 text-white hover:bg-primary-500 px-6 py-2  font-medium rounded-sm text-base"
          />

          <Modal
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="title"
          >
            <LoginForm handleModal={() => setOpen(!open)} />
          </Modal>
        </div>
      )}
    </div>
  );
}
