const User = require('../model/User');
const {
    ApolloServer,
    UserInputError
} = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
    Mutation: {
        async registerUser(_: any, {registerInput: {username, email, password} }: any) {
            /* Do input validation
            if (!(email && password && first_name && last_name)) {
                res.status(400).send("All input is required");
            }
            */
            const oldUser = await User.findOne({ email });

            if (oldUser) {
                 /**
                 * Generelt ønsker vi å utlevere så lite informasjon om systemet vi lager. I dette tilfellet gir vi brukeren beskjed om hvem som har konto.
                 * Det vil være relativt enkelt å lage en tjeneste for å finne alle brukerne i databasen og da er man ett steg nærmere å komme inn.
                 *
                 * En løsning på dette problemet er å alltid fortelle brukeren at ting er i orden og at de får videre instrukser på e-post.
                 * På den måten klarer man ikke å generere en liste over brukere for tjenesten og for sluttbruker vil det fungere optimalt 99% av tiden.
                 *
                 * Siden innlogging egentlig ikke var en del av oppgaven vil jeg ikke kommentere mer på løsningen, men tenkte dette var greit å nevne :)
                 */
                throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXISTS');
            }
            
            var encryptedPassword = await bcrypt.hash(password, 10);
            
            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            });

            const token = jwt.sign(
                { user_id: newUser._id, email },
                "UNSAFESTRING",
                {
                  expiresIn: "2h",
                }
            );

            newUser.token = token;

            const res = await newUser.save();
            
            return {
                id: res.id,
                ...res._doc
            };
        },
        async loginUser(_: any, {loginInput: {email, password} }: any) {
            const user = await User.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                  { user_id: user._id, email },
                  "UNSAFESTRING",
                  {
                    expiresIn: "2h",
                  }
                );
          
                // save user token
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    },
    Query: {
        user: (_: any, {ID}: any) => User.findById(ID)
    }
}