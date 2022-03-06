let num = 1;

setTimeout(() => {
  console.log('bbbbb', num);
}, 1000);

const plus = () => {
  num++;
};

module.exports = {
  get num() {
    return num
  },
  plus
};
