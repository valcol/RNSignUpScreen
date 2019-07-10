import React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Body,
    Icon,
    Text,
    Form,
    Item,
    Label,
    Input
} from "native-base";

const SignUp = () => {
    const renderSMSCodeDigitField = () => (
        <Item regular>
            <Input keyboardType={"phone-pad"} maxLength={1} />
        </Item>
    );

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Créez votre compte</Title>
                </Body>
            </Header>
            <Content>
                <Form>
                    <Label>Numéro de téléphone</Label>
                    <Item regular>
                        <Input keyboardType={"phone-pad"} maxLength={10} />
                    </Item>
                    <Label>Code de confirmation reçu par SMS</Label>
                    {renderSMSCodeDigitField()}
                    {renderSMSCodeDigitField()}
                    {renderSMSCodeDigitField()}
                    {renderSMSCodeDigitField()}
                    <Button rounded bordered>
                        <Text>Renvoyer le SMS</Text>
                    </Button>
                    <Button rounded>
                        <Text>Suivant</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

export default SignUp;
