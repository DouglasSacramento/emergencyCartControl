import { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerMain, HeaderMain } from "../../styles";

export default function Main() {
  const [showAll, setShowAll] = useState(true);
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
        <button onClick={() => setShowAll(!showAll)}>
          <h4 id="show">{showAll ? "Esconder itens" : "Mostrar itens"}</h4>
        </button>
        <button
          onClick={() =>
            window.open(
              "https://glowing-addition-929431b399.strapiapp.com/admin/auth/login",
              "_blank"
            )
          }
        >
          <h4 id="insert">Entrar</h4>
        </button>
      </HeaderMain>
      {showAll && <Card medications={medications} />}
    </ContainerMain>
  );
}
