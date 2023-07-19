let divisoes = 0;

for (i = 1; i <= 100; i++) {
    for (j = 1; j <= i; j++){
        if (i % j == 0) {
            divisoes++;
        }
    }

    if (divisoes === 2){
        console.log(i);
    }
    divisoes = 0;
}
