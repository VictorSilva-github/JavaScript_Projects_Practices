var idade = 33;
console.log(`vote tem ${idade}`);
if (idade < 16) {
    console.log('NO Vote');
} else if (idade < 18 || idade > 65) {
    console.log('Optional VOTE');
} else {
    console.log('NEED to VOTE');
}
