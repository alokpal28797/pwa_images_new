
const swDev = () => {

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`

    navigator.serviceWorker.register(swUrl).then((res) => {
        console.log(res)
    }).catch((err) => { });
}

export default swDev