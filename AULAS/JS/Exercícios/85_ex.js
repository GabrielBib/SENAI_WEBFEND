let array = ["hoje", "ontem", "depois", "sloco"]
let aoContrario = [];

for (let i = array.length - 1; i < array.length; i--){
    if (i == -1){
        break;
    }
    aoContrario.push(array[i]);
}

console.log(aoContrario);