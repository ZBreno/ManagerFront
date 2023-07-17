import HeaderTable from "@/components/HeaderTable";
import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { Fingerprint, DoDisturbOn, CheckCircle } from "@mui/icons-material";
import ButtonForm from "@/components/Button";
import { useCreateCheckIn, useGetLastCheckIn } from "@/hooks/employee";
import { useEmployee } from "@/hooks/useEmployee";
import { useEffect, useState } from "react";
import { useMessage } from "@/hooks/useMessage";
import { useRouter } from "next/router";
export default function CheckIn() {
  const [message, setMessage] = useState<Record<string, string> | string>("");
  const { employee, setEmployee } = useEmployee();

  const {
    isLoading: isLoadingLastCheck,
    data: checkins,
    refetch,
  } = useGetLastCheckIn(employee?.id);

  const router = useRouter();
  useEffect(() => {
    if (employee) {
      refetch();
    }
  }, [employee]);
  const createCheckIn = useCreateCheckIn();

  const postCheckIn = () => {
    createCheckIn.mutate(
      { employee: employee?.id },
      {
        onSuccess: () => {
          setMessage({ message: "CheckIn feito!", type: "success" });
          refetch()
        },
        onError: () => {
          setMessage({ message: "a ação não pôde ser feita", type: "error" });
        },
      }
    );

    setTimeout(() => {
      setMessage("");
      setEmployee(false);
      router.push("/company");
    }, 5000);
  };
  return (
    <div>
      <Typography className="text-text-500 font-bold text-center text-5xl mt-10">
        Bem-vindo, {employee?.name}
      </Typography>
      {message && (
        <div className="flex justify-around mt-5">
          <Alert severity={message.type} className="w-3/5 ">
            {message.message}
          </Alert>
        </div>
      )}
      <div className="flex m-auto justify-evenly flex-wrap mt-10">
        <div className="bg-white py-5 px-10 rounded-lg">
          {isLoadingLastCheck ? (
            <div className="flex items-center h-full justify-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="">
              <Typography className="text-text-500 text-xl  font-semibold text-center mb-5">
                Últimos check-ins
              </Typography>
              <HeaderTable columns={["Data", "Horário"]} />
              {checkins.map(({ date, time }: { date: string; time: string; }, index: number) => (
                <Grid
                  className={`${
                    index % 2 == 0 ? "bg-gray-200" : "bg-white"
                  } p-2`}
                  container
                >
                  <Grid item xs={6}>
                    <Typography className="font-medium text-center text-base px-5  text-text-500">
                      {date}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className="font-medium text-center text-base px-5 text-text-500">
                      {time}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="bg-white p-5 rounded-lg mt-10 xl:mt-0 flex flex-col items-center">
            <Typography className="text-text-500 text-xl font-semibold text-center mb-5">
              Posicione a sua digital no leitor
            </Typography>
            <Fingerprint
              sx={{ width: 200, height: 200 }}
              className="text-text-500"
            />
            <div className="mt-5">
              {message && message.type == "success" ? (
                <CheckCircle
                  className="text-success-600"
                  sx={{ width: 48, height: 48 }}
                />
              ) : (
                <DoDisturbOn
                  className="text-warning-600"
                  sx={{ width: 48, height: 48 }}
                />
              )}
            </div>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <ButtonForm
              text="Fazer check-in"
              className="bg-primary-500 hover:bg-primary-500 text-white w-full"
              style={{ textTransform: "none" }}
              onClick={postCheckIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
