import { ContainerFooter } from "../../styles";

export default function Footer() {
  return (
    <ContainerFooter>
      <p>
        ©{new Date().getFullYear()} DSacramento. Todos os direitos reservados.
      </p>
    </ContainerFooter>
  );
}
