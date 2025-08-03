import { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerMain, HeaderMain } from "../../styles";

export default function Main() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://glowing-addition-929431b399.strapiapp.com/api/medicamentos"
        );
        const data = await res.json();

        setMedications(data.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContainerMain>
      <HeaderMain>
        <button
          onClick={() =>
            window.open(
              "https://glowing-addition-929431b399.strapiapp.com/admin/auth/login",
              "_blank"
            )
          }
        >
          <h4 id="insert">Novo medicamento</h4>
        </button>
      </HeaderMain>
      <Card medications={medications} />
    </ContainerMain>
  );
}
