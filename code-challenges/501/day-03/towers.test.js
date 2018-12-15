// hanoi

// j example
function hanoi(n, origin, storage, dest) {
  if (n === 1) {
    // flag end
    dest.push(origin.pop())
    return;
  }
  hanoi(n - 1, origin, storage, dest)
    dest.push(origin.pop())
  hanoi(n - 1, storage, dest, origin);
  return;
}