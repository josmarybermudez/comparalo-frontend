import ResultItem from "../result-item/ResultItem";
import { Container, ListWrapper } from "./styles";

const ResultsTable: React.FC = () => {
  const listExample = [
    {
      title: "Lorem ipsum ",
      image:
        "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
      text: "m dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      buttonLink:
        "https://www.google.com/search?sca_esv=bede3ed5b9c65385&rlz=1C5CHFA_enAR1022AR1022&sxsrf=AHTn8zpryNy8CYZNrdBWa7TdLmnU05yiQw:1747705622748&q=gato&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddMtUi1tIuK0dGtaRH-mto4far6JEqL0OoC455CwXZ-ZiDMCBB_Cig32gz_esk3orAge-p1f7BvAJMJx6EVYqpHXnXVtVWzSGio7X4YdtCx2Nhig5xf07euYPPQWaM8JoAWGOTmwuSzudEkcclF-B1sS-aXqrAHYEbO_y2RWwdihMaOKeEw&sa=X&ved=2ahUKEwjSmsPm9rCNAxXXq5UCHYYqEMYQtKgLegQIFhAB&biw=1422&bih=889&dpr=1.8#vhid=zGy5aAfucN4DNM&vssid=mosaic",
    },
    {
      title: "title2",
      image:
        "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
      text: "enean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellu",
      buttonLink:
        "https://www.google.com/search?sca_esv=bede3ed5b9c65385&rlz=1C5CHFA_enAR1022AR1022&sxsrf=AHTn8zpryNy8CYZNrdBWa7TdLmnU05yiQw:1747705622748&q=gato&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddMtUi1tIuK0dGtaRH-mto4far6JEqL0OoC455CwXZ-ZiDMCBB_Cig32gz_esk3orAge-p1f7BvAJMJx6EVYqpHXnXVtVWzSGio7X4YdtCx2Nhig5xf07euYPPQWaM8JoAWGOTmwuSzudEkcclF-B1sS-aXqrAHYEbO_y2RWwdihMaOKeEw&sa=X&ved=2ahUKEwjSmsPm9rCNAxXXq5UCHYYqEMYQtKgLegQIFhAB&biw=1422&bih=889&dpr=1.8#vhid=zGy5aAfucN4DNM&vssid=mosaic",
    },
    {
      title: "Cras dapibus",
      image:
        "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
      text: "m quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
      buttonLink:
        "https://www.google.com/search?sca_esv=bede3ed5b9c65385&rlz=1C5CHFA_enAR1022AR1022&sxsrf=AHTn8zpryNy8CYZNrdBWa7TdLmnU05yiQw:1747705622748&q=gato&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddMtUi1tIuK0dGtaRH-mto4far6JEqL0OoC455CwXZ-ZiDMCBB_Cig32gz_esk3orAge-p1f7BvAJMJx6EVYqpHXnXVtVWzSGio7X4YdtCx2Nhig5xf07euYPPQWaM8JoAWGOTmwuSzudEkcclF-B1sS-aXqrAHYEbO_y2RWwdihMaOKeEw&sa=X&ved=2ahUKEwjSmsPm9rCNAxXXq5UCHYYqEMYQtKgLegQIFhAB&biw=1422&bih=889&dpr=1.8#vhid=zGy5aAfucN4DNM&vssid=mosaic",
    },
    {
      title: "Curabitur ullamcorper",
      image:
        "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
      text: "e eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in",
      buttonLink:
        "https://www.google.com/search?sca_esv=bede3ed5b9c65385&rlz=1C5CHFA_enAR1022AR1022&sxsrf=AHTn8zpryNy8CYZNrdBWa7TdLmnU05yiQw:1747705622748&q=gato&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddMtUi1tIuK0dGtaRH-mto4far6JEqL0OoC455CwXZ-ZiDMCBB_Cig32gz_esk3orAge-p1f7BvAJMJx6EVYqpHXnXVtVWzSGio7X4YdtCx2Nhig5xf07euYPPQWaM8JoAWGOTmwuSzudEkcclF-B1sS-aXqrAHYEbO_y2RWwdihMaOKeEw&sa=X&ved=2ahUKEwjSmsPm9rCNAxXXq5UCHYYqEMYQtKgLegQIFhAB&biw=1422&bih=889&dpr=1.8#vhid=zGy5aAfucN4DNM&vssid=mosaic",
    },
    {
      title: "Vivamus elementum semper nisi",
      image:
        "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900",
      text: "m quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodal",
      buttonLink:
        "https://www.google.com/search?sca_esv=bede3ed5b9c65385&rlz=1C5CHFA_enAR1022AR1022&sxsrf=AHTn8zpryNy8CYZNrdBWa7TdLmnU05yiQw:1747705622748&q=gato&udm=2&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlsjfkTCQbVbkeDjnTQtijddMtUi1tIuK0dGtaRH-mto4far6JEqL0OoC455CwXZ-ZiDMCBB_Cig32gz_esk3orAge-p1f7BvAJMJx6EVYqpHXnXVtVWzSGio7X4YdtCx2Nhig5xf07euYPPQWaM8JoAWGOTmwuSzudEkcclF-B1sS-aXqrAHYEbO_y2RWwdihMaOKeEw&sa=X&ved=2ahUKEwjSmsPm9rCNAxXXq5UCHYYqEMYQtKgLegQIFhAB&biw=1422&bih=889&dpr=1.8#vhid=zGy5aAfucN4DNM&vssid=mosaic",
    },
  ];

  return (
    <Container>
      <ListWrapper>
        {listExample.map((item) => {
          const { title, image, text, buttonLink } = item;
          return (
            <ResultItem
              key={title}
              title={title}
              image={image}
              text={text}
              buttonLink={buttonLink}
            />
          );
        })}
      </ListWrapper>
    </Container>
  );
};
export default ResultsTable;
