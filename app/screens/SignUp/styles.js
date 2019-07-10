import styled from "styled-components";
import {
    Body,
    Button,
    CardItem,
    Header,
    Icon,
    Input,
    Item,
    Label
} from "native-base";

export const ScreenContent = styled.View`
    padding: 20px;
    flex: 1;
    justify-content: space-between;
    background-color: #0084b2;
`;

export const ThemedHeader = styled(Header)`
    background-color: #01a2d9;
`;

export const DigitInputItem = styled(Item)`
    width: 50px;
    border-radius: 5px;
    margin: 10px;
`;

export const DigitInput = styled(Input)`
    text-align: center;
    color: white;
`;

export const PhoneInputItem = styled(Item)`
    border-radius: 5px;
`;

export const PhoneInput = styled(Input)`
    color: white;
`;

export const WhiteLabel = styled(Label)`
    color: white;
`;

export const SMSCodeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ButtonsWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const CustomButton = styled(Button)`
    margin: 5px;
    padding: 0 20px 0 20px;
    align-self: center;
    border-color: #01a2d9;
    background-color: ${({ bordered, disabled }) =>
        disabled ? "grey" : bordered ? "transparent" : "#01a2d9"};
`;

export const FormItem = styled.View`
    margin: 10px 0 10px 0;
    height: 140px;
`;

export const KeyboardAwareWrapper = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ErrorCardItem = styled(CardItem)`
    background-color: #d9534f;
`;

export const ErrorCardContent = styled(Body)`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const ErrorCardIcon = styled(Icon)`
    color: white;
    margin-right: 15px;
`;

export const SubmitPhoneNumberIcon = styled(Icon)`
    color: white;
`;
