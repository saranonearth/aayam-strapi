module.exports = {
    apps: [{
        name: "api",
        script: "npm",
        args: ["run", "start"],
        env: {
            NODE_ENV: "development", //or production
        },
    }, ],
};