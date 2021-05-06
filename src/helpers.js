export default function helper (setter){
    setter (true);
    setTimeout(() => {
        setter(false);
    }, 200);
}

