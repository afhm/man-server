export default function catchAsync(promise) {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);
}
