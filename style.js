import styled from "styled-components/native";
/* Tipo de letra */
export const TextFont = styled.Text`
  //font-family: "FlamaLight Regular";
`;
/* Estilo para los contenedores */

export const ContainerFull = styled.SafeAreaView`
  background-color: ${(props) => props.theme["PRIMARY_COLOR"]};
  flex: 1;
  flex-direction: column;
  padding: 10px 10px;
  /*   border: 1px solid red; */
`;
export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme["PRIMARY_COLOR"]};
  flex: 1;
  flex-direction: column;
`;
export const ContentBigButtons = styled.ScrollView`
  background-color: ${(props) => props.theme["BACKGROUND_COLOR_2"]};
  order: 0;
  /*   flex: 1 1 auto; */
  align-self: auto;
`;
/* Estilo para los botones */
export const ButtonAction = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) =>
    props.disable
      ? props.theme["SECONDARY_COLOR"]
      : props.theme["BUTTON_COLOR"]};
  border-radius: 5px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-top: auto;
`;
export const ButtonActionText = styled(TextFont)`
  color: ${(props) => props.theme["PRIMARY_COLOR"]};
  font-size: 16px;
  font-weight: 600;
`;
