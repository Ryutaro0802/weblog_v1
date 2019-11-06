export default function ({ $axios, redirect }) {
    $axios.onResponse((response: any) => {
        console.log(`[${response.status}] ${response.request.path}`);
    });

    $axios.onError((err: any) => {
        console.log(`[${err.response && err.response.status}] ${err.response && err.response.request.path}`);
        console.log(err.response && err.response.data);
    })
}