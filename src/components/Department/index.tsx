import Header from "../Header";

export default function Department(){
    const options = [
        { text: "Rercusos Humanos", value: 0 },
        { text: "Almoxarifado", value: 1 },
        { text: "Administrativo", value: 2 },
      ];
  return (
    <div>
      <Header title="Derpatementos" subtitle="Derpatemento" options={options} />
    </div>
  );
}