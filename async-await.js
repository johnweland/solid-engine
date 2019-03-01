const random = () => Promise.resolve(Math.random());

const promiseChain = async () => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
};