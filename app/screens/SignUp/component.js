import React, { useState, useRef } from "react";
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
    WhiteLabel,
    SubmitPhoneNumberIcon
} from "./styles";
import R from "ramda";

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [SMSCode, setSMSCode] = useState(["", "", "", ""]);
    const digitInputRefs = [useRef(), useRef(), useRef(), useRef()];

    const setSMSCodeDigit = (index, digit) =>
        setSMSCode(R.set(R.lensIndex(index), digit, SMSCode));

    //Due to time constraints the client side data validation isn't great.
    const isPhoneNumberFilled = phoneNumber.length == 10;

    const isSMSCodeFilled = !SMSCode.includes("");

    const focusNextInput = currentInputIndex => {
        const nextInputIndex = currentInputIndex + 1;
        if (nextInputIndex > SMSCode.length) return;

        const nextInputValue = R.pathOr(null, [nextInputIndex], SMSCode);
        if (nextInputValue) return;

        const nextInputRef = R.pathOr(null, [nextInputIndex], digitInputRefs);
        if (!nextInputRef) return;

        nextInputRef.current._root.focus();
    };

    const renderSMSCodeDigitField = index => (
        <DigitInputItem regular>
            <DigitInput
                blurOnSubmit={false}
                keyboardType={"phone-pad"}
                maxLength={1}
                onChangeText={digit => {
                    setSMSCodeDigit(index, digit);
                    focusNextInput(index);
                }}
                onFocus={() => setSMSCodeDigit(index, "")}
                value={SMSCode[index]}
                ref={digitInputRefs[index]}
            />
        </DigitInputItem>
    );

    const renderSubmitPhoneNumberButton = () => {
        if (!isPhoneNumberFilled) return null;
        return (
            <Button transparent>
                <SubmitPhoneNumberIcon name="send" />
            </Button>
        );
    };

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
                                    onChangeText={number =>
                                        setPhoneNumber(number)
                                    }
                                    value={phoneNumber}
                                    keyboardType={"phone-pad"}
                                    maxLength={10}
                                />
                                {renderSubmitPhoneNumberButton()}
                            </PhoneInputItem>
                            {renderError("Numéro incorrect.")}
                        </FormItem>
                        <FormItem>
                            <WhiteLabel>
                                Code de confirmation reçu par SMS
                            </WhiteLabel>
                            <SMSCodeContainer>
                                {renderSMSCodeDigitField(0)}
                                {renderSMSCodeDigitField(1)}
                                {renderSMSCodeDigitField(2)}
                                {renderSMSCodeDigitField(3)}
                            </SMSCodeContainer>
                            {renderError("Code incorrect.")}
                        </FormItem>
                    </Form>
                    <ButtonsWrapper>
                        <CustomButton rounded bordered>
                            <WhiteLabel>Renvoyer le SMS</WhiteLabel>
                        </CustomButton>
                        <CustomButton rounded disabled={!isSMSCodeFilled}>
                            <WhiteLabel>Suivant</WhiteLabel>
                        </CustomButton>
                    </ButtonsWrapper>
                </ScreenContent>
            </KeyboardAwareWrapper>
        </Container>
    );
};

export default SignUp;
