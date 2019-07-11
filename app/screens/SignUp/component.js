import React, { useState, useRef, useEffect } from "react";
import {
    Body,
    Button,
    Card,
    Container,
    Form,
    Icon,
    Left,
    Title,
    Toast
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
import withSignUp from "../../store/signup/hoc";

const SignUp = ({
    isCodeRequestPending,
    isCodeRequestOnError,
    isCodeRequestOnSuccess,
    isCodeVerificationPending,
    isCodeVerificationOnError,
    isCodeVerificationOnSuccess,
    requestSMSCode,
    verifySMSCode
}) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [SMSCode, setSMSCode] = useState(["", "", "", ""]);
    const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(
        isCodeRequestOnError
    );
    const [isSMSCodeInvalid, setIsSMSCodeInvalid] = useState(
        isCodeVerificationOnError
    );
    const digitInputRefs = [useRef(), useRef(), useRef(), useRef()];
    useEffect(() => setIsPhoneNumberInvalid(isCodeRequestOnError), [
        isCodeRequestOnError
    ]);
    useEffect(() => setIsSMSCodeInvalid(isCodeVerificationOnError), [
        isCodeVerificationOnError
    ]);
    useEffect(() => {
        if (!isCodeVerificationOnSuccess) return;
        Toast.show({
            text: "Success!",
            buttonText: "Okay",
            type: "success"
        });
    }, [isCodeVerificationOnSuccess]);

    const setSMSCodeDigit = (index, digit) =>
        setSMSCode(R.set(R.lensIndex(index), digit, SMSCode));

    const isPhoneNumberFilled = phoneNumber.length == 10;

    const isSMSCodeFilled = !SMSCode.includes("");

    const focusNextInput = currentInputIndex => {
        const nextInputIndex = currentInputIndex + 1;
        if (nextInputIndex > SMSCode.length) return;

        const nextInputRef = R.pathOr(null, [nextInputIndex], digitInputRefs);
        if (!nextInputRef) return;

        nextInputRef.current._root.focus();
    };

    const submitCode = () => verifySMSCode(SMSCode.join(""));

    const submitPhoneNumber = () => requestSMSCode(phoneNumber);

    const renderSMSCodeDigitField = index => (
        <DigitInputItem regular error={isSMSCodeInvalid}>
            <DigitInput
                blurOnSubmit={false}
                keyboardType={"phone-pad"}
                maxLength={1}
                onChangeText={digit => {
                    setSMSCodeDigit(index, digit);
                    focusNextInput(index);
                    setIsSMSCodeInvalid(false);
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
            <Button transparent onPress={submitPhoneNumber}>
                <SubmitPhoneNumberIcon name="send" />
            </Button>
        );
    };

    const renderSMSCodeForm = () => {
        if (!isCodeRequestOnSuccess) return null;

        return (
            <FormItem>
                <WhiteLabel>Code de confirmation reçu par SMS</WhiteLabel>
                <SMSCodeContainer>
                    {renderSMSCodeDigitField(0)}
                    {renderSMSCodeDigitField(1)}
                    {renderSMSCodeDigitField(2)}
                    {renderSMSCodeDigitField(3)}
                </SMSCodeContainer>
                {isSMSCodeInvalid && renderError("Code incorrect.")}
            </FormItem>
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

    const renderResendButton = () => {
        if (!isCodeRequestOnSuccess) return null;

        return (
            <CustomButton rounded bordered onPress={submitPhoneNumber}>
                <WhiteLabel>Renvoyer le SMS</WhiteLabel>
            </CustomButton>
        );
    };

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
                            <PhoneInputItem
                                regular
                                error={isPhoneNumberInvalid}
                            >
                                <PhoneInput
                                    onChangeText={number => {
                                        setPhoneNumber(number);
                                        setIsPhoneNumberInvalid(false);
                                    }}
                                    value={phoneNumber}
                                    keyboardType={"phone-pad"}
                                    maxLength={10}
                                />
                                {renderSubmitPhoneNumberButton()}
                            </PhoneInputItem>
                            {isPhoneNumberInvalid &&
                                renderError("Numéro incorrect.")}
                        </FormItem>
                        {renderSMSCodeForm()}
                    </Form>
                    <ButtonsWrapper>
                        {renderResendButton()}
                        <CustomButton
                            rounded
                            disabled={!isSMSCodeFilled}
                            onPress={submitCode}
                        >
                            <WhiteLabel>Suivant</WhiteLabel>
                        </CustomButton>
                    </ButtonsWrapper>
                </ScreenContent>
            </KeyboardAwareWrapper>
        </Container>
    );
};

export default withSignUp(SignUp);
