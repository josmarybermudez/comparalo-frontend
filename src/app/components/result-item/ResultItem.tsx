import Link from "next/link";
import {
  BodyText,
  Container,
  ItemImage,
  StyledButton,
  TextWrapper,
  Title,
} from "./styles";

const ResultItem = ({
  title,
  image,
  text,
  buttonLink,
}: {
  title: string;
  image: string;
  text: string;
  buttonLink: string;
}) => {
  return (
    <Container>
      <ItemImage width={250} height={250} src={image} alt={title} />
      <TextWrapper>
        <Title variant="h3">{title}</Title>
        <BodyText variant="body1">{text}</BodyText>
        <Link target="_blank" href={buttonLink}>
          <StyledButton onClick={() => {}}>Ver mas</StyledButton>
        </Link>
      </TextWrapper>
    </Container>
  );
};

export default ResultItem;
