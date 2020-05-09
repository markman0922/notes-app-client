export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "mark-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://3bkxgpxkrh.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_OVKY0MCTT",
        APP_CLIENT_ID: "5ga572hdcdiq5pgb1u676p4qnp",
        IDENTITY_POOL_ID: "us-west-2:29f35331-1336-42af-99d0-84f71c057cba"
    },
    STRIPE_KEY: "pk_test_iaEUsUGjGiGJyqGGGzFC9f6N",
};