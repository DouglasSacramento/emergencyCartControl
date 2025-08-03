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
              <h5>
                <p>
                  Status{" "}
                  <span>
                    {medication.retirado === null ||
                    medication.armario !== false
                      ? "- Armário"
                      : "- Carrinho"}
                  </span>
                </p>
              </h5>

              <p id="lot">
                <strong>Lote: </strong>
                {medication.lote}
              </p>
              <p id="expiredDate">
                <strong>Validade: </strong>
                {formattedExpiration}
              </p>
              <p id="amount">
                <strong>Quantidade:</strong>{" "}
                {medication.quantidade.toString().padStart(2, "0")}
              </p>
              <p>
                {medication.retirado !== null &&
                  medication.armario === false && (
                    <>
                      <strong>Entregue:</strong> {medication.retirado}
                    </>
                  )}
              </p>

              <p>
                <strong>Registrado:</strong> {formattedIssuedTo}
              </p>
            </CardStyle>
          );
        })}
      </ContainerCardMain>
    </>
  );
}
