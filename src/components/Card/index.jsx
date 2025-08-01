import { compareAsc, format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CardStyle, ContainerCardMain } from "../../styles";

export default function Card({ medications }) {
  const sortedMedications = [...medications].sort((a, b) =>
    compareAsc(parseISO(a.validade), parseISO(b.validade))
  );

  return (
    <>
      <ContainerCardMain>
        {sortedMedications.map((medication, index) => {
          const createdDate = medication.createdAt;
          const formattedIssuedTo = format(
            parseISO(createdDate),
            "dd/MMM/yyyy",
            { locale: ptBR }
          );

          const expirationDate = medication.validade;
          const formattedExpiration = format(
            parseISO(expirationDate),
            "dd/MMM/yyyy",
            { locale: ptBR }
          );

          const today = new Date();
          const medExpiredDate = parseISO(medication.validade);

          const sameMonth =
            medExpiredDate.getMonth() === today.getMonth() &&
            medExpiredDate.getFullYear() === today.getFullYear();

          const isExpired = medExpiredDate < today;
          const isThisMonth = sameMonth && !isExpired;

          return (
            <CardStyle
              $status={
                isExpired ? "expired" : isThisMonth ? "monthExpired" : "valid"
              }
              key={index}
            >
              <h4>{medication.nome}</h4>

              <p id="lot">
                <strong>Lote: </strong>
                {medication.lote}
              </p>
              <p id="expiredDate">
                <strong>Validade: </strong>
                {formattedExpiration}
              </p>
              <p id="amount">
                <strong>Quantidade:</strong> {medication.quantidade}
              </p>
              <p>
                <strong>Retirado por:</strong>
                {medication.retirado === null
                  ? " Está no armário"
                  : " " + medication.retirado}
              </p>
              <p>
                <strong>Data:</strong> {formattedIssuedTo}
              </p>
            </CardStyle>
          );
        })}
      </ContainerCardMain>
    </>
  );
}
