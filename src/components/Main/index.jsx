import { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerMain, HeaderMain } from "../../styles";

export default function Main() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://directus.douglassacramento.com.br/items/medications"
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
            window.open("https://directus.douglassacramento.com.br", "_blank")
          }
        >
          <h4 id="insert">Novo medicamento</h4>
        </button>
      </HeaderMain>
      <Card medications={medications} />
    </ContainerMain>
  );
}
