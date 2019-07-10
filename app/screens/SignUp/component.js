import React from "react";
import {
    Body,
    Button,
    Card,
    Container,
    Form,
    Icon,
    Left,
    Title
} from "native-base";
import {
    ButtonsWrapper,
    CustomButton,
    DigitInput,
    DigitInputItem,
    ErrorCardContent,
    ErrorCardIcon,
    ErrorCardItem,
    FormItem,
    KeyboardAwareWrapper,
    PhoneInput,
    PhoneInputItem,
    ScreenContent,
    SMSCodeContainer,
    ThemedHeader,
    WhiteLabel
} from "./styles";

const SignUp = () => {
    const renderSMSCodeDigitField = () => (
        <DigitInputItem regular>
            <DigitInput keyboardType={"phone-pad"} maxLength={1} />
        </DigitInputItem>
    );

    const renderError = message => (
        <Card>
            <ErrorCardItem>
                <ErrorCardContent>
                    <ErrorCardIcon name="close-circle" />
                    <WhiteLabel>{message}</WhiteLabel>
                </ErrorCardContent>
            </ErrorCardItem>
        </Card>
    );

    return (
        <Container>
            <ThemedHeader>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Créez votre compte</Title>
                </Body>
            </ThemedHeader>
            <KeyboardAwareWrapper behavior="height">
                <ScreenContent>
                    <Form>
                        <FormItem>
                            <WhiteLabel>Numéro de téléphone</WhiteLabel>
                            <PhoneInputItem regular>
                                <PhoneInput
                                    keyboardType={"phone-pad"}
                                    maxLength={10}
                                />
                            </PhoneInputItem>
                            {renderError("Numéro incorrect.")}
                        </FormItem>
                        <FormItem>
                            <WhiteLabel>
                                Code de confirmation reçu par SMS
                            </WhiteLabel>
                            <SMSCodeContainer>
                                {renderSMSCodeDigitField()}
                                {renderSMSCodeDigitField()}
                                {renderSMSCodeDigitField()}
                                {renderSMSCodeDigitField()}
                            </SMSCodeContainer>
                            {renderError("Code incorrect.")}
                        </FormItem>
                    </Form>
                    <ButtonsWrapper>
                        <CustomButton rounded bordered>
                            <WhiteLabel>Renvoyer le SMS</WhiteLabel>
                        </CustomButton>
                        <CustomButton rounded disabled>
                            <WhiteLabel>Suivant</WhiteLabel>
                        </CustomButton>
                    </ButtonsWrapper>
                </ScreenContent>
            </KeyboardAwareWrapper>
        </Container>
    );
};

export default SignUp;
